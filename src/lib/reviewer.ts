import { Chess } from "chess.js";
import { Stockfish as engine } from "./engine";

export type ReviewedMove =
  | {
      move: string;
      moveFen: string;
      bookMove: true;
    }
  | { move: string; moveFen: string; bestMoves: string[]; eval: string };

export type Opening = { eco: string; name: string };

export type ReviewReport = {opening: Opening, review: ReviewedMove[]};

export function Reviewer(
  pgn: string,
  opening: Opening,
  bookMoves: number,
  onComplete: (info: ReviewReport) => void,
  onProgress: (progress: number) => void,
  reviewDepth: number,
) {
  const chess = new Chess();
  chess.loadPgn(pgn);
  const gameMoves = chess.history();
  const fens = chess.history({ verbose: true }).map((move) => move.after);

  let reviewedMoves = bookMoves;
  const movesReviewed: ReviewedMove[] = [];
  let reviewComplete = false;

  function reviewDone() {
    reviewComplete = true;
    onComplete({ opening, review: movesReviewed });
  }

  for (let i = 0; i < bookMoves; i++) {
    movesReviewed.push({ move: gameMoves[i], moveFen: fens[i], bookMove: true });
    setTimeout(
      () => {
        onProgress(((i + 1) / fens.length) * 100);
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

    onProgress(((reviewedMoves + 1) / fens.length) * 100);
    reviewedMoves++;

    if (reviewedMoves == fens.length) {
      reviewDone();
      return;
    }

    // WARN: debug print
    if (reviewedMoves > fens.length) {
      console.log("WTF");
      return;
    }

    engine.analyze(fens[reviewedMoves], reviewDepth);
  });

  setTimeout(
    () => {
      engine.analyze(fens[bookMoves], reviewDepth);
    },
    400 * (bookMoves + 1),
  );
}
