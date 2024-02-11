export type Info = {
  depth: number;
  score: string;
  moves: string[];
};

function Engine() {
  let onMessage = (info: Info) => {
    console.log(info);
  };

  const stockfish = new Worker("stockfish.js#stockfish.wasm");
  stockfish.postMessage("uci");
  stockfish.postMessage("ucinewgame");

  stockfish.onmessage = (event: { data: string } | string) => {
    let line;

    if (event && typeof event == "object") {
      line = event.data;
    } else {
      line = event;
    }

    if (
      !line.match("seldepth") ||
      line.match("currmove") ||
      line.match("upperbound") ||
      line.match("lowerbound")
    ) {
      return;
    }

    const depth = (() => {
      const d = /(?<=(depth ))\w+/.exec(line)?.[0] ?? null;

      if (d == null) {
        return null;
      }

      return Number(d);
    })();

    const score = /(?<=(score ))\w+ (-)?\w+/.exec(line)?.[0] ?? null;
    const moves = (() => {
      const temp = /(?<=(time \w+ pv )).*$/.exec(line)?.[0] ?? null;

      if (temp == null) {
        return null;
      }

      return temp.split(" ");
    })();

    if (!(depth && score && moves)) {
      console.log("wtf", line)
      return;
    }

    onMessage({ depth, score, moves });
  };

  // WARN: debug function
  function cmd(command: string) {
    console.log(command);
    stockfish.postMessage(command);
  }

  function analyze(fen: string, depth: number) {
    stockfish.postMessage("stop");
    stockfish.postMessage(`position fen '${fen}'`);
    stockfish.postMessage(`go depth ${depth}`);
  }

  function setOnMessage(fn: (info: Info) => void) {
    onMessage = fn;
  }

  function reset() {
    onMessage = (info) => console.log(info);
    stockfish.postMessage("stop");
    stockfish.postMessage("ucinewgame");
  }

  return { cmd, setOnMessage, analyze, reset };
}

export const Stockfish = Engine();
