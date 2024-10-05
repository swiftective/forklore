import { Chess } from "chess.js";
import { Stockfish as engine } from "./engine";
import { Move } from "@/lib/engine";
import { Key } from "chessground/types";

export type ReviewedMoveTemp =
  | {
      move: string;
      moveFen: string;
      dest: { from: Key; to: Key };
      bookMove: true;
    }
  | {
      move: string;
      moveFen: string;
      dest: { from: Key; to: Key };
      bestMoves: Move[];
      eval: string;
    };

export type ReviewedMove =
  | {
      move: string;
      moveFen: string;
      dest: { from: Key; to: Key };
      bookMove: true;
    }
  | {
      move: string;
      moveFen: string;
      dest: { from: Key; to: Key };
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
  const dests = chess
    .history({ verbose: true })
    .map((move) => ({ from: move.from, to: move.to }));

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
        dest: move.dest,
        evalBefore: move.eval,
        evalAfter: evalAfter,
        bestMovesBefore: move.bestMoves,
        bestMovesAfter: afterBestMoves,
      });
    });

    setTimeout(() => {
      console.log({ opening, review: reviewTemp });
      onComplete({ opening, review: reviewTemp });
    }, 300);
  }

  for (let i = 0; i < bookMoves; i++) {
    movesReviewed.push({
      move: gameMoves[i],
      moveFen: fens[i].after,
      dest: dests[i],
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
      dest: dests[reviewedMoves],
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
      if (chess.history().length == bookMoves) {
        reviewDone();
        return;
      }

      engine.analyze(fens[bookMoves].before, reviewDepth);
    },
    400 * (bookMoves + 1),
  );
}
