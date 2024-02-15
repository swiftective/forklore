import { ThemeProvider } from "@/components/theme-provider";
import Chessboard from "./components/chessboard/chessboard";

import { Config as ChessConfig } from "chessground/config";
import { createContext, useCallback, useState } from "react";

import AddGame, { AddGameInput } from "@/components/add-game";
import Loading from "@/components/loading";
import GameReview from "./components/game-review/game-review";
import { ReviewReport } from "./lib/reviewer";

// WARN: test case for review
import {reviewTest} from "@/lib/review-test"

// import Stockfish from "@/components/stockfish";

const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const initConfig: ChessConfig = {
  fen: initFen,
  orientation: "white",
  movable: {
    free: false,
  },
};

const initReview: ReviewReport = {
  opening: { name: "unknown", eco: "00" },
  review: [{ move: "e4", moveFen: initFen, bookMove: true }],
};

type SetConfig = React.Dispatch<React.SetStateAction<ChessConfig>> | null;

export const ConfigContext = createContext<SetConfig>(null);

function App() {
  const [gameState, setGameState] = useState<"start" | "loading" | "review">(
    "review",
  );

  const [gameInput, setGameInput] = useState<AddGameInput>({
    pgn: "",
    player: "white",
  });

  const [config, setConfig] = useState<ChessConfig>(initConfig);

  const [review, setReview] = useState<ReviewReport>();

  const addOnComplete = useCallback((input: AddGameInput) => {
    setGameInput(input);
    setGameState("loading");
  }, []);

  const loadOnComplete = useCallback((review: ReviewReport) => {
    setReview(review);
    setGameState("review");
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ConfigContext.Provider value={setConfig}>
        <div className="flex justify-between m-9">
          <Chessboard config={config} className="h-[90vh] w-[90vh]" />
          <div className="border-2 border-border h-[90vh] w-[70vh] p-5 rounded-lg m-auto overflow-hidden">
            {gameState == "start" ? (
              <AddGame onComplete={addOnComplete} />
            ) : gameState == "loading" ? (
              <Loading input={gameInput} onComplete={loadOnComplete} />
            ) : (
              <GameReview
                reviewInput={reviewTest}
                newGame={() => {
                  setConfig(initConfig);
                  setGameState("start");
                }}
              />
            )}
          </div>
        </div>
      </ConfigContext.Provider>
    </ThemeProvider>
  );
}

export default App;
