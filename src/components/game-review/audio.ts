import { Chess } from "chess.js";
import { Howl } from "howler";

const captureAudio = new Howl({
  src: "capture.mp3",
  volume: 0.5,
});

const moveAudio = new Howl({
  src: "move.mp3",
  volume: 0.5,
});

const gameOverAudio = new Howl({
  src: "gameover.mp3",
  volume: 0.5,
});

export default function playAudio(
  move: string | undefined,
  fen: string | undefined,
): void {
  if (!move || !fen) return;

  const chess = new Chess();
  chess.load(fen);

  const isCapture = move.includes("x");
  const isCheckmate = chess.isCheckmate();
  const isStalemate = chess.isStalemate();

  let audio: Howl;

  if (isCheckmate || isStalemate) {
    audio = gameOverAudio;
  } else if (isCapture) {
    audio = captureAudio;
  } else {
    audio = moveAudio;
  }

  audio.play();
}
