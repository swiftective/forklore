import { ThemeProvider } from "@/components/theme-provider";
import Chessboard from "./components/chessboard/chessboard";

import { Config as ChessConfig } from "chessground/config";
import { useEffect, useState } from "react";

// import AddGame from "@/components/add-game";
import Loading from "@/components/loading";

// import Stockfish from "@/components/stockfish";

function App() {
  const [config, setConfig] = useState<ChessConfig>({
    movable: {
      free: false,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setConfig((config) => {
        return {
          ...config,
          fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
        };
      });
    }, 2000);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-between m-9">
        <Chessboard config={config} className="h-[90vh] w-[90vh]" />
        <div className="border-2 border-border h-[90vh] w-[70vh] p-5 rounded-lg m-auto overflow-y-scroll">
          <Loading />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
