import { useEffect, useRef, useState } from "react";
import { Chessground as ChessgroundApi } from "chessground";

import { Api } from "chessground/api";
import { Config } from "chessground/config";

import "./chessboard.css";
// import "./chessboard.base.css";
import "./chessboard.brown.css";
import "./chessboard.cburnett.css";

interface Props {
  config?: Config;
  className?: string;
}

function Chessboard({ config = {}, className = "" }: Props) {
  const [api, setApi] = useState<Api | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current && !api) {
      const chessgroundApi = ChessgroundApi(ref.current, {
        animation: { enabled: true, duration: 200 },
        premovable: { enabled: false },
        predroppable: { enabled: false },
      });
      setApi(chessgroundApi);
    } else if (ref && ref.current && api) {
      api.set(config);
    }
  }, [ref]);

  useEffect(() => {
    api?.set(config);
  }, [api, config]);

  return (
    <div className={className}>
      <div
        ref={ref}
        style={{ height: "100%", width: "100%", display: "table" }}
      />
    </div>
  );
}

export default Chessboard;
