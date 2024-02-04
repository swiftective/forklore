type Info = {
  depth: string;
  score: string;
  moves: string;
};

export function Engine(
  fnCallBack: ({ depth, moves, score }: Info) => void,
  engine: Worker,
) {
  const stockfish = engine;

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

    console.log(line)

    const depth = (/(?<=(depth ))\w+/.exec(line) || ["yep unknown"])[0];
    const score = (/(?<=(score ))\w+ \w+/.exec(line) || ["yep unknown"])[0];
    const moves = (/(?<=(time \w+ pv )).*$/.exec(line) || ["yep unknown"])[0];

    fnCallBack({ depth, score, moves });
  };

  function cmd(command: string) {
    stockfish.postMessage(command);
  }

  return { cmd };
}

export function EngineWrapper() {
  const eng = new Worker("stockfish.js#stockfish.wasm");
  eng.postMessage("uci");

  return eng;
}
