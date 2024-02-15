import { Chess } from "chess.js";
import { Stockfish as engine } from "./engine";

export type ReviewedMove =
  | {
      move: string;
      moveFen: string;
      bookMove: true;
    }
  | {
      move: string;
      moveFen: { after: string; before: string };
      bestMoves: string[];
      eval: string;
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
  const movesReviewed: ReviewedMove[] = [];
  let reviewComplete = false;

  function reviewDone() {
    reviewComplete = true;
    engine.reset();
    setTimeout(() => {
      onComplete({ opening, review: movesReviewed });
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
      moveFen: fens[reviewedMoves],
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
          moveFen: fens[reviewedMoves],
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

    // WARN: debug print
    if (reviewedMoves > fens.length) {
      console.log("WTF");
      return;
    }

    setTimeout(() => {
      engine.analyze(fens[reviewedMoves].after, reviewDepth);
    }, 300);
  });

  setTimeout(
    () => {
      engine.analyze(fens[bookMoves].before, reviewDepth);
    },
    400 * (bookMoves + 1),
  );
}
