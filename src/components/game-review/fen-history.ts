export type HistoryType = {
  add: (fen: string) => void;
  back: () => string;
  forward: () => string | null;
};

export function History(): HistoryType {
  const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  const fenHistory: string[] = [];
  let forwardHistory: string[] = [];
  let lastForwardFen: string | null = null;

  function add(fen: string) {
    if (fenHistory[fenHistory.length - 1] == fen) return;

    fenHistory.push(fen);

    if (fen != lastForwardFen) {
      forwardHistory = [];
      lastForwardFen = null;
    }
  }

  function back() {
    const temp = fenHistory.pop();

    if (!temp) return initFen;

    forwardHistory.push(temp);

    return fenHistory[fenHistory.length - 1];
  }

  function forward() {
    const temp = forwardHistory.pop();

    if (!temp) return null;

    lastForwardFen = temp;

    return temp;
  }

  return {
    add,
    back,
    forward,
  };
}
