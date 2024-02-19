import { Chess } from "chess.js";

export type Move = {
  move: string;
  fen: string;
};

export type Info = {
  depth: number;
  score: string;
  moves: Move[];
};

function Engine() {
  let onMessage = (info: Info) => {
    console.log(info);
  };

  let reviewDepth = 22;
  let currFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  let turnColor = "w";

  function convertEval(score: string) {
    // parse eval with cp
    if (score.includes("cp")) {
      const pawns = (Number(score.replace(/cp -?/, "")) / 100).toFixed(2);
      if (turnColor == "w") {
        if (score.includes("-")) {
          return "-" + pawns;
        }
        return "+" + pawns;
      }

      if (turnColor == "b") {
        if (score.includes("-")) {
          return "+" + pawns;
        }
        return "-" + pawns;
      }
    }

    // parse eval with mate
    if (score.includes("mate")) {
      const mateIn = Number(score.replace(/mate -?/, ""));
      if (turnColor == "w") {
        if (score.includes("-")) {
          return "-M" + mateIn;
        }
        return "+M" + mateIn;
      }

      if (turnColor == "b") {
        if (score.includes("-")) {
          return "+M" + mateIn;
        }
        return "-M" + mateIn;
      }
    }

    return null;
  }

  function uciToMoves(uciMoves: string[]): Move[] | null {
    const chess = new Chess();
    const moves: Move[] = [];
    chess.load(currFen);

    uciMoves.forEach((uciMove: string) => {
      const from = uciMove.substring(0, 2);
      const to = uciMove.substring(2, 4);

      const move: { from: string; to: string; promotion?: string } = {
        from,
        to,
      };

      if (uciMove[4]) {
        move.promotion = uciMove[4];
      }

      chess.move(move);
      const lastMove = chess.history({ verbose: true }).pop();

      if (lastMove == undefined) return null;

      moves.push({ move: lastMove.san, fen: lastMove.after });
    });

    return moves;
  }

  const stockfish = new Worker("stockfish.js#stockfish.wasm");
  stockfish.postMessage("uci");
  stockfish.postMessage("ucinewgame");

  stockfish.onmessage = (event: { data: string } | string) => {
    let line: string;

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

    const score = (() => {
      const temp = /(?<=(score ))\w+ (-)?\w+/.exec(line)?.[0] ?? null;

      if (temp == null) return null;

      return convertEval(temp);
    })();

    const moves = (() => {
      const temp = /(?<=(time \w+ pv )).*$/.exec(line)?.[0] ?? null;

      if (temp == null) {
        return null;
      }

      const uciMoves = temp.split(" ");

      return uciToMoves(uciMoves);
    })();

    if (!(depth && score && moves)) {
      console.error(`Error with parsing: ${line}`);
      return;
    }

    onMessage({ depth, score, moves });

    if (depth >= reviewDepth) {
      stockfish.postMessage("stop");
    }
  };

  function analyze(fen: string, depth: number) {
    turnColor = fen.split(" ")[1];
    currFen = fen;
    reviewDepth = depth;
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

  return { setOnMessage, analyze, reset };
}

export const Stockfish = Engine();
