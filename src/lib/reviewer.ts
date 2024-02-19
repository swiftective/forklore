import { Chess } from "chess.js";
import { Stockfish as engine } from "./engine";
import {Move} from "@/lib/engine"

export type ReviewedMoveTemp =
  | {
      move: string;
      moveFen: string;
      bookMove: true;
    }
  | {
      move: string;
      moveFen: string;
      bestMoves: Move[];
      eval: string;
    };

export type ReviewedMove =
  | {
      move: string;
      moveFen: string;
      bookMove: true;
    }
  | {
      move: string;
      moveFen: string;
      bestMovesBefore: Move[];
      bestMovesAfter: Move[];
      evalBefore: string;
      evalAfter: string;
    };

export type Opening = { eco: string; name: string };

export type ReviewReport = { opening: Opening; review: ReviewedMove[] };

export function Reviewer(
  pgn: string,
  opening: Opening,
  bookMoves: number,
  onComplete: (info: ReviewReport) => void,
  onProgress: (progress: number, fen: string) => void,
  reviewDepth: number,
) {
  const chess = new Chess();
  chess.loadPgn(pgn);
  const gameMoves = chess.history();
  const fens = chess
    .history({ verbose: true })
    .map((move) => ({ before: move.before, after: move.after }));

  let reviewedMoves = bookMoves;
  const movesReviewed: ReviewedMoveTemp[] = [];
  let reviewComplete = false;

  function reviewDone() {
    reviewComplete = true;
    engine.reset();

    const reviewTemp: ReviewedMove[] = [];

    movesReviewed.forEach((move, index) => {
      if ("bookMove" in move) {
        reviewTemp.push(move);
        return;
      }

      let evalAfter = "";
      let afterBestMoves: Move[] = [];
      const nextMove = movesReviewed[index + 1];

      if (nextMove) {
        if ("bookMove" in nextMove) {
          new Error("bookmove here should not exist");
          return;
        }
        evalAfter = nextMove.eval;
        afterBestMoves = nextMove.bestMoves;
      }

      reviewTemp.push({
        move: move.move,
        moveFen: move.moveFen,
        evalBefore: move.eval,
        evalAfter: evalAfter,
        bestMovesBefore: move.bestMoves,
        bestMovesAfter: afterBestMoves,
      });
    });

    setTimeout(() => {
      onComplete({ opening, review: reviewTemp });
    }, 300);
  }

  for (let i = 0; i < bookMoves; i++) {
    movesReviewed.push({
      move: gameMoves[i],
      moveFen: fens[i].after,
      bookMove: true,
    });
    setTimeout(
      () => {
        onProgress(((i + 1) / fens.length) * 100, fens[i].after);
      },
      400 + i * 400,
    );
  }

  engine.reset();
  engine.setOnMessage(({ depth, score, moves }) => {
    if (reviewComplete || depth != reviewDepth) return;

    movesReviewed.push({
      move: gameMoves[reviewedMoves],
      moveFen: fens[reviewedMoves].after,
      bestMoves: moves,
      eval: score,
    });

    onProgress(
      ((reviewedMoves + 1) / fens.length) * 100,
      fens[reviewedMoves].after,
    );
    reviewedMoves++;

    if (reviewedMoves == fens.length) {
      reviewDone();
      return;
    }

    const chess = new Chess();

    chess.load(fens[reviewedMoves].after);

    if (chess.isCheckmate()) {
      setTimeout(() => {
        movesReviewed.push({
          move: gameMoves[reviewedMoves],
          moveFen: fens[reviewedMoves].after,
          bestMoves: moves,
          eval: score,
        });
        onProgress(
          ((reviewedMoves + 1) / fens.length) * 100,
          fens[reviewedMoves].after,
        );
        reviewDone();
      }, 300);
      return;
    }

    if (reviewedMoves > fens.length) {
      console.error("Review moves exceed number of moves");
      return;
    }

    setTimeout(() => {
      engine.analyze(fens[reviewedMoves].before, reviewDepth);
    }, 300);
  });

  setTimeout(
    () => {
      engine.analyze(fens[bookMoves].before, reviewDepth);
    },
    400 * (bookMoves + 1),
  );
}
