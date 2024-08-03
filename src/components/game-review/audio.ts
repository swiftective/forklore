import { Chess } from "chess.js";

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

  let audio: HTMLAudioElement;

  if (isCheckmate || isStalemate) {
    audio = new Audio("gameover.mp3");
  } else if (isCapture) {
    audio = new Audio("capture.mp3");
  } else {
    audio = new Audio("move.mp3");
  }

  audio.volume = 0.5;
  audio.play();
}
