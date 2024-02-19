import { ReviewReport } from "./reviewer";

export const reviewTest: ReviewReport = {
  opening: {
    eco: "C55",
    name: "Italian Game: Two Knights Defense",
  },
  review: [
    {
      move: "e4",
      moveFen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
      bookMove: true,
    },
    {
      move: "e5",
      moveFen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      bookMove: true,
    },
    {
      move: "Nf3",
      moveFen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
      bookMove: true,
    },
    {
      move: "Nc6",
      moveFen:
        "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      bookMove: true,
    },
    {
      move: "Bc4",
      moveFen:
        "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      bookMove: true,
    },
    {
      move: "Nf6",
      moveFen:
        "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      bookMove: true,
    },
    {
      move: "O-O",
      moveFen:
        "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",
      evalBefore: "+0.04",
      evalAfter: "-0.07",
      bestMovesBefore: [
        {
          move: "d3",
          fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
        },
        {
          move: "Bc5",
          fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5",
        },
        {
          move: "O-O",
          fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 2 5",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w - - 3 6",
        },
        {
          move: "Nc3",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 4 6",
        },
        {
          move: "h6",
          fen: "r1bq1rk1/pppp1pp1/2n2n1p/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7",
        },
        {
          move: "Be3",
          fen: "r1bq1rk1/pppp1pp1/2n2n1p/2b1p3/2B1P3/2NPBN2/PPP2PPP/R2Q1RK1 b - - 1 7",
        },
        {
          move: "Bxe3",
          fen: "r1bq1rk1/pppp1pp1/2n2n1p/4p3/2B1P3/2NPbN2/PPP2PPP/R2Q1RK1 w - - 0 8",
        },
        {
          move: "fxe3",
          fen: "r1bq1rk1/pppp1pp1/2n2n1p/4p3/2B1P3/2NPPN2/PPP3PP/R2Q1RK1 b - - 0 8",
        },
        {
          move: "d6",
          fen: "r1bq1rk1/ppp2pp1/2np1n1p/4p3/2B1P3/2NPPN2/PPP3PP/R2Q1RK1 w - - 0 9",
        },
        {
          move: "Nd5",
          fen: "r1bq1rk1/ppp2pp1/2np1n1p/3Np3/2B1P3/3PPN2/PPP3PP/R2Q1RK1 b - - 1 9",
        },
        {
          move: "Nxd5",
          fen: "r1bq1rk1/ppp2pp1/2np3p/3np3/2B1P3/3PPN2/PPP3PP/R2Q1RK1 w - - 0 10",
        },
        {
          move: "Bxd5",
          fen: "r1bq1rk1/ppp2pp1/2np3p/3Bp3/4P3/3PPN2/PPP3PP/R2Q1RK1 b - - 0 10",
        },
        {
          move: "Ne7",
          fen: "r1bq1rk1/ppp1npp1/3p3p/3Bp3/4P3/3PPN2/PPP3PP/R2Q1RK1 w - - 1 11",
        },
        {
          move: "Nd2",
          fen: "r1bq1rk1/ppp1npp1/3p3p/3Bp3/4P3/3PP3/PPPN2PP/R2Q1RK1 b - - 2 11",
        },
        {
          move: "Nxd5",
          fen: "r1bq1rk1/ppp2pp1/3p3p/3np3/4P3/3PP3/PPPN2PP/R2Q1RK1 w - - 0 12",
        },
      ],
      bestMovesAfter: [
        {
          move: "Nxe4",
          fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5",
        },
        {
          move: "Qe2",
          fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPPQPPP/RNB2RK1 b kq - 1 5",
        },
        {
          move: "Nd6",
          fen: "r1bqkb1r/pppp1ppp/2nn4/4p3/2B5/5N2/PPPPQPPP/RNB2RK1 w kq - 2 6",
        },
        {
          move: "Bd5",
          fen: "r1bqkb1r/pppp1ppp/2nn4/3Bp3/8/5N2/PPPPQPPP/RNB2RK1 b kq - 3 6",
        },
        {
          move: "Be7",
          fen: "r1bqk2r/ppppbppp/2nn4/3Bp3/8/5N2/PPPPQPPP/RNB2RK1 w kq - 4 7",
        },
        {
          move: "Nxe5",
          fen: "r1bqk2r/ppppbppp/2nn4/3BN3/8/8/PPPPQPPP/RNB2RK1 b kq - 0 7",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppppbppp/2nn4/3BN3/8/8/PPPPQPPP/RNB2RK1 w - - 1 8",
        },
        {
          move: "Nc3",
          fen: "r1bq1rk1/ppppbppp/2nn4/3BN3/8/2N5/PPPPQPPP/R1B2RK1 b - - 2 8",
        },
        {
          move: "Nxe5",
          fen: "r1bq1rk1/ppppbppp/3n4/3Bn3/8/2N5/PPPPQPPP/R1B2RK1 w - - 0 9",
        },
        {
          move: "Qxe5",
          fen: "r1bq1rk1/ppppbppp/3n4/3BQ3/8/2N5/PPPP1PPP/R1B2RK1 b - - 0 9",
        },
        {
          move: "Bf6",
          fen: "r1bq1rk1/pppp1ppp/3n1b2/3BQ3/8/2N5/PPPP1PPP/R1B2RK1 w - - 1 10",
        },
        {
          move: "Qf4",
          fen: "r1bq1rk1/pppp1ppp/3n1b2/3B4/5Q2/2N5/PPPP1PPP/R1B2RK1 b - - 2 10",
        },
        {
          move: "Re8",
          fen: "r1bqr1k1/pppp1ppp/3n1b2/3B4/5Q2/2N5/PPPP1PPP/R1B2RK1 w - - 3 11",
        },
      ],
    },
    {
      move: "Bc5",
      moveFen:
        "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 6 5",
      evalBefore: "-0.07",
      evalAfter: "+0.13",
      bestMovesBefore: [
        {
          move: "Nxe4",
          fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5",
        },
        {
          move: "Qe2",
          fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPPQPPP/RNB2RK1 b kq - 1 5",
        },
        {
          move: "Nd6",
          fen: "r1bqkb1r/pppp1ppp/2nn4/4p3/2B5/5N2/PPPPQPPP/RNB2RK1 w kq - 2 6",
        },
        {
          move: "Bd5",
          fen: "r1bqkb1r/pppp1ppp/2nn4/3Bp3/8/5N2/PPPPQPPP/RNB2RK1 b kq - 3 6",
        },
        {
          move: "Be7",
          fen: "r1bqk2r/ppppbppp/2nn4/3Bp3/8/5N2/PPPPQPPP/RNB2RK1 w kq - 4 7",
        },
        {
          move: "Nxe5",
          fen: "r1bqk2r/ppppbppp/2nn4/3BN3/8/8/PPPPQPPP/RNB2RK1 b kq - 0 7",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppppbppp/2nn4/3BN3/8/8/PPPPQPPP/RNB2RK1 w - - 1 8",
        },
        {
          move: "Nc3",
          fen: "r1bq1rk1/ppppbppp/2nn4/3BN3/8/2N5/PPPPQPPP/R1B2RK1 b - - 2 8",
        },
        {
          move: "Nxe5",
          fen: "r1bq1rk1/ppppbppp/3n4/3Bn3/8/2N5/PPPPQPPP/R1B2RK1 w - - 0 9",
        },
        {
          move: "Qxe5",
          fen: "r1bq1rk1/ppppbppp/3n4/3BQ3/8/2N5/PPPP1PPP/R1B2RK1 b - - 0 9",
        },
        {
          move: "Bf6",
          fen: "r1bq1rk1/pppp1ppp/3n1b2/3BQ3/8/2N5/PPPP1PPP/R1B2RK1 w - - 1 10",
        },
        {
          move: "Qf4",
          fen: "r1bq1rk1/pppp1ppp/3n1b2/3B4/5Q2/2N5/PPPP1PPP/R1B2RK1 b - - 2 10",
        },
        {
          move: "Re8",
          fen: "r1bqr1k1/pppp1ppp/3n1b2/3B4/5Q2/2N5/PPPP1PPP/R1B2RK1 w - - 3 11",
        },
      ],
      bestMovesAfter: [
        {
          move: "d3",
          fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 0 5",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w - - 1 6",
        },
        {
          move: "c3",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 b - - 0 6",
        },
        {
          move: "d6",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w - - 0 7",
        },
        {
          move: "b4",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/1PB1P3/2PP1N2/P4PPP/RNBQ1RK1 b - - 0 7",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/1PB1P3/2PP1N2/P4PPP/RNBQ1RK1 w - - 1 8",
        },
        {
          move: "Nbd2",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/1PB1P3/2PP1N2/P2N1PPP/R1BQ1RK1 b - - 2 8",
        },
        {
          move: "a5",
          fen: "r1bq1rk1/1pp2ppp/1bnp1n2/p3p3/1PB1P3/2PP1N2/P2N1PPP/R1BQ1RK1 w - - 0 9",
        },
        {
          move: "b5",
          fen: "r1bq1rk1/1pp2ppp/1bnp1n2/pP2p3/2B1P3/2PP1N2/P2N1PPP/R1BQ1RK1 b - - 0 9",
        },
        {
          move: "Ne7",
          fen: "r1bq1rk1/1pp1nppp/1b1p1n2/pP2p3/2B1P3/2PP1N2/P2N1PPP/R1BQ1RK1 w - - 1 10",
        },
        {
          move: "a4",
          fen: "r1bq1rk1/1pp1nppp/1b1p1n2/pP2p3/P1B1P3/2PP1N2/3N1PPP/R1BQ1RK1 b - - 0 10",
        },
        {
          move: "Ng6",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP2p3/P1B1P3/2PP1N2/3N1PPP/R1BQ1RK1 w - - 1 11",
        },
        {
          move: "d4",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP2p3/P1BPP3/2P2N2/3N1PPP/R1BQ1RK1 b - - 0 11",
        },
        {
          move: "exd4",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP6/P1BpP3/2P2N2/3N1PPP/R1BQ1RK1 w - - 0 12",
        },
        {
          move: "cxd4",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP6/P1BPP3/5N2/3N1PPP/R1BQ1RK1 b - - 0 12",
        },
        {
          move: "d5",
          fen: "r1bq1rk1/1pp2ppp/1b3nn1/pP1p4/P1BPP3/5N2/3N1PPP/R1BQ1RK1 w - - 0 13",
        },
        {
          move: "exd5",
          fen: "r1bq1rk1/1pp2ppp/1b3nn1/pP1P4/P1BP4/5N2/3N1PPP/R1BQ1RK1 b - - 0 13",
        },
        {
          move: "Bg4",
          fen: "r2q1rk1/1pp2ppp/1b3nn1/pP1P4/P1BP2b1/5N2/3N1PPP/R1BQ1RK1 w - - 1 14",
        },
      ],
    },
    {
      move: "Re1",
      moveFen:
        "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQR1K1 b kq - 7 5",
      evalBefore: "+0.13",
      evalAfter: "+0.06",
      bestMovesBefore: [
        {
          move: "d3",
          fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 0 5",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w - - 1 6",
        },
        {
          move: "c3",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 b - - 0 6",
        },
        {
          move: "d6",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w - - 0 7",
        },
        {
          move: "b4",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/1PB1P3/2PP1N2/P4PPP/RNBQ1RK1 b - - 0 7",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/1PB1P3/2PP1N2/P4PPP/RNBQ1RK1 w - - 1 8",
        },
        {
          move: "Nbd2",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/1PB1P3/2PP1N2/P2N1PPP/R1BQ1RK1 b - - 2 8",
        },
        {
          move: "a5",
          fen: "r1bq1rk1/1pp2ppp/1bnp1n2/p3p3/1PB1P3/2PP1N2/P2N1PPP/R1BQ1RK1 w - - 0 9",
        },
        {
          move: "b5",
          fen: "r1bq1rk1/1pp2ppp/1bnp1n2/pP2p3/2B1P3/2PP1N2/P2N1PPP/R1BQ1RK1 b - - 0 9",
        },
        {
          move: "Ne7",
          fen: "r1bq1rk1/1pp1nppp/1b1p1n2/pP2p3/2B1P3/2PP1N2/P2N1PPP/R1BQ1RK1 w - - 1 10",
        },
        {
          move: "a4",
          fen: "r1bq1rk1/1pp1nppp/1b1p1n2/pP2p3/P1B1P3/2PP1N2/3N1PPP/R1BQ1RK1 b - - 0 10",
        },
        {
          move: "Ng6",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP2p3/P1B1P3/2PP1N2/3N1PPP/R1BQ1RK1 w - - 1 11",
        },
        {
          move: "d4",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP2p3/P1BPP3/2P2N2/3N1PPP/R1BQ1RK1 b - - 0 11",
        },
        {
          move: "exd4",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP6/P1BpP3/2P2N2/3N1PPP/R1BQ1RK1 w - - 0 12",
        },
        {
          move: "cxd4",
          fen: "r1bq1rk1/1pp2ppp/1b1p1nn1/pP6/P1BPP3/5N2/3N1PPP/R1BQ1RK1 b - - 0 12",
        },
        {
          move: "d5",
          fen: "r1bq1rk1/1pp2ppp/1b3nn1/pP1p4/P1BPP3/5N2/3N1PPP/R1BQ1RK1 w - - 0 13",
        },
        {
          move: "exd5",
          fen: "r1bq1rk1/1pp2ppp/1b3nn1/pP1P4/P1BP4/5N2/3N1PPP/R1BQ1RK1 b - - 0 13",
        },
        {
          move: "Bg4",
          fen: "r2q1rk1/1pp2ppp/1b3nn1/pP1P4/P1BP2b1/5N2/3N1PPP/R1BQ1RK1 w - - 1 14",
        },
      ],
      bestMovesAfter: [
        {
          move: "O-O",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQR1K1 w - - 8 6",
        },
        {
          move: "d3",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQR1K1 b - - 0 6",
        },
        {
          move: "Nd4",
          fen: "r1bq1rk1/pppp1ppp/5n2/2b1p3/2BnP3/3P1N2/PPP2PPP/RNBQR1K1 w - - 1 7",
        },
        {
          move: "Nxd4",
          fen: "r1bq1rk1/pppp1ppp/5n2/2b1p3/2BNP3/3P4/PPP2PPP/RNBQR1K1 b - - 0 7",
        },
        {
          move: "Bxd4",
          fen: "r1bq1rk1/pppp1ppp/5n2/4p3/2BbP3/3P4/PPP2PPP/RNBQR1K1 w - - 0 8",
        },
        {
          move: "c3",
          fen: "r1bq1rk1/pppp1ppp/5n2/4p3/2BbP3/2PP4/PP3PPP/RNBQR1K1 b - - 0 8",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/pppp1ppp/1b3n2/4p3/2B1P3/2PP4/PP3PPP/RNBQR1K1 w - - 1 9",
        },
        {
          move: "d4",
          fen: "r1bq1rk1/pppp1ppp/1b3n2/4p3/2BPP3/2P5/PP3PPP/RNBQR1K1 b - - 0 9",
        },
        {
          move: "d6",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/4p3/2BPP3/2P5/PP3PPP/RNBQR1K1 w - - 0 10",
        },
        {
          move: "h3",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/4p3/2BPP3/2P4P/PP3PP1/RNBQR1K1 b - - 0 10",
        },
        {
          move: "h6",
          fen: "r1bq1rk1/ppp2pp1/1b1p1n1p/4p3/2BPP3/2P4P/PP3PP1/RNBQR1K1 w - - 0 11",
        },
      ],
    },
    {
      move: "d6",
      moveFen:
        "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQR1K1 w kq - 0 6",
      evalBefore: "+0.06",
      evalAfter: "+0.22",
      bestMovesBefore: [
        {
          move: "O-O",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQR1K1 w - - 8 6",
        },
        {
          move: "d3",
          fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQR1K1 b - - 0 6",
        },
        {
          move: "Nd4",
          fen: "r1bq1rk1/pppp1ppp/5n2/2b1p3/2BnP3/3P1N2/PPP2PPP/RNBQR1K1 w - - 1 7",
        },
        {
          move: "Nxd4",
          fen: "r1bq1rk1/pppp1ppp/5n2/2b1p3/2BNP3/3P4/PPP2PPP/RNBQR1K1 b - - 0 7",
        },
        {
          move: "Bxd4",
          fen: "r1bq1rk1/pppp1ppp/5n2/4p3/2BbP3/3P4/PPP2PPP/RNBQR1K1 w - - 0 8",
        },
        {
          move: "c3",
          fen: "r1bq1rk1/pppp1ppp/5n2/4p3/2BbP3/2PP4/PP3PPP/RNBQR1K1 b - - 0 8",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/pppp1ppp/1b3n2/4p3/2B1P3/2PP4/PP3PPP/RNBQR1K1 w - - 1 9",
        },
        {
          move: "d4",
          fen: "r1bq1rk1/pppp1ppp/1b3n2/4p3/2BPP3/2P5/PP3PPP/RNBQR1K1 b - - 0 9",
        },
        {
          move: "d6",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/4p3/2BPP3/2P5/PP3PPP/RNBQR1K1 w - - 0 10",
        },
        {
          move: "h3",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/4p3/2BPP3/2P4P/PP3PP1/RNBQR1K1 b - - 0 10",
        },
        {
          move: "h6",
          fen: "r1bq1rk1/ppp2pp1/1b1p1n1p/4p3/2BPP3/2P4P/PP3PP1/RNBQR1K1 w - - 0 11",
        },
      ],
      bestMovesAfter: [
        {
          move: "c3",
          fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQR1K1 b kq - 0 6",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQR1K1 w - - 1 7",
        },
        {
          move: "d4",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQR1K1 b - - 0 7",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/2BPP3/2P2N2/PP3PPP/RNBQR1K1 w - - 1 8",
        },
        {
          move: "h3",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/2BPP3/2P2N1P/PP3PP1/RNBQR1K1 b - - 0 8",
        },
        {
          move: "Nxe4",
          fen: "r1bq1rk1/ppp2ppp/1bnp4/4p3/2BPn3/2P2N1P/PP3PP1/RNBQR1K1 w - - 0 9",
        },
        {
          move: "Rxe4",
          fen: "r1bq1rk1/ppp2ppp/1bnp4/4p3/2BPR3/2P2N1P/PP3PP1/RNBQ2K1 b - - 0 9",
        },
        {
          move: "d5",
          fen: "r1bq1rk1/ppp2ppp/1bn5/3pp3/2BPR3/2P2N1P/PP3PP1/RNBQ2K1 w - - 0 10",
        },
        {
          move: "Bg5",
          fen: "r1bq1rk1/ppp2ppp/1bn5/3pp1B1/2BPR3/2P2N1P/PP3PP1/RN1Q2K1 b - - 1 10",
        },
        {
          move: "f6",
          fen: "r1bq1rk1/ppp3pp/1bn2p2/3pp1B1/2BPR3/2P2N1P/PP3PP1/RN1Q2K1 w - - 0 11",
        },
        {
          move: "dxe5",
          fen: "r1bq1rk1/ppp3pp/1bn2p2/3pP1B1/2B1R3/2P2N1P/PP3PP1/RN1Q2K1 b - - 0 11",
        },
        {
          move: "dxc4",
          fen: "r1bq1rk1/ppp3pp/1bn2p2/4P1B1/2p1R3/2P2N1P/PP3PP1/RN1Q2K1 w - - 0 12",
        },
        {
          move: "Qxd8",
          fen: "r1bQ1rk1/ppp3pp/1bn2p2/4P1B1/2p1R3/2P2N1P/PP3PP1/RN4K1 b - - 0 12",
        },
        {
          move: "Rxd8",
          fen: "r1br2k1/ppp3pp/1bn2p2/4P1B1/2p1R3/2P2N1P/PP3PP1/RN4K1 w - - 0 13",
        },
        {
          move: "exf6",
          fen: "r1br2k1/ppp3pp/1bn2P2/6B1/2p1R3/2P2N1P/PP3PP1/RN4K1 b - - 0 13",
        },
        {
          move: "Rd1+",
          fen: "r1b3k1/ppp3pp/1bn2P2/6B1/2p1R3/2P2N1P/PP3PP1/RN1r2K1 w - - 1 14",
        },
        {
          move: "Kh2",
          fen: "r1b3k1/ppp3pp/1bn2P2/6B1/2p1R3/2P2N1P/PP3PPK/RN1r4 b - - 2 14",
        },
        {
          move: "Bxf2",
          fen: "r1b3k1/ppp3pp/2n2P2/6B1/2p1R3/2P2N1P/PP3bPK/RN1r4 w - - 0 15",
        },
      ],
    },
    {
      move: "d3",
      moveFen:
        "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQR1K1 b kq - 0 6",
      evalBefore: "+0.22",
      evalAfter: "+0.17",
      bestMovesBefore: [
        {
          move: "c3",
          fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQR1K1 b kq - 0 6",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQR1K1 w - - 1 7",
        },
        {
          move: "d4",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQR1K1 b - - 0 7",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/2BPP3/2P2N2/PP3PPP/RNBQR1K1 w - - 1 8",
        },
        {
          move: "h3",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/2BPP3/2P2N1P/PP3PP1/RNBQR1K1 b - - 0 8",
        },
        {
          move: "Nxe4",
          fen: "r1bq1rk1/ppp2ppp/1bnp4/4p3/2BPn3/2P2N1P/PP3PP1/RNBQR1K1 w - - 0 9",
        },
        {
          move: "Rxe4",
          fen: "r1bq1rk1/ppp2ppp/1bnp4/4p3/2BPR3/2P2N1P/PP3PP1/RNBQ2K1 b - - 0 9",
        },
        {
          move: "d5",
          fen: "r1bq1rk1/ppp2ppp/1bn5/3pp3/2BPR3/2P2N1P/PP3PP1/RNBQ2K1 w - - 0 10",
        },
        {
          move: "Bg5",
          fen: "r1bq1rk1/ppp2ppp/1bn5/3pp1B1/2BPR3/2P2N1P/PP3PP1/RN1Q2K1 b - - 1 10",
        },
        {
          move: "f6",
          fen: "r1bq1rk1/ppp3pp/1bn2p2/3pp1B1/2BPR3/2P2N1P/PP3PP1/RN1Q2K1 w - - 0 11",
        },
        {
          move: "dxe5",
          fen: "r1bq1rk1/ppp3pp/1bn2p2/3pP1B1/2B1R3/2P2N1P/PP3PP1/RN1Q2K1 b - - 0 11",
        },
        {
          move: "dxc4",
          fen: "r1bq1rk1/ppp3pp/1bn2p2/4P1B1/2p1R3/2P2N1P/PP3PP1/RN1Q2K1 w - - 0 12",
        },
        {
          move: "Qxd8",
          fen: "r1bQ1rk1/ppp3pp/1bn2p2/4P1B1/2p1R3/2P2N1P/PP3PP1/RN4K1 b - - 0 12",
        },
        {
          move: "Rxd8",
          fen: "r1br2k1/ppp3pp/1bn2p2/4P1B1/2p1R3/2P2N1P/PP3PP1/RN4K1 w - - 0 13",
        },
        {
          move: "exf6",
          fen: "r1br2k1/ppp3pp/1bn2P2/6B1/2p1R3/2P2N1P/PP3PP1/RN4K1 b - - 0 13",
        },
        {
          move: "Rd1+",
          fen: "r1b3k1/ppp3pp/1bn2P2/6B1/2p1R3/2P2N1P/PP3PP1/RN1r2K1 w - - 1 14",
        },
        {
          move: "Kh2",
          fen: "r1b3k1/ppp3pp/1bn2P2/6B1/2p1R3/2P2N1P/PP3PPK/RN1r4 b - - 2 14",
        },
        {
          move: "Bxf2",
          fen: "r1b3k1/ppp3pp/2n2P2/6B1/2p1R3/2P2N1P/PP3bPK/RN1r4 w - - 0 15",
        },
      ],
      bestMovesAfter: [
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQR1K1 w - - 1 7",
        },
        {
          move: "c3",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 b - - 0 7",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 w - - 1 8",
        },
        {
          move: "a4",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/P1B1P3/2PP1N2/1P3PPP/RNBQR1K1 b - - 0 8",
        },
        {
          move: "Na5",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/n3p3/P1B1P3/2PP1N2/1P3PPP/RNBQR1K1 w - - 1 9",
        },
        {
          move: "Ba2",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/n3p3/P3P3/2PP1N2/BP3PPP/RNBQR1K1 b - - 2 9",
        },
        {
          move: "c5",
          fen: "r1bq1rk1/pp3ppp/1b1p1n2/n1p1p3/P3P3/2PP1N2/BP3PPP/RNBQR1K1 w - - 0 10",
        },
        {
          move: "Nbd2",
          fen: "r1bq1rk1/pp3ppp/1b1p1n2/n1p1p3/P3P3/2PP1N2/BP1N1PPP/R1BQR1K1 b - - 1 10",
        },
        {
          move: "Bc7",
          fen: "r1bq1rk1/ppb2ppp/3p1n2/n1p1p3/P3P3/2PP1N2/BP1N1PPP/R1BQR1K1 w - - 2 11",
        },
        {
          move: "Re2",
          fen: "r1bq1rk1/ppb2ppp/3p1n2/n1p1p3/P3P3/2PP1N2/BP1NRPPP/R1BQ2K1 b - - 3 11",
        },
        {
          move: "Nc6",
          fen: "r1bq1rk1/ppb2ppp/2np1n2/2p1p3/P3P3/2PP1N2/BP1NRPPP/R1BQ2K1 w - - 4 12",
        },
        {
          move: "h3",
          fen: "r1bq1rk1/ppb2ppp/2np1n2/2p1p3/P3P3/2PP1N1P/BP1NRPP1/R1BQ2K1 b - - 0 12",
        },
        {
          move: "Kh8",
          fen: "r1bq1r1k/ppb2ppp/2np1n2/2p1p3/P3P3/2PP1N1P/BP1NRPP1/R1BQ2K1 w - - 1 13",
        },
      ],
    },
    {
      move: "Bg4",
      moveFen:
        "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P1b1/3P1N2/PPP2PPP/RNBQR1K1 w kq - 1 7",
      evalBefore: "+0.17",
      evalAfter: "+0.31",
      bestMovesBefore: [
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQR1K1 w - - 1 7",
        },
        {
          move: "c3",
          fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 b - - 0 7",
        },
        {
          move: "Bb6",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 w - - 1 8",
        },
        {
          move: "a4",
          fen: "r1bq1rk1/ppp2ppp/1bnp1n2/4p3/P1B1P3/2PP1N2/1P3PPP/RNBQR1K1 b - - 0 8",
        },
        {
          move: "Na5",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/n3p3/P1B1P3/2PP1N2/1P3PPP/RNBQR1K1 w - - 1 9",
        },
        {
          move: "Ba2",
          fen: "r1bq1rk1/ppp2ppp/1b1p1n2/n3p3/P3P3/2PP1N2/BP3PPP/RNBQR1K1 b - - 2 9",
        },
        {
          move: "c5",
          fen: "r1bq1rk1/pp3ppp/1b1p1n2/n1p1p3/P3P3/2PP1N2/BP3PPP/RNBQR1K1 w - - 0 10",
        },
        {
          move: "Nbd2",
          fen: "r1bq1rk1/pp3ppp/1b1p1n2/n1p1p3/P3P3/2PP1N2/BP1N1PPP/R1BQR1K1 b - - 1 10",
        },
        {
          move: "Bc7",
          fen: "r1bq1rk1/ppb2ppp/3p1n2/n1p1p3/P3P3/2PP1N2/BP1N1PPP/R1BQR1K1 w - - 2 11",
        },
        {
          move: "Re2",
          fen: "r1bq1rk1/ppb2ppp/3p1n2/n1p1p3/P3P3/2PP1N2/BP1NRPPP/R1BQ2K1 b - - 3 11",
        },
        {
          move: "Nc6",
          fen: "r1bq1rk1/ppb2ppp/2np1n2/2p1p3/P3P3/2PP1N2/BP1NRPPP/R1BQ2K1 w - - 4 12",
        },
        {
          move: "h3",
          fen: "r1bq1rk1/ppb2ppp/2np1n2/2p1p3/P3P3/2PP1N1P/BP1NRPP1/R1BQ2K1 b - - 0 12",
        },
        {
          move: "Kh8",
          fen: "r1bq1r1k/ppb2ppp/2np1n2/2p1p3/P3P3/2PP1N1P/BP1NRPP1/R1BQ2K1 w - - 1 13",
        },
      ],
      bestMovesAfter: [
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P1b1/2PP1N2/PP3PPP/RNBQR1K1 b kq - 0 7",
        },
        {
          move: "O-O",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p3/2B1P1b1/2PP1N2/PP3PPP/RNBQR1K1 w - - 1 8",
        },
        {
          move: "Nbd2",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p3/2B1P1b1/2PP1N2/PP1N1PPP/R1BQR1K1 b - - 2 8",
        },
        {
          move: "a5",
          fen: "r2q1rk1/1pp2ppp/2np1n2/p1b1p3/2B1P1b1/2PP1N2/PP1N1PPP/R1BQR1K1 w - - 0 9",
        },
        {
          move: "h3",
          fen: "r2q1rk1/1pp2ppp/2np1n2/p1b1p3/2B1P1b1/2PP1N1P/PP1N1PP1/R1BQR1K1 b - - 0 9",
        },
        {
          move: "Be6",
          fen: "r2q1rk1/1pp2ppp/2npbn2/p1b1p3/2B1P3/2PP1N1P/PP1N1PP1/R1BQR1K1 w - - 1 10",
        },
        {
          move: "Bxe6",
          fen: "r2q1rk1/1pp2ppp/2npBn2/p1b1p3/4P3/2PP1N1P/PP1N1PP1/R1BQR1K1 b - - 0 10",
        },
        {
          move: "fxe6",
          fen: "r2q1rk1/1pp3pp/2nppn2/p1b1p3/4P3/2PP1N1P/PP1N1PP1/R1BQR1K1 w - - 0 11",
        },
        {
          move: "a4",
          fen: "r2q1rk1/1pp3pp/2nppn2/p1b1p3/P3P3/2PP1N1P/1P1N1PP1/R1BQR1K1 b - - 0 11",
        },
        {
          move: "Bb6",
          fen: "r2q1rk1/1pp3pp/1bnppn2/p3p3/P3P3/2PP1N1P/1P1N1PP1/R1BQR1K1 w - - 1 12",
        },
        {
          move: "Nc4",
          fen: "r2q1rk1/1pp3pp/1bnppn2/p3p3/P1N1P3/2PP1N1P/1P3PP1/R1BQR1K1 b - - 2 12",
        },
        {
          move: "h6",
          fen: "r2q1rk1/1pp3p1/1bnppn1p/p3p3/P1N1P3/2PP1N1P/1P3PP1/R1BQR1K1 w - - 0 13",
        },
        {
          move: "Be3",
          fen: "r2q1rk1/1pp3p1/1bnppn1p/p3p3/P1N1P3/2PPBN1P/1P3PP1/R2QR1K1 b - - 1 13",
        },
        {
          move: "Bxe3",
          fen: "r2q1rk1/1pp3p1/2nppn1p/p3p3/P1N1P3/2PPbN1P/1P3PP1/R2QR1K1 w - - 0 14",
        },
        {
          move: "Nxe3",
          fen: "r2q1rk1/1pp3p1/2nppn1p/p3p3/P3P3/2PPNN1P/1P3PP1/R2QR1K1 b - - 0 14",
        },
      ],
    },
    {
      move: "h3",
      moveFen:
        "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P1b1/3P1N1P/PPP2PP1/RNBQR1K1 b kq - 0 7",
      evalBefore: "+0.31",
      evalAfter: "+0.04",
      bestMovesBefore: [
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P1b1/2PP1N2/PP3PPP/RNBQR1K1 b kq - 0 7",
        },
        {
          move: "O-O",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p3/2B1P1b1/2PP1N2/PP3PPP/RNBQR1K1 w - - 1 8",
        },
        {
          move: "Nbd2",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p3/2B1P1b1/2PP1N2/PP1N1PPP/R1BQR1K1 b - - 2 8",
        },
        {
          move: "a5",
          fen: "r2q1rk1/1pp2ppp/2np1n2/p1b1p3/2B1P1b1/2PP1N2/PP1N1PPP/R1BQR1K1 w - - 0 9",
        },
        {
          move: "h3",
          fen: "r2q1rk1/1pp2ppp/2np1n2/p1b1p3/2B1P1b1/2PP1N1P/PP1N1PP1/R1BQR1K1 b - - 0 9",
        },
        {
          move: "Be6",
          fen: "r2q1rk1/1pp2ppp/2npbn2/p1b1p3/2B1P3/2PP1N1P/PP1N1PP1/R1BQR1K1 w - - 1 10",
        },
        {
          move: "Bxe6",
          fen: "r2q1rk1/1pp2ppp/2npBn2/p1b1p3/4P3/2PP1N1P/PP1N1PP1/R1BQR1K1 b - - 0 10",
        },
        {
          move: "fxe6",
          fen: "r2q1rk1/1pp3pp/2nppn2/p1b1p3/4P3/2PP1N1P/PP1N1PP1/R1BQR1K1 w - - 0 11",
        },
        {
          move: "a4",
          fen: "r2q1rk1/1pp3pp/2nppn2/p1b1p3/P3P3/2PP1N1P/1P1N1PP1/R1BQR1K1 b - - 0 11",
        },
        {
          move: "Bb6",
          fen: "r2q1rk1/1pp3pp/1bnppn2/p3p3/P3P3/2PP1N1P/1P1N1PP1/R1BQR1K1 w - - 1 12",
        },
        {
          move: "Nc4",
          fen: "r2q1rk1/1pp3pp/1bnppn2/p3p3/P1N1P3/2PP1N1P/1P3PP1/R1BQR1K1 b - - 2 12",
        },
        {
          move: "h6",
          fen: "r2q1rk1/1pp3p1/1bnppn1p/p3p3/P1N1P3/2PP1N1P/1P3PP1/R1BQR1K1 w - - 0 13",
        },
        {
          move: "Be3",
          fen: "r2q1rk1/1pp3p1/1bnppn1p/p3p3/P1N1P3/2PPBN1P/1P3PP1/R2QR1K1 b - - 1 13",
        },
        {
          move: "Bxe3",
          fen: "r2q1rk1/1pp3p1/2nppn1p/p3p3/P1N1P3/2PPbN1P/1P3PP1/R2QR1K1 w - - 0 14",
        },
        {
          move: "Nxe3",
          fen: "r2q1rk1/1pp3p1/2nppn1p/p3p3/P3P3/2PPNN1P/1P3PP1/R2QR1K1 b - - 0 14",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1b1P/PPP2PP1/RNBQR1K1 w kq - 0 8",
        },
        {
          move: "Qxf3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1Q1P/PPP2PP1/RNB1R1K1 b kq - 0 8",
        },
        {
          move: "Nd4",
          fen: "r2qk2r/ppp2ppp/3p1n2/2b1p3/2BnP3/3P1Q1P/PPP2PP1/RNB1R1K1 w kq - 1 9",
        },
        {
          move: "Qd1",
          fen: "r2qk2r/ppp2ppp/3p1n2/2b1p3/2BnP3/3P3P/PPP2PP1/RNBQR1K1 b kq - 2 9",
        },
        {
          move: "b5",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/2BnP3/3P3P/PPP2PP1/RNBQR1K1 w kq - 0 10",
        },
        {
          move: "Bb3",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/3nP3/1B1P3P/PPP2PP1/RNBQR1K1 b kq - 1 10",
        },
        {
          move: "Nxb3",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/4P3/1n1P3P/PPP2PP1/RNBQR1K1 w kq - 0 11",
        },
        {
          move: "axb3",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/4P3/1P1P3P/1PP2PP1/RNBQR1K1 b kq - 0 11",
        },
        {
          move: "O-O",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1pb1p3/4P3/1P1P3P/1PP2PP1/RNBQR1K1 w - - 1 12",
        },
        {
          move: "Be3",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1pb1p3/4P3/1P1PB2P/1PP2PP1/RN1QR1K1 b - - 2 12",
        },
        {
          move: "Bxe3",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1p2p3/4P3/1P1Pb2P/1PP2PP1/RN1QR1K1 w - - 0 13",
        },
        {
          move: "Rxe3",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1p2p3/4P3/1P1PR2P/1PP2PP1/RN1Q2K1 b - - 0 13",
        },
        {
          move: "h6",
          fen: "r2q1rk1/p1p2pp1/3p1n1p/1p2p3/4P3/1P1PR2P/1PP2PP1/RN1Q2K1 w - - 0 14",
        },
        {
          move: "Rg3",
          fen: "r2q1rk1/p1p2pp1/3p1n1p/1p2p3/4P3/1P1P2RP/1PP2PP1/RN1Q2K1 b - - 1 14",
        },
        {
          move: "c6",
          fen: "r2q1rk1/p4pp1/2pp1n1p/1p2p3/4P3/1P1P2RP/1PP2PP1/RN1Q2K1 w - - 0 15",
        },
        {
          move: "Nd2",
          fen: "r2q1rk1/p4pp1/2pp1n1p/1p2p3/4P3/1P1P2RP/1PPN1PP1/R2Q2K1 b - - 1 15",
        },
        {
          move: "a5",
          fen: "r2q1rk1/5pp1/2pp1n1p/pp2p3/4P3/1P1P2RP/1PPN1PP1/R2Q2K1 w - - 0 16",
        },
        {
          move: "Nf1",
          fen: "r2q1rk1/5pp1/2pp1n1p/pp2p3/4P3/1P1P2RP/1PP2PP1/R2Q1NK1 b - - 1 16",
        },
        {
          move: "d5",
          fen: "r2q1rk1/5pp1/2p2n1p/pp1pp3/4P3/1P1P2RP/1PP2PP1/R2Q1NK1 w - - 0 17",
        },
        {
          move: "exd5",
          fen: "r2q1rk1/5pp1/2p2n1p/pp1Pp3/8/1P1P2RP/1PP2PP1/R2Q1NK1 b - - 0 17",
        },
        {
          move: "cxd5",
          fen: "r2q1rk1/5pp1/5n1p/pp1pp3/8/1P1P2RP/1PP2PP1/R2Q1NK1 w - - 0 18",
        },
      ],
    },
    {
      move: "Bh5",
      moveFen:
        "r2qk2r/ppp2ppp/2np1n2/2b1p2b/2B1P3/3P1N1P/PPP2PP1/RNBQR1K1 w kq - 1 8",
      evalBefore: "+0.04",
      evalAfter: "+0.29",
      bestMovesBefore: [
        {
          move: "Bxf3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1b1P/PPP2PP1/RNBQR1K1 w kq - 0 8",
        },
        {
          move: "Qxf3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1Q1P/PPP2PP1/RNB1R1K1 b kq - 0 8",
        },
        {
          move: "Nd4",
          fen: "r2qk2r/ppp2ppp/3p1n2/2b1p3/2BnP3/3P1Q1P/PPP2PP1/RNB1R1K1 w kq - 1 9",
        },
        {
          move: "Qd1",
          fen: "r2qk2r/ppp2ppp/3p1n2/2b1p3/2BnP3/3P3P/PPP2PP1/RNBQR1K1 b kq - 2 9",
        },
        {
          move: "b5",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/2BnP3/3P3P/PPP2PP1/RNBQR1K1 w kq - 0 10",
        },
        {
          move: "Bb3",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/3nP3/1B1P3P/PPP2PP1/RNBQR1K1 b kq - 1 10",
        },
        {
          move: "Nxb3",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/4P3/1n1P3P/PPP2PP1/RNBQR1K1 w kq - 0 11",
        },
        {
          move: "axb3",
          fen: "r2qk2r/p1p2ppp/3p1n2/1pb1p3/4P3/1P1P3P/1PP2PP1/RNBQR1K1 b kq - 0 11",
        },
        {
          move: "O-O",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1pb1p3/4P3/1P1P3P/1PP2PP1/RNBQR1K1 w - - 1 12",
        },
        {
          move: "Be3",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1pb1p3/4P3/1P1PB2P/1PP2PP1/RN1QR1K1 b - - 2 12",
        },
        {
          move: "Bxe3",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1p2p3/4P3/1P1Pb2P/1PP2PP1/RN1QR1K1 w - - 0 13",
        },
        {
          move: "Rxe3",
          fen: "r2q1rk1/p1p2ppp/3p1n2/1p2p3/4P3/1P1PR2P/1PP2PP1/RN1Q2K1 b - - 0 13",
        },
        {
          move: "h6",
          fen: "r2q1rk1/p1p2pp1/3p1n1p/1p2p3/4P3/1P1PR2P/1PP2PP1/RN1Q2K1 w - - 0 14",
        },
        {
          move: "Rg3",
          fen: "r2q1rk1/p1p2pp1/3p1n1p/1p2p3/4P3/1P1P2RP/1PP2PP1/RN1Q2K1 b - - 1 14",
        },
        {
          move: "c6",
          fen: "r2q1rk1/p4pp1/2pp1n1p/1p2p3/4P3/1P1P2RP/1PP2PP1/RN1Q2K1 w - - 0 15",
        },
        {
          move: "Nd2",
          fen: "r2q1rk1/p4pp1/2pp1n1p/1p2p3/4P3/1P1P2RP/1PPN1PP1/R2Q2K1 b - - 1 15",
        },
        {
          move: "a5",
          fen: "r2q1rk1/5pp1/2pp1n1p/pp2p3/4P3/1P1P2RP/1PPN1PP1/R2Q2K1 w - - 0 16",
        },
        {
          move: "Nf1",
          fen: "r2q1rk1/5pp1/2pp1n1p/pp2p3/4P3/1P1P2RP/1PP2PP1/R2Q1NK1 b - - 1 16",
        },
        {
          move: "d5",
          fen: "r2q1rk1/5pp1/2p2n1p/pp1pp3/4P3/1P1P2RP/1PP2PP1/R2Q1NK1 w - - 0 17",
        },
        {
          move: "exd5",
          fen: "r2q1rk1/5pp1/2p2n1p/pp1Pp3/8/1P1P2RP/1PP2PP1/R2Q1NK1 b - - 0 17",
        },
        {
          move: "cxd5",
          fen: "r2q1rk1/5pp1/5n1p/pp1pp3/8/1P1P2RP/1PP2PP1/R2Q1NK1 w - - 0 18",
        },
      ],
      bestMovesAfter: [
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p2b/2B1P3/2PP1N1P/PP3PP1/RNBQR1K1 b kq - 0 8",
        },
        {
          move: "O-O",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p2b/2B1P3/2PP1N1P/PP3PP1/RNBQR1K1 w - - 1 9",
        },
        {
          move: "Nbd2",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p2b/2B1P3/2PP1N1P/PP1N1PP1/R1BQR1K1 b - - 2 9",
        },
        {
          move: "Bb6",
          fen: "r2q1rk1/ppp2ppp/1bnp1n2/4p2b/2B1P3/2PP1N1P/PP1N1PP1/R1BQR1K1 w - - 3 10",
        },
        {
          move: "a4",
          fen: "r2q1rk1/ppp2ppp/1bnp1n2/4p2b/P1B1P3/2PP1N1P/1P1N1PP1/R1BQR1K1 b - - 0 10",
        },
        {
          move: "h6",
          fen: "r2q1rk1/ppp2pp1/1bnp1n1p/4p2b/P1B1P3/2PP1N1P/1P1N1PP1/R1BQR1K1 w - - 0 11",
        },
        {
          move: "Nf1",
          fen: "r2q1rk1/ppp2pp1/1bnp1n1p/4p2b/P1B1P3/2PP1N1P/1P3PP1/R1BQRNK1 b - - 1 11",
        },
        {
          move: "Na5",
          fen: "r2q1rk1/ppp2pp1/1b1p1n1p/n3p2b/P1B1P3/2PP1N1P/1P3PP1/R1BQRNK1 w - - 2 12",
        },
        {
          move: "Ba2",
          fen: "r2q1rk1/ppp2pp1/1b1p1n1p/n3p2b/P3P3/2PP1N1P/BP3PP1/R1BQRNK1 b - - 3 12",
        },
      ],
    },
    {
      move: "g4",
      moveFen:
        "r2qk2r/ppp2ppp/2np1n2/2b1p2b/2B1P1P1/3P1N1P/PPP2P2/RNBQR1K1 b kq - 0 8",
      evalBefore: "+0.29",
      evalAfter: "+0.04",
      bestMovesBefore: [
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1n2/2b1p2b/2B1P3/2PP1N1P/PP3PP1/RNBQR1K1 b kq - 0 8",
        },
        {
          move: "O-O",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p2b/2B1P3/2PP1N1P/PP3PP1/RNBQR1K1 w - - 1 9",
        },
        {
          move: "Nbd2",
          fen: "r2q1rk1/ppp2ppp/2np1n2/2b1p2b/2B1P3/2PP1N1P/PP1N1PP1/R1BQR1K1 b - - 2 9",
        },
        {
          move: "Bb6",
          fen: "r2q1rk1/ppp2ppp/1bnp1n2/4p2b/2B1P3/2PP1N1P/PP1N1PP1/R1BQR1K1 w - - 3 10",
        },
        {
          move: "a4",
          fen: "r2q1rk1/ppp2ppp/1bnp1n2/4p2b/P1B1P3/2PP1N1P/1P1N1PP1/R1BQR1K1 b - - 0 10",
        },
        {
          move: "h6",
          fen: "r2q1rk1/ppp2pp1/1bnp1n1p/4p2b/P1B1P3/2PP1N1P/1P1N1PP1/R1BQR1K1 w - - 0 11",
        },
        {
          move: "Nf1",
          fen: "r2q1rk1/ppp2pp1/1bnp1n1p/4p2b/P1B1P3/2PP1N1P/1P3PP1/R1BQRNK1 b - - 1 11",
        },
        {
          move: "Na5",
          fen: "r2q1rk1/ppp2pp1/1b1p1n1p/n3p2b/P1B1P3/2PP1N1P/1P3PP1/R1BQRNK1 w - - 2 12",
        },
        {
          move: "Ba2",
          fen: "r2q1rk1/ppp2pp1/1b1p1n1p/n3p2b/P3P3/2PP1N1P/BP3PP1/R1BQRNK1 b - - 3 12",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bg6",
          fen: "r2qk2r/ppp2ppp/2np1nb1/2b1p3/2B1P1P1/3P1N1P/PPP2P2/RNBQR1K1 w kq - 1 9",
        },
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 b kq - 0 9",
        },
        {
          move: "a6",
          fen: "r2qk2r/1pp2ppp/p1np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 w kq - 0 10",
        },
        {
          move: "b4",
          fen: "r2qk2r/1pp2ppp/p1np1nb1/2b1p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 b kq - 0 10",
        },
        {
          move: "Ba7",
          fen: "r2qk2r/bpp2ppp/p1np1nb1/4p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 w kq - 1 11",
        },
        {
          move: "Nbd2",
          fen: "r2qk2r/bpp2ppp/p1np1nb1/4p3/1PB1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 b kq - 2 11",
        },
        {
          move: "Qd7",
          fen: "r3k2r/bppq1ppp/p1np1nb1/4p3/1PB1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 w kq - 3 12",
        },
        {
          move: "b5",
          fen: "r3k2r/bppq1ppp/p1np1nb1/1P2p3/2B1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "axb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/1p2p3/2B1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Bxb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/1B2p3/4P1P1/2PP1N1P/P2N1P2/R1BQR1K1 b kq - 0 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/bppq1ppp/2np1nb1/1B2p3/4P1P1/2PP1N1P/P2N1P2/R1BQR1K1 w - - 1 14",
        },
      ],
    },
    {
      move: "Bg6",
      moveFen:
        "r2qk2r/ppp2ppp/2np1nb1/2b1p3/2B1P1P1/3P1N1P/PPP2P2/RNBQR1K1 w kq - 1 9",
      evalBefore: "+0.04",
      evalAfter: "-0.04",
      bestMovesBefore: [
        {
          move: "Bg6",
          fen: "r2qk2r/ppp2ppp/2np1nb1/2b1p3/2B1P1P1/3P1N1P/PPP2P2/RNBQR1K1 w kq - 1 9",
        },
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 b kq - 0 9",
        },
        {
          move: "a6",
          fen: "r2qk2r/1pp2ppp/p1np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 w kq - 0 10",
        },
        {
          move: "b4",
          fen: "r2qk2r/1pp2ppp/p1np1nb1/2b1p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 b kq - 0 10",
        },
        {
          move: "Ba7",
          fen: "r2qk2r/bpp2ppp/p1np1nb1/4p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 w kq - 1 11",
        },
        {
          move: "Nbd2",
          fen: "r2qk2r/bpp2ppp/p1np1nb1/4p3/1PB1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 b kq - 2 11",
        },
        {
          move: "Qd7",
          fen: "r3k2r/bppq1ppp/p1np1nb1/4p3/1PB1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 w kq - 3 12",
        },
        {
          move: "b5",
          fen: "r3k2r/bppq1ppp/p1np1nb1/1P2p3/2B1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "axb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/1p2p3/2B1P1P1/2PP1N1P/P2N1P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Bxb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/1B2p3/4P1P1/2PP1N1P/P2N1P2/R1BQR1K1 b kq - 0 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/bppq1ppp/2np1nb1/1B2p3/4P1P1/2PP1N1P/P2N1P2/R1BQR1K1 w - - 1 14",
        },
      ],
      bestMovesAfter: [
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 b kq - 0 9",
        },
        {
          move: "Qd7",
          fen: "r3k2r/pppq1ppp/2np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 w kq - 1 10",
        },
        {
          move: "b4",
          fen: "r3k2r/pppq1ppp/2np1nb1/2b1p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 b kq - 0 10",
        },
        {
          move: "Bb6",
          fen: "r3k2r/pppq1ppp/1bnp1nb1/4p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 w kq - 1 11",
        },
        {
          move: "a4",
          fen: "r3k2r/pppq1ppp/1bnp1nb1/4p3/PPB1P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 11",
        },
        {
          move: "a6",
          fen: "r3k2r/1ppq1ppp/pbnp1nb1/4p3/PPB1P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 0 12",
        },
        {
          move: "a5",
          fen: "r3k2r/1ppq1ppp/pbnp1nb1/P3p3/1PB1P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 12",
        },
        {
          move: "Ba7",
          fen: "r3k2r/bppq1ppp/p1np1nb1/P3p3/1PB1P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 1 13",
        },
        {
          move: "b5",
          fen: "r3k2r/bppq1ppp/p1np1nb1/PP2p3/2B1P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 13",
        },
        {
          move: "axb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/Pp2p3/2B1P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 0 14",
        },
        {
          move: "Bxb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/PB2p3/4P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 14",
        },
        {
          move: "h5",
          fen: "r3k2r/bppq1pp1/2np1nb1/PB2p2p/4P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 0 15",
        },
        {
          move: "a6",
          fen: "r3k2r/bppq1pp1/P1np1nb1/1B2p2p/4P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 15",
        },
        {
          move: "O-O",
          fen: "r4rk1/bppq1pp1/P1np1nb1/1B2p2p/4P1P1/2PP1N1P/5P2/RNBQR1K1 w - - 1 16",
        },
        {
          move: "Ra3",
          fen: "r4rk1/bppq1pp1/P1np1nb1/1B2p2p/4P1P1/R1PP1N1P/5P2/1NBQR1K1 b - - 2 16",
        },
        {
          move: "hxg4",
          fen: "r4rk1/bppq1pp1/P1np1nb1/1B2p3/4P1p1/R1PP1N1P/5P2/1NBQR1K1 w - - 0 17",
        },
        {
          move: "axb7",
          fen: "r4rk1/bPpq1pp1/2np1nb1/1B2p3/4P1p1/R1PP1N1P/5P2/1NBQR1K1 b - - 0 17",
        },
      ],
    },
    {
      move: "Ng5",
      moveFen:
        "r2qk2r/ppp2ppp/2np1nb1/2b1p1N1/2B1P1P1/3P3P/PPP2P2/RNBQR1K1 b kq - 2 9",
      evalBefore: "-0.04",
      evalAfter: "-1.32",
      bestMovesBefore: [
        {
          move: "c3",
          fen: "r2qk2r/ppp2ppp/2np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 b kq - 0 9",
        },
        {
          move: "Qd7",
          fen: "r3k2r/pppq1ppp/2np1nb1/2b1p3/2B1P1P1/2PP1N1P/PP3P2/RNBQR1K1 w kq - 1 10",
        },
        {
          move: "b4",
          fen: "r3k2r/pppq1ppp/2np1nb1/2b1p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 b kq - 0 10",
        },
        {
          move: "Bb6",
          fen: "r3k2r/pppq1ppp/1bnp1nb1/4p3/1PB1P1P1/2PP1N1P/P4P2/RNBQR1K1 w kq - 1 11",
        },
        {
          move: "a4",
          fen: "r3k2r/pppq1ppp/1bnp1nb1/4p3/PPB1P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 11",
        },
        {
          move: "a6",
          fen: "r3k2r/1ppq1ppp/pbnp1nb1/4p3/PPB1P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 0 12",
        },
        {
          move: "a5",
          fen: "r3k2r/1ppq1ppp/pbnp1nb1/P3p3/1PB1P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 12",
        },
        {
          move: "Ba7",
          fen: "r3k2r/bppq1ppp/p1np1nb1/P3p3/1PB1P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 1 13",
        },
        {
          move: "b5",
          fen: "r3k2r/bppq1ppp/p1np1nb1/PP2p3/2B1P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 13",
        },
        {
          move: "axb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/Pp2p3/2B1P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 0 14",
        },
        {
          move: "Bxb5",
          fen: "r3k2r/bppq1ppp/2np1nb1/PB2p3/4P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 14",
        },
        {
          move: "h5",
          fen: "r3k2r/bppq1pp1/2np1nb1/PB2p2p/4P1P1/2PP1N1P/5P2/RNBQR1K1 w kq - 0 15",
        },
        {
          move: "a6",
          fen: "r3k2r/bppq1pp1/P1np1nb1/1B2p2p/4P1P1/2PP1N1P/5P2/RNBQR1K1 b kq - 0 15",
        },
        {
          move: "O-O",
          fen: "r4rk1/bppq1pp1/P1np1nb1/1B2p2p/4P1P1/2PP1N1P/5P2/RNBQR1K1 w - - 1 16",
        },
        {
          move: "Ra3",
          fen: "r4rk1/bppq1pp1/P1np1nb1/1B2p2p/4P1P1/R1PP1N1P/5P2/1NBQR1K1 b - - 2 16",
        },
        {
          move: "hxg4",
          fen: "r4rk1/bppq1pp1/P1np1nb1/1B2p3/4P1p1/R1PP1N1P/5P2/1NBQR1K1 w - - 0 17",
        },
        {
          move: "axb7",
          fen: "r4rk1/bPpq1pp1/2np1nb1/1B2p3/4P1p1/R1PP1N1P/5P2/1NBQR1K1 b - - 0 17",
        },
      ],
      bestMovesAfter: [
        {
          move: "h5",
          fen: "r2qk2r/ppp2pp1/2np1nb1/2b1p1Np/2B1P1P1/3P3P/PPP2P2/RNBQR1K1 w kq - 0 10",
        },
        {
          move: "Nc3",
          fen: "r2qk2r/ppp2pp1/2np1nb1/2b1p1Np/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 1 10",
        },
        {
          move: "a6",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1Np/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 11",
        },
        {
          move: "Kg2",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1Np/2B1P1P1/2NP3P/PPP2PK1/R1BQR3 b kq - 1 11",
        },
        {
          move: "hxg4",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1N1/2B1P1p1/2NP3P/PPP2PK1/R1BQR3 w kq - 0 12",
        },
        {
          move: "hxg4",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1N1/2B1P1P1/2NP4/PPP2PK1/R1BQR3 b kq - 0 12",
        },
        {
          move: "Na5",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/n1b1p1N1/2B1P1P1/2NP4/PPP2PK1/R1BQR3 w kq - 1 13",
        },
        {
          move: "Be3",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/n1b1p1N1/2B1P1P1/2NPB3/PPP2PK1/R2QR3 b kq - 2 13",
        },
        {
          move: "Nxc4",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/2b1p1N1/2n1P1P1/2NPB3/PPP2PK1/R2QR3 w kq - 0 14",
        },
        {
          move: "dxc4",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/2b1p1N1/2P1P1P1/2N1B3/PPP2PK1/R2QR3 b kq - 0 14",
        },
        {
          move: "Rh4",
          fen: "r2qk3/1pp2pp1/p2p1nb1/2b1p1N1/2P1P1Pr/2N1B3/PPP2PK1/R2QR3 w q - 1 15",
        },
      ],
    },
    {
      move: "Qd7",
      moveFen:
        "r3k2r/pppq1ppp/2np1nb1/2b1p1N1/2B1P1P1/3P3P/PPP2P2/RNBQR1K1 w kq - 3 10",
      evalBefore: "-1.32",
      evalAfter: "-1.08",
      bestMovesBefore: [
        {
          move: "h5",
          fen: "r2qk2r/ppp2pp1/2np1nb1/2b1p1Np/2B1P1P1/3P3P/PPP2P2/RNBQR1K1 w kq - 0 10",
        },
        {
          move: "Nc3",
          fen: "r2qk2r/ppp2pp1/2np1nb1/2b1p1Np/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 1 10",
        },
        {
          move: "a6",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1Np/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 11",
        },
        {
          move: "Kg2",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1Np/2B1P1P1/2NP3P/PPP2PK1/R1BQR3 b kq - 1 11",
        },
        {
          move: "hxg4",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1N1/2B1P1p1/2NP3P/PPP2PK1/R1BQR3 w kq - 0 12",
        },
        {
          move: "hxg4",
          fen: "r2qk2r/1pp2pp1/p1np1nb1/2b1p1N1/2B1P1P1/2NP4/PPP2PK1/R1BQR3 b kq - 0 12",
        },
        {
          move: "Na5",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/n1b1p1N1/2B1P1P1/2NP4/PPP2PK1/R1BQR3 w kq - 1 13",
        },
        {
          move: "Be3",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/n1b1p1N1/2B1P1P1/2NPB3/PPP2PK1/R2QR3 b kq - 2 13",
        },
        {
          move: "Nxc4",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/2b1p1N1/2n1P1P1/2NPB3/PPP2PK1/R2QR3 w kq - 0 14",
        },
        {
          move: "dxc4",
          fen: "r2qk2r/1pp2pp1/p2p1nb1/2b1p1N1/2P1P1P1/2N1B3/PPP2PK1/R2QR3 b kq - 0 14",
        },
        {
          move: "Rh4",
          fen: "r2qk3/1pp2pp1/p2p1nb1/2b1p1N1/2P1P1Pr/2N1B3/PPP2PK1/R2QR3 w q - 1 15",
        },
      ],
      bestMovesAfter: [
        {
          move: "Be3",
          fen: "r3k2r/pppq1ppp/2np1nb1/2b1p1N1/2B1P1P1/3PB2P/PPP2P2/RN1QR1K1 b kq - 4 10",
        },
        {
          move: "h6",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p1N1/2B1P1P1/3PB2P/PPP2P2/RN1QR1K1 w kq - 0 11",
        },
        {
          move: "Nf3",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p3/2B1P1P1/3PBN1P/PPP2P2/RN1QR1K1 b kq - 1 11",
        },
        {
          move: "h5",
          fen: "r3k2r/pppq1pp1/2np1nb1/2b1p2p/2B1P1P1/3PBN1P/PPP2P2/RN1QR1K1 w kq - 0 12",
        },
        {
          move: "g5",
          fen: "r3k2r/pppq1pp1/2np1nb1/2b1p1Pp/2B1P3/3PBN1P/PPP2P2/RN1QR1K1 b kq - 0 12",
        },
        {
          move: "Qxh3",
          fen: "r3k2r/ppp2pp1/2np1nb1/2b1p1Pp/2B1P3/3PBN1q/PPP2P2/RN1QR1K1 w kq - 0 13",
        },
        {
          move: "gxf6",
          fen: "r3k2r/ppp2pp1/2np1Pb1/2b1p2p/2B1P3/3PBN1q/PPP2P2/RN1QR1K1 b kq - 0 13",
        },
        {
          move: "gxf6",
          fen: "r3k2r/ppp2p2/2np1pb1/2b1p2p/2B1P3/3PBN1q/PPP2P2/RN1QR1K1 w kq - 0 14",
        },
        {
          move: "Nbd2",
          fen: "r3k2r/ppp2p2/2np1pb1/2b1p2p/2B1P3/3PBN1q/PPPN1P2/R2QR1K1 b kq - 1 14",
        },
        {
          move: "Rg8",
          fen: "r3k1r1/ppp2p2/2np1pb1/2b1p2p/2B1P3/3PBN1q/PPPN1P2/R2QR1K1 w q - 2 15",
        },
        {
          move: "Ng5",
          fen: "r3k1r1/ppp2p2/2np1pb1/2b1p1Np/2B1P3/3PB2q/PPPN1P2/R2QR1K1 b q - 3 15",
        },
        {
          move: "fxg5",
          fen: "r3k1r1/ppp2p2/2np2b1/2b1p1pp/2B1P3/3PB2q/PPPN1P2/R2QR1K1 w q - 0 16",
        },
        {
          move: "Bxc5",
          fen: "r3k1r1/ppp2p2/2np2b1/2B1p1pp/2B1P3/3P3q/PPPN1P2/R2QR1K1 b q - 0 16",
        },
        {
          move: "dxc5",
          fen: "r3k1r1/ppp2p2/2n3b1/2p1p1pp/2B1P3/3P3q/PPPN1P2/R2QR1K1 w q - 0 17",
        },
        {
          move: "Bd5",
          fen: "r3k1r1/ppp2p2/2n3b1/2pBp1pp/4P3/3P3q/PPPN1P2/R2QR1K1 b q - 1 17",
        },
        {
          move: "O-O-O",
          fen: "2kr2r1/ppp2p2/2n3b1/2pBp1pp/4P3/3P3q/PPPN1P2/R2QR1K1 w - - 2 18",
        },
        {
          move: "Bxc6",
          fen: "2kr2r1/ppp2p2/2B3b1/2p1p1pp/4P3/3P3q/PPPN1P2/R2QR1K1 b - - 0 18",
        },
        {
          move: "bxc6",
          fen: "2kr2r1/p1p2p2/2p3b1/2p1p1pp/4P3/3P3q/PPPN1P2/R2QR1K1 w - - 0 19",
        },
        {
          move: "a3",
          fen: "2kr2r1/p1p2p2/2p3b1/2p1p1pp/4P3/P2P3q/1PPN1P2/R2QR1K1 b - - 0 19",
        },
        {
          move: "Kb8",
          fen: "1k1r2r1/p1p2p2/2p3b1/2p1p1pp/4P3/P2P3q/1PPN1P2/R2QR1K1 w - - 1 20",
        },
        {
          move: "Re3",
          fen: "1k1r2r1/p1p2p2/2p3b1/2p1p1pp/4P3/P2PR2q/1PPN1P2/R2Q2K1 b - - 2 20",
        },
      ],
    },
    {
      move: "Nc3",
      moveFen:
        "r3k2r/pppq1ppp/2np1nb1/2b1p1N1/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 4 10",
      evalBefore: "-1.08",
      evalAfter: "-1.77",
      bestMovesBefore: [
        {
          move: "Be3",
          fen: "r3k2r/pppq1ppp/2np1nb1/2b1p1N1/2B1P1P1/3PB2P/PPP2P2/RN1QR1K1 b kq - 4 10",
        },
        {
          move: "h6",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p1N1/2B1P1P1/3PB2P/PPP2P2/RN1QR1K1 w kq - 0 11",
        },
        {
          move: "Nf3",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p3/2B1P1P1/3PBN1P/PPP2P2/RN1QR1K1 b kq - 1 11",
        },
        {
          move: "h5",
          fen: "r3k2r/pppq1pp1/2np1nb1/2b1p2p/2B1P1P1/3PBN1P/PPP2P2/RN1QR1K1 w kq - 0 12",
        },
        {
          move: "g5",
          fen: "r3k2r/pppq1pp1/2np1nb1/2b1p1Pp/2B1P3/3PBN1P/PPP2P2/RN1QR1K1 b kq - 0 12",
        },
        {
          move: "Qxh3",
          fen: "r3k2r/ppp2pp1/2np1nb1/2b1p1Pp/2B1P3/3PBN1q/PPP2P2/RN1QR1K1 w kq - 0 13",
        },
        {
          move: "gxf6",
          fen: "r3k2r/ppp2pp1/2np1Pb1/2b1p2p/2B1P3/3PBN1q/PPP2P2/RN1QR1K1 b kq - 0 13",
        },
        {
          move: "gxf6",
          fen: "r3k2r/ppp2p2/2np1pb1/2b1p2p/2B1P3/3PBN1q/PPP2P2/RN1QR1K1 w kq - 0 14",
        },
        {
          move: "Nbd2",
          fen: "r3k2r/ppp2p2/2np1pb1/2b1p2p/2B1P3/3PBN1q/PPPN1P2/R2QR1K1 b kq - 1 14",
        },
        {
          move: "Rg8",
          fen: "r3k1r1/ppp2p2/2np1pb1/2b1p2p/2B1P3/3PBN1q/PPPN1P2/R2QR1K1 w q - 2 15",
        },
        {
          move: "Ng5",
          fen: "r3k1r1/ppp2p2/2np1pb1/2b1p1Np/2B1P3/3PB2q/PPPN1P2/R2QR1K1 b q - 3 15",
        },
        {
          move: "fxg5",
          fen: "r3k1r1/ppp2p2/2np2b1/2b1p1pp/2B1P3/3PB2q/PPPN1P2/R2QR1K1 w q - 0 16",
        },
        {
          move: "Bxc5",
          fen: "r3k1r1/ppp2p2/2np2b1/2B1p1pp/2B1P3/3P3q/PPPN1P2/R2QR1K1 b q - 0 16",
        },
        {
          move: "dxc5",
          fen: "r3k1r1/ppp2p2/2n3b1/2p1p1pp/2B1P3/3P3q/PPPN1P2/R2QR1K1 w q - 0 17",
        },
        {
          move: "Bd5",
          fen: "r3k1r1/ppp2p2/2n3b1/2pBp1pp/4P3/3P3q/PPPN1P2/R2QR1K1 b q - 1 17",
        },
        {
          move: "O-O-O",
          fen: "2kr2r1/ppp2p2/2n3b1/2pBp1pp/4P3/3P3q/PPPN1P2/R2QR1K1 w - - 2 18",
        },
        {
          move: "Bxc6",
          fen: "2kr2r1/ppp2p2/2B3b1/2p1p1pp/4P3/3P3q/PPPN1P2/R2QR1K1 b - - 0 18",
        },
        {
          move: "bxc6",
          fen: "2kr2r1/p1p2p2/2p3b1/2p1p1pp/4P3/3P3q/PPPN1P2/R2QR1K1 w - - 0 19",
        },
        {
          move: "a3",
          fen: "2kr2r1/p1p2p2/2p3b1/2p1p1pp/4P3/P2P3q/1PPN1P2/R2QR1K1 b - - 0 19",
        },
        {
          move: "Kb8",
          fen: "1k1r2r1/p1p2p2/2p3b1/2p1p1pp/4P3/P2P3q/1PPN1P2/R2QR1K1 w - - 1 20",
        },
        {
          move: "Re3",
          fen: "1k1r2r1/p1p2p2/2p3b1/2p1p1pp/4P3/P2PR2q/1PPN1P2/R2Q2K1 b - - 2 20",
        },
      ],
      bestMovesAfter: [
        {
          move: "h6",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p1N1/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 11",
        },
        {
          move: "Nf3",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p3/2B1P1P1/2NP1N1P/PPP2P2/R1BQR1K1 b kq - 1 11",
        },
        {
          move: "Nxg4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P1n1/2NP1N1P/PPP2P2/R1BQR1K1 w kq - 0 12",
        },
        {
          move: "d4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2BPP1n1/2N2N1P/PPP2P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "exd4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b5/2BpP1n1/2N2N1P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Nd5",
          fen: "r3k2r/pppq1pp1/2np2bp/2bN4/2BpP1n1/5N1P/PPP2P2/R1BQR1K1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/pppq1pp1/2np2bp/2bN4/2BpP1n1/5N1P/PPP2P2/R1BQR1K1 w - - 2 14",
        },
        {
          move: "Bf1",
          fen: "2kr3r/pppq1pp1/2np2bp/2bN4/3pP1n1/5N1P/PPP2P2/R1BQRBK1 b - - 3 14",
        },
        {
          move: "Nge5",
          fen: "2kr3r/pppq1pp1/2np2bp/2bNn3/3pP3/5N1P/PPP2P2/R1BQRBK1 w - - 4 15",
        },
        {
          move: "Nxe5",
          fen: "2kr3r/pppq1pp1/2np2bp/2bNN3/3pP3/7P/PPP2P2/R1BQRBK1 b - - 0 15",
        },
        {
          move: "dxe5",
          fen: "2kr3r/pppq1pp1/2n3bp/2bNp3/3pP3/7P/PPP2P2/R1BQRBK1 w - - 0 16",
        },
        {
          move: "Bd2",
          fen: "2kr3r/pppq1pp1/2n3bp/2bNp3/3pP3/7P/PPPB1P2/R2QRBK1 b - - 1 16",
        },
        {
          move: "f5",
          fen: "2kr3r/pppq2p1/2n3bp/2bNpp2/3pP3/7P/PPPB1P2/R2QRBK1 w - - 0 17",
        },
        {
          move: "b4",
          fen: "2kr3r/pppq2p1/2n3bp/2bNpp2/1P1pP3/7P/P1PB1P2/R2QRBK1 b - - 0 17",
        },
        {
          move: "Bd6",
          fen: "2kr3r/pppq2p1/2nb2bp/3Npp2/1P1pP3/7P/P1PB1P2/R2QRBK1 w - - 1 18",
        },
        {
          move: "b5",
          fen: "2kr3r/pppq2p1/2nb2bp/1P1Npp2/3pP3/7P/P1PB1P2/R2QRBK1 b - - 0 18",
        },
        {
          move: "Nb8",
          fen: "1nkr3r/pppq2p1/3b2bp/1P1Npp2/3pP3/7P/P1PB1P2/R2QRBK1 w - - 1 19",
        },
        {
          move: "exf5",
          fen: "1nkr3r/pppq2p1/3b2bp/1P1NpP2/3p4/7P/P1PB1P2/R2QRBK1 b - - 0 19",
        },
        {
          move: "Qxf5",
          fen: "1nkr3r/ppp3p1/3b2bp/1P1Npq2/3p4/7P/P1PB1P2/R2QRBK1 w - - 0 20",
        },
      ],
    },
    {
      move: "h6",
      moveFen:
        "r3k2r/pppq1pp1/2np1nbp/2b1p1N1/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 11",
      evalBefore: "-1.77",
      evalAfter: "-1.36",
      bestMovesBefore: [
        {
          move: "h6",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p1N1/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 11",
        },
        {
          move: "Nf3",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p3/2B1P1P1/2NP1N1P/PPP2P2/R1BQR1K1 b kq - 1 11",
        },
        {
          move: "Nxg4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P1n1/2NP1N1P/PPP2P2/R1BQR1K1 w kq - 0 12",
        },
        {
          move: "d4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2BPP1n1/2N2N1P/PPP2P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "exd4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b5/2BpP1n1/2N2N1P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Nd5",
          fen: "r3k2r/pppq1pp1/2np2bp/2bN4/2BpP1n1/5N1P/PPP2P2/R1BQR1K1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/pppq1pp1/2np2bp/2bN4/2BpP1n1/5N1P/PPP2P2/R1BQR1K1 w - - 2 14",
        },
        {
          move: "Bf1",
          fen: "2kr3r/pppq1pp1/2np2bp/2bN4/3pP1n1/5N1P/PPP2P2/R1BQRBK1 b - - 3 14",
        },
        {
          move: "Nge5",
          fen: "2kr3r/pppq1pp1/2np2bp/2bNn3/3pP3/5N1P/PPP2P2/R1BQRBK1 w - - 4 15",
        },
        {
          move: "Nxe5",
          fen: "2kr3r/pppq1pp1/2np2bp/2bNN3/3pP3/7P/PPP2P2/R1BQRBK1 b - - 0 15",
        },
        {
          move: "dxe5",
          fen: "2kr3r/pppq1pp1/2n3bp/2bNp3/3pP3/7P/PPP2P2/R1BQRBK1 w - - 0 16",
        },
        {
          move: "Bd2",
          fen: "2kr3r/pppq1pp1/2n3bp/2bNp3/3pP3/7P/PPPB1P2/R2QRBK1 b - - 1 16",
        },
        {
          move: "f5",
          fen: "2kr3r/pppq2p1/2n3bp/2bNpp2/3pP3/7P/PPPB1P2/R2QRBK1 w - - 0 17",
        },
        {
          move: "b4",
          fen: "2kr3r/pppq2p1/2n3bp/2bNpp2/1P1pP3/7P/P1PB1P2/R2QRBK1 b - - 0 17",
        },
        {
          move: "Bd6",
          fen: "2kr3r/pppq2p1/2nb2bp/3Npp2/1P1pP3/7P/P1PB1P2/R2QRBK1 w - - 1 18",
        },
        {
          move: "b5",
          fen: "2kr3r/pppq2p1/2nb2bp/1P1Npp2/3pP3/7P/P1PB1P2/R2QRBK1 b - - 0 18",
        },
        {
          move: "Nb8",
          fen: "1nkr3r/pppq2p1/3b2bp/1P1Npp2/3pP3/7P/P1PB1P2/R2QRBK1 w - - 1 19",
        },
        {
          move: "exf5",
          fen: "1nkr3r/pppq2p1/3b2bp/1P1NpP2/3p4/7P/P1PB1P2/R2QRBK1 b - - 0 19",
        },
        {
          move: "Qxf5",
          fen: "1nkr3r/ppp3p1/3b2bp/1P1Npq2/3p4/7P/P1PB1P2/R2QRBK1 w - - 0 20",
        },
      ],
      bestMovesAfter: [
        {
          move: "Nf3",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p3/2B1P1P1/2NP1N1P/PPP2P2/R1BQR1K1 b kq - 1 11",
        },
        {
          move: "Nxg4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P1n1/2NP1N1P/PPP2P2/R1BQR1K1 w kq - 0 12",
        },
        {
          move: "Be3",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P1n1/2NPBN1P/PPP2P2/R2QR1K1 b kq - 1 12",
        },
        {
          move: "Nxe3",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P3/2NPnN1P/PPP2P2/R2QR1K1 w kq - 0 13",
        },
        {
          move: "fxe3",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P3/2NPPN1P/PPP5/R2QR1K1 b kq - 0 13",
        },
        {
          move: "Qxh3",
          fen: "r3k2r/ppp2pp1/2np2bp/2b1p3/2B1P3/2NPPN1q/PPP5/R2QR1K1 w kq - 0 14",
        },
        {
          move: "Kf2",
          fen: "r3k2r/ppp2pp1/2np2bp/2b1p3/2B1P3/2NPPN1q/PPP2K2/R2QR3 b kq - 1 14",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2pp1/2np2bp/2b1p3/2B1P3/2NPPN1q/PPP2K2/R2QR3 w - - 2 15",
        },
        {
          move: "a3",
          fen: "2kr3r/ppp2pp1/2np2bp/2b1p3/2B1P3/P1NPPN1q/1PP2K2/R2QR3 b - - 0 15",
        },
        {
          move: "Nd4",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPN1q/1PP2K2/R2QR3 w - - 1 16",
        },
        {
          move: "Rh1",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPN1q/1PP2K2/R2Q3R b - - 2 16",
        },
        {
          move: "Qxf3+",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPq2/1PP2K2/R2Q3R w - - 0 17",
        },
        {
          move: "Qxf3",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPQ2/1PP2K2/R6R b - - 0 17",
        },
        {
          move: "Nxf3",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2B1P3/P1NPPn2/1PP2K2/R6R w - - 0 18",
        },
      ],
    },
    {
      move: "Nxf7",
      moveFen:
        "r3k2r/pppq1Np1/2np1nbp/2b1p3/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 0 11",
      evalBefore: "-1.36",
      evalAfter: "-2.68",
      bestMovesBefore: [
        {
          move: "Nf3",
          fen: "r3k2r/pppq1pp1/2np1nbp/2b1p3/2B1P1P1/2NP1N1P/PPP2P2/R1BQR1K1 b kq - 1 11",
        },
        {
          move: "Nxg4",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P1n1/2NP1N1P/PPP2P2/R1BQR1K1 w kq - 0 12",
        },
        {
          move: "Be3",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P1n1/2NPBN1P/PPP2P2/R2QR1K1 b kq - 1 12",
        },
        {
          move: "Nxe3",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P3/2NPnN1P/PPP2P2/R2QR1K1 w kq - 0 13",
        },
        {
          move: "fxe3",
          fen: "r3k2r/pppq1pp1/2np2bp/2b1p3/2B1P3/2NPPN1P/PPP5/R2QR1K1 b kq - 0 13",
        },
        {
          move: "Qxh3",
          fen: "r3k2r/ppp2pp1/2np2bp/2b1p3/2B1P3/2NPPN1q/PPP5/R2QR1K1 w kq - 0 14",
        },
        {
          move: "Kf2",
          fen: "r3k2r/ppp2pp1/2np2bp/2b1p3/2B1P3/2NPPN1q/PPP2K2/R2QR3 b kq - 1 14",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2pp1/2np2bp/2b1p3/2B1P3/2NPPN1q/PPP2K2/R2QR3 w - - 2 15",
        },
        {
          move: "a3",
          fen: "2kr3r/ppp2pp1/2np2bp/2b1p3/2B1P3/P1NPPN1q/1PP2K2/R2QR3 b - - 0 15",
        },
        {
          move: "Nd4",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPN1q/1PP2K2/R2QR3 w - - 1 16",
        },
        {
          move: "Rh1",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPN1q/1PP2K2/R2Q3R b - - 2 16",
        },
        {
          move: "Qxf3+",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPq2/1PP2K2/R2Q3R w - - 0 17",
        },
        {
          move: "Qxf3",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2BnP3/P1NPPQ2/1PP2K2/R6R b - - 0 17",
        },
        {
          move: "Nxf3",
          fen: "2kr3r/ppp2pp1/3p2bp/2b1p3/2B1P3/P1NPPn2/1PP2K2/R6R w - - 0 18",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf7",
          fen: "r3k2r/pppq1bp1/2np1n1p/2b1p3/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 12",
        },
        {
          move: "Bxf7+",
          fen: "r3k2r/pppq1Bp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "Qxf7",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Rf1",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 w - - 2 14",
        },
        {
          move: "Kg2",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 b - - 3 14",
        },
        {
          move: "g5",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 w - - 0 15",
        },
        {
          move: "Na4",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/3P3P/PPP2PK1/R1BQ1R2 b - - 1 15",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/3P3P/PPP2PK1/R1BQ1R2 w - - 2 16",
        },
        {
          move: "Nxc5",
          fen: "2kr1r2/ppp2q2/2np1n1p/2N1p1p1/4P1P1/3P3P/PPP2PK1/R1BQ1R2 b - - 0 16",
        },
        {
          move: "dxc5",
          fen: "2kr1r2/ppp2q2/2n2n1p/2p1p1p1/4P1P1/3P3P/PPP2PK1/R1BQ1R2 w - - 0 17",
        },
        {
          move: "f3",
          fen: "2kr1r2/ppp2q2/2n2n1p/2p1p1p1/4P1P1/3P1P1P/PPP3K1/R1BQ1R2 b - - 0 17",
        },
      ],
    },
    {
      move: "Bxf7",
      moveFen:
        "r3k2r/pppq1bp1/2np1n1p/2b1p3/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 12",
      evalBefore: "-2.68",
      evalAfter: "-2.62",
      bestMovesBefore: [
        {
          move: "Bxf7",
          fen: "r3k2r/pppq1bp1/2np1n1p/2b1p3/2B1P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 12",
        },
        {
          move: "Bxf7+",
          fen: "r3k2r/pppq1Bp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "Qxf7",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Rf1",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 w - - 2 14",
        },
        {
          move: "Kg2",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 b - - 3 14",
        },
        {
          move: "g5",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 w - - 0 15",
        },
        {
          move: "Na4",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/3P3P/PPP2PK1/R1BQ1R2 b - - 1 15",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/3P3P/PPP2PK1/R1BQ1R2 w - - 2 16",
        },
        {
          move: "Nxc5",
          fen: "2kr1r2/ppp2q2/2np1n1p/2N1p1p1/4P1P1/3P3P/PPP2PK1/R1BQ1R2 b - - 0 16",
        },
        {
          move: "dxc5",
          fen: "2kr1r2/ppp2q2/2n2n1p/2p1p1p1/4P1P1/3P3P/PPP2PK1/R1BQ1R2 w - - 0 17",
        },
        {
          move: "f3",
          fen: "2kr1r2/ppp2q2/2n2n1p/2p1p1p1/4P1P1/3P1P1P/PPP3K1/R1BQ1R2 b - - 0 17",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf7+",
          fen: "r3k2r/pppq1Bp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "Qxf7",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Rf1",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 w - - 2 14",
        },
        {
          move: "Kg2",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 b - - 3 14",
        },
        {
          move: "g5",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 w - - 0 15",
        },
        {
          move: "a3",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/4P1P1/P1NP3P/1PP2PK1/R1BQ1R2 b - - 0 15",
        },
        {
          move: "Nd4",
          fen: "2kr3r/ppp2q2/3p1n1p/2b1p1p1/3nP1P1/P1NP3P/1PP2PK1/R1BQ1R2 w - - 1 16",
        },
        {
          move: "f3",
          fen: "2kr3r/ppp2q2/3p1n1p/2b1p1p1/3nP1P1/P1NP1P1P/1PP3K1/R1BQ1R2 b - - 0 16",
        },
      ],
    },
    {
      move: "Bxf7+",
      moveFen:
        "r3k2r/pppq1Bp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 0 12",
      evalBefore: "-2.62",
      evalAfter: "-2.64",
      bestMovesBefore: [
        {
          move: "Bxf7+",
          fen: "r3k2r/pppq1Bp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 b kq - 0 12",
        },
        {
          move: "Qxf7",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Rf1",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 w - - 2 14",
        },
        {
          move: "Kg2",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 b - - 3 14",
        },
        {
          move: "g5",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/4P1P1/2NP3P/PPP2PK1/R1BQ1R2 w - - 0 15",
        },
        {
          move: "a3",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/4P1P1/P1NP3P/1PP2PK1/R1BQ1R2 b - - 0 15",
        },
        {
          move: "Nd4",
          fen: "2kr3r/ppp2q2/3p1n1p/2b1p1p1/3nP1P1/P1NP3P/1PP2PK1/R1BQ1R2 w - - 1 16",
        },
        {
          move: "f3",
          fen: "2kr3r/ppp2q2/3p1n1p/2b1p1p1/3nP1P1/P1NP1P1P/1PP3K1/R1BQ1R2 b - - 0 16",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qxf7",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Rf1",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 w - - 2 14",
        },
        {
          move: "Na4",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/N3P1P1/3P3P/PPP2P2/R1BQ1RK1 b - - 3 14",
        },
        {
          move: "g5",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/3P3P/PPP2P2/R1BQ1RK1 w - - 0 15",
        },
        {
          move: "c3",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/2PP3P/PP3P2/R1BQ1RK1 b - - 0 15",
        },
        {
          move: "a6",
          fen: "2kr3r/1pp2q2/p1np1n1p/2b1p1p1/N3P1P1/2PP3P/PP3P2/R1BQ1RK1 w - - 0 16",
        },
        {
          move: "b4",
          fen: "2kr3r/1pp2q2/p1np1n1p/2b1p1p1/NP2P1P1/2PP3P/P4P2/R1BQ1RK1 b - - 0 16",
        },
        {
          move: "Ba7",
          fen: "2kr3r/bpp2q2/p1np1n1p/4p1p1/NP2P1P1/2PP3P/P4P2/R1BQ1RK1 w - - 1 17",
        },
        {
          move: "Be3",
          fen: "2kr3r/bpp2q2/p1np1n1p/4p1p1/NP2P1P1/2PPB2P/P4P2/R2Q1RK1 b - - 2 17",
        },
        {
          move: "h5",
          fen: "2kr3r/bpp2q2/p1np1n2/4p1pp/NP2P1P1/2PPB2P/P4P2/R2Q1RK1 w - - 0 18",
        },
        {
          move: "Qb3",
          fen: "2kr3r/bpp2q2/p1np1n2/4p1pp/NP2P1P1/1QPPB2P/P4P2/R4RK1 b - - 1 18",
        },
        {
          move: "Qxb3",
          fen: "2kr3r/bpp5/p1np1n2/4p1pp/NP2P1P1/1qPPB2P/P4P2/R4RK1 w - - 0 19",
        },
        {
          move: "axb3",
          fen: "2kr3r/bpp5/p1np1n2/4p1pp/NP2P1P1/1PPPB2P/5P2/R4RK1 b - - 0 19",
        },
        {
          move: "hxg4",
          fen: "2kr3r/bpp5/p1np1n2/4p1p1/NP2P1p1/1PPPB2P/5P2/R4RK1 w - - 0 20",
        },
        {
          move: "Bxg5",
          fen: "2kr3r/bpp5/p1np1n2/4p1B1/NP2P1p1/1PPP3P/5P2/R4RK1 b - - 0 20",
        },
      ],
    },
    {
      move: "Qxf7",
      moveFen:
        "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 13",
      evalBefore: "-2.64",
      evalAfter: "-2.64",
      bestMovesBefore: [
        {
          move: "Qxf7",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQR1K1 w kq - 0 13",
        },
        {
          move: "Rf1",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NP3P/PPP2P2/R1BQ1RK1 w - - 2 14",
        },
        {
          move: "Na4",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/N3P1P1/3P3P/PPP2P2/R1BQ1RK1 b - - 3 14",
        },
        {
          move: "g5",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/3P3P/PPP2P2/R1BQ1RK1 w - - 0 15",
        },
        {
          move: "c3",
          fen: "2kr3r/ppp2q2/2np1n1p/2b1p1p1/N3P1P1/2PP3P/PP3P2/R1BQ1RK1 b - - 0 15",
        },
        {
          move: "a6",
          fen: "2kr3r/1pp2q2/p1np1n1p/2b1p1p1/N3P1P1/2PP3P/PP3P2/R1BQ1RK1 w - - 0 16",
        },
        {
          move: "b4",
          fen: "2kr3r/1pp2q2/p1np1n1p/2b1p1p1/NP2P1P1/2PP3P/P4P2/R1BQ1RK1 b - - 0 16",
        },
        {
          move: "Ba7",
          fen: "2kr3r/bpp2q2/p1np1n1p/4p1p1/NP2P1P1/2PP3P/P4P2/R1BQ1RK1 w - - 1 17",
        },
        {
          move: "Be3",
          fen: "2kr3r/bpp2q2/p1np1n1p/4p1p1/NP2P1P1/2PPB2P/P4P2/R2Q1RK1 b - - 2 17",
        },
        {
          move: "h5",
          fen: "2kr3r/bpp2q2/p1np1n2/4p1pp/NP2P1P1/2PPB2P/P4P2/R2Q1RK1 w - - 0 18",
        },
        {
          move: "Qb3",
          fen: "2kr3r/bpp2q2/p1np1n2/4p1pp/NP2P1P1/1QPPB2P/P4P2/R4RK1 b - - 1 18",
        },
        {
          move: "Qxb3",
          fen: "2kr3r/bpp5/p1np1n2/4p1pp/NP2P1P1/1qPPB2P/P4P2/R4RK1 w - - 0 19",
        },
        {
          move: "axb3",
          fen: "2kr3r/bpp5/p1np1n2/4p1pp/NP2P1P1/1PPPB2P/5P2/R4RK1 b - - 0 19",
        },
        {
          move: "hxg4",
          fen: "2kr3r/bpp5/p1np1n2/4p1p1/NP2P1p1/1PPPB2P/5P2/R4RK1 w - - 0 20",
        },
        {
          move: "Bxg5",
          fen: "2kr3r/bpp5/p1np1n2/4p1B1/NP2P1p1/1PPP3P/5P2/R4RK1 b - - 0 20",
        },
      ],
      bestMovesAfter: [
        {
          move: "Be3",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPB2P/PPP2P2/R2QR1K1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPB2P/PPP2P2/R2QR1K1 w - - 2 14",
        },
        {
          move: "Qf3",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPBQ1P/PPP2P2/R3R1K1 b - - 3 14",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPBQ1P/PPP2P2/R3R1K1 w - - 4 15",
        },
        {
          move: "Ne2",
          fen: "2kr1r2/ppp2qp1/2np1n1p/2b1p3/4P1P1/3PBQ1P/PPP1NP2/R3R1K1 b - - 5 15",
        },
        {
          move: "Nb4",
          fen: "2kr1r2/ppp2qp1/3p1n1p/2b1p3/1n2P1P1/3PBQ1P/PPP1NP2/R3R1K1 w - - 6 16",
        },
        {
          move: "Rec1",
          fen: "2kr1r2/ppp2qp1/3p1n1p/2b1p3/1n2P1P1/3PBQ1P/PPP1NP2/R1R3K1 b - - 7 16",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/ppp2qp1/3p1n1p/4p3/1n2P1P1/3PbQ1P/PPP1NP2/R1R3K1 w - - 0 17",
        },
        {
          move: "fxe3",
          fen: "2kr1r2/ppp2qp1/3p1n1p/4p3/1n2P1P1/3PPQ1P/PPP1N3/R1R3K1 b - - 0 17",
        },
        {
          move: "Nc6",
          fen: "2kr1r2/ppp2qp1/2np1n1p/4p3/4P1P1/3PPQ1P/PPP1N3/R1R3K1 w - - 1 18",
        },
      ],
    },
    {
      move: "Nd5",
      moveFen:
        "r3k2r/ppp2qp1/2np1n1p/2bNp3/4P1P1/3P3P/PPP2P2/R1BQR1K1 b kq - 1 13",
      evalBefore: "-2.64",
      evalAfter: "-5.60",
      bestMovesBefore: [
        {
          move: "Be3",
          fen: "r3k2r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPB2P/PPP2P2/R2QR1K1 b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPB2P/PPP2P2/R2QR1K1 w - - 2 14",
        },
        {
          move: "Qf3",
          fen: "2kr3r/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPBQ1P/PPP2P2/R3R1K1 b - - 3 14",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/ppp2qp1/2np1n1p/2b1p3/4P1P1/2NPBQ1P/PPP2P2/R3R1K1 w - - 4 15",
        },
        {
          move: "Ne2",
          fen: "2kr1r2/ppp2qp1/2np1n1p/2b1p3/4P1P1/3PBQ1P/PPP1NP2/R3R1K1 b - - 5 15",
        },
        {
          move: "Nb4",
          fen: "2kr1r2/ppp2qp1/3p1n1p/2b1p3/1n2P1P1/3PBQ1P/PPP1NP2/R3R1K1 w - - 6 16",
        },
        {
          move: "Rec1",
          fen: "2kr1r2/ppp2qp1/3p1n1p/2b1p3/1n2P1P1/3PBQ1P/PPP1NP2/R1R3K1 b - - 7 16",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/ppp2qp1/3p1n1p/4p3/1n2P1P1/3PbQ1P/PPP1NP2/R1R3K1 w - - 0 17",
        },
        {
          move: "fxe3",
          fen: "2kr1r2/ppp2qp1/3p1n1p/4p3/1n2P1P1/3PPQ1P/PPP1N3/R1R3K1 b - - 0 17",
        },
        {
          move: "Nc6",
          fen: "2kr1r2/ppp2qp1/2np1n1p/4p3/4P1P1/3PPQ1P/PPP1N3/R1R3K1 w - - 1 18",
        },
      ],
      bestMovesAfter: [
        {
          move: "Nxd5",
          fen: "r3k2r/ppp2qp1/2np3p/2bnp3/4P1P1/3P3P/PPP2P2/R1BQR1K1 w kq - 0 14",
        },
        {
          move: "Be3",
          fen: "r3k2r/ppp2qp1/2np3p/2bnp3/4P1P1/3PB2P/PPP2P2/R2QR1K1 b kq - 1 14",
        },
        {
          move: "Nf4",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PB2P/PPP2P2/R2QR1K1 w kq - 2 15",
        },
        {
          move: "Kh2",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PB2P/PPP2P1K/R2QR3 b kq - 3 15",
        },
        {
          move: "h5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p2p/4PnP1/3PB2P/PPP2P1K/R2QR3 w kq - 0 16",
        },
        {
          move: "g5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PB2P/PPP2P1K/R2QR3 b kq - 0 16",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PB2P/PPP2P1K/R2QR3 w - - 1 17",
        },
        {
          move: "Qf3",
          fen: "2kr3r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P1K/R3R3 b - - 2 17",
        },
        {
          move: "Nd4",
          fen: "2kr3r/ppp2qp1/3p4/2b1p1Pp/3nPn2/3PBQ1P/PPP2P1K/R3R3 w - - 3 18",
        },
        {
          move: "Bxd4",
          fen: "2kr3r/ppp2qp1/3p4/2b1p1Pp/3BPn2/3P1Q1P/PPP2P1K/R3R3 b - - 0 18",
        },
        {
          move: "Bxd4",
          fen: "2kr3r/ppp2qp1/3p4/4p1Pp/3bPn2/3P1Q1P/PPP2P1K/R3R3 w - - 0 19",
        },
        {
          move: "c3",
          fen: "2kr3r/ppp2qp1/3p4/4p1Pp/3bPn2/2PP1Q1P/PP3P1K/R3R3 b - - 0 19",
        },
        {
          move: "Bb6",
          fen: "2kr3r/ppp2qp1/1b1p4/4p1Pp/4Pn2/2PP1Q1P/PP3P1K/R3R3 w - - 1 20",
        },
        {
          move: "a3",
          fen: "2kr3r/ppp2qp1/1b1p4/4p1Pp/4Pn2/P1PP1Q1P/1P3P1K/R3R3 b - - 0 20",
        },
      ],
    },
    {
      move: "Nxd5",
      moveFen:
        "r3k2r/ppp2qp1/2np3p/2bnp3/4P1P1/3P3P/PPP2P2/R1BQR1K1 w kq - 0 14",
      evalBefore: "-5.60",
      evalAfter: "-5.78",
      bestMovesBefore: [
        {
          move: "Nxd5",
          fen: "r3k2r/ppp2qp1/2np3p/2bnp3/4P1P1/3P3P/PPP2P2/R1BQR1K1 w kq - 0 14",
        },
        {
          move: "Be3",
          fen: "r3k2r/ppp2qp1/2np3p/2bnp3/4P1P1/3PB2P/PPP2P2/R2QR1K1 b kq - 1 14",
        },
        {
          move: "Nf4",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PB2P/PPP2P2/R2QR1K1 w kq - 2 15",
        },
        {
          move: "Kh2",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PB2P/PPP2P1K/R2QR3 b kq - 3 15",
        },
        {
          move: "h5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p2p/4PnP1/3PB2P/PPP2P1K/R2QR3 w kq - 0 16",
        },
        {
          move: "g5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PB2P/PPP2P1K/R2QR3 b kq - 0 16",
        },
        {
          move: "O-O-O",
          fen: "2kr3r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PB2P/PPP2P1K/R2QR3 w - - 1 17",
        },
        {
          move: "Qf3",
          fen: "2kr3r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P1K/R3R3 b - - 2 17",
        },
        {
          move: "Nd4",
          fen: "2kr3r/ppp2qp1/3p4/2b1p1Pp/3nPn2/3PBQ1P/PPP2P1K/R3R3 w - - 3 18",
        },
        {
          move: "Bxd4",
          fen: "2kr3r/ppp2qp1/3p4/2b1p1Pp/3BPn2/3P1Q1P/PPP2P1K/R3R3 b - - 0 18",
        },
        {
          move: "Bxd4",
          fen: "2kr3r/ppp2qp1/3p4/4p1Pp/3bPn2/3P1Q1P/PPP2P1K/R3R3 w - - 0 19",
        },
        {
          move: "c3",
          fen: "2kr3r/ppp2qp1/3p4/4p1Pp/3bPn2/2PP1Q1P/PP3P1K/R3R3 b - - 0 19",
        },
        {
          move: "Bb6",
          fen: "2kr3r/ppp2qp1/1b1p4/4p1Pp/4Pn2/2PP1Q1P/PP3P1K/R3R3 w - - 1 20",
        },
        {
          move: "a3",
          fen: "2kr3r/ppp2qp1/1b1p4/4p1Pp/4Pn2/P1PP1Q1P/1P3P1K/R3R3 b - - 0 20",
        },
      ],
      bestMovesAfter: [
        {
          move: "Be3",
          fen: "r3k2r/ppp2qp1/2np3p/2bnp3/4P1P1/3PB2P/PPP2P2/R2QR1K1 b kq - 1 14",
        },
        {
          move: "Nf4",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PB2P/PPP2P2/R2QR1K1 w kq - 2 15",
        },
        {
          move: "Qf3",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PBQ1P/PPP2P2/R3R1K1 b kq - 3 15",
        },
        {
          move: "h5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p2p/4PnP1/3PBQ1P/PPP2P2/R3R1K1 w kq - 0 16",
        },
        {
          move: "g5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P2/R3R1K1 b kq - 0 16",
        },
        {
          move: "O-O",
          fen: "r4rk1/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P2/R3R1K1 w - - 1 17",
        },
        {
          move: "Rf1",
          fen: "r4rk1/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P2/R4RK1 b - - 2 17",
        },
        {
          move: "Nd4",
          fen: "r4rk1/ppp2qp1/3p4/2b1p1Pp/3nPn2/3PBQ1P/PPP2P2/R4RK1 w - - 3 18",
        },
        {
          move: "Bxd4",
          fen: "r4rk1/ppp2qp1/3p4/2b1p1Pp/3BPn2/3P1Q1P/PPP2P2/R4RK1 b - - 0 18",
        },
      ],
    },
    {
      move: "exd5",
      moveFen: "r3k2r/ppp2qp1/2np3p/2bPp3/6P1/3P3P/PPP2P2/R1BQR1K1 b kq - 0 14",
      evalBefore: "-5.78",
      evalAfter: "-6.51",
      bestMovesBefore: [
        {
          move: "Be3",
          fen: "r3k2r/ppp2qp1/2np3p/2bnp3/4P1P1/3PB2P/PPP2P2/R2QR1K1 b kq - 1 14",
        },
        {
          move: "Nf4",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PB2P/PPP2P2/R2QR1K1 w kq - 2 15",
        },
        {
          move: "Qf3",
          fen: "r3k2r/ppp2qp1/2np3p/2b1p3/4PnP1/3PBQ1P/PPP2P2/R3R1K1 b kq - 3 15",
        },
        {
          move: "h5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p2p/4PnP1/3PBQ1P/PPP2P2/R3R1K1 w kq - 0 16",
        },
        {
          move: "g5",
          fen: "r3k2r/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P2/R3R1K1 b kq - 0 16",
        },
        {
          move: "O-O",
          fen: "r4rk1/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P2/R3R1K1 w - - 1 17",
        },
        {
          move: "Rf1",
          fen: "r4rk1/ppp2qp1/2np4/2b1p1Pp/4Pn2/3PBQ1P/PPP2P2/R4RK1 b - - 2 17",
        },
        {
          move: "Nd4",
          fen: "r4rk1/ppp2qp1/3p4/2b1p1Pp/3nPn2/3PBQ1P/PPP2P2/R4RK1 w - - 3 18",
        },
        {
          move: "Bxd4",
          fen: "r4rk1/ppp2qp1/3p4/2b1p1Pp/3BPn2/3P1Q1P/PPP2P2/R4RK1 b - - 0 18",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qxf2+",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR1K1 w kq - 0 15",
        },
        {
          move: "Kh1",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR2K b kq - 1 15",
        },
        {
          move: "Qh4",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP5/R1BQR2K w kq - 2 16",
        },
        {
          move: "Re2",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP1R3/R1BQ3K b kq - 3 16",
        },
        {
          move: "Nd4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP1R3/R1BQ3K w kq - 4 17",
        },
        {
          move: "Rh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP4R/R1BQ3K b kq - 5 17",
        },
        {
          move: "Nf3",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P1n1P/PPP4R/R1BQ3K w kq - 6 18",
        },
        {
          move: "Bf4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P1n1P/PPP4R/R2Q3K b kq - 7 18",
        },
        {
          move: "Nxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P3P/PPP4n/R2Q3K w kq - 0 19",
        },
        {
          move: "Bxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K b kq - 0 19",
        },
        {
          move: "O-O",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K w - - 1 20",
        },
        {
          move: "d4",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2Pq/7P/PPP4B/R2Q3K b - - 0 20",
        },
        {
          move: "Qxh3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/7q/PPP4B/R2Q3K w - - 0 21",
        },
        {
          move: "Qd3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/3Q3q/PPP4B/R6K b - - 1 21",
        },
        {
          move: "Qxd3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/3q4/PPP4B/R6K w - - 0 22",
        },
        {
          move: "cxd3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/3P4/PP5B/R6K b - - 0 22",
        },
        {
          move: "Bxd4",
          fen: "r4rk1/ppp3p1/3p3p/3Pp3/3b2P1/3P4/PP5B/R6K w - - 0 23",
        },
      ],
    },
    {
      move: "Qxf2+",
      moveFen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR1K1 w kq - 0 15",
      evalBefore: "-6.51",
      evalAfter: "-6.42",
      bestMovesBefore: [
        {
          move: "Qxf2+",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR1K1 w kq - 0 15",
        },
        {
          move: "Kh1",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR2K b kq - 1 15",
        },
        {
          move: "Qh4",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP5/R1BQR2K w kq - 2 16",
        },
        {
          move: "Re2",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP1R3/R1BQ3K b kq - 3 16",
        },
        {
          move: "Nd4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP1R3/R1BQ3K w kq - 4 17",
        },
        {
          move: "Rh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP4R/R1BQ3K b kq - 5 17",
        },
        {
          move: "Nf3",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P1n1P/PPP4R/R1BQ3K w kq - 6 18",
        },
        {
          move: "Bf4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P1n1P/PPP4R/R2Q3K b kq - 7 18",
        },
        {
          move: "Nxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P3P/PPP4n/R2Q3K w kq - 0 19",
        },
        {
          move: "Bxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K b kq - 0 19",
        },
        {
          move: "O-O",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K w - - 1 20",
        },
        {
          move: "d4",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2Pq/7P/PPP4B/R2Q3K b - - 0 20",
        },
        {
          move: "Qxh3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/7q/PPP4B/R2Q3K w - - 0 21",
        },
        {
          move: "Qd3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/3Q3q/PPP4B/R6K b - - 1 21",
        },
        {
          move: "Qxd3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/3q4/PPP4B/R6K w - - 0 22",
        },
        {
          move: "cxd3",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/3P2P1/3P4/PP5B/R6K b - - 0 22",
        },
        {
          move: "Bxd4",
          fen: "r4rk1/ppp3p1/3p3p/3Pp3/3b2P1/3P4/PP5B/R6K w - - 0 23",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kh1",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR2K b kq - 1 15",
        },
        {
          move: "Qh4",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP5/R1BQR2K w kq - 2 16",
        },
        {
          move: "Re2",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP1R3/R1BQ3K b kq - 3 16",
        },
        {
          move: "Nd4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP1R3/R1BQ3K w kq - 4 17",
        },
        {
          move: "Rh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP4R/R1BQ3K b kq - 5 17",
        },
        {
          move: "Nf3",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P1n1P/PPP4R/R1BQ3K w kq - 6 18",
        },
        {
          move: "Bf4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P1n1P/PPP4R/R2Q3K b kq - 7 18",
        },
        {
          move: "Nxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P3P/PPP4n/R2Q3K w kq - 0 19",
        },
        {
          move: "Bxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K b kq - 0 19",
        },
        {
          move: "Rf8",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K w q - 1 20",
        },
        {
          move: "d4",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2Pq/7P/PPP4B/R2Q3K b q - 0 20",
        },
        {
          move: "Qxh3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/7q/PPP4B/R2Q3K w q - 0 21",
        },
        {
          move: "Qd3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/3Q3q/PPP4B/R6K b q - 1 21",
        },
        {
          move: "Qxd3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/3q4/PPP4B/R6K w q - 0 22",
        },
        {
          move: "cxd3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/3P4/PP5B/R6K b q - 0 22",
        },
      ],
    },
    {
      move: "Kh1",
      moveFen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR2K b kq - 1 15",
      evalBefore: "-6.42",
      evalAfter: "-6.84",
      bestMovesBefore: [
        {
          move: "Kh1",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR2K b kq - 1 15",
        },
        {
          move: "Qh4",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP5/R1BQR2K w kq - 2 16",
        },
        {
          move: "Re2",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP1R3/R1BQ3K b kq - 3 16",
        },
        {
          move: "Nd4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP1R3/R1BQ3K w kq - 4 17",
        },
        {
          move: "Rh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP4R/R1BQ3K b kq - 5 17",
        },
        {
          move: "Nf3",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P1n1P/PPP4R/R1BQ3K w kq - 6 18",
        },
        {
          move: "Bf4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P1n1P/PPP4R/R2Q3K b kq - 7 18",
        },
        {
          move: "Nxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P3P/PPP4n/R2Q3K w kq - 0 19",
        },
        {
          move: "Bxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K b kq - 0 19",
        },
        {
          move: "Rf8",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K w q - 1 20",
        },
        {
          move: "d4",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2Pq/7P/PPP4B/R2Q3K b q - 0 20",
        },
        {
          move: "Qxh3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/7q/PPP4B/R2Q3K w q - 0 21",
        },
        {
          move: "Qd3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/3Q3q/PPP4B/R6K b q - 1 21",
        },
        {
          move: "Qxd3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/3q4/PPP4B/R6K w q - 0 22",
        },
        {
          move: "cxd3",
          fen: "r3kr2/ppp3p1/3p3p/2bPp3/3P2P1/3P4/PP5B/R6K b q - 0 22",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qh4",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP5/R1BQR2K w kq - 2 16",
        },
        {
          move: "Re2",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP1R3/R1BQ3K b kq - 3 16",
        },
        {
          move: "Nd4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP1R3/R1BQ3K w kq - 4 17",
        },
        {
          move: "Rh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP4R/R1BQ3K b kq - 5 17",
        },
        {
          move: "Nf3",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P1n1P/PPP4R/R1BQ3K w kq - 6 18",
        },
        {
          move: "Bf4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P1n1P/PPP4R/R2Q3K b kq - 7 18",
        },
        {
          move: "Nxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P3P/PPP4n/R2Q3K w kq - 0 19",
        },
        {
          move: "Bxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K b kq - 0 19",
        },
        {
          move: "O-O",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K w - - 1 20",
        },
        {
          move: "Qe2",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP1Q2B/R6K b - - 2 20",
        },
        {
          move: "Rf2",
          fen: "r5k1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP1Qr1B/R6K w - - 3 21",
        },
        {
          move: "Qxf2",
          fen: "r5k1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP2Q1B/R6K b - - 0 21",
        },
        {
          move: "Qxf2",
          fen: "r5k1/ppp3p1/3p3p/2bPp3/6P1/3P3P/PPP2q1B/R6K w - - 0 22",
        },
        {
          move: "Bxe5",
          fen: "r5k1/ppp3p1/3p3p/2bPB3/6P1/3P3P/PPP2q2/R6K b - - 0 22",
        },
        {
          move: "Qe3",
          fen: "r5k1/ppp3p1/3p3p/2bPB3/6P1/3Pq2P/PPP5/R6K w - - 1 23",
        },
      ],
    },
    {
      move: "O-O-O",
      moveFen: "2kr3r/ppp3p1/2np3p/2bPp3/6P1/3P3P/PPP2q2/R1BQR2K w - - 2 16",
      evalBefore: "-6.84",
      evalAfter: "-3.96",
      bestMovesBefore: [
        {
          move: "Qh4",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP5/R1BQR2K w kq - 2 16",
        },
        {
          move: "Re2",
          fen: "r3k2r/ppp3p1/2np3p/2bPp3/6Pq/3P3P/PPP1R3/R1BQ3K b kq - 3 16",
        },
        {
          move: "Nd4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP1R3/R1BQ3K w kq - 4 17",
        },
        {
          move: "Rh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/3n2Pq/3P3P/PPP4R/R1BQ3K b kq - 5 17",
        },
        {
          move: "Nf3",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P1n1P/PPP4R/R1BQ3K w kq - 6 18",
        },
        {
          move: "Bf4",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P1n1P/PPP4R/R2Q3K b kq - 7 18",
        },
        {
          move: "Nxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/5BPq/3P3P/PPP4n/R2Q3K w kq - 0 19",
        },
        {
          move: "Bxh2",
          fen: "r3k2r/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K b kq - 0 19",
        },
        {
          move: "O-O",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP4B/R2Q3K w - - 1 20",
        },
        {
          move: "Qe2",
          fen: "r4rk1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP1Q2B/R6K b - - 2 20",
        },
        {
          move: "Rf2",
          fen: "r5k1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP1Qr1B/R6K w - - 3 21",
        },
        {
          move: "Qxf2",
          fen: "r5k1/ppp3p1/3p3p/2bPp3/6Pq/3P3P/PPP2Q1B/R6K b - - 0 21",
        },
        {
          move: "Qxf2",
          fen: "r5k1/ppp3p1/3p3p/2bPp3/6P1/3P3P/PPP2q1B/R6K w - - 0 22",
        },
        {
          move: "Bxe5",
          fen: "r5k1/ppp3p1/3p3p/2bPB3/6P1/3P3P/PPP2q2/R6K b - - 0 22",
        },
        {
          move: "Qe3",
          fen: "r5k1/ppp3p1/3p3p/2bPB3/6P1/3Pq2P/PPP5/R6K w - - 1 23",
        },
      ],
      bestMovesAfter: [
        {
          move: "dxc6",
          fen: "2kr3r/ppp3p1/2Pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K b - - 0 16",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/ppp3p1/2Pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 17",
        },
        {
          move: "cxb7+",
          fen: "2k2r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K b - - 0 17",
        },
        {
          move: "Kb8",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 18",
        },
        {
          move: "Be3",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PB2P/PPP2q2/R2QR2K b - - 2 18",
        },
        {
          move: "Bxe3",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pb2P/PPP2q2/R2QR2K w - - 0 19",
        },
        {
          move: "Qe2",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pb2P/PPP1Qq2/R3R2K b - - 1 19",
        },
        {
          move: "Bb6",
          fen: "1k3r1r/pPp3p1/1b1p3p/4p3/6P1/3P3P/PPP1Qq2/R3R2K w - - 2 20",
        },
        {
          move: "Qxf2",
          fen: "1k3r1r/pPp3p1/1b1p3p/4p3/6P1/3P3P/PPP2Q2/R3R2K b - - 0 20",
        },
        {
          move: "Rxf2",
          fen: "1k5r/pPp3p1/1b1p3p/4p3/6P1/3P3P/PPP2r2/R3R2K w - - 0 21",
        },
        {
          move: "a4",
          fen: "1k5r/pPp3p1/1b1p3p/4p3/P5P1/3P3P/1PP2r2/R3R2K b - - 0 21",
        },
        {
          move: "a5",
          fen: "1k5r/1Pp3p1/1b1p3p/p3p3/P5P1/3P3P/1PP2r2/R3R2K w - - 0 22",
        },
        {
          move: "c3",
          fen: "1k5r/1Pp3p1/1b1p3p/p3p3/P5P1/2PP3P/1P3r2/R3R2K b - - 0 22",
        },
        {
          move: "Kxb7",
          fen: "7r/1kp3p1/1b1p3p/p3p3/P5P1/2PP3P/1P3r2/R3R2K w - - 0 23",
        },
        {
          move: "b4",
          fen: "7r/1kp3p1/1b1p3p/p3p3/PP4P1/2PP3P/5r2/R3R2K b - - 0 23",
        },
        {
          move: "axb4",
          fen: "7r/1kp3p1/1b1p3p/4p3/Pp4P1/2PP3P/5r2/R3R2K w - - 0 24",
        },
        {
          move: "cxb4",
          fen: "7r/1kp3p1/1b1p3p/4p3/PP4P1/3P3P/5r2/R3R2K b - - 0 24",
        },
        {
          move: "Bd4",
          fen: "7r/1kp3p1/3p3p/4p3/PP1b2P1/3P3P/5r2/R3R2K w - - 1 25",
        },
      ],
    },
    {
      move: "dxc6",
      moveFen: "2kr3r/ppp3p1/2Pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K b - - 0 16",
      evalBefore: "-3.96",
      evalAfter: "-3.99",
      bestMovesBefore: [
        {
          move: "dxc6",
          fen: "2kr3r/ppp3p1/2Pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K b - - 0 16",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/ppp3p1/2Pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 17",
        },
        {
          move: "cxb7+",
          fen: "2k2r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K b - - 0 17",
        },
        {
          move: "Kb8",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 18",
        },
        {
          move: "Be3",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PB2P/PPP2q2/R2QR2K b - - 2 18",
        },
        {
          move: "Bxe3",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pb2P/PPP2q2/R2QR2K w - - 0 19",
        },
        {
          move: "Qe2",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pb2P/PPP1Qq2/R3R2K b - - 1 19",
        },
        {
          move: "Bb6",
          fen: "1k3r1r/pPp3p1/1b1p3p/4p3/6P1/3P3P/PPP1Qq2/R3R2K w - - 2 20",
        },
        {
          move: "Qxf2",
          fen: "1k3r1r/pPp3p1/1b1p3p/4p3/6P1/3P3P/PPP2Q2/R3R2K b - - 0 20",
        },
        {
          move: "Rxf2",
          fen: "1k5r/pPp3p1/1b1p3p/4p3/6P1/3P3P/PPP2r2/R3R2K w - - 0 21",
        },
        {
          move: "a4",
          fen: "1k5r/pPp3p1/1b1p3p/4p3/P5P1/3P3P/1PP2r2/R3R2K b - - 0 21",
        },
        {
          move: "a5",
          fen: "1k5r/1Pp3p1/1b1p3p/p3p3/P5P1/3P3P/1PP2r2/R3R2K w - - 0 22",
        },
        {
          move: "c3",
          fen: "1k5r/1Pp3p1/1b1p3p/p3p3/P5P1/2PP3P/1P3r2/R3R2K b - - 0 22",
        },
        {
          move: "Kxb7",
          fen: "7r/1kp3p1/1b1p3p/p3p3/P5P1/2PP3P/1P3r2/R3R2K w - - 0 23",
        },
        {
          move: "b4",
          fen: "7r/1kp3p1/1b1p3p/p3p3/PP4P1/2PP3P/5r2/R3R2K b - - 0 23",
        },
        {
          move: "axb4",
          fen: "7r/1kp3p1/1b1p3p/4p3/Pp4P1/2PP3P/5r2/R3R2K w - - 0 24",
        },
        {
          move: "cxb4",
          fen: "7r/1kp3p1/1b1p3p/4p3/PP4P1/3P3P/5r2/R3R2K b - - 0 24",
        },
        {
          move: "Bd4",
          fen: "7r/1kp3p1/3p3p/4p3/PP1b2P1/3P3P/5r2/R3R2K w - - 1 25",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rdf8",
          fen: "2k2r1r/ppp3p1/2Pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 17",
        },
        {
          move: "cxb7+",
          fen: "2k2r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K b - - 0 17",
        },
        {
          move: "Kb8",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 18",
        },
        {
          move: "Qe2",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP1Qq2/R1B1R2K b - - 2 18",
        },
        {
          move: "Qh4",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6Pq/3P3P/PPP1Q3/R1B1R2K w - - 3 19",
        },
        {
          move: "Be3",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6Pq/3PB2P/PPP1Q3/R3R2K b - - 4 19",
        },
        {
          move: "Qxh3+",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PB2q/PPP1Q3/R3R2K w - - 0 20",
        },
        {
          move: "Qh2",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PB2q/PPP4Q/R3R2K b - - 1 20",
        },
        {
          move: "Qf3+",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PBq2/PPP4Q/R3R2K w - - 2 21",
        },
        {
          move: "Qg2",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PBq2/PPP3Q1/R3R2K b - - 3 21",
        },
        {
          move: "Bxe3",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pbq2/PPP3Q1/R3R2K w - - 0 22",
        },
        {
          move: "Rf1",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pbq2/PPP3Q1/R4R1K b - - 1 22",
        },
        {
          move: "h5",
          fen: "1k3r1r/pPp3p1/3p4/4p2p/6P1/3Pbq2/PPP3Q1/R4R1K w - - 0 23",
        },
        {
          move: "Qxf3",
          fen: "1k3r1r/pPp3p1/3p4/4p2p/6P1/3PbQ2/PPP5/R4R1K b - - 0 23",
        },
        {
          move: "hxg4+",
          fen: "1k3r1r/pPp3p1/3p4/4p3/6p1/3PbQ2/PPP5/R4R1K w - - 0 24",
        },
        {
          move: "Kg2",
          fen: "1k3r1r/pPp3p1/3p4/4p3/6p1/3PbQ2/PPP3K1/R4R2 b - - 1 24",
        },
        {
          move: "gxf3+",
          fen: "1k3r1r/pPp3p1/3p4/4p3/8/3Pbp2/PPP3K1/R4R2 w - - 0 25",
        },
        {
          move: "Rxf3",
          fen: "1k3r1r/pPp3p1/3p4/4p3/8/3PbR2/PPP3K1/R7 b - - 0 25",
        },
        {
          move: "Bf4",
          fen: "1k3r1r/pPp3p1/3p4/4p3/5b2/3P1R2/PPP3K1/R7 w - - 1 26",
        },
        {
          move: "Rh3",
          fen: "1k3r1r/pPp3p1/3p4/4p3/5b2/3P3R/PPP3K1/R7 b - - 2 26",
        },
        {
          move: "Rxh3",
          fen: "1k3r2/pPp3p1/3p4/4p3/5b2/3P3r/PPP3K1/R7 w - - 0 27",
        },
        {
          move: "Kxh3",
          fen: "1k3r2/pPp3p1/3p4/4p3/5b2/3P3K/PPP5/R7 b - - 0 27",
        },
      ],
    },
    {
      move: "bxc6",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 0 17",
      evalBefore: "-3.99",
      evalAfter: "-1.21",
      bestMovesBefore: [
        {
          move: "Rdf8",
          fen: "2k2r1r/ppp3p1/2Pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 17",
        },
        {
          move: "cxb7+",
          fen: "2k2r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K b - - 0 17",
        },
        {
          move: "Kb8",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP2q2/R1BQR2K w - - 1 18",
        },
        {
          move: "Qe2",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3P3P/PPP1Qq2/R1B1R2K b - - 2 18",
        },
        {
          move: "Qh4",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6Pq/3P3P/PPP1Q3/R1B1R2K w - - 3 19",
        },
        {
          move: "Be3",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6Pq/3PB2P/PPP1Q3/R3R2K b - - 4 19",
        },
        {
          move: "Qxh3+",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PB2q/PPP1Q3/R3R2K w - - 0 20",
        },
        {
          move: "Qh2",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PB2q/PPP4Q/R3R2K b - - 1 20",
        },
        {
          move: "Qf3+",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PBq2/PPP4Q/R3R2K w - - 2 21",
        },
        {
          move: "Qg2",
          fen: "1k3r1r/pPp3p1/3p3p/2b1p3/6P1/3PBq2/PPP3Q1/R3R2K b - - 3 21",
        },
        {
          move: "Bxe3",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pbq2/PPP3Q1/R3R2K w - - 0 22",
        },
        {
          move: "Rf1",
          fen: "1k3r1r/pPp3p1/3p3p/4p3/6P1/3Pbq2/PPP3Q1/R4R1K b - - 1 22",
        },
        {
          move: "h5",
          fen: "1k3r1r/pPp3p1/3p4/4p2p/6P1/3Pbq2/PPP3Q1/R4R1K w - - 0 23",
        },
        {
          move: "Qxf3",
          fen: "1k3r1r/pPp3p1/3p4/4p2p/6P1/3PbQ2/PPP5/R4R1K b - - 0 23",
        },
        {
          move: "hxg4+",
          fen: "1k3r1r/pPp3p1/3p4/4p3/6p1/3PbQ2/PPP5/R4R1K w - - 0 24",
        },
        {
          move: "Kg2",
          fen: "1k3r1r/pPp3p1/3p4/4p3/6p1/3PbQ2/PPP3K1/R4R2 b - - 1 24",
        },
        {
          move: "gxf3+",
          fen: "1k3r1r/pPp3p1/3p4/4p3/8/3Pbp2/PPP3K1/R4R2 w - - 0 25",
        },
        {
          move: "Rxf3",
          fen: "1k3r1r/pPp3p1/3p4/4p3/8/3PbR2/PPP3K1/R7 b - - 0 25",
        },
        {
          move: "Bf4",
          fen: "1k3r1r/pPp3p1/3p4/4p3/5b2/3P1R2/PPP3K1/R7 w - - 1 26",
        },
        {
          move: "Rh3",
          fen: "1k3r1r/pPp3p1/3p4/4p3/5b2/3P3R/PPP3K1/R7 b - - 2 26",
        },
        {
          move: "Rxh3",
          fen: "1k3r2/pPp3p1/3p4/4p3/5b2/3P3r/PPP3K1/R7 w - - 0 27",
        },
        {
          move: "Kxh3",
          fen: "1k3r2/pPp3p1/3p4/4p3/5b2/3P3K/PPP5/R7 b - - 0 27",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf1",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQ1R1K b - - 1 17",
        },
        {
          move: "Qh4",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP5/R1BQ1R1K w - - 2 18",
        },
        {
          move: "Kg2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP3K1/R1BQ1R2 b - - 3 18",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP3K1/R1BQ1R2 w - - 4 19",
        },
        {
          move: "Qe2",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1Q1K1/R1B2R2 b - - 5 19",
        },
        {
          move: "Rxf1",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1Q1K1/R1B2r2 w - - 0 20",
        },
        {
          move: "Qxf1",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP3K1/R1B2Q2 b - - 0 20",
        },
        {
          move: "Qe7",
          fen: "2k4r/p1p1q1p1/2pp3p/2b1p3/6P1/3P3P/PPP3K1/R1B2Q2 w - - 1 21",
        },
        {
          move: "Qe2",
          fen: "2k4r/p1p1q1p1/2pp3p/2b1p3/6P1/3P3P/PPP1Q1K1/R1B5 b - - 2 21",
        },
        {
          move: "Rf8",
          fen: "2k2r2/p1p1q1p1/2pp3p/2b1p3/6P1/3P3P/PPP1Q1K1/R1B5 w - - 3 22",
        },
        {
          move: "Be3",
          fen: "2k2r2/p1p1q1p1/2pp3p/2b1p3/6P1/3PB2P/PPP1Q1K1/R7 b - - 4 22",
        },
        {
          move: "Qf7",
          fen: "2k2r2/p1p2qp1/2pp3p/2b1p3/6P1/3PB2P/PPP1Q1K1/R7 w - - 5 23",
        },
        {
          move: "Bxc5",
          fen: "2k2r2/p1p2qp1/2pp3p/2B1p3/6P1/3P3P/PPP1Q1K1/R7 b - - 0 23",
        },
        {
          move: "Qd5+",
          fen: "2k2r2/p1p3p1/2pp3p/2Bqp3/6P1/3P3P/PPP1Q1K1/R7 w - - 1 24",
        },
        {
          move: "Kg3",
          fen: "2k2r2/p1p3p1/2pp3p/2Bqp3/6P1/3P2KP/PPP1Q3/R7 b - - 2 24",
        },
        {
          move: "Qxc5",
          fen: "2k2r2/p1p3p1/2pp3p/2q1p3/6P1/3P2KP/PPP1Q3/R7 w - - 0 25",
        },
      ],
    },
    {
      move: "Re2",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P3P/PPP1Rq2/R1BQ3K b - - 1 17",
      evalBefore: "-1.21",
      evalAfter: "-3.32",
      bestMovesBefore: [
        {
          move: "Rf1",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P3P/PPP2q2/R1BQ1R1K b - - 1 17",
        },
        {
          move: "Qh4",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP5/R1BQ1R1K w - - 2 18",
        },
        {
          move: "Kg2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP3K1/R1BQ1R2 b - - 3 18",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP3K1/R1BQ1R2 w - - 4 19",
        },
        {
          move: "Qe2",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1Q1K1/R1B2R2 b - - 5 19",
        },
        {
          move: "Rxf1",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1Q1K1/R1B2r2 w - - 0 20",
        },
        {
          move: "Qxf1",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP3K1/R1B2Q2 b - - 0 20",
        },
        {
          move: "Qe7",
          fen: "2k4r/p1p1q1p1/2pp3p/2b1p3/6P1/3P3P/PPP3K1/R1B2Q2 w - - 1 21",
        },
        {
          move: "Qe2",
          fen: "2k4r/p1p1q1p1/2pp3p/2b1p3/6P1/3P3P/PPP1Q1K1/R1B5 b - - 2 21",
        },
        {
          move: "Rf8",
          fen: "2k2r2/p1p1q1p1/2pp3p/2b1p3/6P1/3P3P/PPP1Q1K1/R1B5 w - - 3 22",
        },
        {
          move: "Be3",
          fen: "2k2r2/p1p1q1p1/2pp3p/2b1p3/6P1/3PB2P/PPP1Q1K1/R7 b - - 4 22",
        },
        {
          move: "Qf7",
          fen: "2k2r2/p1p2qp1/2pp3p/2b1p3/6P1/3PB2P/PPP1Q1K1/R7 w - - 5 23",
        },
        {
          move: "Bxc5",
          fen: "2k2r2/p1p2qp1/2pp3p/2B1p3/6P1/3P3P/PPP1Q1K1/R7 b - - 0 23",
        },
        {
          move: "Qd5+",
          fen: "2k2r2/p1p3p1/2pp3p/2Bqp3/6P1/3P3P/PPP1Q1K1/R7 w - - 1 24",
        },
        {
          move: "Kg3",
          fen: "2k2r2/p1p3p1/2pp3p/2Bqp3/6P1/3P2KP/PPP1Q3/R7 b - - 2 24",
        },
        {
          move: "Qxc5",
          fen: "2k2r2/p1p3p1/2pp3p/2q1p3/6P1/3P2KP/PPP1Q3/R7 w - - 0 25",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qf3+",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P1q1P/PPP1R3/R1BQ3K w - - 2 18",
        },
        {
          move: "Kh2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P1q1P/PPP1R2K/R1BQ4 b - - 3 18",
        },
        {
          move: "Bf2",
          fen: "2kr3r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPP1Rb1K/R1BQ4 w - - 4 19",
        },
        {
          move: "Qf1",
          fen: "2kr3r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPP1Rb1K/R1B2Q2 b - - 5 19",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPP1Rb1K/R1B2Q2 w - - 6 20",
        },
        {
          move: "Bd2",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPPBRb1K/R4Q2 b - - 7 20",
        },
        {
          move: "h5",
          fen: "2k2r1r/p1p3p1/2pp4/4p2p/6P1/3P1q1P/PPPBRb1K/R4Q2 w - - 0 21",
        },
        {
          move: "g5",
          fen: "2k2r1r/p1p3p1/2pp4/4p1Pp/8/3P1q1P/PPPBRb1K/R4Q2 b - - 0 21",
        },
        {
          move: "h4",
          fen: "2k2r1r/p1p3p1/2pp4/4p1P1/7p/3P1q1P/PPPBRb1K/R4Q2 w - - 0 22",
        },
        {
          move: "Rd1",
          fen: "2k2r1r/p1p3p1/2pp4/4p1P1/7p/3P1q1P/PPPBRb1K/3R1Q2 b - - 1 22",
        },
        {
          move: "Kb7",
          fen: "5r1r/pkp3p1/2pp4/4p1P1/7p/3P1q1P/PPPBRb1K/3R1Q2 w - - 2 23",
        },
        {
          move: "g6",
          fen: "5r1r/pkp3p1/2pp2P1/4p3/7p/3P1q1P/PPPBRb1K/3R1Q2 b - - 0 23",
        },
        {
          move: "Rf5",
          fen: "7r/pkp3p1/2pp2P1/4pr2/7p/3P1q1P/PPPBRb1K/3R1Q2 w - - 1 24",
        },
        {
          move: "b3",
          fen: "7r/pkp3p1/2pp2P1/4pr2/7p/1P1P1q1P/P1PBRb1K/3R1Q2 b - - 0 24",
        },
        {
          move: "Rhf8",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P1q1P/P1PBRb1K/3R1Q2 w - - 1 25",
        },
        {
          move: "Qxf2",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P1q1P/P1PBRQ1K/3R4 b - - 0 25",
        },
        {
          move: "Qxf2+",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P3P/P1PBRq1K/3R4 w - - 0 26",
        },
        {
          move: "Rxf2",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P3P/P1PB1R1K/3R4 b - - 0 26",
        },
        {
          move: "Rxf2+",
          fen: "5r2/pkp3p1/2pp2P1/4p3/7p/1P1P3P/P1PB1r1K/3R4 w - - 0 27",
        },
        {
          move: "Kg1",
          fen: "5r2/pkp3p1/2pp2P1/4p3/7p/1P1P3P/P1PB1r2/3R2K1 b - - 1 27",
        },
        {
          move: "R8f3",
          fen: "8/pkp3p1/2pp2P1/4p3/7p/1P1P1r1P/P1PB1r2/3R2K1 w - - 2 28",
        },
        {
          move: "a4",
          fen: "8/pkp3p1/2pp2P1/4p3/P6p/1P1P1r1P/2PB1r2/3R2K1 b - - 0 28",
        },
        {
          move: "Kc8",
          fen: "2k5/p1p3p1/2pp2P1/4p3/P6p/1P1P1r1P/2PB1r2/3R2K1 w - - 1 29",
        },
      ],
    },
    {
      move: "Qh4",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1R3/R1BQ3K w - - 2 18",
      evalBefore: "-3.32",
      evalAfter: "-1.61",
      bestMovesBefore: [
        {
          move: "Qf3+",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P1q1P/PPP1R3/R1BQ3K w - - 2 18",
        },
        {
          move: "Kh2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3P1q1P/PPP1R2K/R1BQ4 b - - 3 18",
        },
        {
          move: "Bf2",
          fen: "2kr3r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPP1Rb1K/R1BQ4 w - - 4 19",
        },
        {
          move: "Qf1",
          fen: "2kr3r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPP1Rb1K/R1B2Q2 b - - 5 19",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPP1Rb1K/R1B2Q2 w - - 6 20",
        },
        {
          move: "Bd2",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3P1q1P/PPPBRb1K/R4Q2 b - - 7 20",
        },
        {
          move: "h5",
          fen: "2k2r1r/p1p3p1/2pp4/4p2p/6P1/3P1q1P/PPPBRb1K/R4Q2 w - - 0 21",
        },
        {
          move: "g5",
          fen: "2k2r1r/p1p3p1/2pp4/4p1Pp/8/3P1q1P/PPPBRb1K/R4Q2 b - - 0 21",
        },
        {
          move: "h4",
          fen: "2k2r1r/p1p3p1/2pp4/4p1P1/7p/3P1q1P/PPPBRb1K/R4Q2 w - - 0 22",
        },
        {
          move: "Rd1",
          fen: "2k2r1r/p1p3p1/2pp4/4p1P1/7p/3P1q1P/PPPBRb1K/3R1Q2 b - - 1 22",
        },
        {
          move: "Kb7",
          fen: "5r1r/pkp3p1/2pp4/4p1P1/7p/3P1q1P/PPPBRb1K/3R1Q2 w - - 2 23",
        },
        {
          move: "g6",
          fen: "5r1r/pkp3p1/2pp2P1/4p3/7p/3P1q1P/PPPBRb1K/3R1Q2 b - - 0 23",
        },
        {
          move: "Rf5",
          fen: "7r/pkp3p1/2pp2P1/4pr2/7p/3P1q1P/PPPBRb1K/3R1Q2 w - - 1 24",
        },
        {
          move: "b3",
          fen: "7r/pkp3p1/2pp2P1/4pr2/7p/1P1P1q1P/P1PBRb1K/3R1Q2 b - - 0 24",
        },
        {
          move: "Rhf8",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P1q1P/P1PBRb1K/3R1Q2 w - - 1 25",
        },
        {
          move: "Qxf2",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P1q1P/P1PBRQ1K/3R4 b - - 0 25",
        },
        {
          move: "Qxf2+",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P3P/P1PBRq1K/3R4 w - - 0 26",
        },
        {
          move: "Rxf2",
          fen: "5r2/pkp3p1/2pp2P1/4pr2/7p/1P1P3P/P1PB1R1K/3R4 b - - 0 26",
        },
        {
          move: "Rxf2+",
          fen: "5r2/pkp3p1/2pp2P1/4p3/7p/1P1P3P/P1PB1r1K/3R4 w - - 0 27",
        },
        {
          move: "Kg1",
          fen: "5r2/pkp3p1/2pp2P1/4p3/7p/1P1P3P/P1PB1r2/3R2K1 b - - 1 27",
        },
        {
          move: "R8f3",
          fen: "8/pkp3p1/2pp2P1/4p3/7p/1P1P1r1P/P1PB1r2/3R2K1 w - - 2 28",
        },
        {
          move: "a4",
          fen: "8/pkp3p1/2pp2P1/4p3/P6p/1P1P1r1P/2PB1r2/3R2K1 b - - 0 28",
        },
        {
          move: "Kc8",
          fen: "2k5/p1p3p1/2pp2P1/4p3/P6p/1P1P1r1P/2PB1r2/3R2K1 w - - 1 29",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qf1",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1R3/R1B2Q1K b - - 3 18",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1R3/R1B2Q1K w - - 4 19",
        },
        {
          move: "Qg2",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1R1Q1/R1B4K b - - 5 19",
        },
        {
          move: "h5",
          fen: "2k2r1r/p1p3p1/2pp4/2b1p2p/6Pq/3P3P/PPP1R1Q1/R1B4K w - - 0 20",
        },
        {
          move: "g5",
          fen: "2k2r1r/p1p3p1/2pp4/2b1p1Pp/7q/3P3P/PPP1R1Q1/R1B4K b - - 0 20",
        },
        {
          move: "Rf5",
          fen: "2k4r/p1p3p1/2pp4/2b1prPp/7q/3P3P/PPP1R1Q1/R1B4K w - - 1 21",
        },
        {
          move: "Be3",
          fen: "2k4r/p1p3p1/2pp4/2b1prPp/7q/3PB2P/PPP1R1Q1/R6K b - - 2 21",
        },
        {
          move: "Bxe3",
          fen: "2k4r/p1p3p1/2pp4/4prPp/7q/3Pb2P/PPP1R1Q1/R6K w - - 0 22",
        },
        {
          move: "Rxe3",
          fen: "2k4r/p1p3p1/2pp4/4prPp/7q/3PR2P/PPP3Q1/R6K b - - 0 22",
        },
        {
          move: "Kd7",
          fen: "7r/p1pk2p1/2pp4/4prPp/7q/3PR2P/PPP3Q1/R6K w - - 1 23",
        },
        {
          move: "Rf3",
          fen: "7r/p1pk2p1/2pp4/4prPp/7q/3P1R1P/PPP3Q1/R6K b - - 2 23",
        },
        {
          move: "Rhf8",
          fen: "5r2/p1pk2p1/2pp4/4prPp/7q/3P1R1P/PPP3Q1/R6K w - - 3 24",
        },
      ],
    },
    {
      move: "Be3",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3PB2P/PPP1R3/R2Q3K b - - 3 18",
      evalBefore: "-1.61",
      evalAfter: "-4.87",
      bestMovesBefore: [
        {
          move: "Qf1",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1R3/R1B2Q1K b - - 3 18",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1R3/R1B2Q1K w - - 4 19",
        },
        {
          move: "Qg2",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6Pq/3P3P/PPP1R1Q1/R1B4K b - - 5 19",
        },
        {
          move: "h5",
          fen: "2k2r1r/p1p3p1/2pp4/2b1p2p/6Pq/3P3P/PPP1R1Q1/R1B4K w - - 0 20",
        },
        {
          move: "g5",
          fen: "2k2r1r/p1p3p1/2pp4/2b1p1Pp/7q/3P3P/PPP1R1Q1/R1B4K b - - 0 20",
        },
        {
          move: "Rf5",
          fen: "2k4r/p1p3p1/2pp4/2b1prPp/7q/3P3P/PPP1R1Q1/R1B4K w - - 1 21",
        },
        {
          move: "Be3",
          fen: "2k4r/p1p3p1/2pp4/2b1prPp/7q/3PB2P/PPP1R1Q1/R6K b - - 2 21",
        },
        {
          move: "Bxe3",
          fen: "2k4r/p1p3p1/2pp4/4prPp/7q/3Pb2P/PPP1R1Q1/R6K w - - 0 22",
        },
        {
          move: "Rxe3",
          fen: "2k4r/p1p3p1/2pp4/4prPp/7q/3PR2P/PPP3Q1/R6K b - - 0 22",
        },
        {
          move: "Kd7",
          fen: "7r/p1pk2p1/2pp4/4prPp/7q/3PR2P/PPP3Q1/R6K w - - 1 23",
        },
        {
          move: "Rf3",
          fen: "7r/p1pk2p1/2pp4/4prPp/7q/3P1R1P/PPP3Q1/R6K b - - 2 23",
        },
        {
          move: "Rhf8",
          fen: "5r2/p1pk2p1/2pp4/4prPp/7q/3P1R1P/PPP3Q1/R6K w - - 3 24",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qxh3+",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP1R3/R2Q3K w - - 0 19",
        },
        {
          move: "Rh2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP4R/R2Q3K b - - 1 19",
        },
        {
          move: "Qxe3",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP4R/R2Q3K w - - 0 20",
        },
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "Kg2",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP3KR/R7 b - - 1 22",
        },
        {
          move: "Rf2+",
          fen: "2k4r/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP2rKR/R7 w - - 2 23",
        },
        {
          move: "Kg3",
          fen: "2k4r/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r1R/R7 b - - 3 23",
        },
        {
          move: "Rhf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r1R/R7 w - - 4 24",
        },
        {
          move: "Rxf2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2R2/R7 b - - 0 24",
        },
        {
          move: "Rxf2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r2/R7 w - - 0 25",
        },
        {
          move: "Rg1",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r2/6R1 b - - 1 25",
        },
        {
          move: "Rxc2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPr5/6R1 w - - 0 26",
        },
        {
          move: "Rg2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPr3R1/8 b - - 1 26",
        },
        {
          move: "Rxg2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PP4r1/8 w - - 0 27",
        },
        {
          move: "Kxg2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb3/PP4K1/8 b - - 0 27",
        },
      ],
    },
    {
      move: "Qxh3+",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP1R3/R2Q3K w - - 0 19",
      evalBefore: "-4.87",
      evalAfter: "-5.12",
      bestMovesBefore: [
        {
          move: "Qxh3+",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP1R3/R2Q3K w - - 0 19",
        },
        {
          move: "Rh2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP4R/R2Q3K b - - 1 19",
        },
        {
          move: "Qxe3",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP4R/R2Q3K w - - 0 20",
        },
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "Kg2",
          fen: "2k2r1r/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP3KR/R7 b - - 1 22",
        },
        {
          move: "Rf2+",
          fen: "2k4r/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP2rKR/R7 w - - 2 23",
        },
        {
          move: "Kg3",
          fen: "2k4r/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r1R/R7 b - - 3 23",
        },
        {
          move: "Rhf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r1R/R7 w - - 4 24",
        },
        {
          move: "Rxf2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2R2/R7 b - - 0 24",
        },
        {
          move: "Rxf2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r2/R7 w - - 0 25",
        },
        {
          move: "Rg1",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r2/6R1 b - - 1 25",
        },
        {
          move: "Rxc2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPr5/6R1 w - - 0 26",
        },
        {
          move: "Rg2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPr3R1/8 b - - 1 26",
        },
        {
          move: "Rxg2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PP4r1/8 w - - 0 27",
        },
        {
          move: "Kxg2",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/3Pb3/PP4K1/8 b - - 0 27",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rh2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP4R/R2Q3K b - - 1 19",
        },
        {
          move: "Qxe3",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP4R/R2Q3K w - - 0 20",
        },
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "a4",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP4R/R6K b - - 0 22",
        },
        {
          move: "Rf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP4R/R6K w - - 1 23",
        },
        {
          move: "Rg2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP3R1/R6K b - - 2 23",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP3R1/R6K w - - 3 24",
        },
        {
          move: "Kh2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP3RK/R7 b - - 4 24",
        },
        {
          move: "Rf2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP2rRK/R7 w - - 5 25",
        },
        {
          move: "Rxf2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP2R1K/R7 b - - 0 25",
        },
        {
          move: "Rxf2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP2r1K/R7 w - - 0 26",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/4p3/P5P1/3Pb1K1/1PP2r2/R7 b - - 1 26",
        },
        {
          move: "Rxc2",
          fen: "2k5/p1p3p1/2pp3p/4p3/P5P1/3Pb1K1/1Pr5/R7 w - - 0 27",
        },
      ],
    },
    {
      move: "Rh2",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP4R/R2Q3K b - - 1 19",
      evalBefore: "-5.12",
      evalAfter: "-5.01",
      bestMovesBefore: [
        {
          move: "Rh2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3PB2q/PPP4R/R2Q3K b - - 1 19",
        },
        {
          move: "Qxe3",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP4R/R2Q3K w - - 0 20",
        },
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "a4",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP4R/R6K b - - 0 22",
        },
        {
          move: "Rf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP4R/R6K w - - 1 23",
        },
        {
          move: "Rg2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP3R1/R6K b - - 2 23",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP3R1/R6K w - - 3 24",
        },
        {
          move: "Kh2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pbr2/1PP3RK/R7 b - - 4 24",
        },
        {
          move: "Rf2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP2rRK/R7 w - - 5 25",
        },
        {
          move: "Rxf2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP2R1K/R7 b - - 0 25",
        },
        {
          move: "Rxf2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/P5P1/3Pb3/1PP2r1K/R7 w - - 0 26",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/4p3/P5P1/3Pb1K1/1PP2r2/R7 b - - 1 26",
        },
        {
          move: "Rxc2",
          fen: "2k5/p1p3p1/2pp3p/4p3/P5P1/3Pb1K1/1Pr5/R7 w - - 0 27",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qxe3",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP4R/R2Q3K w - - 0 20",
        },
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "Rh3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb2R/PPP5/R6K b - - 1 22",
        },
        {
          move: "Bb6",
          fen: "2kr1r2/p1p3p1/1bpp3p/4p3/6P1/3P3R/PPP5/R6K w - - 2 23",
        },
        {
          move: "Rg3",
          fen: "2kr1r2/p1p3p1/1bpp3p/4p3/6P1/3P2R1/PPP5/R6K b - - 3 23",
        },
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/3P2R1/PPP5/R6K w - - 4 24",
        },
        {
          move: "a3",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/P2P2R1/1PP5/R6K b - - 0 24",
        },
        {
          move: "c5",
          fen: "2kr4/p1p3p1/1b1p3p/2p1p3/5rP1/P2P2R1/1PP5/R6K w - - 0 25",
        },
        {
          move: "Re1",
          fen: "2kr4/p1p3p1/1b1p3p/2p1p3/5rP1/P2P2R1/1PP5/4R2K b - - 1 25",
        },
        {
          move: "a5",
          fen: "2kr4/2p3p1/1b1p3p/p1p1p3/5rP1/P2P2R1/1PP5/4R2K w - - 0 26",
        },
        {
          move: "b3",
          fen: "2kr4/2p3p1/1b1p3p/p1p1p3/5rP1/PP1P2R1/2P5/4R2K b - - 0 26",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/2p3p1/1b1p3p/p1p1p3/5rP1/PP1P2R1/2P5/4R2K w - - 1 27",
        },
      ],
    },
    {
      move: "Qxe3",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP4R/R2Q3K w - - 0 20",
      evalBefore: "-5.01",
      evalAfter: "-5.25",
      bestMovesBefore: [
        {
          move: "Qxe3",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP4R/R2Q3K w - - 0 20",
        },
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "Rh3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb2R/PPP5/R6K b - - 1 22",
        },
        {
          move: "Bb6",
          fen: "2kr1r2/p1p3p1/1bpp3p/4p3/6P1/3P3R/PPP5/R6K w - - 2 23",
        },
        {
          move: "Rg3",
          fen: "2kr1r2/p1p3p1/1bpp3p/4p3/6P1/3P2R1/PPP5/R6K b - - 3 23",
        },
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/3P2R1/PPP5/R6K w - - 4 24",
        },
        {
          move: "a3",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/P2P2R1/1PP5/R6K b - - 0 24",
        },
        {
          move: "c5",
          fen: "2kr4/p1p3p1/1b1p3p/2p1p3/5rP1/P2P2R1/1PP5/R6K w - - 0 25",
        },
        {
          move: "Re1",
          fen: "2kr4/p1p3p1/1b1p3p/2p1p3/5rP1/P2P2R1/1PP5/4R2K b - - 1 25",
        },
        {
          move: "a5",
          fen: "2kr4/2p3p1/1b1p3p/p1p1p3/5rP1/P2P2R1/1PP5/4R2K w - - 0 26",
        },
        {
          move: "b3",
          fen: "2kr4/2p3p1/1b1p3p/p1p1p3/5rP1/PP1P2R1/2P5/4R2K b - - 0 26",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/2p3p1/1b1p3p/p1p1p3/5rP1/PP1P2R1/2P5/4R2K w - - 1 27",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "Kg2",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP3KR/R7 b - - 1 22",
        },
        {
          move: "Rf2+",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP2rKR/R7 w - - 2 23",
        },
        {
          move: "Kg3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r1R/R7 b - - 3 23",
        },
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5rP1/3Pb1K1/PPP4R/R7 w - - 4 24",
        },
        {
          move: "Re1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5rP1/3Pb1K1/PPP4R/4R3 b - - 5 24",
        },
        {
          move: "Bb6",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/3P2K1/PPP4R/4R3 w - - 6 25",
        },
        {
          move: "Rg2",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/3P2K1/PPP3R1/4R3 b - - 7 25",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/5rP1/3P2K1/PPP3R1/4R3 w - - 8 26",
        },
        {
          move: "Re4",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/4RrP1/3P2K1/PPP3R1/8 b - - 9 26",
        },
        {
          move: "Rf1",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/4R1P1/3P2K1/PPP3R1/5r2 w - - 10 27",
        },
        {
          move: "Rc4",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/2R3P1/3P2K1/PPP3R1/5r2 b - - 11 27",
        },
        {
          move: "g6",
          fen: "2k2r2/p1p5/1bpp2pp/4p3/2R3P1/3P2K1/PPP3R1/5r2 w - - 0 28",
        },
        {
          move: "Rxc6",
          fen: "2k2r2/p1p5/1bRp2pp/4p3/6P1/3P2K1/PPP3R1/5r2 b - - 0 28",
        },
        {
          move: "Kb7",
          fen: "5r2/pkp5/1bRp2pp/4p3/6P1/3P2K1/PPP3R1/5r2 w - - 1 29",
        },
      ],
    },
    {
      move: "c3",
      moveFen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP5R/R2Q3K b - - 0 20",
      evalBefore: "-5.25",
      evalAfter: "-5.25",
      bestMovesBefore: [
        {
          move: "Qe2",
          fen: "2kr3r/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K b - - 1 20",
        },
        {
          move: "Rhf8",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3Pq3/PPP1Q2R/R6K w - - 2 21",
        },
        {
          move: "Qxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/3PQ3/PPP4R/R6K b - - 0 21",
        },
        {
          move: "Bxe3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP4R/R6K w - - 0 22",
        },
        {
          move: "Kg2",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP3KR/R7 b - - 1 22",
        },
        {
          move: "Rf2+",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/3Pb3/PPP2rKR/R7 w - - 2 23",
        },
        {
          move: "Kg3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/3Pb1K1/PPP2r1R/R7 b - - 3 23",
        },
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5rP1/3Pb1K1/PPP4R/R7 w - - 4 24",
        },
        {
          move: "Re1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5rP1/3Pb1K1/PPP4R/4R3 b - - 5 24",
        },
        {
          move: "Bb6",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/3P2K1/PPP4R/4R3 w - - 6 25",
        },
        {
          move: "Rg2",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/5rP1/3P2K1/PPP3R1/4R3 b - - 7 25",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/5rP1/3P2K1/PPP3R1/4R3 w - - 8 26",
        },
        {
          move: "Re4",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/4RrP1/3P2K1/PPP3R1/8 b - - 9 26",
        },
        {
          move: "Rf1",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/4R1P1/3P2K1/PPP3R1/5r2 w - - 10 27",
        },
        {
          move: "Rc4",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/2R3P1/3P2K1/PPP3R1/5r2 b - - 11 27",
        },
        {
          move: "g6",
          fen: "2k2r2/p1p5/1bpp2pp/4p3/2R3P1/3P2K1/PPP3R1/5r2 w - - 0 28",
        },
        {
          move: "Rxc6",
          fen: "2k2r2/p1p5/1bRp2pp/4p3/6P1/3P2K1/PPP3R1/5r2 b - - 0 28",
        },
        {
          move: "Kb7",
          fen: "5r2/pkp5/1bRp2pp/4p3/6P1/3P2K1/PPP3R1/5r2 w - - 1 29",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP5R/R2Q3K w - - 1 21",
        },
        {
          move: "Qe2",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP2Q2R/R6K b - - 2 21",
        },
        {
          move: "Rf3",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/6P1/2PPqr2/PP2Q2R/R6K w - - 3 22",
        },
        {
          move: "b4",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/1P4P1/2PPqr2/P3Q2R/R6K b - - 0 22",
        },
        {
          move: "Bb6",
          fen: "2k4r/p1p3p1/1bpp3p/4p3/1P4P1/2PPqr2/P3Q2R/R6K w - - 1 23",
        },
        {
          move: "Qxe3",
          fen: "2k4r/p1p3p1/1bpp3p/4p3/1P4P1/2PPQr2/P6R/R6K b - - 0 23",
        },
        {
          move: "Bxe3",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P4P1/2PPbr2/P6R/R6K w - - 0 24",
        },
        {
          move: "Rc2",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P4P1/2PPbr2/P1R5/R6K b - - 1 24",
        },
        {
          move: "Bf4",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P3bP1/2PP1r2/P1R5/R6K w - - 2 25",
        },
        {
          move: "Rd1",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P3bP1/2PP1r2/P1R5/3R3K b - - 3 25",
        },
        {
          move: "Rf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/1P3bP1/2PP1r2/P1R5/3R3K w - - 4 26",
        },
      ],
    },
    {
      move: "Rhf8",
      moveFen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP5R/R2Q3K w - - 1 21",
      evalBefore: "-5.25",
      evalAfter: "-5.28",
      bestMovesBefore: [
        {
          move: "Rdf8",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP5R/R2Q3K w - - 1 21",
        },
        {
          move: "Qe2",
          fen: "2k2r1r/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP2Q2R/R6K b - - 2 21",
        },
        {
          move: "Rf3",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/6P1/2PPqr2/PP2Q2R/R6K w - - 3 22",
        },
        {
          move: "b4",
          fen: "2k4r/p1p3p1/2pp3p/2b1p3/1P4P1/2PPqr2/P3Q2R/R6K b - - 0 22",
        },
        {
          move: "Bb6",
          fen: "2k4r/p1p3p1/1bpp3p/4p3/1P4P1/2PPqr2/P3Q2R/R6K w - - 1 23",
        },
        {
          move: "Qxe3",
          fen: "2k4r/p1p3p1/1bpp3p/4p3/1P4P1/2PPQr2/P6R/R6K b - - 0 23",
        },
        {
          move: "Bxe3",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P4P1/2PPbr2/P6R/R6K w - - 0 24",
        },
        {
          move: "Rc2",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P4P1/2PPbr2/P1R5/R6K b - - 1 24",
        },
        {
          move: "Bf4",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P3bP1/2PP1r2/P1R5/R6K w - - 2 25",
        },
        {
          move: "Rd1",
          fen: "2k4r/p1p3p1/2pp3p/4p3/1P3bP1/2PP1r2/P1R5/3R3K b - - 3 25",
        },
        {
          move: "Rf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/1P3bP1/2PP1r2/P1R5/3R3K w - - 4 26",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qe2",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP2Q2R/R6K b - - 2 21",
        },
        {
          move: "Rf3",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PPqr2/PP2Q2R/R6K w - - 3 22",
        },
        {
          move: "Re1",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PPqr2/PP2Q2R/4R2K b - - 4 22",
        },
        {
          move: "Qxe2",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP1r2/PP2q2R/4R2K w - - 0 23",
        },
        {
          move: "Rhxe2",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP1r2/PP2R3/4R2K b - - 0 23",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1r2/PP2R3/4R2K w - - 1 24",
        },
        {
          move: "d4",
          fen: "2k2r2/p1p3p1/2pp3p/2b1p3/3P2P1/2P2r2/PP2R3/4R2K b - - 0 24",
        },
        {
          move: "exd4",
          fen: "2k2r2/p1p3p1/2pp3p/2b5/3p2P1/2P2r2/PP2R3/4R2K w - - 0 25",
        },
        {
          move: "cxd4",
          fen: "2k2r2/p1p3p1/2pp3p/2b5/3P2P1/5r2/PP2R3/4R2K b - - 0 25",
        },
        {
          move: "Bxd4",
          fen: "2k2r2/p1p3p1/2pp3p/8/3b2P1/5r2/PP2R3/4R2K w - - 0 26",
        },
      ],
    },
    {
      move: "Re2",
      moveFen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP2R3/R2Q3K b - - 2 21",
      evalBefore: "-5.28",
      evalAfter: "-5.42",
      bestMovesBefore: [
        {
          move: "Qe2",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PPq3/PP2Q2R/R6K b - - 2 21",
        },
        {
          move: "Rf3",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PPqr2/PP2Q2R/R6K w - - 3 22",
        },
        {
          move: "Re1",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PPqr2/PP2Q2R/4R2K b - - 4 22",
        },
        {
          move: "Qxe2",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP1r2/PP2q2R/4R2K w - - 0 23",
        },
        {
          move: "Rhxe2",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP1r2/PP2R3/4R2K b - - 0 23",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1r2/PP2R3/4R2K w - - 1 24",
        },
        {
          move: "d4",
          fen: "2k2r2/p1p3p1/2pp3p/2b1p3/3P2P1/2P2r2/PP2R3/4R2K b - - 0 24",
        },
        {
          move: "exd4",
          fen: "2k2r2/p1p3p1/2pp3p/2b5/3p2P1/2P2r2/PP2R3/4R2K w - - 0 25",
        },
        {
          move: "cxd4",
          fen: "2k2r2/p1p3p1/2pp3p/2b5/3P2P1/5r2/PP2R3/4R2K b - - 0 25",
        },
        {
          move: "Bxd4",
          fen: "2k2r2/p1p3p1/2pp3p/8/3b2P1/5r2/PP2R3/4R2K w - - 0 26",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qf3+",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP2R3/R2Q3K w - - 3 22",
        },
        {
          move: "Rg2",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP4R1/R2Q3K b - - 4 22",
        },
        {
          move: "Be3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbq2/PP4R1/R2Q3K w - - 5 23",
        },
        {
          move: "Qxf3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbQ2/PP4R1/R6K b - - 0 23",
        },
        {
          move: "Rxf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP4R1/R6K w - - 0 24",
        },
        {
          move: "Re2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K b - - 1 24",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K w - - 2 25",
        },
        {
          move: "Rd1",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/3R3K b - - 3 25",
        },
        {
          move: "R8f4",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPbr2/PP2R3/3R3K w - - 4 26",
        },
        {
          move: "Kg2",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPbr2/PP2R1K1/3R4 b - - 5 26",
        },
        {
          move: "Rf2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPb3/PP2RrK1/3R4 w - - 6 27",
        },
        {
          move: "Rxf2",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPb3/PP3RK1/3R4 b - - 0 27",
        },
        {
          move: "Rxf2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP3rK1/3R4 w - - 0 28",
        },
        {
          move: "Kh1",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP3r2/3R3K b - - 1 28",
        },
      ],
    },
    {
      move: "Qf3+",
      moveFen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP2R3/R2Q3K w - - 3 22",
      evalBefore: "-5.42",
      evalAfter: "-5.42",
      bestMovesBefore: [
        {
          move: "Qf3+",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP2R3/R2Q3K w - - 3 22",
        },
        {
          move: "Rg2",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP4R1/R2Q3K b - - 4 22",
        },
        {
          move: "Be3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbq2/PP4R1/R2Q3K w - - 5 23",
        },
        {
          move: "Qxf3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbQ2/PP4R1/R6K b - - 0 23",
        },
        {
          move: "Rxf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP4R1/R6K w - - 0 24",
        },
        {
          move: "Re2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K b - - 1 24",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K w - - 2 25",
        },
        {
          move: "Rd1",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/3R3K b - - 3 25",
        },
        {
          move: "R8f4",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPbr2/PP2R3/3R3K w - - 4 26",
        },
        {
          move: "Kg2",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPbr2/PP2R1K1/3R4 b - - 5 26",
        },
        {
          move: "Rf2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPb3/PP2RrK1/3R4 w - - 6 27",
        },
        {
          move: "Rxf2",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPb3/PP3RK1/3R4 b - - 0 27",
        },
        {
          move: "Rxf2+",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP3rK1/3R4 w - - 0 28",
        },
        {
          move: "Kh1",
          fen: "2k5/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP3r2/3R3K b - - 1 28",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg2",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP4R1/R2Q3K b - - 4 22",
        },
        {
          move: "Be3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbq2/PP4R1/R2Q3K w - - 5 23",
        },
        {
          move: "Qxf3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbQ2/PP4R1/R6K b - - 0 23",
        },
        {
          move: "Rxf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP4R1/R6K w - - 0 24",
        },
        {
          move: "Re2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K b - - 1 24",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K w - - 2 25",
        },
        {
          move: "Kg2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R1K1/R7 b - - 3 25",
        },
        {
          move: "R8f4",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPbr2/PP2R1K1/R7 w - - 4 26",
        },
        {
          move: "a4",
          fen: "2k5/p1p3p1/2pp3p/4p3/P4rP1/2PPbr2/1P2R1K1/R7 b - - 0 26",
        },
        {
          move: "a5",
          fen: "2k5/2p3p1/2pp3p/p3p3/P4rP1/2PPbr2/1P2R1K1/R7 w - - 0 27",
        },
        {
          move: "Rh1",
          fen: "2k5/2p3p1/2pp3p/p3p3/P4rP1/2PPbr2/1P2R1K1/7R b - - 1 27",
        },
        {
          move: "Bb6",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P4rP1/2PP1r2/1P2R1K1/7R w - - 2 28",
        },
        {
          move: "Rh3",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P4rP1/2PP1r1R/1P2R1K1/8 b - - 3 28",
        },
        {
          move: "Rf1",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P4rP1/2PP3R/1P2R1K1/5r2 w - - 4 29",
        },
        {
          move: "d4",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P2P1rP1/2P4R/1P2R1K1/5r2 b - - 0 29",
        },
        {
          move: "exd4",
          fen: "2k5/2p3p1/1bpp3p/p7/P2p1rP1/2P4R/1P2R1K1/5r2 w - - 0 30",
        },
      ],
    },
    {
      move: "Rg2",
      moveFen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP4R1/R2Q3K b - - 4 22",
      evalBefore: "-5.42",
      evalAfter: "-5.38",
      bestMovesBefore: [
        {
          move: "Rg2",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP1q2/PP4R1/R2Q3K b - - 4 22",
        },
        {
          move: "Be3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbq2/PP4R1/R2Q3K w - - 5 23",
        },
        {
          move: "Qxf3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbQ2/PP4R1/R6K b - - 0 23",
        },
        {
          move: "Rxf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP4R1/R6K w - - 0 24",
        },
        {
          move: "Re2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K b - - 1 24",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K w - - 2 25",
        },
        {
          move: "Kg2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R1K1/R7 b - - 3 25",
        },
        {
          move: "R8f4",
          fen: "2k5/p1p3p1/2pp3p/4p3/5rP1/2PPbr2/PP2R1K1/R7 w - - 4 26",
        },
        {
          move: "a4",
          fen: "2k5/p1p3p1/2pp3p/4p3/P4rP1/2PPbr2/1P2R1K1/R7 b - - 0 26",
        },
        {
          move: "a5",
          fen: "2k5/2p3p1/2pp3p/p3p3/P4rP1/2PPbr2/1P2R1K1/R7 w - - 0 27",
        },
        {
          move: "Rh1",
          fen: "2k5/2p3p1/2pp3p/p3p3/P4rP1/2PPbr2/1P2R1K1/7R b - - 1 27",
        },
        {
          move: "Bb6",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P4rP1/2PP1r2/1P2R1K1/7R w - - 2 28",
        },
        {
          move: "Rh3",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P4rP1/2PP1r1R/1P2R1K1/8 b - - 3 28",
        },
        {
          move: "Rf1",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P4rP1/2PP3R/1P2R1K1/5r2 w - - 4 29",
        },
        {
          move: "d4",
          fen: "2k5/2p3p1/1bpp3p/p3p3/P2P1rP1/2P4R/1P2R1K1/5r2 b - - 0 29",
        },
        {
          move: "exd4",
          fen: "2k5/2p3p1/1bpp3p/p7/P2p1rP1/2P4R/1P2R1K1/5r2 w - - 0 30",
        },
      ],
      bestMovesAfter: [
        {
          move: "Be3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbq2/PP4R1/R2Q3K w - - 5 23",
        },
        {
          move: "Qxf3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbQ2/PP4R1/R6K b - - 0 23",
        },
        {
          move: "Rxf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP4R1/R6K w - - 0 24",
        },
        {
          move: "Re2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K b - - 1 24",
        },
        {
          move: "Bf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5bP1/2PP1r2/PP2R3/R6K w - - 2 25",
        },
        {
          move: "d4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/3P1bP1/2P2r2/PP2R3/R6K b - - 0 25",
        },
        {
          move: "h5",
          fen: "2kr4/p1p3p1/2pp4/4p2p/3P1bP1/2P2r2/PP2R3/R6K w - - 0 26",
        },
        {
          move: "gxh5",
          fen: "2kr4/p1p3p1/2pp4/4p2P/3P1b2/2P2r2/PP2R3/R6K b - - 0 26",
        },
        {
          move: "Rh8",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P2r2/PP2R3/R6K w - - 1 27",
        },
        {
          move: "Kg2",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P2r2/PP2R1K1/R7 b - - 2 27",
        },
        {
          move: "Rg3+",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P3r1/PP2R1K1/R7 w - - 3 28",
        },
        {
          move: "Kf2",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P3r1/PP2RK2/R7 b - - 4 28",
        },
        {
          move: "Rxh5",
          fen: "2k5/p1p3p1/2pp4/4p2r/3P1b2/2P3r1/PP2RK2/R7 w - - 0 29",
        },
      ],
    },
    {
      move: "Qxd1+",
      moveFen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP4R1/R2q3K w - - 0 23",
      evalBefore: "-5.38",
      evalAfter: "-5.05",
      bestMovesBefore: [
        {
          move: "Be3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbq2/PP4R1/R2Q3K w - - 5 23",
        },
        {
          move: "Qxf3",
          fen: "2kr1r2/p1p3p1/2pp3p/4p3/6P1/2PPbQ2/PP4R1/R6K b - - 0 23",
        },
        {
          move: "Rxf3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP4R1/R6K w - - 0 24",
        },
        {
          move: "Re2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPbr2/PP2R3/R6K b - - 1 24",
        },
        {
          move: "Bf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5bP1/2PP1r2/PP2R3/R6K w - - 2 25",
        },
        {
          move: "d4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/3P1bP1/2P2r2/PP2R3/R6K b - - 0 25",
        },
        {
          move: "h5",
          fen: "2kr4/p1p3p1/2pp4/4p2p/3P1bP1/2P2r2/PP2R3/R6K w - - 0 26",
        },
        {
          move: "gxh5",
          fen: "2kr4/p1p3p1/2pp4/4p2P/3P1b2/2P2r2/PP2R3/R6K b - - 0 26",
        },
        {
          move: "Rh8",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P2r2/PP2R3/R6K w - - 1 27",
        },
        {
          move: "Kg2",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P2r2/PP2R1K1/R7 b - - 2 27",
        },
        {
          move: "Rg3+",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P3r1/PP2R1K1/R7 w - - 3 28",
        },
        {
          move: "Kf2",
          fen: "2k4r/p1p3p1/2pp4/4p2P/3P1b2/2P3r1/PP2RK2/R7 b - - 4 28",
        },
        {
          move: "Rxh5",
          fen: "2k5/p1p3p1/2pp4/4p2r/3P1b2/2P3r1/PP2RK2/R7 w - - 0 29",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rxd1",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP4R1/3R3K b - - 0 23",
        },
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/5rP1/2PP4/PP4R1/3R3K w - - 1 24",
        },
        {
          move: "b4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/1P3rP1/2PP4/P5R1/3R3K b - - 0 24",
        },
        {
          move: "Bf2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/1P3rP1/2PP4/P4bR1/3R3K w - - 1 25",
        },
        {
          move: "g5",
          fen: "2kr4/p1p3p1/2pp3p/4p1P1/1P3r2/2PP4/P4bR1/3R3K b - - 0 25",
        },
        {
          move: "Rh4+",
          fen: "2kr4/p1p3p1/2pp3p/4p1P1/1P5r/2PP4/P4bR1/3R3K w - - 1 26",
        },
        {
          move: "Rh2",
          fen: "2kr4/p1p3p1/2pp3p/4p1P1/1P5r/2PP4/P4b1R/3R3K b - - 2 26",
        },
        {
          move: "hxg5",
          fen: "2kr4/p1p3p1/2pp4/4p1p1/1P5r/2PP4/P4b1R/3R3K w - - 0 27",
        },
        {
          move: "Rxh4",
          fen: "2kr4/p1p3p1/2pp4/4p1p1/1P5R/2PP4/P4b2/3R3K b - - 0 27",
        },
        {
          move: "gxh4",
          fen: "2kr4/p1p3p1/2pp4/4p3/1P5p/2PP4/P4b2/3R3K w - - 0 28",
        },
      ],
    },
    {
      move: "Rxd1",
      moveFen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP4R1/3R3K b - - 0 23",
      evalBefore: "-5.05",
      evalAfter: "-5.19",
      bestMovesBefore: [
        {
          move: "Rxd1",
          fen: "2kr1r2/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP4R1/3R3K b - - 0 23",
        },
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/5rP1/2PP4/PP4R1/3R3K w - - 1 24",
        },
        {
          move: "b4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/1P3rP1/2PP4/P5R1/3R3K b - - 0 24",
        },
        {
          move: "Bf2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/1P3rP1/2PP4/P4bR1/3R3K w - - 1 25",
        },
        {
          move: "g5",
          fen: "2kr4/p1p3p1/2pp3p/4p1P1/1P3r2/2PP4/P4bR1/3R3K b - - 0 25",
        },
        {
          move: "Rh4+",
          fen: "2kr4/p1p3p1/2pp3p/4p1P1/1P5r/2PP4/P4bR1/3R3K w - - 1 26",
        },
        {
          move: "Rh2",
          fen: "2kr4/p1p3p1/2pp3p/4p1P1/1P5r/2PP4/P4b1R/3R3K b - - 2 26",
        },
        {
          move: "hxg5",
          fen: "2kr4/p1p3p1/2pp4/4p1p1/1P5r/2PP4/P4b1R/3R3K w - - 0 27",
        },
        {
          move: "Rxh4",
          fen: "2kr4/p1p3p1/2pp4/4p1p1/1P5R/2PP4/P4b2/3R3K b - - 0 27",
        },
        {
          move: "gxh4",
          fen: "2kr4/p1p3p1/2pp4/4p3/1P5p/2PP4/P4b2/3R3K w - - 0 28",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/5rP1/2PP4/PP4R1/3R3K w - - 1 24",
        },
        {
          move: "b4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/1P3rP1/2PP4/P5R1/3R3K b - - 0 24",
        },
        {
          move: "Bb6",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/1P3rP1/2PP4/P5R1/3R3K w - - 1 25",
        },
        {
          move: "a4",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/PP3rP1/2PP4/6R1/3R3K b - - 0 25",
        },
        {
          move: "a5",
          fen: "2kr4/2p3p1/1bpp3p/p3p3/PP3rP1/2PP4/6R1/3R3K w - - 0 26",
        },
        {
          move: "bxa5",
          fen: "2kr4/2p3p1/1bpp3p/P3p3/P4rP1/2PP4/6R1/3R3K b - - 0 26",
        },
        {
          move: "Bxa5",
          fen: "2kr4/2p3p1/2pp3p/b3p3/P4rP1/2PP4/6R1/3R3K w - - 0 27",
        },
        {
          move: "c4",
          fen: "2kr4/2p3p1/2pp3p/b3p3/P1P2rP1/3P4/6R1/3R3K b - - 0 27",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/2p3p1/2pp3p/b3p3/P1P2rP1/3P4/6R1/3R3K w - - 1 28",
        },
        {
          move: "Rg3",
          fen: "2k2r2/2p3p1/2pp3p/b3p3/P1P2rP1/3P2R1/8/3R3K b - - 2 28",
        },
        {
          move: "Bb6",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P2rP1/3P2R1/8/3R3K w - - 3 29",
        },
        {
          move: "Rg2",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P2rP1/3P4/6R1/3R3K b - - 4 29",
        },
        {
          move: "Rf3",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P3P1/3P1r2/6R1/3R3K w - - 5 30",
        },
        {
          move: "Kh2",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P3P1/3P1r2/6RK/3R4 b - - 6 30",
        },
        {
          move: "Be3",
          fen: "2k2r2/2p3p1/2pp3p/4p3/P1P3P1/3Pbr2/6RK/3R4 w - - 7 31",
        },
      ],
    },
    {
      move: "Rf2",
      moveFen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP3rR1/3R3K w - - 1 24",
      evalBefore: "-5.19",
      evalAfter: "-4.19",
      bestMovesBefore: [
        {
          move: "Rf4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/5rP1/2PP4/PP4R1/3R3K w - - 1 24",
        },
        {
          move: "b4",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/1P3rP1/2PP4/P5R1/3R3K b - - 0 24",
        },
        {
          move: "Bb6",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/1P3rP1/2PP4/P5R1/3R3K w - - 1 25",
        },
        {
          move: "a4",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/PP3rP1/2PP4/6R1/3R3K b - - 0 25",
        },
        {
          move: "a5",
          fen: "2kr4/2p3p1/1bpp3p/p3p3/PP3rP1/2PP4/6R1/3R3K w - - 0 26",
        },
        {
          move: "bxa5",
          fen: "2kr4/2p3p1/1bpp3p/P3p3/P4rP1/2PP4/6R1/3R3K b - - 0 26",
        },
        {
          move: "Bxa5",
          fen: "2kr4/2p3p1/2pp3p/b3p3/P4rP1/2PP4/6R1/3R3K w - - 0 27",
        },
        {
          move: "c4",
          fen: "2kr4/2p3p1/2pp3p/b3p3/P1P2rP1/3P4/6R1/3R3K b - - 0 27",
        },
        {
          move: "Rdf8",
          fen: "2k2r2/2p3p1/2pp3p/b3p3/P1P2rP1/3P4/6R1/3R3K w - - 1 28",
        },
        {
          move: "Rg3",
          fen: "2k2r2/2p3p1/2pp3p/b3p3/P1P2rP1/3P2R1/8/3R3K b - - 2 28",
        },
        {
          move: "Bb6",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P2rP1/3P2R1/8/3R3K w - - 3 29",
        },
        {
          move: "Rg2",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P2rP1/3P4/6R1/3R3K b - - 4 29",
        },
        {
          move: "Rf3",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P3P1/3P1r2/6R1/3R3K w - - 5 30",
        },
        {
          move: "Kh2",
          fen: "2k2r2/2p3p1/1bpp3p/4p3/P1P3P1/3P1r2/6RK/3R4 b - - 6 30",
        },
        {
          move: "Be3",
          fen: "2k2r2/2p3p1/2pp3p/4p3/P1P3P1/3Pbr2/6RK/3R4 w - - 7 31",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rxf2",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP3R2/3R3K b - - 0 24",
        },
        {
          move: "Bxf2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/3R3K w - - 0 25",
        },
        {
          move: "Kg2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3bK1/3R4 b - - 1 25",
        },
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/3R4 w - - 2 26",
        },
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/5R2 b - - 3 26",
        },
        {
          move: "Bf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5bP1/2PP4/PP4K1/5R2 w - - 4 27",
        },
        {
          move: "d4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/3P1bP1/2P5/PP4K1/5R2 b - - 0 27",
        },
        {
          move: "Kb7",
          fen: "3r4/pkp3p1/2pp3p/4p3/3P1bP1/2P5/PP4K1/5R2 w - - 1 28",
        },
        {
          move: "Kf3",
          fen: "3r4/pkp3p1/2pp3p/4p3/3P1bP1/2P2K2/PP6/5R2 b - - 2 28",
        },
        {
          move: "c5",
          fen: "3r4/pkp3p1/3p3p/2p1p3/3P1bP1/2P2K2/PP6/5R2 w - - 0 29",
        },
        {
          move: "dxc5",
          fen: "3r4/pkp3p1/3p3p/2P1p3/5bP1/2P2K2/PP6/5R2 b - - 0 29",
        },
        {
          move: "dxc5",
          fen: "3r4/pkp3p1/7p/2p1p3/5bP1/2P2K2/PP6/5R2 w - - 0 30",
        },
        {
          move: "Ke4",
          fen: "3r4/pkp3p1/7p/2p1p3/4KbP1/2P5/PP6/5R2 b - - 1 30",
        },
      ],
    },
    {
      move: "Rxf2",
      moveFen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP3R2/3R3K b - - 0 24",
      evalBefore: "-4.19",
      evalAfter: "-4.26",
      bestMovesBefore: [
        {
          move: "Rxf2",
          fen: "2kr4/p1p3p1/2pp3p/2b1p3/6P1/2PP4/PP3R2/3R3K b - - 0 24",
        },
        {
          move: "Bxf2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/3R3K w - - 0 25",
        },
        {
          move: "Kg2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3bK1/3R4 b - - 1 25",
        },
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/3R4 w - - 2 26",
        },
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/5R2 b - - 3 26",
        },
        {
          move: "Bf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5bP1/2PP4/PP4K1/5R2 w - - 4 27",
        },
        {
          move: "d4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/3P1bP1/2P5/PP4K1/5R2 b - - 0 27",
        },
        {
          move: "Kb7",
          fen: "3r4/pkp3p1/2pp3p/4p3/3P1bP1/2P5/PP4K1/5R2 w - - 1 28",
        },
        {
          move: "Kf3",
          fen: "3r4/pkp3p1/2pp3p/4p3/3P1bP1/2P2K2/PP6/5R2 b - - 2 28",
        },
        {
          move: "c5",
          fen: "3r4/pkp3p1/3p3p/2p1p3/3P1bP1/2P2K2/PP6/5R2 w - - 0 29",
        },
        {
          move: "dxc5",
          fen: "3r4/pkp3p1/3p3p/2P1p3/5bP1/2P2K2/PP6/5R2 b - - 0 29",
        },
        {
          move: "dxc5",
          fen: "3r4/pkp3p1/7p/2p1p3/5bP1/2P2K2/PP6/5R2 w - - 0 30",
        },
        {
          move: "Ke4",
          fen: "3r4/pkp3p1/7p/2p1p3/4KbP1/2P5/PP6/5R2 b - - 1 30",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/3R3K w - - 0 25",
        },
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/5R1K b - - 1 25",
        },
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP6/5R1K w - - 2 26",
        },
        {
          move: "Rf7",
          fen: "2kr4/p1p2Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 3 26",
        },
        {
          move: "Rd7",
          fen: "2k5/p1pr1Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 4 27",
        },
        {
          move: "Rf8+",
          fen: "2k2R2/p1pr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 5 27",
        },
        {
          move: "Kb7",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 6 28",
        },
        {
          move: "Kg2",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP4K1/8 b - - 7 28",
        },
        {
          move: "Bc1",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PP4/PP4K1/2b5 w - - 8 29",
        },
        {
          move: "Rf2",
          fen: "8/pkpr2p1/2pp3p/4p3/6P1/2PP4/PP3RK1/2b5 b - - 9 29",
        },
        {
          move: "c5",
          fen: "8/pkpr2p1/3p3p/2p1p3/6P1/2PP4/PP3RK1/2b5 w - - 0 30",
        },
        {
          move: "b4",
          fen: "8/pkpr2p1/3p3p/2p1p3/1P4P1/2PP4/P4RK1/2b5 b - - 0 30",
        },
        {
          move: "Kc6",
          fen: "8/p1pr2p1/2kp3p/2p1p3/1P4P1/2PP4/P4RK1/2b5 w - - 1 31",
        },
      ],
    },
    {
      move: "Bxf2",
      moveFen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/3R3K w - - 0 25",
      evalBefore: "-4.26",
      evalAfter: "-4.05",
      bestMovesBefore: [
        {
          move: "Bxf2",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/3R3K w - - 0 25",
        },
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/5R1K b - - 1 25",
        },
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP6/5R1K w - - 2 26",
        },
        {
          move: "Rf7",
          fen: "2kr4/p1p2Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 3 26",
        },
        {
          move: "Rd7",
          fen: "2k5/p1pr1Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 4 27",
        },
        {
          move: "Rf8+",
          fen: "2k2R2/p1pr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 5 27",
        },
        {
          move: "Kb7",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 6 28",
        },
        {
          move: "Kg2",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP4K1/8 b - - 7 28",
        },
        {
          move: "Bc1",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PP4/PP4K1/2b5 w - - 8 29",
        },
        {
          move: "Rf2",
          fen: "8/pkpr2p1/2pp3p/4p3/6P1/2PP4/PP3RK1/2b5 b - - 9 29",
        },
        {
          move: "c5",
          fen: "8/pkpr2p1/3p3p/2p1p3/6P1/2PP4/PP3RK1/2b5 w - - 0 30",
        },
        {
          move: "b4",
          fen: "8/pkpr2p1/3p3p/2p1p3/1P4P1/2PP4/P4RK1/2b5 b - - 0 30",
        },
        {
          move: "Kc6",
          fen: "8/p1pr2p1/2kp3p/2p1p3/1P4P1/2PP4/P4RK1/2b5 w - - 1 31",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/5R1K b - - 1 25",
        },
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP6/5R1K w - - 2 26",
        },
        {
          move: "Rf7",
          fen: "2kr4/p1p2Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 3 26",
        },
        {
          move: "Rd7",
          fen: "2k5/p1pr1Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 4 27",
        },
        {
          move: "Rf8+",
          fen: "2k2R2/p1pr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 5 27",
        },
        {
          move: "Kb7",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 6 28",
        },
        {
          move: "Kg2",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP4K1/8 b - - 7 28",
        },
        {
          move: "d5",
          fen: "5R2/pkpr2p1/2p4p/3pp3/6P1/2PPb3/PP4K1/8 w - - 0 29",
        },
        {
          move: "Kf3",
          fen: "5R2/pkpr2p1/2p4p/3pp3/6P1/2PPbK2/PP6/8 b - - 1 29",
        },
        {
          move: "Bc5",
          fen: "5R2/pkpr2p1/2p4p/2bpp3/6P1/2PP1K2/PP6/8 w - - 2 30",
        },
        {
          move: "Rf5",
          fen: "8/pkpr2p1/2p4p/2bppR2/6P1/2PP1K2/PP6/8 b - - 3 30",
        },
        {
          move: "Re7",
          fen: "8/pkp1r1p1/2p4p/2bppR2/6P1/2PP1K2/PP6/8 w - - 4 31",
        },
        {
          move: "Ke2",
          fen: "8/pkp1r1p1/2p4p/2bppR2/6P1/2PP4/PP2K3/8 b - - 5 31",
        },
        {
          move: "e4",
          fen: "8/pkp1r1p1/2p4p/2bp1R2/4p1P1/2PP4/PP2K3/8 w - - 0 32",
        },
        {
          move: "b3",
          fen: "8/pkp1r1p1/2p4p/2bp1R2/4p1P1/1PPP4/P3K3/8 b - - 0 32",
        },
      ],
    },
    {
      move: "Kg2",
      moveFen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3bK1/3R4 b - - 1 25",
      evalBefore: "-4.05",
      evalAfter: "-4.37",
      bestMovesBefore: [
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PP4/PP3b2/5R1K b - - 1 25",
        },
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP6/5R1K w - - 2 26",
        },
        {
          move: "Rf7",
          fen: "2kr4/p1p2Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 3 26",
        },
        {
          move: "Rd7",
          fen: "2k5/p1pr1Rp1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 4 27",
        },
        {
          move: "Rf8+",
          fen: "2k2R2/p1pr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K b - - 5 27",
        },
        {
          move: "Kb7",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP6/7K w - - 6 28",
        },
        {
          move: "Kg2",
          fen: "5R2/pkpr2p1/2pp3p/4p3/6P1/2PPb3/PP4K1/8 b - - 7 28",
        },
        {
          move: "d5",
          fen: "5R2/pkpr2p1/2p4p/3pp3/6P1/2PPb3/PP4K1/8 w - - 0 29",
        },
        {
          move: "Kf3",
          fen: "5R2/pkpr2p1/2p4p/3pp3/6P1/2PPbK2/PP6/8 b - - 1 29",
        },
        {
          move: "Bc5",
          fen: "5R2/pkpr2p1/2p4p/2bpp3/6P1/2PP1K2/PP6/8 w - - 2 30",
        },
        {
          move: "Rf5",
          fen: "8/pkpr2p1/2p4p/2bppR2/6P1/2PP1K2/PP6/8 b - - 3 30",
        },
        {
          move: "Re7",
          fen: "8/pkp1r1p1/2p4p/2bppR2/6P1/2PP1K2/PP6/8 w - - 4 31",
        },
        {
          move: "Ke2",
          fen: "8/pkp1r1p1/2p4p/2bppR2/6P1/2PP4/PP2K3/8 b - - 5 31",
        },
        {
          move: "e4",
          fen: "8/pkp1r1p1/2p4p/2bp1R2/4p1P1/2PP4/PP2K3/8 w - - 0 32",
        },
        {
          move: "b3",
          fen: "8/pkp1r1p1/2p4p/2bp1R2/4p1P1/1PPP4/P3K3/8 b - - 0 32",
        },
      ],
      bestMovesAfter: [
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/3R4 w - - 2 26",
        },
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/5R2 b - - 3 26",
        },
        {
          move: "Bf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5bP1/2PP4/PP4K1/5R2 w - - 4 27",
        },
        {
          move: "d4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/3P1bP1/2P5/PP4K1/5R2 b - - 0 27",
        },
        {
          move: "c5",
          fen: "2kr4/p1p3p1/3p3p/2p1p3/3P1bP1/2P5/PP4K1/5R2 w - - 0 28",
        },
        {
          move: "b4",
          fen: "2kr4/p1p3p1/3p3p/2p1p3/1P1P1bP1/2P5/P5K1/5R2 b - - 0 28",
        },
        {
          move: "cxd4",
          fen: "2kr4/p1p3p1/3p3p/4p3/1P1p1bP1/2P5/P5K1/5R2 w - - 0 29",
        },
        {
          move: "cxd4",
          fen: "2kr4/p1p3p1/3p3p/4p3/1P1P1bP1/8/P5K1/5R2 b - - 0 29",
        },
        {
          move: "g6",
          fen: "2kr4/p1p5/3p2pp/4p3/1P1P1bP1/8/P5K1/5R2 w - - 0 30",
        },
        {
          move: "dxe5",
          fen: "2kr4/p1p5/3p2pp/4P3/1P3bP1/8/P5K1/5R2 b - - 0 30",
        },
        {
          move: "dxe5",
          fen: "2kr4/p1p5/6pp/4p3/1P3bP1/8/P5K1/5R2 w - - 0 31",
        },
        {
          move: "a3",
          fen: "2kr4/p1p5/6pp/4p3/1P3bP1/P7/6K1/5R2 b - - 0 31",
        },
      ],
    },
    {
      move: "Bb6",
      moveFen: "2kr4/p1p3p1/1bpp3p/4p3/6P1/2PP4/PP4K1/3R4 w - - 2 26",
      evalBefore: "-4.37",
      evalAfter: "-4.05",
      bestMovesBefore: [
        {
          move: "Be3",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/3R4 w - - 2 26",
        },
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/2pp3p/4p3/6P1/2PPb3/PP4K1/5R2 b - - 3 26",
        },
        {
          move: "Bf4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/5bP1/2PP4/PP4K1/5R2 w - - 4 27",
        },
        {
          move: "d4",
          fen: "2kr4/p1p3p1/2pp3p/4p3/3P1bP1/2P5/PP4K1/5R2 b - - 0 27",
        },
        {
          move: "c5",
          fen: "2kr4/p1p3p1/3p3p/2p1p3/3P1bP1/2P5/PP4K1/5R2 w - - 0 28",
        },
        {
          move: "b4",
          fen: "2kr4/p1p3p1/3p3p/2p1p3/1P1P1bP1/2P5/P5K1/5R2 b - - 0 28",
        },
        {
          move: "cxd4",
          fen: "2kr4/p1p3p1/3p3p/4p3/1P1p1bP1/2P5/P5K1/5R2 w - - 0 29",
        },
        {
          move: "cxd4",
          fen: "2kr4/p1p3p1/3p3p/4p3/1P1P1bP1/8/P5K1/5R2 b - - 0 29",
        },
        {
          move: "g6",
          fen: "2kr4/p1p5/3p2pp/4p3/1P1P1bP1/8/P5K1/5R2 w - - 0 30",
        },
        {
          move: "dxe5",
          fen: "2kr4/p1p5/3p2pp/4P3/1P3bP1/8/P5K1/5R2 b - - 0 30",
        },
        {
          move: "dxe5",
          fen: "2kr4/p1p5/6pp/4p3/1P3bP1/8/P5K1/5R2 w - - 0 31",
        },
        {
          move: "a3",
          fen: "2kr4/p1p5/6pp/4p3/1P3bP1/P7/6K1/5R2 b - - 0 31",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/6P1/2PP4/PP4K1/5R2 b - - 3 26",
        },
        {
          move: "d5",
          fen: "2kr4/p1p3p1/1bp4p/3pp3/6P1/2PP4/PP4K1/5R2 w - - 0 27",
        },
        {
          move: "Rf7",
          fen: "2kr4/p1p2Rp1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 b - - 1 27",
        },
        {
          move: "Rd7",
          fen: "2k5/p1pr1Rp1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 w - - 2 28",
        },
        {
          move: "Rf8+",
          fen: "2k2R2/p1pr2p1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 b - - 3 28",
        },
        {
          move: "Kb7",
          fen: "5R2/pkpr2p1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 w - - 4 29",
        },
        {
          move: "Kf3",
          fen: "5R2/pkpr2p1/1bp4p/3pp3/6P1/2PP1K2/PP6/8 b - - 5 29",
        },
        {
          move: "Bc5",
          fen: "5R2/pkpr2p1/2p4p/2bpp3/6P1/2PP1K2/PP6/8 w - - 6 30",
        },
        {
          move: "Rf5",
          fen: "8/pkpr2p1/2p4p/2bppR2/6P1/2PP1K2/PP6/8 b - - 7 30",
        },
        {
          move: "g6",
          fen: "8/pkpr4/2p3pp/2bppR2/6P1/2PP1K2/PP6/8 w - - 0 31",
        },
        {
          move: "Rf6",
          fen: "8/pkpr4/2p2Rpp/2bpp3/6P1/2PP1K2/PP6/8 b - - 1 31",
        },
        {
          move: "Rd6",
          fen: "8/pkp5/2pr1Rpp/2bpp3/6P1/2PP1K2/PP6/8 w - - 2 32",
        },
      ],
    },
    {
      move: "Kh3",
      moveFen: "2kr4/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP6/3R4 b - - 3 26",
      evalBefore: "-4.05",
      evalAfter: "-4.76",
      bestMovesBefore: [
        {
          move: "Rf1",
          fen: "2kr4/p1p3p1/1bpp3p/4p3/6P1/2PP4/PP4K1/5R2 b - - 3 26",
        },
        {
          move: "d5",
          fen: "2kr4/p1p3p1/1bp4p/3pp3/6P1/2PP4/PP4K1/5R2 w - - 0 27",
        },
        {
          move: "Rf7",
          fen: "2kr4/p1p2Rp1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 b - - 1 27",
        },
        {
          move: "Rd7",
          fen: "2k5/p1pr1Rp1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 w - - 2 28",
        },
        {
          move: "Rf8+",
          fen: "2k2R2/p1pr2p1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 b - - 3 28",
        },
        {
          move: "Kb7",
          fen: "5R2/pkpr2p1/1bp4p/3pp3/6P1/2PP4/PP4K1/8 w - - 4 29",
        },
        {
          move: "Kf3",
          fen: "5R2/pkpr2p1/1bp4p/3pp3/6P1/2PP1K2/PP6/8 b - - 5 29",
        },
        {
          move: "Bc5",
          fen: "5R2/pkpr2p1/2p4p/2bpp3/6P1/2PP1K2/PP6/8 w - - 6 30",
        },
        {
          move: "Rf5",
          fen: "8/pkpr2p1/2p4p/2bppR2/6P1/2PP1K2/PP6/8 b - - 7 30",
        },
        {
          move: "g6",
          fen: "8/pkpr4/2p3pp/2bppR2/6P1/2PP1K2/PP6/8 w - - 0 31",
        },
        {
          move: "Rf6",
          fen: "8/pkpr4/2p2Rpp/2bpp3/6P1/2PP1K2/PP6/8 b - - 1 31",
        },
        {
          move: "Rd6",
          fen: "8/pkp5/2pr1Rpp/2bpp3/6P1/2PP1K2/PP6/8 w - - 2 32",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf8",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP6/3R4 w - - 4 27",
        },
        {
          move: "Rd2",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP1R4/8 b - - 5 27",
        },
        {
          move: "g6",
          fen: "2k2r2/p1p5/1bpp2pp/4p3/6P1/2PP3K/PP1R4/8 w - - 0 28",
        },
        {
          move: "Kg3",
          fen: "2k2r2/p1p5/1bpp2pp/4p3/6P1/2PP2K1/PP1R4/8 b - - 1 28",
        },
        {
          move: "Be3",
          fen: "2k2r2/p1p5/2pp2pp/4p3/6P1/2PPb1K1/PP1R4/8 w - - 2 29",
        },
        {
          move: "Re2",
          fen: "2k2r2/p1p5/2pp2pp/4p3/6P1/2PPb1K1/PP2R3/8 b - - 3 29",
        },
        {
          move: "Bg5",
          fen: "2k2r2/p1p5/2pp2pp/4p1b1/6P1/2PP2K1/PP2R3/8 w - - 4 30",
        },
        {
          move: "Kg2",
          fen: "2k2r2/p1p5/2pp2pp/4p1b1/6P1/2PP4/PP2R1K1/8 b - - 5 30",
        },
        {
          move: "Bh4",
          fen: "2k2r2/p1p5/2pp2pp/4p3/6Pb/2PP4/PP2R1K1/8 w - - 6 31",
        },
        {
          move: "b4",
          fen: "2k2r2/p1p5/2pp2pp/4p3/1P4Pb/2PP4/P3R1K1/8 b - - 0 31",
        },
        {
          move: "Kd7",
          fen: "5r2/p1pk4/2pp2pp/4p3/1P4Pb/2PP4/P3R1K1/8 w - - 1 32",
        },
        {
          move: "Kh3",
          fen: "5r2/p1pk4/2pp2pp/4p3/1P4Pb/2PP3K/P3R3/8 b - - 2 32",
        },
        {
          move: "g5",
          fen: "5r2/p1pk4/2pp3p/4p1p1/1P4Pb/2PP3K/P3R3/8 w - - 0 33",
        },
        {
          move: "Kg2",
          fen: "5r2/p1pk4/2pp3p/4p1p1/1P4Pb/2PP4/P3R1K1/8 b - - 1 33",
        },
        {
          move: "Rf4",
          fen: "8/p1pk4/2pp3p/4p1p1/1P3rPb/2PP4/P3R1K1/8 w - - 2 34",
        },
      ],
    },
    {
      move: "Rf8",
      moveFen: "2k2r2/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP6/3R4 w - - 4 27",
      evalBefore: "-4.76",
      evalAfter: "-4.87",
      bestMovesBefore: [
        {
          move: "Rf8",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP6/3R4 w - - 4 27",
        },
        {
          move: "Rd2",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP1R4/8 b - - 5 27",
        },
        {
          move: "g6",
          fen: "2k2r2/p1p5/1bpp2pp/4p3/6P1/2PP3K/PP1R4/8 w - - 0 28",
        },
        {
          move: "Kg3",
          fen: "2k2r2/p1p5/1bpp2pp/4p3/6P1/2PP2K1/PP1R4/8 b - - 1 28",
        },
        {
          move: "Be3",
          fen: "2k2r2/p1p5/2pp2pp/4p3/6P1/2PPb1K1/PP1R4/8 w - - 2 29",
        },
        {
          move: "Re2",
          fen: "2k2r2/p1p5/2pp2pp/4p3/6P1/2PPb1K1/PP2R3/8 b - - 3 29",
        },
        {
          move: "Bg5",
          fen: "2k2r2/p1p5/2pp2pp/4p1b1/6P1/2PP2K1/PP2R3/8 w - - 4 30",
        },
        {
          move: "Kg2",
          fen: "2k2r2/p1p5/2pp2pp/4p1b1/6P1/2PP4/PP2R1K1/8 b - - 5 30",
        },
        {
          move: "Bh4",
          fen: "2k2r2/p1p5/2pp2pp/4p3/6Pb/2PP4/PP2R1K1/8 w - - 6 31",
        },
        {
          move: "b4",
          fen: "2k2r2/p1p5/2pp2pp/4p3/1P4Pb/2PP4/P3R1K1/8 b - - 0 31",
        },
        {
          move: "Kd7",
          fen: "5r2/p1pk4/2pp2pp/4p3/1P4Pb/2PP4/P3R1K1/8 w - - 1 32",
        },
        {
          move: "Kh3",
          fen: "5r2/p1pk4/2pp2pp/4p3/1P4Pb/2PP3K/P3R3/8 b - - 2 32",
        },
        {
          move: "g5",
          fen: "5r2/p1pk4/2pp3p/4p1p1/1P4Pb/2PP3K/P3R3/8 w - - 0 33",
        },
        {
          move: "Kg2",
          fen: "5r2/p1pk4/2pp3p/4p1p1/1P4Pb/2PP4/P3R1K1/8 b - - 1 33",
        },
        {
          move: "Rf4",
          fen: "8/p1pk4/2pp3p/4p1p1/1P3rPb/2PP4/P3R1K1/8 w - - 2 34",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rd2",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP1R4/8 b - - 5 27",
        },
        {
          move: "Be3",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPb2K/PP1R4/8 w - - 6 28",
        },
        {
          move: "Rc2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPb2K/PPR5/8 b - - 7 28",
        },
        {
          move: "c5",
          fen: "2k2r2/p1p3p1/3p3p/2p1p3/6P1/2PPb2K/PPR5/8 w - - 0 29",
        },
        {
          move: "Kg2",
          fen: "2k2r2/p1p3p1/3p3p/2p1p3/6P1/2PPb3/PPR3K1/8 b - - 1 29",
        },
        {
          move: "Rf4",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5rP1/2PPb3/PPR3K1/8 w - - 2 30",
        },
        {
          move: "Re2",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5rP1/2PPb3/PP2R1K1/8 b - - 3 30",
        },
        {
          move: "Bc1",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5rP1/2PP4/PP2R1K1/2b5 w - - 4 31",
        },
        {
          move: "Re4",
          fen: "2k5/p1p3p1/3p3p/2p1p3/4RrP1/2PP4/PP4K1/2b5 b - - 5 31",
        },
        {
          move: "Bxb2",
          fen: "2k5/p1p3p1/3p3p/2p1p3/4RrP1/2PP4/Pb4K1/8 w - - 0 32",
        },
        {
          move: "Rxf4",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5RP1/2PP4/Pb4K1/8 b - - 0 32",
        },
        {
          move: "exf4",
          fen: "2k5/p1p3p1/3p3p/2p5/5pP1/2PP4/Pb4K1/8 w - - 0 33",
        },
      ],
    },
    {
      move: "Kh4",
      moveFen: "2k2r2/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP6/3R4 b - - 5 27",
      evalBefore: "-4.87",
      evalAfter: "-5.25",
      bestMovesBefore: [
        {
          move: "Rd2",
          fen: "2k2r2/p1p3p1/1bpp3p/4p3/6P1/2PP3K/PP1R4/8 b - - 5 27",
        },
        {
          move: "Be3",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPb2K/PP1R4/8 w - - 6 28",
        },
        {
          move: "Rc2",
          fen: "2k2r2/p1p3p1/2pp3p/4p3/6P1/2PPb2K/PPR5/8 b - - 7 28",
        },
        {
          move: "c5",
          fen: "2k2r2/p1p3p1/3p3p/2p1p3/6P1/2PPb2K/PPR5/8 w - - 0 29",
        },
        {
          move: "Kg2",
          fen: "2k2r2/p1p3p1/3p3p/2p1p3/6P1/2PPb3/PPR3K1/8 b - - 1 29",
        },
        {
          move: "Rf4",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5rP1/2PPb3/PPR3K1/8 w - - 2 30",
        },
        {
          move: "Re2",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5rP1/2PPb3/PP2R1K1/8 b - - 3 30",
        },
        {
          move: "Bc1",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5rP1/2PP4/PP2R1K1/2b5 w - - 4 31",
        },
        {
          move: "Re4",
          fen: "2k5/p1p3p1/3p3p/2p1p3/4RrP1/2PP4/PP4K1/2b5 b - - 5 31",
        },
        {
          move: "Bxb2",
          fen: "2k5/p1p3p1/3p3p/2p1p3/4RrP1/2PP4/Pb4K1/8 w - - 0 32",
        },
        {
          move: "Rxf4",
          fen: "2k5/p1p3p1/3p3p/2p1p3/5RP1/2PP4/Pb4K1/8 b - - 0 32",
        },
        {
          move: "exf4",
          fen: "2k5/p1p3p1/3p3p/2p5/5pP1/2PP4/Pb4K1/8 w - - 0 33",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP3r2/3R4 w - - 6 28",
        },
        {
          move: "b3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/1PPP4/P4r2/3R4 b - - 0 28",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/1PPP4/P6r/3R4 w - - 1 29",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/1PPP2K1/P6r/3R4 b - - 2 29",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/1PPP2K1/r7/3R4 w - - 0 30",
        },
        {
          move: "b4",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/r7/3R4 b - - 0 30",
        },
        {
          move: "Rc2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/2r5/3R4 w - - 1 31",
        },
        {
          move: "c4",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1PP3P1/3P2K1/2r5/3R4 b - - 0 31",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/1bpp3p/4p3/1PP3P1/3P2K1/2r5/3R4 w - - 1 32",
        },
        {
          move: "g5",
          fen: "8/p1pk2p1/1bpp3p/4p1P1/1PP5/3P2K1/2r5/3R4 b - - 0 32",
        },
        {
          move: "hxg5",
          fen: "8/p1pk2p1/1bpp4/4p1p1/1PP5/3P2K1/2r5/3R4 w - - 0 33",
        },
        {
          move: "Kg4",
          fen: "8/p1pk2p1/1bpp4/4p1p1/1PP3K1/3P4/2r5/3R4 b - - 1 33",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/1bppk3/4p1p1/1PP3K1/3P4/2r5/3R4 w - - 2 34",
        },
      ],
    },
    {
      move: "Rf2",
      moveFen: "2k5/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP3r2/3R4 w - - 6 28",
      evalBefore: "-5.25",
      evalAfter: "-5.37",
      bestMovesBefore: [
        {
          move: "Rf2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP3r2/3R4 w - - 6 28",
        },
        {
          move: "b3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/1PPP4/P4r2/3R4 b - - 0 28",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/1PPP4/P6r/3R4 w - - 1 29",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/1PPP2K1/P6r/3R4 b - - 2 29",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/1PPP2K1/r7/3R4 w - - 0 30",
        },
        {
          move: "b4",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/r7/3R4 b - - 0 30",
        },
        {
          move: "Rc2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/2r5/3R4 w - - 1 31",
        },
        {
          move: "c4",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1PP3P1/3P2K1/2r5/3R4 b - - 0 31",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/1bpp3p/4p3/1PP3P1/3P2K1/2r5/3R4 w - - 1 32",
        },
        {
          move: "g5",
          fen: "8/p1pk2p1/1bpp3p/4p1P1/1PP5/3P2K1/2r5/3R4 b - - 0 32",
        },
        {
          move: "hxg5",
          fen: "8/p1pk2p1/1bpp4/4p1p1/1PP5/3P2K1/2r5/3R4 w - - 0 33",
        },
        {
          move: "Kg4",
          fen: "8/p1pk2p1/1bpp4/4p1p1/1PP3K1/3P4/2r5/3R4 b - - 1 33",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/1bppk3/4p1p1/1PP3K1/3P4/2r5/3R4 w - - 2 34",
        },
      ],
      bestMovesAfter: [
        {
          move: "b4",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4PK/2PP4/P4r2/3R4 b - - 0 28",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4PK/2PP4/P6r/3R4 w - - 1 29",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/P6r/3R4 b - - 2 29",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/r7/3R4 w - - 0 30",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/1bpp3p/4p1P1/1P6/2PP2K1/r7/3R4 b - - 0 30",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1P6/2PP2K1/r7/3R4 w - - 0 31",
        },
        {
          move: "Kg4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1P4K1/2PP4/r7/3R4 b - - 1 31",
        },
        {
          move: "Rc2",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1P4K1/2PP4/2r5/3R4 w - - 2 32",
        },
        {
          move: "c4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1PP3K1/3P4/2r5/3R4 b - - 0 32",
        },
        {
          move: "Rg2+",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1PP3K1/3P4/6r1/3R4 w - - 1 33",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/1bpp4/4pKp1/1PP5/3P4/6r1/3R4 b - - 2 33",
        },
        {
          move: "Be3",
          fen: "2k5/p1p3p1/2pp4/4pKp1/1PP5/3Pb3/6r1/3R4 w - - 3 34",
        },
        {
          move: "b5",
          fen: "2k5/p1p3p1/2pp4/1P2pKp1/2P5/3Pb3/6r1/3R4 b - - 0 34",
        },
        {
          move: "cxb5",
          fen: "2k5/p1p3p1/3p4/1p2pKp1/2P5/3Pb3/6r1/3R4 w - - 0 35",
        },
        {
          move: "cxb5",
          fen: "2k5/p1p3p1/3p4/1P2pKp1/8/3Pb3/6r1/3R4 b - - 0 35",
        },
      ],
    },
    {
      move: "Rb1",
      moveFen: "2k5/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP3r2/1R6 b - - 7 28",
      evalBefore: "-5.37",
      evalAfter: "-5.44",
      bestMovesBefore: [
        {
          move: "b4",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4PK/2PP4/P4r2/3R4 b - - 0 28",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4PK/2PP4/P6r/3R4 w - - 1 29",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/P6r/3R4 b - - 2 29",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/1P4P1/2PP2K1/r7/3R4 w - - 0 30",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/1bpp3p/4p1P1/1P6/2PP2K1/r7/3R4 b - - 0 30",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1P6/2PP2K1/r7/3R4 w - - 0 31",
        },
        {
          move: "Kg4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1P4K1/2PP4/r7/3R4 b - - 1 31",
        },
        {
          move: "Rc2",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1P4K1/2PP4/2r5/3R4 w - - 2 32",
        },
        {
          move: "c4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1PP3K1/3P4/2r5/3R4 b - - 0 32",
        },
        {
          move: "Rg2+",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/1PP3K1/3P4/6r1/3R4 w - - 1 33",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/1bpp4/4pKp1/1PP5/3P4/6r1/3R4 b - - 2 33",
        },
        {
          move: "Be3",
          fen: "2k5/p1p3p1/2pp4/4pKp1/1PP5/3Pb3/6r1/3R4 w - - 3 34",
        },
        {
          move: "b5",
          fen: "2k5/p1p3p1/2pp4/1P2pKp1/2P5/3Pb3/6r1/3R4 b - - 0 34",
        },
        {
          move: "cxb5",
          fen: "2k5/p1p3p1/3p4/1p2pKp1/2P5/3Pb3/6r1/3R4 w - - 0 35",
        },
        {
          move: "cxb5",
          fen: "2k5/p1p3p1/3p4/1P2pKp1/8/3Pb3/6r1/3R4 b - - 0 35",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP5r/1R6 w - - 8 29",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/2PP2K1/PP5r/1R6 b - - 9 29",
        },
        {
          move: "Rd2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/2PP2K1/PP1r4/1R6 w - - 10 30",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/1bpp3p/4p1P1/8/2PP2K1/PP1r4/1R6 b - - 0 30",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/8/2PP2K1/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "a4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/P7/2PP2K1/1P1r4/1R6 b - - 0 31",
        },
        {
          move: "Rxd3+",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/P7/2Pr2K1/1P6/1R6 w - - 0 32",
        },
        {
          move: "Kg4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/P5K1/2Pr4/1P6/1R6 b - - 1 32",
        },
        {
          move: "e4",
          fen: "2k5/p1p3p1/1bpp4/6p1/P3p1K1/2Pr4/1P6/1R6 w - - 0 33",
        },
        {
          move: "Re1",
          fen: "2k5/p1p3p1/1bpp4/6p1/P3p1K1/2Pr4/1P6/4R3 b - - 1 33",
        },
        {
          move: "e3",
          fen: "2k5/p1p3p1/1bpp4/6p1/P5K1/2Prp3/1P6/4R3 w - - 0 34",
        },
        {
          move: "a5",
          fen: "2k5/p1p3p1/1bpp4/P5p1/6K1/2Prp3/1P6/4R3 b - - 0 34",
        },
        {
          move: "Bxa5",
          fen: "2k5/p1p3p1/2pp4/b5p1/6K1/2Prp3/1P6/4R3 w - - 0 35",
        },
        {
          move: "Kxg5",
          fen: "2k5/p1p3p1/2pp4/b5K1/8/2Prp3/1P6/4R3 b - - 0 35",
        },
        {
          move: "Bb6",
          fen: "2k5/p1p3p1/1bpp4/6K1/8/2Prp3/1P6/4R3 w - - 1 36",
        },
        {
          move: "Kg4",
          fen: "2k5/p1p3p1/1bpp4/8/6K1/2Prp3/1P6/4R3 b - - 2 36",
        },
        {
          move: "Rd2",
          fen: "2k5/p1p3p1/1bpp4/8/6K1/2P1p3/1P1r4/4R3 w - - 3 37",
        },
      ],
    },
    {
      move: "Rd2",
      moveFen: "2k5/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP1r4/1R6 w - - 8 29",
      evalBefore: "-5.44",
      evalAfter: "-5.30",
      bestMovesBefore: [
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6PK/2PP4/PP5r/1R6 w - - 8 29",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/2PP2K1/PP5r/1R6 b - - 9 29",
        },
        {
          move: "Rd2",
          fen: "2k5/p1p3p1/1bpp3p/4p3/6P1/2PP2K1/PP1r4/1R6 w - - 10 30",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/1bpp3p/4p1P1/8/2PP2K1/PP1r4/1R6 b - - 0 30",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/8/2PP2K1/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "a4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/P7/2PP2K1/1P1r4/1R6 b - - 0 31",
        },
        {
          move: "Rxd3+",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/P7/2Pr2K1/1P6/1R6 w - - 0 32",
        },
        {
          move: "Kg4",
          fen: "2k5/p1p3p1/1bpp4/4p1p1/P5K1/2Pr4/1P6/1R6 b - - 1 32",
        },
        {
          move: "e4",
          fen: "2k5/p1p3p1/1bpp4/6p1/P3p1K1/2Pr4/1P6/1R6 w - - 0 33",
        },
        {
          move: "Re1",
          fen: "2k5/p1p3p1/1bpp4/6p1/P3p1K1/2Pr4/1P6/4R3 b - - 1 33",
        },
        {
          move: "e3",
          fen: "2k5/p1p3p1/1bpp4/6p1/P5K1/2Prp3/1P6/4R3 w - - 0 34",
        },
        {
          move: "a5",
          fen: "2k5/p1p3p1/1bpp4/P5p1/6K1/2Prp3/1P6/4R3 b - - 0 34",
        },
        {
          move: "Bxa5",
          fen: "2k5/p1p3p1/2pp4/b5p1/6K1/2Prp3/1P6/4R3 w - - 0 35",
        },
        {
          move: "Kxg5",
          fen: "2k5/p1p3p1/2pp4/b5K1/8/2Prp3/1P6/4R3 b - - 0 35",
        },
        {
          move: "Bb6",
          fen: "2k5/p1p3p1/1bpp4/6K1/8/2Prp3/1P6/4R3 w - - 1 36",
        },
        {
          move: "Kg4",
          fen: "2k5/p1p3p1/1bpp4/8/6K1/2Prp3/1P6/4R3 b - - 2 36",
        },
        {
          move: "Rd2",
          fen: "2k5/p1p3p1/1bpp4/8/6K1/2P1p3/1P1r4/4R3 w - - 3 37",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kh5",
          fen: "2k5/p1p3p1/1bpp3p/4p2K/6P1/2PP4/PP1r4/1R6 b - - 9 29",
        },
        {
          move: "Rxd3",
          fen: "2k5/p1p3p1/1bpp3p/4p2K/6P1/2Pr4/PP6/1R6 w - - 0 30",
        },
        {
          move: "a4",
          fen: "2k5/p1p3p1/1bpp3p/4p2K/P5P1/2Pr4/1P6/1R6 b - - 0 30",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/1bpp3p/4p2K/P5P1/2Pr4/1P6/1R6 w - - 1 31",
        },
        {
          move: "a5",
          fen: "8/p1pk2p1/1bpp3p/P3p2K/6P1/2Pr4/1P6/1R6 b - - 0 31",
        },
        {
          move: "Bf2",
          fen: "8/p1pk2p1/2pp3p/P3p2K/6P1/2Pr4/1P3b2/1R6 w - - 1 32",
        },
        {
          move: "Kg6",
          fen: "8/p1pk2p1/2pp2Kp/P3p3/6P1/2Pr4/1P3b2/1R6 b - - 2 32",
        },
        {
          move: "Rg3",
          fen: "8/p1pk2p1/2pp2Kp/P3p3/6P1/2P3r1/1P3b2/1R6 w - - 3 33",
        },
        {
          move: "Kxg7",
          fen: "8/p1pk2K1/2pp3p/P3p3/6P1/2P3r1/1P3b2/1R6 b - - 0 33",
        },
        {
          move: "e4",
          fen: "8/p1pk2K1/2pp3p/P7/4p1P1/2P3r1/1P3b2/1R6 w - - 0 34",
        },
      ],
    },
    {
      move: "d4",
      moveFen: "2k5/p1p3p1/1bpp3p/4p3/3P2PK/2P5/PP1r4/1R6 b - - 0 29",
      evalBefore: "-5.30",
      evalAfter: "-6.13",
      bestMovesBefore: [
        {
          move: "Kh5",
          fen: "2k5/p1p3p1/1bpp3p/4p2K/6P1/2PP4/PP1r4/1R6 b - - 9 29",
        },
        {
          move: "Rxd3",
          fen: "2k5/p1p3p1/1bpp3p/4p2K/6P1/2Pr4/PP6/1R6 w - - 0 30",
        },
        {
          move: "a4",
          fen: "2k5/p1p3p1/1bpp3p/4p2K/P5P1/2Pr4/1P6/1R6 b - - 0 30",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/1bpp3p/4p2K/P5P1/2Pr4/1P6/1R6 w - - 1 31",
        },
        {
          move: "a5",
          fen: "8/p1pk2p1/1bpp3p/P3p2K/6P1/2Pr4/1P6/1R6 b - - 0 31",
        },
        {
          move: "Bf2",
          fen: "8/p1pk2p1/2pp3p/P3p2K/6P1/2Pr4/1P3b2/1R6 w - - 1 32",
        },
        {
          move: "Kg6",
          fen: "8/p1pk2p1/2pp2Kp/P3p3/6P1/2Pr4/1P3b2/1R6 b - - 2 32",
        },
        {
          move: "Rg3",
          fen: "8/p1pk2p1/2pp2Kp/P3p3/6P1/2P3r1/1P3b2/1R6 w - - 3 33",
        },
        {
          move: "Kxg7",
          fen: "8/p1pk2K1/2pp3p/P3p3/6P1/2P3r1/1P3b2/1R6 b - - 0 33",
        },
        {
          move: "e4",
          fen: "8/p1pk2K1/2pp3p/P7/4p1P1/2P3r1/1P3b2/1R6 w - - 0 34",
        },
      ],
      bestMovesAfter: [
        {
          move: "exd4",
          fen: "2k5/p1p3p1/1bpp3p/8/3p2PK/2P5/PP1r4/1R6 w - - 0 30",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/8/3p2P1/2P3K1/PP1r4/1R6 b - - 1 30",
        },
        {
          move: "d3",
          fen: "2k5/p1p3p1/1bpp3p/8/6P1/2Pp2K1/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "Rf1",
          fen: "2k5/p1p3p1/1bpp3p/8/6P1/2Pp2K1/PP1r4/5R2 b - - 1 31",
        },
        {
          move: "d5",
          fen: "2k5/p1p3p1/1bp4p/3p4/6P1/2Pp2K1/PP1r4/5R2 w - - 0 32",
        },
        {
          move: "b4",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2Pp2K1/P2r4/5R2 b - - 0 32",
        },
        {
          move: "Re2",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2Pp2K1/P3r3/5R2 w - - 1 33",
        },
        {
          move: "Rd1",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2Pp2K1/P3r3/3R4 b - - 2 33",
        },
        {
          move: "d2",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2P3K1/P2pr3/3R4 w - - 0 34",
        },
      ],
    },
    {
      move: "exd4",
      moveFen: "2k5/p1p3p1/1bpp3p/8/3p2PK/2P5/PP1r4/1R6 w - - 0 30",
      evalBefore: "-6.13",
      evalAfter: "-6.24",
      bestMovesBefore: [
        {
          move: "exd4",
          fen: "2k5/p1p3p1/1bpp3p/8/3p2PK/2P5/PP1r4/1R6 w - - 0 30",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/1bpp3p/8/3p2P1/2P3K1/PP1r4/1R6 b - - 1 30",
        },
        {
          move: "d3",
          fen: "2k5/p1p3p1/1bpp3p/8/6P1/2Pp2K1/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "Rf1",
          fen: "2k5/p1p3p1/1bpp3p/8/6P1/2Pp2K1/PP1r4/5R2 b - - 1 31",
        },
        {
          move: "d5",
          fen: "2k5/p1p3p1/1bp4p/3p4/6P1/2Pp2K1/PP1r4/5R2 w - - 0 32",
        },
        {
          move: "b4",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2Pp2K1/P2r4/5R2 b - - 0 32",
        },
        {
          move: "Re2",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2Pp2K1/P3r3/5R2 w - - 1 33",
        },
        {
          move: "Rd1",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2Pp2K1/P3r3/3R4 b - - 2 33",
        },
        {
          move: "d2",
          fen: "2k5/p1p3p1/1bp4p/3p4/1P4P1/2P3K1/P2pr3/3R4 w - - 0 34",
        },
      ],
      bestMovesAfter: [
        {
          move: "cxd4",
          fen: "2k5/p1p3p1/1bpp3p/8/3P2PK/8/PP1r4/1R6 b - - 0 30",
        },
        {
          move: "Bxd4",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/8/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "b3",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/1P6/P2r4/1R6 b - - 0 31",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/1P6/P6r/1R6 w - - 1 32",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/8/3b2P1/1P4K1/P6r/1R6 b - - 2 32",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/8/3b2P1/1P4K1/r7/1R6 w - - 0 33",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/2pp3p/8/3b2P1/1P3K2/r7/1R6 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p3p/2p5/3b2P1/1P3K2/r7/1R6 w - - 0 34",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/3p3p/2p5/3b2P1/1P4K1/r7/1R6 b - - 1 34",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/3p3p/2p5/3b2P1/1P4K1/r7/1R6 w - - 2 35",
        },
        {
          move: "Rf1",
          fen: "8/p1pk2p1/3p3p/2p5/3b2P1/1P4K1/r7/5R2 b - - 3 35",
        },
        {
          move: "Be5+",
          fen: "8/p1pk2p1/3p3p/2p1b3/6P1/1P4K1/r7/5R2 w - - 4 36",
        },
        {
          move: "Kf3",
          fen: "8/p1pk2p1/3p3p/2p1b3/6P1/1P3K2/r7/5R2 b - - 5 36",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/3pk2p/2p1b3/6P1/1P3K2/r7/5R2 w - - 6 37",
        },
      ],
    },
    {
      move: "cxd4",
      moveFen: "2k5/p1p3p1/1bpp3p/8/3P2PK/8/PP1r4/1R6 b - - 0 30",
      evalBefore: "-6.24",
      evalAfter: "-6.51",
      bestMovesBefore: [
        {
          move: "cxd4",
          fen: "2k5/p1p3p1/1bpp3p/8/3P2PK/8/PP1r4/1R6 b - - 0 30",
        },
        {
          move: "Bxd4",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/8/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "b3",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/1P6/P2r4/1R6 b - - 0 31",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/1P6/P6r/1R6 w - - 1 32",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/8/3b2P1/1P4K1/P6r/1R6 b - - 2 32",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/8/3b2P1/1P4K1/r7/1R6 w - - 0 33",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/2pp3p/8/3b2P1/1P3K2/r7/1R6 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p3p/2p5/3b2P1/1P3K2/r7/1R6 w - - 0 34",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/3p3p/2p5/3b2P1/1P4K1/r7/1R6 b - - 1 34",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/3p3p/2p5/3b2P1/1P4K1/r7/1R6 w - - 2 35",
        },
        {
          move: "Rf1",
          fen: "8/p1pk2p1/3p3p/2p5/3b2P1/1P4K1/r7/5R2 b - - 3 35",
        },
        {
          move: "Be5+",
          fen: "8/p1pk2p1/3p3p/2p1b3/6P1/1P4K1/r7/5R2 w - - 4 36",
        },
        {
          move: "Kf3",
          fen: "8/p1pk2p1/3p3p/2p1b3/6P1/1P3K2/r7/5R2 b - - 5 36",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/3pk2p/2p1b3/6P1/1P3K2/r7/5R2 w - - 6 37",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxd4",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/8/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "b4",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P2r4/1R6 b - - 0 31",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P6r/1R6 w - - 1 32",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2P1/6K1/P6r/1R6 b - - 2 32",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/6K1/P6r/1R6 w - - 3 33",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/5K2/P6r/1R6 b - - 4 33",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/5K2/r7/1R6 w - - 0 34",
        },
        {
          move: "Rb3",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/1R3K2/r7/8 b - - 1 34",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/1R3K2/r7/8 w - - 2 35",
        },
        {
          move: "Rd3",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/3R1K2/r7/8 b - - 3 35",
        },
        {
          move: "Rh2",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/3R1K2/7r/8 w - - 4 36",
        },
        {
          move: "Re3",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/4RK2/7r/8 b - - 5 36",
        },
        {
          move: "Rb2",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/4RK2/1r6/8 w - - 6 37",
        },
        {
          move: "Re4",
          fen: "8/p1pk2p1/2pp3p/4b3/1P2R1P1/5K2/1r6/8 b - - 7 37",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/2ppk2p/4b3/1P2R1P1/5K2/1r6/8 w - - 8 38",
        },
        {
          move: "Re3",
          fen: "8/p1p3p1/2ppk2p/4b3/1P4P1/4RK2/1r6/8 b - - 9 38",
        },
      ],
    },
    {
      move: "Bxd4",
      moveFen: "2k5/p1p3p1/2pp3p/8/3b2PK/8/PP1r4/1R6 w - - 0 31",
      evalBefore: "-6.51",
      evalAfter: "-6.39",
      bestMovesBefore: [
        {
          move: "Bxd4",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/8/PP1r4/1R6 w - - 0 31",
        },
        {
          move: "b4",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P2r4/1R6 b - - 0 31",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P6r/1R6 w - - 1 32",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2P1/6K1/P6r/1R6 b - - 2 32",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/6K1/P6r/1R6 w - - 3 33",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/5K2/P6r/1R6 b - - 4 33",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/5K2/r7/1R6 w - - 0 34",
        },
        {
          move: "Rb3",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P4P1/1R3K2/r7/8 b - - 1 34",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/1R3K2/r7/8 w - - 2 35",
        },
        {
          move: "Rd3",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/3R1K2/r7/8 b - - 3 35",
        },
        {
          move: "Rh2",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/3R1K2/7r/8 w - - 4 36",
        },
        {
          move: "Re3",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/4RK2/7r/8 b - - 5 36",
        },
        {
          move: "Rb2",
          fen: "8/p1pk2p1/2pp3p/4b3/1P4P1/4RK2/1r6/8 w - - 6 37",
        },
        {
          move: "Re4",
          fen: "8/p1pk2p1/2pp3p/4b3/1P2R1P1/5K2/1r6/8 b - - 7 37",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/2ppk2p/4b3/1P2R1P1/5K2/1r6/8 w - - 8 38",
        },
        {
          move: "Re3",
          fen: "8/p1p3p1/2ppk2p/4b3/1P4P1/4RK2/1r6/8 b - - 9 38",
        },
      ],
      bestMovesAfter: [
        {
          move: "b4",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P2r4/1R6 b - - 0 31",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P6r/1R6 w - - 1 32",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2P1/6K1/P6r/1R6 b - - 2 32",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2P1/6K1/r7/1R6 w - - 0 33",
        },
        {
          move: "Kf4",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b1KP1/8/r7/1R6 b - - 1 33",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P3KP1/8/r7/1R6 w - - 2 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/2pp3p/4bK2/1P4P1/8/r7/1R6 b - - 3 34",
        },
        {
          move: "Rf2+",
          fen: "2k5/p1p3p1/2pp3p/4bK2/1P4P1/8/5r2/1R6 w - - 4 35",
        },
        {
          move: "Ke6",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P4P1/8/5r2/1R6 b - - 5 35",
        },
        {
          move: "Rf4",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P3rP1/8/8/1R6 w - - 6 36",
        },
        {
          move: "Rc1",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P3rP1/8/8/2R5 b - - 7 36",
        },
        {
          move: "Rxg4",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P4r1/8/8/2R5 w - - 0 37",
        },
        {
          move: "Rxc6",
          fen: "2k5/p1p3p1/2RpK2p/4b3/1P4r1/8/8/8 b - - 0 37",
        },
        {
          move: "Rxb4",
          fen: "2k5/p1p3p1/2RpK2p/4b3/1r6/8/8/8 w - - 0 38",
        },
        {
          move: "Ra6",
          fen: "2k5/p1p3p1/R2pK2p/4b3/1r6/8/8/8 b - - 1 38",
        },
      ],
    },
    {
      move: "Kh5",
      moveFen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/PP1r4/1R6 b - - 1 31",
      evalBefore: "-6.39",
      evalAfter: "-6.80",
      bestMovesBefore: [
        {
          move: "b4",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P2r4/1R6 b - - 0 31",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2PK/8/P6r/1R6 w - - 1 32",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2P1/6K1/P6r/1R6 b - - 2 32",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b2P1/6K1/r7/1R6 w - - 0 33",
        },
        {
          move: "Kf4",
          fen: "2k5/p1p3p1/2pp3p/8/1P1b1KP1/8/r7/1R6 b - - 1 33",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/2pp3p/4b3/1P3KP1/8/r7/1R6 w - - 2 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/2pp3p/4bK2/1P4P1/8/r7/1R6 b - - 3 34",
        },
        {
          move: "Rf2+",
          fen: "2k5/p1p3p1/2pp3p/4bK2/1P4P1/8/5r2/1R6 w - - 4 35",
        },
        {
          move: "Ke6",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P4P1/8/5r2/1R6 b - - 5 35",
        },
        {
          move: "Rf4",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P3rP1/8/8/1R6 w - - 6 36",
        },
        {
          move: "Rc1",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P3rP1/8/8/2R5 b - - 7 36",
        },
        {
          move: "Rxg4",
          fen: "2k5/p1p3p1/2ppK2p/4b3/1P4r1/8/8/2R5 w - - 0 37",
        },
        {
          move: "Rxc6",
          fen: "2k5/p1p3p1/2RpK2p/4b3/1P4r1/8/8/8 b - - 0 37",
        },
        {
          move: "Rxb4",
          fen: "2k5/p1p3p1/2RpK2p/4b3/1r6/8/8/8 w - - 0 38",
        },
        {
          move: "Ra6",
          fen: "2k5/p1p3p1/R2pK2p/4b3/1r6/8/8/8 b - - 1 38",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxb2",
          fen: "2k5/p1p3p1/2pp3p/7K/6P1/8/Pb1r4/1R6 w - - 0 32",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/2pp3p/6PK/8/8/Pb1r4/1R6 b - - 0 32",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/2pp4/6pK/8/8/Pb1r4/1R6 w - - 0 33",
        },
        {
          move: "Kxg5",
          fen: "2k5/p1p3p1/2pp4/6K1/8/8/Pb1r4/1R6 b - - 0 33",
        },
        {
          move: "Bf6+",
          fen: "2k5/p1p3p1/2pp1b2/6K1/8/8/P2r4/1R6 w - - 1 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/2pp1b2/5K2/8/8/P2r4/1R6 b - - 2 34",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp1b2/5K2/8/8/r7/1R6 w - - 0 35",
        },
        {
          move: "Ke4",
          fen: "2k5/p1p3p1/2pp1b2/8/4K3/8/r7/1R6 b - - 1 35",
        },
        {
          move: "a5",
          fen: "2k5/2p3p1/2pp1b2/p7/4K3/8/r7/1R6 w - - 0 36",
        },
        {
          move: "Ke3",
          fen: "2k5/2p3p1/2pp1b2/p7/8/4K3/r7/1R6 b - - 1 36",
        },
        {
          move: "Kd7",
          fen: "8/2pk2p1/2pp1b2/p7/8/4K3/r7/1R6 w - - 2 37",
        },
        {
          move: "Ke4",
          fen: "8/2pk2p1/2pp1b2/p7/4K3/8/r7/1R6 b - - 3 37",
        },
        {
          move: "c5",
          fen: "8/2pk2p1/3p1b2/p1p5/4K3/8/r7/1R6 w - - 0 38",
        },
        {
          move: "Rc1",
          fen: "8/2pk2p1/3p1b2/p1p5/4K3/8/r7/2R5 b - - 1 38",
        },
        {
          move: "a4",
          fen: "8/2pk2p1/3p1b2/2p5/p3K3/8/r7/2R5 w - - 0 39",
        },
        {
          move: "Kd3",
          fen: "8/2pk2p1/3p1b2/2p5/p7/3K4/r7/2R5 b - - 1 39",
        },
      ],
    },
    {
      move: "Rxb2",
      moveFen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/Pr6/1R6 w - - 0 32",
      evalBefore: "-6.80",
      evalAfter: "-6.42",
      bestMovesBefore: [
        {
          move: "Bxb2",
          fen: "2k5/p1p3p1/2pp3p/7K/6P1/8/Pb1r4/1R6 w - - 0 32",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/2pp3p/6PK/8/8/Pb1r4/1R6 b - - 0 32",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/2pp4/6pK/8/8/Pb1r4/1R6 w - - 0 33",
        },
        {
          move: "Kxg5",
          fen: "2k5/p1p3p1/2pp4/6K1/8/8/Pb1r4/1R6 b - - 0 33",
        },
        {
          move: "Bf6+",
          fen: "2k5/p1p3p1/2pp1b2/6K1/8/8/P2r4/1R6 w - - 1 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/2pp1b2/5K2/8/8/P2r4/1R6 b - - 2 34",
        },
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp1b2/5K2/8/8/r7/1R6 w - - 0 35",
        },
        {
          move: "Ke4",
          fen: "2k5/p1p3p1/2pp1b2/8/4K3/8/r7/1R6 b - - 1 35",
        },
        {
          move: "a5",
          fen: "2k5/2p3p1/2pp1b2/p7/4K3/8/r7/1R6 w - - 0 36",
        },
        {
          move: "Ke3",
          fen: "2k5/2p3p1/2pp1b2/p7/8/4K3/r7/1R6 b - - 1 36",
        },
        {
          move: "Kd7",
          fen: "8/2pk2p1/2pp1b2/p7/8/4K3/r7/1R6 w - - 2 37",
        },
        {
          move: "Ke4",
          fen: "8/2pk2p1/2pp1b2/p7/4K3/8/r7/1R6 b - - 3 37",
        },
        {
          move: "c5",
          fen: "8/2pk2p1/3p1b2/p1p5/4K3/8/r7/1R6 w - - 0 38",
        },
        {
          move: "Rc1",
          fen: "8/2pk2p1/3p1b2/p1p5/4K3/8/r7/2R5 b - - 1 38",
        },
        {
          move: "a4",
          fen: "8/2pk2p1/3p1b2/2p5/p3K3/8/r7/2R5 w - - 0 39",
        },
        {
          move: "Kd3",
          fen: "8/2pk2p1/3p1b2/2p5/p7/3K4/r7/2R5 b - - 1 39",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rxb2",
          fen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/PR6/8 b - - 0 32",
        },
        {
          move: "Bxb2",
          fen: "2k5/p1p3p1/2pp3p/7K/6P1/8/Pb6/8 w - - 0 33",
        },
        {
          move: "Kg6",
          fen: "2k5/p1p3p1/2pp2Kp/8/6P1/8/Pb6/8 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p2Kp/2p5/6P1/8/Pb6/8 w - - 0 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/3p3p/2p2K2/6P1/8/Pb6/8 b - - 1 34",
        },
        {
          move: "c4",
          fen: "2k5/p1p3p1/3p3p/5K2/2p3P1/8/Pb6/8 w - - 0 35",
        },
        {
          move: "Ke4",
          fen: "2k5/p1p3p1/3p3p/8/2p1K1P1/8/Pb6/8 b - - 1 35",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/3p3p/8/2p1K1P1/8/Pb6/8 w - - 2 36",
        },
        {
          move: "Ke3",
          fen: "8/p1pk2p1/3p3p/8/2p3P1/4K3/Pb6/8 b - - 3 36",
        },
        {
          move: "d5",
          fen: "8/p1pk2p1/7p/3p4/2p3P1/4K3/Pb6/8 w - - 0 37",
        },
        {
          move: "Ke2",
          fen: "8/p1pk2p1/7p/3p4/2p3P1/8/Pb2K3/8 b - - 1 37",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/4k2p/3p4/2p3P1/8/Pb2K3/8 w - - 2 38",
        },
        {
          move: "Kd2",
          fen: "8/p1p3p1/4k2p/3p4/2p3P1/8/Pb1K4/8 b - - 3 38",
        },
        {
          move: "Be5",
          fen: "8/p1p3p1/4k2p/3pb3/2p3P1/8/P2K4/8 w - - 4 39",
        },
      ],
    },
    {
      move: "Rf1",
      moveFen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/Pr6/5R2 b - - 1 32",
      evalBefore: "-6.42",
      evalAfter: "-7.52",
      bestMovesBefore: [
        {
          move: "Rxb2",
          fen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/PR6/8 b - - 0 32",
        },
        {
          move: "Bxb2",
          fen: "2k5/p1p3p1/2pp3p/7K/6P1/8/Pb6/8 w - - 0 33",
        },
        {
          move: "Kg6",
          fen: "2k5/p1p3p1/2pp2Kp/8/6P1/8/Pb6/8 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p2Kp/2p5/6P1/8/Pb6/8 w - - 0 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/3p3p/2p2K2/6P1/8/Pb6/8 b - - 1 34",
        },
        {
          move: "c4",
          fen: "2k5/p1p3p1/3p3p/5K2/2p3P1/8/Pb6/8 w - - 0 35",
        },
        {
          move: "Ke4",
          fen: "2k5/p1p3p1/3p3p/8/2p1K1P1/8/Pb6/8 b - - 1 35",
        },
        {
          move: "Kd7",
          fen: "8/p1pk2p1/3p3p/8/2p1K1P1/8/Pb6/8 w - - 2 36",
        },
        {
          move: "Ke3",
          fen: "8/p1pk2p1/3p3p/8/2p3P1/4K3/Pb6/8 b - - 3 36",
        },
        {
          move: "d5",
          fen: "8/p1pk2p1/7p/3p4/2p3P1/4K3/Pb6/8 w - - 0 37",
        },
        {
          move: "Ke2",
          fen: "8/p1pk2p1/7p/3p4/2p3P1/8/Pb2K3/8 b - - 1 37",
        },
        {
          move: "Ke6",
          fen: "8/p1p3p1/4k2p/3p4/2p3P1/8/Pb2K3/8 w - - 2 38",
        },
        {
          move: "Kd2",
          fen: "8/p1p3p1/4k2p/3p4/2p3P1/8/Pb1K4/8 b - - 3 38",
        },
        {
          move: "Be5",
          fen: "8/p1p3p1/4k2p/3pb3/2p3P1/8/P2K4/8 w - - 4 39",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/r7/5R2 w - - 0 33",
        },
        {
          move: "Kg6",
          fen: "2k5/p1p3p1/2pp2Kp/8/3b2P1/8/r7/5R2 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p2Kp/2p5/3b2P1/8/r7/5R2 w - - 0 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/3p3p/2p2K2/3b2P1/8/r7/5R2 b - - 1 34",
        },
        {
          move: "Rg2",
          fen: "2k5/p1p3p1/3p3p/2p2K2/3b2P1/8/6r1/5R2 w - - 2 35",
        },
        {
          move: "Kf4",
          fen: "2k5/p1p3p1/3p3p/2p5/3b1KP1/8/6r1/5R2 b - - 3 35",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/3p3p/2p1b3/5KP1/8/6r1/5R2 w - - 4 36",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/3p3p/2p1b3/6P1/5K2/6r1/5R2 b - - 5 36",
        },
        {
          move: "Rg3+",
          fen: "2k5/p1p3p1/3p3p/2p1b3/6P1/5Kr1/8/5R2 w - - 6 37",
        },
        {
          move: "Ke2",
          fen: "2k5/p1p3p1/3p3p/2p1b3/6P1/6r1/4K3/5R2 b - - 7 37",
        },
        {
          move: "a5",
          fen: "2k5/2p3p1/3p3p/p1p1b3/6P1/6r1/4K3/5R2 w - - 0 38",
        },
      ],
    },
    {
      move: "Rxa2",
      moveFen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/r7/5R2 w - - 0 33",
      evalBefore: "-7.52",
      evalAfter: "-7.71",
      bestMovesBefore: [
        {
          move: "Rxa2",
          fen: "2k5/p1p3p1/2pp3p/7K/3b2P1/8/r7/5R2 w - - 0 33",
        },
        {
          move: "Kg6",
          fen: "2k5/p1p3p1/2pp2Kp/8/3b2P1/8/r7/5R2 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p2Kp/2p5/3b2P1/8/r7/5R2 w - - 0 34",
        },
        {
          move: "Kf5",
          fen: "2k5/p1p3p1/3p3p/2p2K2/3b2P1/8/r7/5R2 b - - 1 34",
        },
        {
          move: "Rg2",
          fen: "2k5/p1p3p1/3p3p/2p2K2/3b2P1/8/6r1/5R2 w - - 2 35",
        },
        {
          move: "Kf4",
          fen: "2k5/p1p3p1/3p3p/2p5/3b1KP1/8/6r1/5R2 b - - 3 35",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/3p3p/2p1b3/5KP1/8/6r1/5R2 w - - 4 36",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/3p3p/2p1b3/6P1/5K2/6r1/5R2 b - - 5 36",
        },
        {
          move: "Rg3+",
          fen: "2k5/p1p3p1/3p3p/2p1b3/6P1/5Kr1/8/5R2 w - - 6 37",
        },
        {
          move: "Ke2",
          fen: "2k5/p1p3p1/3p3p/2p1b3/6P1/6r1/4K3/5R2 b - - 7 37",
        },
        {
          move: "a5",
          fen: "2k5/2p3p1/3p3p/p1p1b3/6P1/6r1/4K3/5R2 w - - 0 38",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kh4",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/8/r7/5R2 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p3p/2p5/3b2PK/8/r7/5R2 w - - 0 34",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/3p3p/2p3P1/3b3K/8/r7/5R2 b - - 0 34",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/3p3p/2p3P1/3b3K/8/7r/5R2 w - - 1 35",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/3p3p/2p3P1/3b4/6K1/7r/5R2 b - - 2 35",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/3p3p/2p1b1P1/8/6K1/7r/5R2 w - - 3 36",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/3p3p/2p1b1P1/8/5K2/7r/5R2 b - - 4 36",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/3p4/2p1b1p1/8/5K2/7r/5R2 w - - 0 37",
        },
        {
          move: "Rc1",
          fen: "2k5/p1p3p1/3p4/2p1b1p1/8/5K2/7r/2R5 b - - 1 37",
        },
        {
          move: "Bf4",
          fen: "2k5/p1p3p1/3p4/2p3p1/5b2/5K2/7r/2R5 w - - 2 38",
        },
        {
          move: "Rc4",
          fen: "2k5/p1p3p1/3p4/2p3p1/2R2b2/5K2/7r/8 b - - 3 38",
        },
        {
          move: "Kb7",
          fen: "8/pkp3p1/3p4/2p3p1/2R2b2/5K2/7r/8 w - - 4 39",
        },
        {
          move: "Ra4",
          fen: "8/pkp3p1/3p4/2p3p1/R4b2/5K2/7r/8 b - - 5 39",
        },
        {
          move: "d5",
          fen: "8/pkp3p1/8/2pp2p1/R4b2/5K2/7r/8 w - - 0 40",
        },
      ],
    },
    {
      move: "Rf8+",
      moveFen: "2k2R2/p1p3p1/2pp3p/7K/3b2P1/8/r7/8 b - - 1 33",
      evalBefore: "-7.71",
      evalAfter: "-8.38",
      bestMovesBefore: [
        {
          move: "Kh4",
          fen: "2k5/p1p3p1/2pp3p/8/3b2PK/8/r7/5R2 b - - 1 33",
        },
        {
          move: "c5",
          fen: "2k5/p1p3p1/3p3p/2p5/3b2PK/8/r7/5R2 w - - 0 34",
        },
        {
          move: "g5",
          fen: "2k5/p1p3p1/3p3p/2p3P1/3b3K/8/r7/5R2 b - - 0 34",
        },
        {
          move: "Rh2+",
          fen: "2k5/p1p3p1/3p3p/2p3P1/3b3K/8/7r/5R2 w - - 1 35",
        },
        {
          move: "Kg3",
          fen: "2k5/p1p3p1/3p3p/2p3P1/3b4/6K1/7r/5R2 b - - 2 35",
        },
        {
          move: "Be5+",
          fen: "2k5/p1p3p1/3p3p/2p1b1P1/8/6K1/7r/5R2 w - - 3 36",
        },
        {
          move: "Kf3",
          fen: "2k5/p1p3p1/3p3p/2p1b1P1/8/5K2/7r/5R2 b - - 4 36",
        },
        {
          move: "hxg5",
          fen: "2k5/p1p3p1/3p4/2p1b1p1/8/5K2/7r/5R2 w - - 0 37",
        },
        {
          move: "Rc1",
          fen: "2k5/p1p3p1/3p4/2p1b1p1/8/5K2/7r/2R5 b - - 1 37",
        },
        {
          move: "Bf4",
          fen: "2k5/p1p3p1/3p4/2p3p1/5b2/5K2/7r/2R5 w - - 2 38",
        },
        {
          move: "Rc4",
          fen: "2k5/p1p3p1/3p4/2p3p1/2R2b2/5K2/7r/8 b - - 3 38",
        },
        {
          move: "Kb7",
          fen: "8/pkp3p1/3p4/2p3p1/2R2b2/5K2/7r/8 w - - 4 39",
        },
        {
          move: "Ra4",
          fen: "8/pkp3p1/3p4/2p3p1/R4b2/5K2/7r/8 b - - 5 39",
        },
        {
          move: "d5",
          fen: "8/pkp3p1/8/2pp2p1/R4b2/5K2/7r/8 w - - 0 40",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kb7",
          fen: "5R2/pkp3p1/2pp3p/7K/3b2P1/8/r7/8 w - - 2 34",
        },
        {
          move: "Rf1",
          fen: "8/pkp3p1/2pp3p/7K/3b2P1/8/r7/5R2 b - - 3 34",
        },
        {
          move: "c5",
          fen: "8/pkp3p1/3p3p/2p4K/3b2P1/8/r7/5R2 w - - 0 35",
        },
        {
          move: "Kg6",
          fen: "8/pkp3p1/3p2Kp/2p5/3b2P1/8/r7/5R2 b - - 1 35",
        },
        {
          move: "Rg2",
          fen: "8/pkp3p1/3p2Kp/2p5/3b2P1/8/6r1/5R2 w - - 2 36",
        },
        {
          move: "Rb1+",
          fen: "8/pkp3p1/3p2Kp/2p5/3b2P1/8/6r1/1R6 b - - 3 36",
        },
        {
          move: "Kc6",
          fen: "8/p1p3p1/2kp2Kp/2p5/3b2P1/8/6r1/1R6 w - - 4 37",
        },
        {
          move: "Rb8",
          fen: "1R6/p1p3p1/2kp2Kp/2p5/3b2P1/8/6r1/8 b - - 5 37",
        },
        {
          move: "Rxg4+",
          fen: "1R6/p1p3p1/2kp2Kp/2p5/3b2r1/8/8/8 w - - 0 38",
        },
        {
          move: "Kf5",
          fen: "1R6/p1p3p1/2kp3p/2p2K2/3b2r1/8/8/8 b - - 1 38",
        },
      ],
    },
    {
      move: "Kb7",
      moveFen: "5R2/pkp3p1/2pp3p/7K/3b2P1/8/r7/8 w - - 2 34",
      evalBefore: "-8.38",
      evalAfter: "-8.88",
      bestMovesBefore: [
        {
          move: "Kb7",
          fen: "5R2/pkp3p1/2pp3p/7K/3b2P1/8/r7/8 w - - 2 34",
        },
        {
          move: "Rf1",
          fen: "8/pkp3p1/2pp3p/7K/3b2P1/8/r7/5R2 b - - 3 34",
        },
        {
          move: "c5",
          fen: "8/pkp3p1/3p3p/2p4K/3b2P1/8/r7/5R2 w - - 0 35",
        },
        {
          move: "Kg6",
          fen: "8/pkp3p1/3p2Kp/2p5/3b2P1/8/r7/5R2 b - - 1 35",
        },
        {
          move: "Rg2",
          fen: "8/pkp3p1/3p2Kp/2p5/3b2P1/8/6r1/5R2 w - - 2 36",
        },
        {
          move: "Rb1+",
          fen: "8/pkp3p1/3p2Kp/2p5/3b2P1/8/6r1/1R6 b - - 3 36",
        },
        {
          move: "Kc6",
          fen: "8/p1p3p1/2kp2Kp/2p5/3b2P1/8/6r1/1R6 w - - 4 37",
        },
        {
          move: "Rb8",
          fen: "1R6/p1p3p1/2kp2Kp/2p5/3b2P1/8/6r1/8 b - - 5 37",
        },
        {
          move: "Rxg4+",
          fen: "1R6/p1p3p1/2kp2Kp/2p5/3b2r1/8/8/8 w - - 0 38",
        },
        {
          move: "Kf5",
          fen: "1R6/p1p3p1/2kp3p/2p2K2/3b2r1/8/8/8 b - - 1 38",
        },
      ],
      bestMovesAfter: [
        {
          move: "g5",
          fen: "5R2/pkp3p1/2pp3p/6PK/3b4/8/r7/8 b - - 0 34",
        },
        {
          move: "Ra5",
          fen: "5R2/pkp3p1/2pp3p/r5PK/3b4/8/8/8 w - - 1 35",
        },
        {
          move: "Kg6",
          fen: "5R2/pkp3p1/2pp2Kp/r5P1/3b4/8/8/8 b - - 2 35",
        },
        {
          move: "Rxg5+",
          fen: "5R2/pkp3p1/2pp2Kp/6r1/3b4/8/8/8 w - - 0 36",
        },
        {
          move: "Kf7",
          fen: "5R2/pkp2Kp1/2pp3p/6r1/3b4/8/8/8 b - - 1 36",
        },
        {
          move: "Rf5+",
          fen: "5R2/pkp2Kp1/2pp3p/5r2/3b4/8/8/8 w - - 2 37",
        },
        {
          move: "Ke7",
          fen: "5R2/pkp1K1p1/2pp3p/5r2/3b4/8/8/8 b - - 3 37",
        },
        {
          move: "Rxf8",
          fen: "5r2/pkp1K1p1/2pp3p/8/3b4/8/8/8 w - - 0 38",
        },
        {
          move: "Kxf8",
          fen: "5K2/pkp3p1/2pp3p/8/3b4/8/8/8 b - - 0 38",
        },
        {
          move: "g5",
          fen: "5K2/pkp5/2pp3p/6p1/3b4/8/8/8 w - - 0 39",
        },
        {
          move: "Kf7",
          fen: "8/pkp2K2/2pp3p/6p1/3b4/8/8/8 b - - 1 39",
        },
        {
          move: "c5",
          fen: "8/pkp2K2/3p3p/2p3p1/3b4/8/8/8 w - - 0 40",
        },
        {
          move: "Kg6",
          fen: "8/pkp5/3p2Kp/2p3p1/3b4/8/8/8 b - - 1 40",
        },
        {
          move: "g4",
          fen: "8/pkp5/3p2Kp/2p5/3b2p1/8/8/8 w - - 0 41",
        },
      ],
    },
    {
      move: "Rf6",
      moveFen: "8/pkp3p1/2pp1R1p/7K/3b2P1/8/r7/8 b - - 3 34",
      evalBefore: "-8.88",
      evalAfter: "-38.12",
      bestMovesBefore: [
        {
          move: "g5",
          fen: "5R2/pkp3p1/2pp3p/6PK/3b4/8/r7/8 b - - 0 34",
        },
        {
          move: "Ra5",
          fen: "5R2/pkp3p1/2pp3p/r5PK/3b4/8/8/8 w - - 1 35",
        },
        {
          move: "Kg6",
          fen: "5R2/pkp3p1/2pp2Kp/r5P1/3b4/8/8/8 b - - 2 35",
        },
        {
          move: "Rxg5+",
          fen: "5R2/pkp3p1/2pp2Kp/6r1/3b4/8/8/8 w - - 0 36",
        },
        {
          move: "Kf7",
          fen: "5R2/pkp2Kp1/2pp3p/6r1/3b4/8/8/8 b - - 1 36",
        },
        {
          move: "Rf5+",
          fen: "5R2/pkp2Kp1/2pp3p/5r2/3b4/8/8/8 w - - 2 37",
        },
        {
          move: "Ke7",
          fen: "5R2/pkp1K1p1/2pp3p/5r2/3b4/8/8/8 b - - 3 37",
        },
        {
          move: "Rxf8",
          fen: "5r2/pkp1K1p1/2pp3p/8/3b4/8/8/8 w - - 0 38",
        },
        {
          move: "Kxf8",
          fen: "5K2/pkp3p1/2pp3p/8/3b4/8/8/8 b - - 0 38",
        },
        {
          move: "g5",
          fen: "5K2/pkp5/2pp3p/6p1/3b4/8/8/8 w - - 0 39",
        },
        {
          move: "Kf7",
          fen: "8/pkp2K2/2pp3p/6p1/3b4/8/8/8 b - - 1 39",
        },
        {
          move: "c5",
          fen: "8/pkp2K2/3p3p/2p3p1/3b4/8/8/8 w - - 0 40",
        },
        {
          move: "Kg6",
          fen: "8/pkp5/3p2Kp/2p3p1/3b4/8/8/8 b - - 1 40",
        },
        {
          move: "g4",
          fen: "8/pkp5/3p2Kp/2p5/3b2p1/8/8/8 w - - 0 41",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rh2+",
          fen: "8/pkp3p1/2pp1R1p/7K/3b2P1/8/7r/8 w - - 4 35",
        },
        {
          move: "Kg6",
          fen: "8/pkp3p1/2pp1RKp/8/3b2P1/8/7r/8 b - - 5 35",
        },
        {
          move: "Bxf6",
          fen: "8/pkp3p1/2pp1bKp/8/6P1/8/7r/8 w - - 0 36",
        },
        {
          move: "Kf5",
          fen: "8/pkp3p1/2pp1b1p/5K2/6P1/8/7r/8 b - - 1 36",
        },
        {
          move: "Rg2",
          fen: "8/pkp3p1/2pp1b1p/5K2/6P1/8/6r1/8 w - - 2 37",
        },
        {
          move: "Kf4",
          fen: "8/pkp3p1/2pp1b1p/8/5KP1/8/6r1/8 b - - 3 37",
        },
        {
          move: "Be5+",
          fen: "8/pkp3p1/2pp3p/4b3/5KP1/8/6r1/8 w - - 4 38",
        },
        {
          move: "Kf3",
          fen: "8/pkp3p1/2pp3p/4b3/6P1/5K2/6r1/8 b - - 5 38",
        },
        {
          move: "Rg3+",
          fen: "8/pkp3p1/2pp3p/4b3/6P1/5Kr1/8/8 w - - 6 39",
        },
        {
          move: "Ke2",
          fen: "8/pkp3p1/2pp3p/4b3/6P1/6r1/4K3/8 b - - 7 39",
        },
        {
          move: "Rxg4",
          fen: "8/pkp3p1/2pp3p/4b3/6r1/8/4K3/8 w - - 0 40",
        },
        {
          move: "Ke1",
          fen: "8/pkp3p1/2pp3p/4b3/6r1/8/8/4K3 b - - 1 40",
        },
        {
          move: "Ka6",
          fen: "8/p1p3p1/k1pp3p/4b3/6r1/8/8/4K3 w - - 2 41",
        },
        {
          move: "Ke2",
          fen: "8/p1p3p1/k1pp3p/4b3/6r1/8/4K3/8 b - - 3 41",
        },
        {
          move: "h5",
          fen: "8/p1p3p1/k1pp4/4b2p/6r1/8/4K3/8 w - - 0 42",
        },
        {
          move: "Ke1",
          fen: "8/p1p3p1/k1pp4/4b2p/6r1/8/8/4K3 b - - 1 42",
        },
      ],
    },
    {
      move: "gxf6",
      moveFen: "8/pkp5/2pp1p1p/7K/3b2P1/8/r7/8 w - - 0 35",
      evalBefore: "-38.12",
      evalAfter: "-37.89",
      bestMovesBefore: [
        {
          move: "Rh2+",
          fen: "8/pkp3p1/2pp1R1p/7K/3b2P1/8/7r/8 w - - 4 35",
        },
        {
          move: "Kg6",
          fen: "8/pkp3p1/2pp1RKp/8/3b2P1/8/7r/8 b - - 5 35",
        },
        {
          move: "Bxf6",
          fen: "8/pkp3p1/2pp1bKp/8/6P1/8/7r/8 w - - 0 36",
        },
        {
          move: "Kf5",
          fen: "8/pkp3p1/2pp1b1p/5K2/6P1/8/7r/8 b - - 1 36",
        },
        {
          move: "Rg2",
          fen: "8/pkp3p1/2pp1b1p/5K2/6P1/8/6r1/8 w - - 2 37",
        },
        {
          move: "Kf4",
          fen: "8/pkp3p1/2pp1b1p/8/5KP1/8/6r1/8 b - - 3 37",
        },
        {
          move: "Be5+",
          fen: "8/pkp3p1/2pp3p/4b3/5KP1/8/6r1/8 w - - 4 38",
        },
        {
          move: "Kf3",
          fen: "8/pkp3p1/2pp3p/4b3/6P1/5K2/6r1/8 b - - 5 38",
        },
        {
          move: "Rg3+",
          fen: "8/pkp3p1/2pp3p/4b3/6P1/5Kr1/8/8 w - - 6 39",
        },
        {
          move: "Ke2",
          fen: "8/pkp3p1/2pp3p/4b3/6P1/6r1/4K3/8 b - - 7 39",
        },
        {
          move: "Rxg4",
          fen: "8/pkp3p1/2pp3p/4b3/6r1/8/4K3/8 w - - 0 40",
        },
        {
          move: "Ke1",
          fen: "8/pkp3p1/2pp3p/4b3/6r1/8/8/4K3 b - - 1 40",
        },
        {
          move: "Ka6",
          fen: "8/p1p3p1/k1pp3p/4b3/6r1/8/8/4K3 w - - 2 41",
        },
        {
          move: "Ke2",
          fen: "8/p1p3p1/k1pp3p/4b3/6r1/8/4K3/8 b - - 3 41",
        },
        {
          move: "h5",
          fen: "8/p1p3p1/k1pp4/4b2p/6r1/8/4K3/8 w - - 0 42",
        },
        {
          move: "Ke1",
          fen: "8/p1p3p1/k1pp4/4b2p/6r1/8/8/4K3 b - - 1 42",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kxh6",
          fen: "8/pkp5/2pp1p1K/8/3b2P1/8/r7/8 b - - 0 35",
        },
        {
          move: "Rg2",
          fen: "8/pkp5/2pp1p1K/8/3b2P1/8/6r1/8 w - - 1 36",
        },
        {
          move: "Kg6",
          fen: "8/pkp5/2pp1pK1/8/3b2P1/8/6r1/8 b - - 2 36",
        },
        {
          move: "Rxg4+",
          fen: "8/pkp5/2pp1pK1/8/3b2r1/8/8/8 w - - 0 37",
        },
        {
          move: "Kf5",
          fen: "8/pkp5/2pp1p2/5K2/3b2r1/8/8/8 b - - 1 37",
        },
        {
          move: "Rh4",
          fen: "8/pkp5/2pp1p2/5K2/3b3r/8/8/8 w - - 2 38",
        },
        {
          move: "Ke6",
          fen: "8/pkp5/2ppKp2/8/3b3r/8/8/8 b - - 3 38",
        },
        {
          move: "c5",
          fen: "8/pkp5/3pKp2/2p5/3b3r/8/8/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/pkpK4/3p1p2/2p5/3b3r/8/8/8 b - - 1 39",
        },
        {
          move: "a5",
          fen: "8/1kpK4/3p1p2/p1p5/3b3r/8/8/8 w - - 0 40",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/3pKp2/p1p5/3b3r/8/8/8 b - - 1 40",
        },
        {
          move: "a4",
          fen: "8/1kp5/3pKp2/2p5/p2b3r/8/8/8 w - - 0 41",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/3p1p2/2p5/p2b3r/8/8/8 b - - 1 41",
        },
        {
          move: "a3",
          fen: "8/1kpK4/3p1p2/2p5/3b3r/p7/8/8 w - - 0 42",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/3p1p2/2p5/3b3r/p7/8/8 b - - 1 42",
        },
        {
          move: "a2",
          fen: "3K4/1kp5/3p1p2/2p5/3b3r/8/p7/8 w - - 0 43",
        },
      ],
    },
    {
      move: "Kg6",
      moveFen: "8/pkp5/2pp1pKp/8/3b2P1/8/r7/8 b - - 1 35",
      evalBefore: "-37.89",
      evalAfter: "-43.82",
      bestMovesBefore: [
        {
          move: "Kxh6",
          fen: "8/pkp5/2pp1p1K/8/3b2P1/8/r7/8 b - - 0 35",
        },
        {
          move: "Rg2",
          fen: "8/pkp5/2pp1p1K/8/3b2P1/8/6r1/8 w - - 1 36",
        },
        {
          move: "Kg6",
          fen: "8/pkp5/2pp1pK1/8/3b2P1/8/6r1/8 b - - 2 36",
        },
        {
          move: "Rxg4+",
          fen: "8/pkp5/2pp1pK1/8/3b2r1/8/8/8 w - - 0 37",
        },
        {
          move: "Kf5",
          fen: "8/pkp5/2pp1p2/5K2/3b2r1/8/8/8 b - - 1 37",
        },
        {
          move: "Rh4",
          fen: "8/pkp5/2pp1p2/5K2/3b3r/8/8/8 w - - 2 38",
        },
        {
          move: "Ke6",
          fen: "8/pkp5/2ppKp2/8/3b3r/8/8/8 b - - 3 38",
        },
        {
          move: "c5",
          fen: "8/pkp5/3pKp2/2p5/3b3r/8/8/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/pkpK4/3p1p2/2p5/3b3r/8/8/8 b - - 1 39",
        },
        {
          move: "a5",
          fen: "8/1kpK4/3p1p2/p1p5/3b3r/8/8/8 w - - 0 40",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/3pKp2/p1p5/3b3r/8/8/8 b - - 1 40",
        },
        {
          move: "a4",
          fen: "8/1kp5/3pKp2/2p5/p2b3r/8/8/8 w - - 0 41",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/3p1p2/2p5/p2b3r/8/8/8 b - - 1 41",
        },
        {
          move: "a3",
          fen: "8/1kpK4/3p1p2/2p5/3b3r/p7/8/8 w - - 0 42",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/3p1p2/2p5/3b3r/p7/8/8 b - - 1 42",
        },
        {
          move: "a2",
          fen: "3K4/1kp5/3p1p2/2p5/3b3r/8/p7/8 w - - 0 43",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg2",
          fen: "8/pkp5/2pp1pKp/8/3b2P1/8/6r1/8 w - - 2 36",
        },
        {
          move: "Kf5",
          fen: "8/pkp5/2pp1p1p/5K2/3b2P1/8/6r1/8 b - - 3 36",
        },
        {
          move: "a5",
          fen: "8/1kp5/2pp1p1p/p4K2/3b2P1/8/6r1/8 w - - 0 37",
        },
        {
          move: "Kf4",
          fen: "8/1kp5/2pp1p1p/p7/3b1KP1/8/6r1/8 b - - 1 37",
        },
        {
          move: "Be5+",
          fen: "8/1kp5/2pp1p1p/p3b3/5KP1/8/6r1/8 w - - 2 38",
        },
        {
          move: "Kf3",
          fen: "8/1kp5/2pp1p1p/p3b3/6P1/5K2/6r1/8 b - - 3 38",
        },
        {
          move: "Rg3+",
          fen: "8/1kp5/2pp1p1p/p3b3/6P1/5Kr1/8/8 w - - 4 39",
        },
        {
          move: "Ke2",
          fen: "8/1kp5/2pp1p1p/p3b3/6P1/6r1/4K3/8 b - - 5 39",
        },
        {
          move: "Rxg4",
          fen: "8/1kp5/2pp1p1p/p3b3/6r1/8/4K3/8 w - - 0 40",
        },
        {
          move: "Kd2",
          fen: "8/1kp5/2pp1p1p/p3b3/6r1/8/3K4/8 b - - 1 40",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp1p1p/4b3/p5r1/8/3K4/8 w - - 0 41",
        },
        {
          move: "Kc2",
          fen: "8/1kp5/2pp1p1p/4b3/p5r1/8/2K5/8 b - - 1 41",
        },
        {
          move: "Rg2+",
          fen: "8/1kp5/2pp1p1p/4b3/p7/8/2K3r1/8 w - - 2 42",
        },
        {
          move: "Kd3",
          fen: "8/1kp5/2pp1p1p/4b3/p7/3K4/6r1/8 b - - 3 42",
        },
        {
          move: "Rg3+",
          fen: "8/1kp5/2pp1p1p/4b3/p7/3K2r1/8/8 w - - 4 43",
        },
        {
          move: "Ke4",
          fen: "8/1kp5/2pp1p1p/4b3/p3K3/6r1/8/8 b - - 5 43",
        },
        {
          move: "Rg5",
          fen: "8/1kp5/2pp1p1p/4b1r1/p3K3/8/8/8 w - - 6 44",
        },
        {
          move: "Kd3",
          fen: "8/1kp5/2pp1p1p/4b1r1/p7/3K4/8/8 b - - 7 44",
        },
        {
          move: "a3",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/p2K4/8/8 w - - 0 45",
        },
      ],
    },
    {
      move: "a5",
      moveFen: "8/1kp5/2pp1pKp/p7/3b2P1/8/r7/8 w - - 0 36",
      evalBefore: "-43.82",
      evalAfter: "-44.15",
      bestMovesBefore: [
        {
          move: "Rg2",
          fen: "8/pkp5/2pp1pKp/8/3b2P1/8/6r1/8 w - - 2 36",
        },
        {
          move: "Kf5",
          fen: "8/pkp5/2pp1p1p/5K2/3b2P1/8/6r1/8 b - - 3 36",
        },
        {
          move: "a5",
          fen: "8/1kp5/2pp1p1p/p4K2/3b2P1/8/6r1/8 w - - 0 37",
        },
        {
          move: "Kf4",
          fen: "8/1kp5/2pp1p1p/p7/3b1KP1/8/6r1/8 b - - 1 37",
        },
        {
          move: "Be5+",
          fen: "8/1kp5/2pp1p1p/p3b3/5KP1/8/6r1/8 w - - 2 38",
        },
        {
          move: "Kf3",
          fen: "8/1kp5/2pp1p1p/p3b3/6P1/5K2/6r1/8 b - - 3 38",
        },
        {
          move: "Rg3+",
          fen: "8/1kp5/2pp1p1p/p3b3/6P1/5Kr1/8/8 w - - 4 39",
        },
        {
          move: "Ke2",
          fen: "8/1kp5/2pp1p1p/p3b3/6P1/6r1/4K3/8 b - - 5 39",
        },
        {
          move: "Rxg4",
          fen: "8/1kp5/2pp1p1p/p3b3/6r1/8/4K3/8 w - - 0 40",
        },
        {
          move: "Kd2",
          fen: "8/1kp5/2pp1p1p/p3b3/6r1/8/3K4/8 b - - 1 40",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp1p1p/4b3/p5r1/8/3K4/8 w - - 0 41",
        },
        {
          move: "Kc2",
          fen: "8/1kp5/2pp1p1p/4b3/p5r1/8/2K5/8 b - - 1 41",
        },
        {
          move: "Rg2+",
          fen: "8/1kp5/2pp1p1p/4b3/p7/8/2K3r1/8 w - - 2 42",
        },
        {
          move: "Kd3",
          fen: "8/1kp5/2pp1p1p/4b3/p7/3K4/6r1/8 b - - 3 42",
        },
        {
          move: "Rg3+",
          fen: "8/1kp5/2pp1p1p/4b3/p7/3K2r1/8/8 w - - 4 43",
        },
        {
          move: "Ke4",
          fen: "8/1kp5/2pp1p1p/4b3/p3K3/6r1/8/8 b - - 5 43",
        },
        {
          move: "Rg5",
          fen: "8/1kp5/2pp1p1p/4b1r1/p3K3/8/8/8 w - - 6 44",
        },
        {
          move: "Kd3",
          fen: "8/1kp5/2pp1p1p/4b1r1/p7/3K4/8/8 b - - 7 44",
        },
        {
          move: "a3",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/p2K4/8/8 w - - 0 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kxh6",
          fen: "8/1kp5/2pp1p1K/p7/3b2P1/8/r7/8 b - - 0 36",
        },
        {
          move: "Rg2",
          fen: "8/1kp5/2pp1p1K/p7/3b2P1/8/6r1/8 w - - 1 37",
        },
        {
          move: "Kg6",
          fen: "8/1kp5/2pp1pK1/p7/3b2P1/8/6r1/8 b - - 2 37",
        },
        {
          move: "Rxg4+",
          fen: "8/1kp5/2pp1pK1/p7/3b2r1/8/8/8 w - - 0 38",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/2pp1p2/p4K2/3b2r1/8/8/8 b - - 1 38",
        },
        {
          move: "Rh4",
          fen: "8/1kp5/2pp1p2/p4K2/3b3r/8/8/8 w - - 2 39",
        },
        {
          move: "Kg6",
          fen: "8/1kp5/2pp1pK1/p7/3b3r/8/8/8 b - - 3 39",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp1pK1/8/p2b3r/8/8/8 w - - 0 40",
        },
        {
          move: "Kg7",
          fen: "8/1kp3K1/2pp1p2/8/p2b3r/8/8/8 b - - 1 40",
        },
        {
          move: "a3",
          fen: "8/1kp3K1/2pp1p2/8/3b3r/p7/8/8 w - - 0 41",
        },
        {
          move: "Kf7",
          fen: "8/1kp2K2/2pp1p2/8/3b3r/p7/8/8 b - - 1 41",
        },
        {
          move: "a2",
          fen: "8/1kp2K2/2pp1p2/8/3b3r/8/p7/8 w - - 0 42",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppKp2/8/3b3r/8/p7/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kp5/2ppKp2/8/3b3r/8/8/q7 w - - 0 43",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/2pp1p2/5K2/3b3r/8/8/q7 b - - 1 43",
        },
      ],
    },
    {
      move: "g5",
      moveFen: "8/1kp5/2pp1pKp/p5P1/3b4/8/r7/8 b - - 0 36",
      evalBefore: "-44.15",
      evalAfter: "-44.72",
      bestMovesBefore: [
        {
          move: "Kxh6",
          fen: "8/1kp5/2pp1p1K/p7/3b2P1/8/r7/8 b - - 0 36",
        },
        {
          move: "Rg2",
          fen: "8/1kp5/2pp1p1K/p7/3b2P1/8/6r1/8 w - - 1 37",
        },
        {
          move: "Kg6",
          fen: "8/1kp5/2pp1pK1/p7/3b2P1/8/6r1/8 b - - 2 37",
        },
        {
          move: "Rxg4+",
          fen: "8/1kp5/2pp1pK1/p7/3b2r1/8/8/8 w - - 0 38",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/2pp1p2/p4K2/3b2r1/8/8/8 b - - 1 38",
        },
        {
          move: "Rh4",
          fen: "8/1kp5/2pp1p2/p4K2/3b3r/8/8/8 w - - 2 39",
        },
        {
          move: "Kg6",
          fen: "8/1kp5/2pp1pK1/p7/3b3r/8/8/8 b - - 3 39",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp1pK1/8/p2b3r/8/8/8 w - - 0 40",
        },
        {
          move: "Kg7",
          fen: "8/1kp3K1/2pp1p2/8/p2b3r/8/8/8 b - - 1 40",
        },
        {
          move: "a3",
          fen: "8/1kp3K1/2pp1p2/8/3b3r/p7/8/8 w - - 0 41",
        },
        {
          move: "Kf7",
          fen: "8/1kp2K2/2pp1p2/8/3b3r/p7/8/8 b - - 1 41",
        },
        {
          move: "a2",
          fen: "8/1kp2K2/2pp1p2/8/3b3r/8/p7/8 w - - 0 42",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppKp2/8/3b3r/8/p7/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kp5/2ppKp2/8/3b3r/8/8/q7 w - - 0 43",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/2pp1p2/5K2/3b3r/8/8/q7 b - - 1 43",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg2",
          fen: "8/1kp5/2pp1pKp/p5P1/3b4/8/6r1/8 w - - 1 37",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/2pp1p1p/p4KP1/3b4/8/6r1/8 b - - 2 37",
        },
        {
          move: "Rxg5+",
          fen: "8/1kp5/2pp1p1p/p4Kr1/3b4/8/8/8 w - - 0 38",
        },
        {
          move: "Ke4",
          fen: "8/1kp5/2pp1p1p/p5r1/3bK3/8/8/8 b - - 1 38",
        },
        {
          move: "Be5",
          fen: "8/1kp5/2pp1p1p/p3b1r1/4K3/8/8/8 w - - 2 39",
        },
        {
          move: "Kd3",
          fen: "8/1kp5/2pp1p1p/p3b1r1/8/3K4/8/8 b - - 3 39",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp1p1p/4b1r1/p7/3K4/8/8 w - - 0 40",
        },
        {
          move: "Ke2",
          fen: "8/1kp5/2pp1p1p/4b1r1/p7/8/4K3/8 b - - 1 40",
        },
        {
          move: "a3",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/p7/4K3/8 w - - 0 41",
        },
        {
          move: "Kd2",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/p7/3K4/8 b - - 1 41",
        },
        {
          move: "a2",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/p2K4/8 w - - 0 42",
        },
        {
          move: "Ke1",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/p7/4K3 b - - 1 42",
        },
        {
          move: "a1=Q+",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/8/q3K3 w - - 0 43",
        },
        {
          move: "Ke2",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/4K3/q7 b - - 1 43",
        },
        {
          move: "Rg3",
          fen: "8/1kp5/2pp1p1p/4b3/8/6r1/4K3/q7 w - - 2 44",
        },
        {
          move: "Kd2",
          fen: "8/1kp5/2pp1p1p/4b3/8/6r1/3K4/q7 b - - 3 44",
        },
      ],
    },
    {
      move: "fxg5",
      moveFen: "8/1kp5/2pp2Kp/p5p1/3b4/8/r7/8 w - - 0 37",
      evalBefore: "-44.72",
      evalAfter: "-44.08",
      bestMovesBefore: [
        {
          move: "Rg2",
          fen: "8/1kp5/2pp1pKp/p5P1/3b4/8/6r1/8 w - - 1 37",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/2pp1p1p/p4KP1/3b4/8/6r1/8 b - - 2 37",
        },
        {
          move: "Rxg5+",
          fen: "8/1kp5/2pp1p1p/p4Kr1/3b4/8/8/8 w - - 0 38",
        },
        {
          move: "Ke4",
          fen: "8/1kp5/2pp1p1p/p5r1/3bK3/8/8/8 b - - 1 38",
        },
        {
          move: "Be5",
          fen: "8/1kp5/2pp1p1p/p3b1r1/4K3/8/8/8 w - - 2 39",
        },
        {
          move: "Kd3",
          fen: "8/1kp5/2pp1p1p/p3b1r1/8/3K4/8/8 b - - 3 39",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp1p1p/4b1r1/p7/3K4/8/8 w - - 0 40",
        },
        {
          move: "Ke2",
          fen: "8/1kp5/2pp1p1p/4b1r1/p7/8/4K3/8 b - - 1 40",
        },
        {
          move: "a3",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/p7/4K3/8 w - - 0 41",
        },
        {
          move: "Kd2",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/p7/3K4/8 b - - 1 41",
        },
        {
          move: "a2",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/p2K4/8 w - - 0 42",
        },
        {
          move: "Ke1",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/p7/4K3 b - - 1 42",
        },
        {
          move: "a1=Q+",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/8/q3K3 w - - 0 43",
        },
        {
          move: "Ke2",
          fen: "8/1kp5/2pp1p1p/4b1r1/8/8/4K3/q7 b - - 1 43",
        },
        {
          move: "Rg3",
          fen: "8/1kp5/2pp1p1p/4b3/8/6r1/4K3/q7 w - - 2 44",
        },
        {
          move: "Kd2",
          fen: "8/1kp5/2pp1p1p/4b3/8/6r1/3K4/q7 b - - 3 44",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kf5",
          fen: "8/1kp5/2pp3p/p4Kp1/3b4/8/r7/8 b - - 1 37",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp3p/5Kp1/p2b4/8/r7/8 w - - 0 38",
        },
        {
          move: "Ke4",
          fen: "8/1kp5/2pp3p/6p1/p2bK3/8/r7/8 b - - 1 38",
        },
        {
          move: "c5",
          fen: "8/1kp5/3p3p/2p3p1/p2bK3/8/r7/8 w - - 0 39",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/3p3p/2p2Kp1/p2b4/8/r7/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kp5/3p3p/2p2Kp1/3b4/p7/r7/8 w - - 0 40",
        },
        {
          move: "Kg4",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/p7/r7/8 b - - 1 40",
        },
        {
          move: "Rh2",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/p7/7r/8 w - - 2 41",
        },
        {
          move: "Kg3",
          fen: "8/1kp5/3p3p/2p3p1/3b4/p5K1/7r/8 b - - 3 41",
        },
        {
          move: "Rf2",
          fen: "8/1kp5/3p3p/2p3p1/3b4/p5K1/5r2/8 w - - 4 42",
        },
        {
          move: "Kg4",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/p7/5r2/8 b - - 5 42",
        },
        {
          move: "a2",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/8/p4r2/8 w - - 0 43",
        },
        {
          move: "Kh3",
          fen: "8/1kp5/3p3p/2p3p1/3b4/7K/p4r2/8 b - - 1 43",
        },
        {
          move: "g4+",
          fen: "8/1kp5/3p3p/2p5/3b2p1/7K/p4r2/8 w - - 0 44",
        },
        {
          move: "Kxg4",
          fen: "8/1kp5/3p3p/2p5/3b2K1/8/p4r2/8 b - - 0 44",
        },
        {
          move: "a1=Q",
          fen: "8/1kp5/3p3p/2p5/3b2K1/8/5r2/q7 w - - 0 45",
        },
        {
          move: "Kh5",
          fen: "8/1kp5/3p3p/2p4K/3b4/8/5r2/q7 b - - 1 45",
        },
      ],
    },
    {
      move: "Kf7",
      moveFen: "8/1kp2K2/2pp3p/p5p1/3b4/8/r7/8 b - - 1 37",
      evalBefore: "-44.08",
      evalAfter: "-50.97",
      bestMovesBefore: [
        {
          move: "Kf5",
          fen: "8/1kp5/2pp3p/p4Kp1/3b4/8/r7/8 b - - 1 37",
        },
        {
          move: "a4",
          fen: "8/1kp5/2pp3p/5Kp1/p2b4/8/r7/8 w - - 0 38",
        },
        {
          move: "Ke4",
          fen: "8/1kp5/2pp3p/6p1/p2bK3/8/r7/8 b - - 1 38",
        },
        {
          move: "c5",
          fen: "8/1kp5/3p3p/2p3p1/p2bK3/8/r7/8 w - - 0 39",
        },
        {
          move: "Kf5",
          fen: "8/1kp5/3p3p/2p2Kp1/p2b4/8/r7/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kp5/3p3p/2p2Kp1/3b4/p7/r7/8 w - - 0 40",
        },
        {
          move: "Kg4",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/p7/r7/8 b - - 1 40",
        },
        {
          move: "Rh2",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/p7/7r/8 w - - 2 41",
        },
        {
          move: "Kg3",
          fen: "8/1kp5/3p3p/2p3p1/3b4/p5K1/7r/8 b - - 3 41",
        },
        {
          move: "Rf2",
          fen: "8/1kp5/3p3p/2p3p1/3b4/p5K1/5r2/8 w - - 4 42",
        },
        {
          move: "Kg4",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/p7/5r2/8 b - - 5 42",
        },
        {
          move: "a2",
          fen: "8/1kp5/3p3p/2p3p1/3b2K1/8/p4r2/8 w - - 0 43",
        },
        {
          move: "Kh3",
          fen: "8/1kp5/3p3p/2p3p1/3b4/7K/p4r2/8 b - - 1 43",
        },
        {
          move: "g4+",
          fen: "8/1kp5/3p3p/2p5/3b2p1/7K/p4r2/8 w - - 0 44",
        },
        {
          move: "Kxg4",
          fen: "8/1kp5/3p3p/2p5/3b2K1/8/p4r2/8 b - - 0 44",
        },
        {
          move: "a1=Q",
          fen: "8/1kp5/3p3p/2p5/3b2K1/8/5r2/q7 w - - 0 45",
        },
        {
          move: "Kh5",
          fen: "8/1kp5/3p3p/2p4K/3b4/8/5r2/q7 b - - 1 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf2+",
          fen: "8/1kp2K2/2pp3p/p5p1/3b4/8/5r2/8 w - - 2 38",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/p5p1/3b4/8/5r2/8 b - - 3 38",
        },
        {
          move: "a4",
          fen: "8/1kp5/2ppK2p/6p1/p2b4/8/5r2/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/p2b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kpK4/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "8/1kp5/2ppK2p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "g4",
          fen: "3K4/1kp5/2pp3p/8/3b2p1/8/5r2/q7 w - - 0 43",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/8/3b2p1/8/5r2/q7 b - - 1 43",
        },
        {
          move: "g3",
          fen: "4K3/1kp5/2pp3p/8/3b4/6p1/5r2/q7 w - - 0 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/8/3b4/6p1/5r2/q7 b - - 1 44",
        },
        {
          move: "g2",
          fen: "8/1kpK4/2pp3p/8/3b4/8/5rp1/q7 w - - 0 45",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/8/3b4/8/5rp1/q7 b - - 1 45",
        },
        {
          move: "Bf6+",
          fen: "8/1kp1K3/2pp1b1p/8/8/8/5rp1/q7 w - - 2 46",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppKb1p/8/8/8/5rp1/q7 b - - 3 46",
        },
        {
          move: "g1=Q",
          fen: "8/1kp5/2ppKb1p/8/8/8/5r2/q5q1 w - - 0 47",
        },
      ],
    },
    {
      move: "Rf2+",
      moveFen: "8/1kp2K2/2pp3p/p5p1/3b4/8/5r2/8 w - - 2 38",
      evalBefore: "-50.97",
      evalAfter: "-51.49",
      bestMovesBefore: [
        {
          move: "Rf2+",
          fen: "8/1kp2K2/2pp3p/p5p1/3b4/8/5r2/8 w - - 2 38",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/p5p1/3b4/8/5r2/8 b - - 3 38",
        },
        {
          move: "a4",
          fen: "8/1kp5/2ppK2p/6p1/p2b4/8/5r2/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/p2b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kpK4/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "8/1kp5/2ppK2p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "g4",
          fen: "3K4/1kp5/2pp3p/8/3b2p1/8/5r2/q7 w - - 0 43",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/8/3b2p1/8/5r2/q7 b - - 1 43",
        },
        {
          move: "g3",
          fen: "4K3/1kp5/2pp3p/8/3b4/6p1/5r2/q7 w - - 0 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/8/3b4/6p1/5r2/q7 b - - 1 44",
        },
        {
          move: "g2",
          fen: "8/1kpK4/2pp3p/8/3b4/8/5rp1/q7 w - - 0 45",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/8/3b4/8/5rp1/q7 b - - 1 45",
        },
        {
          move: "Bf6+",
          fen: "8/1kp1K3/2pp1b1p/8/8/8/5rp1/q7 w - - 2 46",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppKb1p/8/8/8/5rp1/q7 b - - 3 46",
        },
        {
          move: "g1=Q",
          fen: "8/1kp5/2ppKb1p/8/8/8/5r2/q5q1 w - - 0 47",
        },
      ],
      bestMovesAfter: [
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/p5p1/3b4/8/5r2/8 b - - 3 38",
        },
        {
          move: "a4",
          fen: "8/1kp5/2ppK2p/6p1/p2b4/8/5r2/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/p2b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kpK4/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "8/1kp5/2ppK2p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "g4",
          fen: "3K4/1kp5/2pp3p/8/3b2p1/8/5r2/q7 w - - 0 43",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/8/3b2p1/8/5r2/q7 b - - 1 43",
        },
        {
          move: "g3",
          fen: "4K3/1kp5/2pp3p/8/3b4/6p1/5r2/q7 w - - 0 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/8/3b4/6p1/5r2/q7 b - - 1 44",
        },
        {
          move: "g2",
          fen: "8/1kpK4/2pp3p/8/3b4/8/5rp1/q7 w - - 0 45",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/8/3b4/8/5rp1/q7 b - - 1 45",
        },
        {
          move: "g1=Q",
          fen: "8/1kp1K3/2pp3p/8/3b4/8/5r2/q5q1 w - - 0 46",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/8/3b4/8/5r2/q5q1 b - - 1 46",
        },
      ],
    },
    {
      move: "Ke8",
      moveFen: "4K3/1kp5/2pp3p/p5p1/3b4/8/5r2/8 b - - 3 38",
      evalBefore: "-51.49",
      evalAfter: "-M10",
      bestMovesBefore: [
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/p5p1/3b4/8/5r2/8 b - - 3 38",
        },
        {
          move: "a4",
          fen: "8/1kp5/2ppK2p/6p1/p2b4/8/5r2/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/p2b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kpK4/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/2ppK2p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "8/1kp5/2ppK2p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "g4",
          fen: "3K4/1kp5/2pp3p/8/3b2p1/8/5r2/q7 w - - 0 43",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/8/3b2p1/8/5r2/q7 b - - 1 43",
        },
        {
          move: "g3",
          fen: "4K3/1kp5/2pp3p/8/3b4/6p1/5r2/q7 w - - 0 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/8/3b4/6p1/5r2/q7 b - - 1 44",
        },
        {
          move: "g2",
          fen: "8/1kpK4/2pp3p/8/3b4/8/5rp1/q7 w - - 0 45",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/8/3b4/8/5rp1/q7 b - - 1 45",
        },
        {
          move: "g1=Q",
          fen: "8/1kp1K3/2pp3p/8/3b4/8/5r2/q5q1 w - - 0 46",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/8/3b4/8/5r2/q5q1 b - - 1 46",
        },
      ],
      bestMovesAfter: [
        {
          move: "c5",
          fen: "4K3/1kp5/3p3p/p1p3p1/3b4/8/5r2/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/3p3p/p1p3p1/3b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a4",
          fen: "8/1kpK4/3p3p/2p3p1/p2b4/8/5r2/8 w - - 0 40",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/3p3p/2p3p1/p2b4/8/5r2/8 b - - 1 40",
        },
        {
          move: "a3",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/p7/5r2/8 w - - 0 41",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/3pK2p/2p3p1/3b4/p7/5r2/8 b - - 1 41",
        },
        {
          move: "a2",
          fen: "8/1kp5/3pK2p/2p3p1/3b4/8/p4r2/8 w - - 0 42",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/8/p4r2/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/8/5r2/q7 w - - 0 43",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/3p3p/2p3p1/3b4/8/5r2/q7 b - - 1 43",
        },
        {
          move: "Qa4+",
          fen: "4K3/1kp5/3p3p/2p3p1/q2b4/8/5r2/8 w - - 2 44",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/3p3p/2p3p1/q2b4/8/5r2/8 b - - 3 44",
        },
        {
          move: "Qa2",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/8/q4r2/8 w - - 4 45",
        },
      ],
    },
    {
      move: "a4",
      moveFen: "4K3/1kp5/2pp3p/6p1/p2b4/8/5r2/8 w - - 0 39",
      evalBefore: "-M10",
      evalAfter: "-M7",
      bestMovesBefore: [
        {
          move: "c5",
          fen: "4K3/1kp5/3p3p/p1p3p1/3b4/8/5r2/8 w - - 0 39",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/3p3p/p1p3p1/3b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a4",
          fen: "8/1kpK4/3p3p/2p3p1/p2b4/8/5r2/8 w - - 0 40",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/3p3p/2p3p1/p2b4/8/5r2/8 b - - 1 40",
        },
        {
          move: "a3",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/p7/5r2/8 w - - 0 41",
        },
        {
          move: "Ke6",
          fen: "8/1kp5/3pK2p/2p3p1/3b4/p7/5r2/8 b - - 1 41",
        },
        {
          move: "a2",
          fen: "8/1kp5/3pK2p/2p3p1/3b4/8/p4r2/8 w - - 0 42",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/8/p4r2/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/8/5r2/q7 w - - 0 43",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/3p3p/2p3p1/3b4/8/5r2/q7 b - - 1 43",
        },
        {
          move: "Qa4+",
          fen: "4K3/1kp5/3p3p/2p3p1/q2b4/8/5r2/8 w - - 2 44",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/3p3p/2p3p1/q2b4/8/5r2/8 b - - 3 44",
        },
        {
          move: "Qa2",
          fen: "8/1kp1K3/3p3p/2p3p1/3b4/8/q4r2/8 w - - 4 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/p2b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kpK4/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Bf6+",
          fen: "3K4/1kp5/2pp1b1p/6p1/8/8/q4r2/8 w - - 4 44",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp1b1p/6p1/8/8/q4r2/8 b - - 5 44",
        },
        {
          move: "Qe6+",
          fen: "4K3/1kp5/2ppqb1p/6p1/8/8/5r2/8 w - - 6 45",
        },
        {
          move: "Kf8",
          fen: "5K2/1kp5/2ppqb1p/6p1/8/8/5r2/8 b - - 7 45",
        },
        {
          move: "Be5#",
          fen: "5K2/1kp5/2ppq2p/4b1p1/8/8/5r2/8 w - - 8 46",
        },
      ],
    },
    {
      move: "Kd8",
      moveFen: "3K4/1kp5/2pp3p/6p1/p2b4/8/5r2/8 b - - 1 39",
      evalBefore: "-M7",
      evalAfter: "-M7",
      bestMovesBefore: [
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/p2b4/8/5r2/8 b - - 1 39",
        },
        {
          move: "a3",
          fen: "8/1kpK4/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Bf6+",
          fen: "3K4/1kp5/2pp1b1p/6p1/8/8/q4r2/8 w - - 4 44",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp1b1p/6p1/8/8/q4r2/8 b - - 5 44",
        },
        {
          move: "Qe6+",
          fen: "4K3/1kp5/2ppqb1p/6p1/8/8/5r2/8 w - - 6 45",
        },
        {
          move: "Kf8",
          fen: "5K2/1kp5/2ppqb1p/6p1/8/8/5r2/8 b - - 7 45",
        },
        {
          move: "Be5#",
          fen: "5K2/1kp5/2ppq2p/4b1p1/8/8/5r2/8 w - - 8 46",
        },
      ],
      bestMovesAfter: [
        {
          move: "a3",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Bf6+",
          fen: "3K4/1kp5/2pp1b1p/6p1/8/8/q4r2/8 w - - 4 44",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp1b1p/6p1/8/8/q4r2/8 b - - 5 44",
        },
        {
          move: "Qe6+",
          fen: "4K3/1kp5/2ppqb1p/6p1/8/8/5r2/8 w - - 6 45",
        },
        {
          move: "Kf8",
          fen: "5K2/1kp5/2ppqb1p/6p1/8/8/5r2/8 b - - 7 45",
        },
        {
          move: "Be5#",
          fen: "5K2/1kp5/2ppq2p/4b1p1/8/8/5r2/8 w - - 8 46",
        },
      ],
    },
    {
      move: "a3",
      moveFen: "3K4/1kp5/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
      evalBefore: "-M7",
      evalAfter: "-M5",
      bestMovesBefore: [
        {
          move: "a3",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/p7/5r2/8 w - - 0 40",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Bf6+",
          fen: "3K4/1kp5/2pp1b1p/6p1/8/8/q4r2/8 w - - 4 44",
        },
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp1b1p/6p1/8/8/q4r2/8 b - - 5 44",
        },
        {
          move: "Qe6+",
          fen: "4K3/1kp5/2ppqb1p/6p1/8/8/5r2/8 w - - 6 45",
        },
        {
          move: "Kf8",
          fen: "5K2/1kp5/2ppqb1p/6p1/8/8/5r2/8 b - - 7 45",
        },
        {
          move: "Be5#",
          fen: "5K2/1kp5/2ppq2p/4b1p1/8/8/5r2/8 w - - 8 46",
        },
      ],
      bestMovesAfter: [
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Rf8+",
          fen: "3K1r2/1kp5/2pp3p/6p1/3b4/8/q7/8 w - - 4 44",
        },
        {
          move: "Ke7",
          fen: "5r2/1kp1K3/2pp3p/6p1/3b4/8/q7/8 b - - 5 44",
        },
        {
          move: "Qf7#",
          fen: "5r2/1kp1Kq2/2pp3p/6p1/3b4/8/8/8 w - - 6 45",
        },
      ],
    },
    {
      move: "Kd7",
      moveFen: "8/1kpK4/2pp3p/6p1/3b4/p7/5r2/8 b - - 1 40",
      evalBefore: "-M5",
      evalAfter: "-M5",
      bestMovesBefore: [
        {
          move: "Ke8",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/p7/5r2/8 b - - 1 40",
        },
        {
          move: "a2",
          fen: "4K3/1kp5/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Ke7",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "8/1kp1K3/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Rf8+",
          fen: "3K1r2/1kp5/2pp3p/6p1/3b4/8/q7/8 w - - 4 44",
        },
        {
          move: "Ke7",
          fen: "5r2/1kp1K3/2pp3p/6p1/3b4/8/q7/8 b - - 5 44",
        },
        {
          move: "Qf7#",
          fen: "5r2/1kp1Kq2/2pp3p/6p1/3b4/8/8/8 w - - 6 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "a2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Rf8+",
          fen: "3K1r2/1kp5/2pp3p/6p1/3b4/8/q7/8 w - - 4 44",
        },
        {
          move: "Ke7",
          fen: "5r2/1kp1K3/2pp3p/6p1/3b4/8/q7/8 b - - 5 44",
        },
        {
          move: "Qf7#",
          fen: "5r2/1kp1Kq2/2pp3p/6p1/3b4/8/8/8 w - - 6 45",
        },
      ],
    },
    {
      move: "Re2",
      moveFen: "8/1kpK4/2pp3p/6p1/3b4/p7/4r3/8 w - - 2 41",
      evalBefore: "-M5",
      evalAfter: "-M5",
      bestMovesBefore: [
        {
          move: "a2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p4r2/8 w - - 0 41",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p4r2/8 b - - 1 41",
        },
        {
          move: "a1=Q",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/5r2/q7 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/5r2/q7 b - - 1 42",
        },
        {
          move: "Qa2",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q4r2/8 w - - 2 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q4r2/8 b - - 3 43",
        },
        {
          move: "Rf8+",
          fen: "3K1r2/1kp5/2pp3p/6p1/3b4/8/q7/8 w - - 4 44",
        },
        {
          move: "Ke7",
          fen: "5r2/1kp1K3/2pp3p/6p1/3b4/8/q7/8 b - - 5 44",
        },
        {
          move: "Qf7#",
          fen: "5r2/1kp1Kq2/2pp3p/6p1/3b4/8/8/8 w - - 6 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/p7/4r3/8 b - - 3 41",
        },
        {
          move: "a2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p3r3/8 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p3r3/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
    },
    {
      move: "Kd8",
      moveFen: "3K4/1kp5/2pp3p/6p1/3b4/p7/4r3/8 b - - 3 41",
      evalBefore: "-M5",
      evalAfter: "-M5",
      bestMovesBefore: [
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/p7/4r3/8 b - - 3 41",
        },
        {
          move: "a2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p3r3/8 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p3r3/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
      bestMovesAfter: [
        {
          move: "a2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p3r3/8 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p3r3/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
    },
    {
      move: "a2",
      moveFen: "3K4/1kp5/2pp3p/6p1/3b4/8/p3r3/8 w - - 0 42",
      evalBefore: "-M5",
      evalAfter: "-M4",
      bestMovesBefore: [
        {
          move: "a2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/p3r3/8 w - - 0 42",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p3r3/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p3r3/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
    },
    {
      move: "Kd7",
      moveFen: "8/1kpK4/2pp3p/6p1/3b4/8/p3r3/8 b - - 1 42",
      evalBefore: "-M4",
      evalAfter: "-M4",
      bestMovesBefore: [
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/p3r3/8 b - - 1 42",
        },
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
      bestMovesAfter: [
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
    },
    {
      move: "a1=Q",
      moveFen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
      evalBefore: "-M4",
      evalAfter: "-M2",
      bestMovesBefore: [
        {
          move: "a1=Q",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/4r3/q7 w - - 0 43",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa2",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/q3r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "8/1kpK4/2pp3p/6p1/3b4/8/q3r3/8 b - - 3 44",
        },
        {
          move: "Qf7+",
          fen: "8/1kpK1q2/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
        {
          move: "Kd8",
          fen: "3K4/1kp2q2/2pp3p/6p1/3b4/8/4r3/8 b - - 5 45",
        },
        {
          move: "Bf6#",
          fen: "3K4/1kp2q2/2pp1b1p/6p1/8/8/4r3/8 w - - 6 46",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa8+",
          fen: "q2K4/1kp5/2pp3p/6p1/3b4/8/4r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
    },
    {
      move: "Kd8",
      moveFen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
      evalBefore: "-M2",
      evalAfter: "-M2",
      bestMovesBefore: [
        {
          move: "Kd8",
          fen: "3K4/1kp5/2pp3p/6p1/3b4/8/4r3/q7 b - - 1 43",
        },
        {
          move: "Qa8+",
          fen: "q2K4/1kp5/2pp3p/6p1/3b4/8/4r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qa8+",
          fen: "q2K4/1kp5/2pp3p/6p1/3b4/8/4r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
    },
    {
      move: "Qa8+",
      moveFen: "q2K4/1kp5/2pp3p/6p1/3b4/8/4r3/8 w - - 2 44",
      evalBefore: "-M2",
      evalAfter: "-M1",
      bestMovesBefore: [
        {
          move: "Qa8+",
          fen: "q2K4/1kp5/2pp3p/6p1/3b4/8/4r3/8 w - - 2 44",
        },
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
    },
    {
      move: "Kd7",
      moveFen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
      evalBefore: "-M1",
      evalAfter: "-M1",
      bestMovesBefore: [
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
      bestMovesAfter: [
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
    },
    {
      move: "Qe8#",
      moveFen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
      evalBefore: "-M1",
      evalAfter: "",
      bestMovesBefore: [
        {
          move: "Kd7",
          fen: "q7/1kpK4/2pp3p/6p1/3b4/8/4r3/8 b - - 3 44",
        },
        {
          move: "Qe8#",
          fen: "4q3/1kpK4/2pp3p/6p1/3b4/8/4r3/8 w - - 4 45",
        },
      ],
      bestMovesAfter: [],
    },
  ],
};
