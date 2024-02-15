import { useState } from "react";
import { FaPlay as Play } from "react-icons/fa6";

type AnalProps = {
  fen: string;
};

const moves = [
  "e4",
  "e5",
  "Nf3",
  "Nc6",
  "Bb5",
  "a6",
  "Ba4",
  "Nf6",
  "O-O",
  "Be7",
  "Re1",
  "O-O",
  "Nc3",
  "d6",
  "d4",
  "Ne7",
  "Nxe7",
  "Qxe7",
  "f4",
  "c5",
];

function Analyzer({ fen }: AnalProps) {
  // const state = useState<"loading" | "display">("loading");

  return (
    <div>
      <div className="w-full border overflow-y-hidden overflow-x-scroll relative border-border mb-3 rounded-lg grid place-items-center">
        <div className="overflow-x-scroll w-full">
          <span className="sticky left-0 p-1 pr-2 font-semibold rounded-lg mr-2 bg-primary text-background">
            +1.3
          </span>
          {moves.map((move) => {
            return (
              <span className="m-1 whitespace-nowrap text-sm">{move}</span>
            );
          })}
        </div>
      </div>

      <div className="w-full border overflow-y-hidden p-1 overflow-x-scroll relative border-border mb-3 rounded-lg grid place-items-center">
        <div className="overflow-x-scroll w-full flex items-center">
          <span className="sticky left-0 p-1 pr-2 font-semibold rounded-lg bg-background">
            <Play />
          </span>
          {moves.map((move) => {
            return (
              <span className="m-1 whitespace-nowrap text-sm">{move}</span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Analyzer;
