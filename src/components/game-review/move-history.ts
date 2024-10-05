import { BoardState } from "@/components/game-review/game-review";

export type HistoryType = {
  add: (move: BoardState) => void;
  back: () => BoardState;
  forward: () => BoardState | null;
};

export function History(): HistoryType {
  const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  const initMove: BoardState = {
    fen: initFen,
    move: undefined,
    dest: undefined,
  };
  const moveHistory: BoardState[] = [];
  let forwardHistory: BoardState[] = [];
  let lastForwardMove: BoardState | null = null;

  function add(move: BoardState) {
    const isMoveDup =
      JSON.stringify(moveHistory[moveHistory.length - 1]) ==
      JSON.stringify(move);

    if (isMoveDup) return;

    moveHistory.push(move);

    const moveIsLastForwardMove =
      JSON.stringify(lastForwardMove) != JSON.stringify(move);

    if (moveIsLastForwardMove) {
      forwardHistory = [];
      lastForwardMove = null;
    }
  }

  function back() {
    const temp = moveHistory.pop();

    if (!temp) return initMove;

    forwardHistory.push(temp);

    return moveHistory[moveHistory.length - 1];
  }

  function forward() {
    const temp = forwardHistory.pop();

    if (!temp) return null;

    lastForwardMove = temp;

    return temp;
  }

  return {
    add,
    back,
    forward,
  };
}
