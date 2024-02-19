export type HistoryType = {
  add: (fen: string) => void;
  back: () => string;
};

export function History(): HistoryType {
  const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  let lastRemoved = initFen;
  let addLastRemoved = true;
  const fenHistory: string[] = [];

  function add(fen: string) {
    if (fenHistory[fenHistory.length - 1] == fen) return;

    if (fen == lastRemoved) {
      if (addLastRemoved) {
        fenHistory.push(fen);
      }
      addLastRemoved = true;
      return;
    }

    fenHistory.push(fen);
  }

  function back() {
    const temp = fenHistory.pop();

    if (!temp) return initFen;

    lastRemoved = temp;
    addLastRemoved = false;

    return fenHistory[fenHistory.length - 1];
  }

  return {
    add,
    back,
  };
}
