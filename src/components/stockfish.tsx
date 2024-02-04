import { useState, useMemo } from "react";
import { EngineWrapper, Engine } from "@/lib/engine.ts";

function Stockfish() {
  const [value, setValue] = useState("");
  const [outputs, setOutputs] = useState<string[]>([]);

  const which = useMemo(() => EngineWrapper(), []);

  const engine = useMemo(
    () =>
      Engine(({ depth, score, moves }) => {
        const mess = [
          "Depth: " + depth,
          "Score: " + score,
          "Moves: " + moves,
        ].join("\n");
        setOutputs((outputs) => outputs.concat(mess));
      }, which),
    [which],
  );
  return (
    <>
      <div>
        <label htmlFor="command">Enter Commands:</label>
        <input
          className="bg-black border-white"
          type="text"
          id="command"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              engine.cmd(value);
              setValue("");
            }
          }}
        />
      </div>
      <div>
        {outputs.map((output) => (
          <li>{output}</li>
        ))}
      </div>
    </>
  );
}

export default Stockfish;
