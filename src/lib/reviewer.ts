import { Chess } from "chess.js";
import { Stockfish as engine } from "./engine";
import { Move } from "@/lib/engine";
import { Key } from "chessground/types";

export type BookMove = {
  move: string;
  moveFen: string;
  dest: { from: Key; to: Key };
  bookMove: true;
};

export type EngineReviewedMove = {
  move: string;
  moveFen: string;
  dest: { from: Key; to: Key };
  bestMoves: Move[];
  eval: string;
};

export type ReviewedMove =
  | BookMove
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
  bookMovesNo: number,
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

  let reviewedMovesNo = bookMovesNo;

  let reviewedMoves: ReviewedMove[] = [];

  const engineReviewedMoves: EngineReviewedMove[] = [];

  let reviewComplete = false;

  engine.reset();
  engine.setOnMessage(({ depth, score, moves }) => {
    if (reviewComplete || depth != reviewDepth) return;

    engineReviewedMoves.push({
      move: gameMoves[reviewedMovesNo],
      moveFen: fens[reviewedMovesNo].after,
      dest: dests[reviewedMovesNo],
      bestMoves: moves,
      eval: score,
    });

    onProgress(
      ((reviewedMovesNo + 1) / fens.length) * 100,
      fens[reviewedMovesNo].after,
    );
    reviewedMovesNo++;

    if (reviewedMovesNo == fens.length) {
      reviewDone();
      return;
    }

    const chess = new Chess();

    chess.load(fens[reviewedMovesNo].after);

    if (reviewedMovesNo > fens.length) {
      console.error("Review moves exceed number of moves");
      return;
    }

    setTimeout(() => {
      engine.analyze(fens[reviewedMovesNo].before, reviewDepth);
    }, 300);
  });

  function reviewDone() {
    reviewComplete = true;
    engine.reset();

    engineReviewedMoves.forEach((move, index) => {
      let evalAfter = "";
      let afterBestMoves: Move[] = [];
      const nextMove = engineReviewedMoves[index + 1];

      if (nextMove) {
        if ("bookMove" in nextMove) {
          new Error("bookmove here should not exist");
          return;
        }
        evalAfter = nextMove.eval;
        afterBestMoves = nextMove.bestMoves;
      }

      reviewedMoves.push({
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
      onComplete({ opening, review: reviewedMoves });
    }, 300);
  }

  for (let i = 0; i < bookMovesNo; i++) {
    reviewedMoves.push({
      move: gameMoves[i],
      moveFen: fens[i].after,
      dest: dests[i],
      bookMove: true,
    });

    setTimeout(
      () => {
        onProgress(((i + 1) / fens.length) * 100, fens[i].after);
      },
      (i + 1) * 400,
    );

    if (i == bookMovesNo - 1) {
      setTimeout(
        () => {
          if (chess.history().length == bookMovesNo) {
            reviewDone();
            return;
          }

          engine.analyze(fens[bookMovesNo].before, reviewDepth);
        },
        (i + 2) * 400,
      );
    }
  }
}
