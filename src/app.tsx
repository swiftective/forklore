import { ThemeProvider } from "@/components/theme-provider";
import Chessboard from "./components/chessboard/chessboard";

import { Config as ChessConfig } from "chessground/config";
import { createContext, useCallback, useState } from "react";

import AddGame, { AddGameInput } from "@/components/add-game";
import Loading from "@/components/loading";
import GameReviewPromotion from "./components/game-review";
import { ReviewReport } from "./lib/reviewer";

import { FaGithub as GithubIcon } from "react-icons/fa";
import { ModeToggle } from "@/components/mode-toggle";

const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const initConfig: ChessConfig = {
  fen: initFen,
  check: false,
  highlight: {
    lastMove: false,
  },
  orientation: "white",
  movable: {
    free: false,
  },
};

type SetConfig = React.Dispatch<React.SetStateAction<ChessConfig>> | null;

export const ConfigContext = createContext<SetConfig>(null);

function App() {
  const [gameState, setGameState] = useState<"start" | "loading" | "review">(
    "start",
  );

  const [gameInput, setGameInput] = useState<AddGameInput>({
    pgn: "",
    player: "white",
  });

  const [config, setConfig] = useState<ChessConfig>(initConfig);

  const [review, setReview] = useState<ReviewReport | null>(null);

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
        <div className="flex">
          <div className="flex flex-1 justify-evenly">
            <Chessboard config={config} className="m-9 h-[90vh] w-[90vh]" />
            <div className="border-2 border-border h-[90vh] w-[70vh] p-5 rounded-lg m-auto overflow-hidden">
              {gameState == "start" ? (
                <AddGame onComplete={addOnComplete} />
              ) : gameState == "loading" ? (
                <Loading input={gameInput} onComplete={loadOnComplete} />
              ) : gameState == "review" && review != null ? (
                <GameReviewPromotion
                  reviewInput={review}
                  newGame={() => {
                    setConfig(initConfig);
                    setGameState("start");
                  }}
                />
              ) : null}
            </div>
          </div>
          <nav className="h-screen p-4 border-l border-border w-20 flex gap-4 flex-col justify-end items-center ml-3">
            <a href="https://github.com/swiftective/forklore/" target="_blank">
              <GithubIcon className="size-5" />
            </a>
            <ModeToggle />
          </nav>
        </div>
      </ConfigContext.Provider>
    </ThemeProvider>
  );
}

export default App;
