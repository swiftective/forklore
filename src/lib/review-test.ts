import { ReviewReport } from "./reviewer";

export const reviewTest: ReviewReport = {
  opening: {
    eco: "C21",
    name: "Danish Gambit Declined: Sorensen Defense",
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
      move: "d4",
      moveFen: "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
      bookMove: true,
    },
    {
      move: "exd4",
      moveFen: "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
      bookMove: true,
    },
    {
      move: "c3",
      moveFen: "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
      bookMove: true,
    },
    {
      move: "d5",
      moveFen: "rnbqkbnr/ppp2ppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq - 0 4",
      bookMove: true,
    },
    {
      move: "Qxd4",
      moveFen: "rnbqkbnr/ppp2ppp/8/3p4/3QP3/2P5/PP3PPP/RNB1KBNR b KQkq - 0 4",
      evalBefore: "-0.08",
      evalAfter: "+0.08",
      bestMovesBefore: [
        {
          move: "exd5",
          fen: "rnbqkbnr/ppp2ppp/8/3P4/3p4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
        },
        {
          move: "Qxd5",
          fen: "rnb1kbnr/ppp2ppp/8/3q4/3p4/2P5/PP3PPP/RNBQKBNR w KQkq - 0 5",
        },
        {
          move: "Nf3",
          fen: "rnb1kbnr/ppp2ppp/8/3q4/3p4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 1 5",
        },
        {
          move: "Nf6",
          fen: "rnb1kb1r/ppp2ppp/5n2/3q4/3p4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 2 6",
        },
        {
          move: "Qxd4",
          fen: "rnb1kb1r/ppp2ppp/5n2/3q4/3Q4/2P2N2/PP3PPP/RNB1KB1R b KQkq - 0 6",
        },
        {
          move: "Qxd4",
          fen: "rnb1kb1r/ppp2ppp/5n2/8/3q4/2P2N2/PP3PPP/RNB1KB1R w KQkq - 0 7",
        },
        {
          move: "Nxd4",
          fen: "rnb1kb1r/ppp2ppp/5n2/8/3N4/2P5/PP3PPP/RNB1KB1R b KQkq - 0 7",
        },
        {
          move: "Nbd7",
          fen: "r1b1kb1r/pppn1ppp/5n2/8/3N4/2P5/PP3PPP/RNB1KB1R w KQkq - 1 8",
        },
        {
          move: "Nf3",
          fen: "r1b1kb1r/pppn1ppp/5n2/8/8/2P2N2/PP3PPP/RNB1KB1R b KQkq - 2 8",
        },
        {
          move: "Ne4",
          fen: "r1b1kb1r/pppn1ppp/8/8/4n3/2P2N2/PP3PPP/RNB1KB1R w KQkq - 3 9",
        },
        {
          move: "Bf4",
          fen: "r1b1kb1r/pppn1ppp/8/8/4nB2/2P2N2/PP3PPP/RN2KB1R b KQkq - 4 9",
        },
      ],
      bestMovesAfter: [
        {
          move: "Nf6",
          fen: "rnbqkb1r/ppp2ppp/5n2/3p4/3QP3/2P5/PP3PPP/RNB1KBNR w KQkq - 1 5",
        },
        {
          move: "exd5",
          fen: "rnbqkb1r/ppp2ppp/5n2/3P4/3Q4/2P5/PP3PPP/RNB1KBNR b KQkq - 0 5",
        },
        {
          move: "Qxd5",
          fen: "rnb1kb1r/ppp2ppp/5n2/3q4/3Q4/2P5/PP3PPP/RNB1KBNR w KQkq - 0 6",
        },
        {
          move: "Qxd5",
          fen: "rnb1kb1r/ppp2ppp/5n2/3Q4/8/2P5/PP3PPP/RNB1KBNR b KQkq - 0 6",
        },
        {
          move: "Nxd5",
          fen: "rnb1kb1r/ppp2ppp/8/3n4/8/2P5/PP3PPP/RNB1KBNR w KQkq - 0 7",
        },
        {
          move: "Nf3",
          fen: "rnb1kb1r/ppp2ppp/8/3n4/8/2P2N2/PP3PPP/RNB1KB1R b KQkq - 1 7",
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/ppp2ppp/2n5/3n4/8/2P2N2/PP3PPP/RNB1KB1R w KQkq - 2 8",
        },
        {
          move: "Bb5",
          fen: "r1b1kb1r/ppp2ppp/2n5/1B1n4/8/2P2N2/PP3PPP/RNB1K2R b KQkq - 3 8",
        },
        {
          move: "Bd6",
          fen: "r1b1k2r/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP3PPP/RNB1K2R w KQkq - 4 9",
        },
        {
          move: "O-O",
          fen: "r1b1k2r/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP3PPP/RNB2RK1 b kq - 5 9",
        },
        {
          move: "O-O",
          fen: "r1b2rk1/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP3PPP/RNB2RK1 w - - 6 10",
        },
        {
          move: "Nbd2",
          fen: "r1b2rk1/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP1N1PPP/R1B2RK1 b - - 7 10",
        },
        {
          move: "a6",
          fen: "r1b2rk1/1pp2ppp/p1nb4/1B1n4/8/2P2N2/PP1N1PPP/R1B2RK1 w - - 0 11",
        },
        {
          move: "Bxc6",
          fen: "r1b2rk1/1pp2ppp/p1Bb4/3n4/8/2P2N2/PP1N1PPP/R1B2RK1 b - - 0 11",
        },
        {
          move: "bxc6",
          fen: "r1b2rk1/2p2ppp/p1pb4/3n4/8/2P2N2/PP1N1PPP/R1B2RK1 w - - 0 12",
        },
        {
          move: "Nc4",
          fen: "r1b2rk1/2p2ppp/p1pb4/3n4/2N5/2P2N2/PP3PPP/R1B2RK1 b - - 1 12",
        },
        {
          move: "Re8",
          fen: "r1b1r1k1/2p2ppp/p1pb4/3n4/2N5/2P2N2/PP3PPP/R1B2RK1 w - - 2 13",
        },
        {
          move: "Bd2",
          fen: "r1b1r1k1/2p2ppp/p1pb4/3n4/2N5/2P2N2/PP1B1PPP/R4RK1 b - - 3 13",
        },
        {
          move: "Bg4",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N3b1/2P2N2/PP1B1PPP/R4RK1 w - - 4 14",
        },
        {
          move: "Rae1",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N3b1/2P2N2/PP1B1PPP/4RRK1 b - - 5 14",
        },
        {
          move: "Bxf3",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N5/2P2b2/PP1B1PPP/4RRK1 w - - 0 15",
        },
        {
          move: "gxf3",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N5/2P2P2/PP1B1P1P/4RRK1 b - - 0 15",
        },
      ],
    },
    {
      move: "Nf6",
      moveFen: "rnbqkb1r/ppp2ppp/5n2/3p4/3QP3/2P5/PP3PPP/RNB1KBNR w KQkq - 1 5",
      evalBefore: "-0.08",
      evalAfter: "-0.04",
      bestMovesBefore: [
        {
          move: "Nf6",
          fen: "rnbqkb1r/ppp2ppp/5n2/3p4/3QP3/2P5/PP3PPP/RNB1KBNR w KQkq - 1 5",
        },
        {
          move: "exd5",
          fen: "rnbqkb1r/ppp2ppp/5n2/3P4/3Q4/2P5/PP3PPP/RNB1KBNR b KQkq - 0 5",
        },
        {
          move: "Qxd5",
          fen: "rnb1kb1r/ppp2ppp/5n2/3q4/3Q4/2P5/PP3PPP/RNB1KBNR w KQkq - 0 6",
        },
        {
          move: "Qxd5",
          fen: "rnb1kb1r/ppp2ppp/5n2/3Q4/8/2P5/PP3PPP/RNB1KBNR b KQkq - 0 6",
        },
        {
          move: "Nxd5",
          fen: "rnb1kb1r/ppp2ppp/8/3n4/8/2P5/PP3PPP/RNB1KBNR w KQkq - 0 7",
        },
        {
          move: "Nf3",
          fen: "rnb1kb1r/ppp2ppp/8/3n4/8/2P2N2/PP3PPP/RNB1KB1R b KQkq - 1 7",
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/ppp2ppp/2n5/3n4/8/2P2N2/PP3PPP/RNB1KB1R w KQkq - 2 8",
        },
        {
          move: "Bb5",
          fen: "r1b1kb1r/ppp2ppp/2n5/1B1n4/8/2P2N2/PP3PPP/RNB1K2R b KQkq - 3 8",
        },
        {
          move: "Bd6",
          fen: "r1b1k2r/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP3PPP/RNB1K2R w KQkq - 4 9",
        },
        {
          move: "O-O",
          fen: "r1b1k2r/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP3PPP/RNB2RK1 b kq - 5 9",
        },
        {
          move: "O-O",
          fen: "r1b2rk1/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP3PPP/RNB2RK1 w - - 6 10",
        },
        {
          move: "Nbd2",
          fen: "r1b2rk1/ppp2ppp/2nb4/1B1n4/8/2P2N2/PP1N1PPP/R1B2RK1 b - - 7 10",
        },
        {
          move: "a6",
          fen: "r1b2rk1/1pp2ppp/p1nb4/1B1n4/8/2P2N2/PP1N1PPP/R1B2RK1 w - - 0 11",
        },
        {
          move: "Bxc6",
          fen: "r1b2rk1/1pp2ppp/p1Bb4/3n4/8/2P2N2/PP1N1PPP/R1B2RK1 b - - 0 11",
        },
        {
          move: "bxc6",
          fen: "r1b2rk1/2p2ppp/p1pb4/3n4/8/2P2N2/PP1N1PPP/R1B2RK1 w - - 0 12",
        },
        {
          move: "Nc4",
          fen: "r1b2rk1/2p2ppp/p1pb4/3n4/2N5/2P2N2/PP3PPP/R1B2RK1 b - - 1 12",
        },
        {
          move: "Re8",
          fen: "r1b1r1k1/2p2ppp/p1pb4/3n4/2N5/2P2N2/PP3PPP/R1B2RK1 w - - 2 13",
        },
        {
          move: "Bd2",
          fen: "r1b1r1k1/2p2ppp/p1pb4/3n4/2N5/2P2N2/PP1B1PPP/R4RK1 b - - 3 13",
        },
        {
          move: "Bg4",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N3b1/2P2N2/PP1B1PPP/R4RK1 w - - 4 14",
        },
        {
          move: "Rae1",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N3b1/2P2N2/PP1B1PPP/4RRK1 b - - 5 14",
        },
        {
          move: "Bxf3",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N5/2P2b2/PP1B1PPP/4RRK1 w - - 0 15",
        },
        {
          move: "gxf3",
          fen: "r3r1k1/2p2ppp/p1pb4/3n4/2N5/2P2P2/PP1B1P1P/4RRK1 b - - 0 15",
        },
      ],
      bestMovesAfter: [
        {
          move: "exd5",
          fen: "rnbqkb1r/ppp2ppp/5n2/3P4/3Q4/2P5/PP3PPP/RNB1KBNR b KQkq - 0 5",
        },
        {
          move: "Nbd7",
          fen: "r1bqkb1r/pppn1ppp/5n2/3P4/3Q4/2P5/PP3PPP/RNB1KBNR w KQkq - 1 6",
        },
        {
          move: "Bb5",
          fen: "r1bqkb1r/pppn1ppp/5n2/1B1P4/3Q4/2P5/PP3PPP/RNB1K1NR b KQkq - 2 6",
        },
        {
          move: "Bd6",
          fen: "r1bqk2r/pppn1ppp/3b1n2/1B1P4/3Q4/2P5/PP3PPP/RNB1K1NR w KQkq - 3 7",
        },
        {
          move: "Qe3+",
          fen: "r1bqk2r/pppn1ppp/3b1n2/1B1P4/8/2P1Q3/PP3PPP/RNB1K1NR b KQkq - 4 7",
        },
        {
          move: "Qe7",
          fen: "r1b1k2r/pppnqppp/3b1n2/1B1P4/8/2P1Q3/PP3PPP/RNB1K1NR w KQkq - 5 8",
        },
        {
          move: "Qxe7+",
          fen: "r1b1k2r/pppnQppp/3b1n2/1B1P4/8/2P5/PP3PPP/RNB1K1NR b KQkq - 0 8",
        },
        {
          move: "Bxe7",
          fen: "r1b1k2r/pppnbppp/5n2/1B1P4/8/2P5/PP3PPP/RNB1K1NR w KQkq - 0 9",
        },
        {
          move: "Nf3",
          fen: "r1b1k2r/pppnbppp/5n2/1B1P4/8/2P2N2/PP3PPP/RNB1K2R b KQkq - 1 9",
        },
        {
          move: "a6",
          fen: "r1b1k2r/1ppnbppp/p4n2/1B1P4/8/2P2N2/PP3PPP/RNB1K2R w KQkq - 0 10",
        },
        {
          move: "Bd3",
          fen: "r1b1k2r/1ppnbppp/p4n2/3P4/8/2PB1N2/PP3PPP/RNB1K2R b KQkq - 1 10",
        },
        {
          move: "Nxd5",
          fen: "r1b1k2r/1ppnbppp/p7/3n4/8/2PB1N2/PP3PPP/RNB1K2R w KQkq - 0 11",
        },
        {
          move: "O-O",
          fen: "r1b1k2r/1ppnbppp/p7/3n4/8/2PB1N2/PP3PPP/RNB2RK1 b kq - 1 11",
        },
        {
          move: "Nc5",
          fen: "r1b1k2r/1pp1bppp/p7/2nn4/8/2PB1N2/PP3PPP/RNB2RK1 w kq - 2 12",
        },
        {
          move: "Bc2",
          fen: "r1b1k2r/1pp1bppp/p7/2nn4/8/2P2N2/PPB2PPP/RNB2RK1 b kq - 3 12",
        },
        {
          move: "a5",
          fen: "r1b1k2r/1pp1bppp/8/p1nn4/8/2P2N2/PPB2PPP/RNB2RK1 w kq - 0 13",
        },
        {
          move: "Rd1",
          fen: "r1b1k2r/1pp1bppp/8/p1nn4/8/2P2N2/PPB2PPP/RNBR2K1 b kq - 1 13",
        },
        {
          move: "Be6",
          fen: "r3k2r/1pp1bppp/4b3/p1nn4/8/2P2N2/PPB2PPP/RNBR2K1 w kq - 2 14",
        },
      ],
    },
    {
      move: "e5",
      moveFen: "rnbqkb1r/ppp2ppp/5n2/3pP3/3Q4/2P5/PP3PPP/RNB1KBNR b KQkq - 0 5",
      evalBefore: "-0.04",
      evalAfter: "-0.49",
      bestMovesBefore: [
        {
          move: "exd5",
          fen: "rnbqkb1r/ppp2ppp/5n2/3P4/3Q4/2P5/PP3PPP/RNB1KBNR b KQkq - 0 5",
        },
        {
          move: "Nbd7",
          fen: "r1bqkb1r/pppn1ppp/5n2/3P4/3Q4/2P5/PP3PPP/RNB1KBNR w KQkq - 1 6",
        },
        {
          move: "Bb5",
          fen: "r1bqkb1r/pppn1ppp/5n2/1B1P4/3Q4/2P5/PP3PPP/RNB1K1NR b KQkq - 2 6",
        },
        {
          move: "Bd6",
          fen: "r1bqk2r/pppn1ppp/3b1n2/1B1P4/3Q4/2P5/PP3PPP/RNB1K1NR w KQkq - 3 7",
        },
        {
          move: "Qe3+",
          fen: "r1bqk2r/pppn1ppp/3b1n2/1B1P4/8/2P1Q3/PP3PPP/RNB1K1NR b KQkq - 4 7",
        },
        {
          move: "Qe7",
          fen: "r1b1k2r/pppnqppp/3b1n2/1B1P4/8/2P1Q3/PP3PPP/RNB1K1NR w KQkq - 5 8",
        },
        {
          move: "Qxe7+",
          fen: "r1b1k2r/pppnQppp/3b1n2/1B1P4/8/2P5/PP3PPP/RNB1K1NR b KQkq - 0 8",
        },
        {
          move: "Bxe7",
          fen: "r1b1k2r/pppnbppp/5n2/1B1P4/8/2P5/PP3PPP/RNB1K1NR w KQkq - 0 9",
        },
        {
          move: "Nf3",
          fen: "r1b1k2r/pppnbppp/5n2/1B1P4/8/2P2N2/PP3PPP/RNB1K2R b KQkq - 1 9",
        },
        {
          move: "a6",
          fen: "r1b1k2r/1ppnbppp/p4n2/1B1P4/8/2P2N2/PP3PPP/RNB1K2R w KQkq - 0 10",
        },
        {
          move: "Bd3",
          fen: "r1b1k2r/1ppnbppp/p4n2/3P4/8/2PB1N2/PP3PPP/RNB1K2R b KQkq - 1 10",
        },
        {
          move: "Nxd5",
          fen: "r1b1k2r/1ppnbppp/p7/3n4/8/2PB1N2/PP3PPP/RNB1K2R w KQkq - 0 11",
        },
        {
          move: "O-O",
          fen: "r1b1k2r/1ppnbppp/p7/3n4/8/2PB1N2/PP3PPP/RNB2RK1 b kq - 1 11",
        },
        {
          move: "Nc5",
          fen: "r1b1k2r/1pp1bppp/p7/2nn4/8/2PB1N2/PP3PPP/RNB2RK1 w kq - 2 12",
        },
        {
          move: "Bc2",
          fen: "r1b1k2r/1pp1bppp/p7/2nn4/8/2P2N2/PPB2PPP/RNB2RK1 b kq - 3 12",
        },
        {
          move: "a5",
          fen: "r1b1k2r/1pp1bppp/8/p1nn4/8/2P2N2/PPB2PPP/RNB2RK1 w kq - 0 13",
        },
        {
          move: "Rd1",
          fen: "r1b1k2r/1pp1bppp/8/p1nn4/8/2P2N2/PPB2PPP/RNBR2K1 b kq - 1 13",
        },
        {
          move: "Be6",
          fen: "r3k2r/1pp1bppp/4b3/p1nn4/8/2P2N2/PPB2PPP/RNBR2K1 w kq - 2 14",
        },
      ],
      bestMovesAfter: [
        {
          move: "Ne4",
          fen: "rnbqkb1r/ppp2ppp/8/3pP3/3Qn3/2P5/PP3PPP/RNB1KBNR w KQkq - 1 6",
        },
        {
          move: "Be3",
          fen: "rnbqkb1r/ppp2ppp/8/3pP3/3Qn3/2P1B3/PP3PPP/RN2KBNR b KQkq - 2 6",
        },
        {
          move: "Bc5",
          fen: "rnbqk2r/ppp2ppp/8/2bpP3/3Qn3/2P1B3/PP3PPP/RN2KBNR w KQkq - 3 7",
        },
        {
          move: "Qd3",
          fen: "rnbqk2r/ppp2ppp/8/2bpP3/4n3/2PQB3/PP3PPP/RN2KBNR b KQkq - 4 7",
        },
        {
          move: "Nc6",
          fen: "r1bqk2r/ppp2ppp/2n5/2bpP3/4n3/2PQB3/PP3PPP/RN2KBNR w KQkq - 5 8",
        },
        {
          move: "Nf3",
          fen: "r1bqk2r/ppp2ppp/2n5/2bpP3/4n3/2PQBN2/PP3PPP/RN2KB1R b KQkq - 6 8",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2n5/2bpP3/4n3/2PQBN2/PP3PPP/RN2KB1R w KQ - 7 9",
        },
        {
          move: "Bxc5",
          fen: "r1bq1rk1/ppp2ppp/2n5/2BpP3/4n3/2PQ1N2/PP3PPP/RN2KB1R b KQ - 0 9",
        },
        {
          move: "Nxc5",
          fen: "r1bq1rk1/ppp2ppp/2n5/2npP3/8/2PQ1N2/PP3PPP/RN2KB1R w KQ - 0 10",
        },
        {
          move: "Qe3",
          fen: "r1bq1rk1/ppp2ppp/2n5/2npP3/8/2P1QN2/PP3PPP/RN2KB1R b KQ - 1 10",
        },
        {
          move: "Re8",
          fen: "r1bqr1k1/ppp2ppp/2n5/2npP3/8/2P1QN2/PP3PPP/RN2KB1R w KQ - 2 11",
        },
        {
          move: "Bb5",
          fen: "r1bqr1k1/ppp2ppp/2n5/1BnpP3/8/2P1QN2/PP3PPP/RN2K2R b KQ - 3 11",
        },
        {
          move: "Nd7",
          fen: "r1bqr1k1/pppn1ppp/2n5/1B1pP3/8/2P1QN2/PP3PPP/RN2K2R w KQ - 4 12",
        },
        {
          move: "Bxc6",
          fen: "r1bqr1k1/pppn1ppp/2B5/3pP3/8/2P1QN2/PP3PPP/RN2K2R b KQ - 0 12",
        },
        {
          move: "bxc6",
          fen: "r1bqr1k1/p1pn1ppp/2p5/3pP3/8/2P1QN2/PP3PPP/RN2K2R w KQ - 0 13",
        },
        {
          move: "Nbd2",
          fen: "r1bqr1k1/p1pn1ppp/2p5/3pP3/8/2P1QN2/PP1N1PPP/R3K2R b KQ - 1 13",
        },
        {
          move: "c5",
          fen: "r1bqr1k1/p1pn1ppp/8/2ppP3/8/2P1QN2/PP1N1PPP/R3K2R w KQ - 0 14",
        },
        {
          move: "O-O",
          fen: "r1bqr1k1/p1pn1ppp/8/2ppP3/8/2P1QN2/PP1N1PPP/R4RK1 b - - 1 14",
        },
        {
          move: "Rb8",
          fen: "1rbqr1k1/p1pn1ppp/8/2ppP3/8/2P1QN2/PP1N1PPP/R4RK1 w - - 2 15",
        },
        {
          move: "Nb3",
          fen: "1rbqr1k1/p1pn1ppp/8/2ppP3/8/1NP1QN2/PP3PPP/R4RK1 b - - 3 15",
        },
        {
          move: "c4",
          fen: "1rbqr1k1/p1pn1ppp/8/3pP3/2p5/1NP1QN2/PP3PPP/R4RK1 w - - 0 16",
        },
      ],
    },
    {
      move: "Nc6",
      moveFen:
        "r1bqkb1r/ppp2ppp/2n2n2/3pP3/3Q4/2P5/PP3PPP/RNB1KBNR w KQkq - 1 6",
      evalBefore: "-0.49",
      evalAfter: "-0.45",
      bestMovesBefore: [
        {
          move: "Ne4",
          fen: "rnbqkb1r/ppp2ppp/8/3pP3/3Qn3/2P5/PP3PPP/RNB1KBNR w KQkq - 1 6",
        },
        {
          move: "Be3",
          fen: "rnbqkb1r/ppp2ppp/8/3pP3/3Qn3/2P1B3/PP3PPP/RN2KBNR b KQkq - 2 6",
        },
        {
          move: "Bc5",
          fen: "rnbqk2r/ppp2ppp/8/2bpP3/3Qn3/2P1B3/PP3PPP/RN2KBNR w KQkq - 3 7",
        },
        {
          move: "Qd3",
          fen: "rnbqk2r/ppp2ppp/8/2bpP3/4n3/2PQB3/PP3PPP/RN2KBNR b KQkq - 4 7",
        },
        {
          move: "Nc6",
          fen: "r1bqk2r/ppp2ppp/2n5/2bpP3/4n3/2PQB3/PP3PPP/RN2KBNR w KQkq - 5 8",
        },
        {
          move: "Nf3",
          fen: "r1bqk2r/ppp2ppp/2n5/2bpP3/4n3/2PQBN2/PP3PPP/RN2KB1R b KQkq - 6 8",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2n5/2bpP3/4n3/2PQBN2/PP3PPP/RN2KB1R w KQ - 7 9",
        },
        {
          move: "Bxc5",
          fen: "r1bq1rk1/ppp2ppp/2n5/2BpP3/4n3/2PQ1N2/PP3PPP/RN2KB1R b KQ - 0 9",
        },
        {
          move: "Nxc5",
          fen: "r1bq1rk1/ppp2ppp/2n5/2npP3/8/2PQ1N2/PP3PPP/RN2KB1R w KQ - 0 10",
        },
        {
          move: "Qe3",
          fen: "r1bq1rk1/ppp2ppp/2n5/2npP3/8/2P1QN2/PP3PPP/RN2KB1R b KQ - 1 10",
        },
        {
          move: "Re8",
          fen: "r1bqr1k1/ppp2ppp/2n5/2npP3/8/2P1QN2/PP3PPP/RN2KB1R w KQ - 2 11",
        },
        {
          move: "Bb5",
          fen: "r1bqr1k1/ppp2ppp/2n5/1BnpP3/8/2P1QN2/PP3PPP/RN2K2R b KQ - 3 11",
        },
        {
          move: "Nd7",
          fen: "r1bqr1k1/pppn1ppp/2n5/1B1pP3/8/2P1QN2/PP3PPP/RN2K2R w KQ - 4 12",
        },
        {
          move: "Bxc6",
          fen: "r1bqr1k1/pppn1ppp/2B5/3pP3/8/2P1QN2/PP3PPP/RN2K2R b KQ - 0 12",
        },
        {
          move: "bxc6",
          fen: "r1bqr1k1/p1pn1ppp/2p5/3pP3/8/2P1QN2/PP3PPP/RN2K2R w KQ - 0 13",
        },
        {
          move: "Nbd2",
          fen: "r1bqr1k1/p1pn1ppp/2p5/3pP3/8/2P1QN2/PP1N1PPP/R3K2R b KQ - 1 13",
        },
        {
          move: "c5",
          fen: "r1bqr1k1/p1pn1ppp/8/2ppP3/8/2P1QN2/PP1N1PPP/R3K2R w KQ - 0 14",
        },
        {
          move: "O-O",
          fen: "r1bqr1k1/p1pn1ppp/8/2ppP3/8/2P1QN2/PP1N1PPP/R4RK1 b - - 1 14",
        },
        {
          move: "Rb8",
          fen: "1rbqr1k1/p1pn1ppp/8/2ppP3/8/2P1QN2/PP1N1PPP/R4RK1 w - - 2 15",
        },
        {
          move: "Nb3",
          fen: "1rbqr1k1/p1pn1ppp/8/2ppP3/8/1NP1QN2/PP3PPP/R4RK1 b - - 3 15",
        },
        {
          move: "c4",
          fen: "1rbqr1k1/p1pn1ppp/8/3pP3/2p5/1NP1QN2/PP3PPP/R4RK1 w - - 0 16",
        },
      ],
      bestMovesAfter: [
        {
          move: "Bb5",
          fen: "r1bqkb1r/ppp2ppp/2n2n2/1B1pP3/3Q4/2P5/PP3PPP/RNB1K1NR b KQkq - 2 6",
        },
        {
          move: "Ne4",
          fen: "r1bqkb1r/ppp2ppp/2n5/1B1pP3/3Qn3/2P5/PP3PPP/RNB1K1NR w KQkq - 3 7",
        },
        {
          move: "Be3",
          fen: "r1bqkb1r/ppp2ppp/2n5/1B1pP3/3Qn3/2P1B3/PP3PPP/RN2K1NR b KQkq - 4 7",
        },
        {
          move: "Bc5",
          fen: "r1bqk2r/ppp2ppp/2n5/1BbpP3/3Qn3/2P1B3/PP3PPP/RN2K1NR w KQkq - 5 8",
        },
        {
          move: "Qd3",
          fen: "r1bqk2r/ppp2ppp/2n5/1BbpP3/4n3/2PQB3/PP3PPP/RN2K1NR b KQkq - 6 8",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2n5/1BbpP3/4n3/2PQB3/PP3PPP/RN2K1NR w KQ - 7 9",
        },
        {
          move: "Nf3",
          fen: "r1bq1rk1/ppp2ppp/2n5/1BbpP3/4n3/2PQBN2/PP3PPP/RN2K2R b KQ - 8 9",
        },
        {
          move: "Re8",
          fen: "r1bqr1k1/ppp2ppp/2n5/1BbpP3/4n3/2PQBN2/PP3PPP/RN2K2R w KQ - 9 10",
        },
        {
          move: "Bxc6",
          fen: "r1bqr1k1/ppp2ppp/2B5/2bpP3/4n3/2PQBN2/PP3PPP/RN2K2R b KQ - 0 10",
        },
        {
          move: "Bxe3",
          fen: "r1bqr1k1/ppp2ppp/2B5/3pP3/4n3/2PQbN2/PP3PPP/RN2K2R w KQ - 0 11",
        },
        {
          move: "Qxe3",
          fen: "r1bqr1k1/ppp2ppp/2B5/3pP3/4n3/2P1QN2/PP3PPP/RN2K2R b KQ - 0 11",
        },
        {
          move: "bxc6",
          fen: "r1bqr1k1/p1p2ppp/2p5/3pP3/4n3/2P1QN2/PP3PPP/RN2K2R w KQ - 0 12",
        },
        {
          move: "O-O",
          fen: "r1bqr1k1/p1p2ppp/2p5/3pP3/4n3/2P1QN2/PP3PPP/RN3RK1 b - - 1 12",
        },
        {
          move: "f6",
          fen: "r1bqr1k1/p1p3pp/2p2p2/3pP3/4n3/2P1QN2/PP3PPP/RN3RK1 w - - 0 13",
        },
        {
          move: "Re1",
          fen: "r1bqr1k1/p1p3pp/2p2p2/3pP3/4n3/2P1QN2/PP3PPP/RN2R1K1 b - - 1 13",
        },
        {
          move: "fxe5",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/4n3/2P1QN2/PP3PPP/RN2R1K1 w - - 0 14",
        },
        {
          move: "Nbd2",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/4n3/2P1QN2/PP1N1PPP/R3R1K1 b - - 1 14",
        },
        {
          move: "Nxd2",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/8/2P1QN2/PP1n1PPP/R3R1K1 w - - 0 15",
        },
        {
          move: "Nxd2",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/8/2P1Q3/PP1N1PPP/R3R1K1 b - - 0 15",
        },
        {
          move: "e4",
          fen: "r1bqr1k1/p1p3pp/2p5/3p4/4p3/2P1Q3/PP1N1PPP/R3R1K1 w - - 0 16",
        },
        {
          move: "Nb3",
          fen: "r1bqr1k1/p1p3pp/2p5/3p4/4p3/1NP1Q3/PP3PPP/R3R1K1 b - - 1 16",
        },
      ],
    },
    {
      move: "Qd3",
      moveFen:
        "r1bqkb1r/ppp2ppp/2n2n2/3pP3/8/2PQ4/PP3PPP/RNB1KBNR b KQkq - 2 6",
      evalBefore: "-0.45",
      evalAfter: "-1.98",
      bestMovesBefore: [
        {
          move: "Bb5",
          fen: "r1bqkb1r/ppp2ppp/2n2n2/1B1pP3/3Q4/2P5/PP3PPP/RNB1K1NR b KQkq - 2 6",
        },
        {
          move: "Ne4",
          fen: "r1bqkb1r/ppp2ppp/2n5/1B1pP3/3Qn3/2P5/PP3PPP/RNB1K1NR w KQkq - 3 7",
        },
        {
          move: "Be3",
          fen: "r1bqkb1r/ppp2ppp/2n5/1B1pP3/3Qn3/2P1B3/PP3PPP/RN2K1NR b KQkq - 4 7",
        },
        {
          move: "Bc5",
          fen: "r1bqk2r/ppp2ppp/2n5/1BbpP3/3Qn3/2P1B3/PP3PPP/RN2K1NR w KQkq - 5 8",
        },
        {
          move: "Qd3",
          fen: "r1bqk2r/ppp2ppp/2n5/1BbpP3/4n3/2PQB3/PP3PPP/RN2K1NR b KQkq - 6 8",
        },
        {
          move: "O-O",
          fen: "r1bq1rk1/ppp2ppp/2n5/1BbpP3/4n3/2PQB3/PP3PPP/RN2K1NR w KQ - 7 9",
        },
        {
          move: "Nf3",
          fen: "r1bq1rk1/ppp2ppp/2n5/1BbpP3/4n3/2PQBN2/PP3PPP/RN2K2R b KQ - 8 9",
        },
        {
          move: "Re8",
          fen: "r1bqr1k1/ppp2ppp/2n5/1BbpP3/4n3/2PQBN2/PP3PPP/RN2K2R w KQ - 9 10",
        },
        {
          move: "Bxc6",
          fen: "r1bqr1k1/ppp2ppp/2B5/2bpP3/4n3/2PQBN2/PP3PPP/RN2K2R b KQ - 0 10",
        },
        {
          move: "Bxe3",
          fen: "r1bqr1k1/ppp2ppp/2B5/3pP3/4n3/2PQbN2/PP3PPP/RN2K2R w KQ - 0 11",
        },
        {
          move: "Qxe3",
          fen: "r1bqr1k1/ppp2ppp/2B5/3pP3/4n3/2P1QN2/PP3PPP/RN2K2R b KQ - 0 11",
        },
        {
          move: "bxc6",
          fen: "r1bqr1k1/p1p2ppp/2p5/3pP3/4n3/2P1QN2/PP3PPP/RN2K2R w KQ - 0 12",
        },
        {
          move: "O-O",
          fen: "r1bqr1k1/p1p2ppp/2p5/3pP3/4n3/2P1QN2/PP3PPP/RN3RK1 b - - 1 12",
        },
        {
          move: "f6",
          fen: "r1bqr1k1/p1p3pp/2p2p2/3pP3/4n3/2P1QN2/PP3PPP/RN3RK1 w - - 0 13",
        },
        {
          move: "Re1",
          fen: "r1bqr1k1/p1p3pp/2p2p2/3pP3/4n3/2P1QN2/PP3PPP/RN2R1K1 b - - 1 13",
        },
        {
          move: "fxe5",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/4n3/2P1QN2/PP3PPP/RN2R1K1 w - - 0 14",
        },
        {
          move: "Nbd2",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/4n3/2P1QN2/PP1N1PPP/R3R1K1 b - - 1 14",
        },
        {
          move: "Nxd2",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/8/2P1QN2/PP1n1PPP/R3R1K1 w - - 0 15",
        },
        {
          move: "Nxd2",
          fen: "r1bqr1k1/p1p3pp/2p5/3pp3/8/2P1Q3/PP1N1PPP/R3R1K1 b - - 0 15",
        },
        {
          move: "e4",
          fen: "r1bqr1k1/p1p3pp/2p5/3p4/4p3/2P1Q3/PP1N1PPP/R3R1K1 w - - 0 16",
        },
        {
          move: "Nb3",
          fen: "r1bqr1k1/p1p3pp/2p5/3p4/4p3/1NP1Q3/PP3PPP/R3R1K1 b - - 1 16",
        },
      ],
      bestMovesAfter: [
        {
          move: "Nxe5",
          fen: "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2PQ4/PP3PPP/RNB1KBNR w KQkq - 0 7",
        },
        {
          move: "Qe2",
          fen: "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR b KQkq - 1 7",
        },
        {
          move: "Qe7",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR w KQkq - 2 8",
        },
        {
          move: "Kd1",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNBK1BNR b kq - 3 8",
        },
        {
          move: "Bf5",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P5/PP2QPPP/RNBK1BNR w kq - 4 9",
        },
        {
          move: "Nf3",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P2N2/PP2QPPP/RNBK1B1R b kq - 5 9",
        },
        {
          move: "Nxf3",
          fen: "r3kb1r/ppp1qppp/5n2/3p1b2/8/2P2n2/PP2QPPP/RNBK1B1R w kq - 0 10",
        },
        {
          move: "gxf3",
          fen: "r3kb1r/ppp1qppp/5n2/3p1b2/8/2P2P2/PP2QP1P/RNBK1B1R b kq - 0 10",
        },
        {
          move: "O-O-O",
          fen: "2kr1b1r/ppp1qppp/5n2/3p1b2/8/2P2P2/PP2QP1P/RNBK1B1R w - - 1 11",
        },
        {
          move: "Be3",
          fen: "2kr1b1r/ppp1qppp/5n2/3p1b2/8/2P1BP2/PP2QP1P/RN1K1B1R b - - 2 11",
        },
        {
          move: "Rg8",
          fen: "2kr1br1/ppp1qppp/5n2/3p1b2/8/2P1BP2/PP2QP1P/RN1K1B1R w - - 3 12",
        },
        {
          move: "Kc1",
          fen: "2kr1br1/ppp1qppp/5n2/3p1b2/8/2P1BP2/PP2QP1P/RNK2B1R b - - 4 12",
        },
        {
          move: "g6",
          fen: "2kr1br1/ppp1qp1p/5np1/3p1b2/8/2P1BP2/PP2QP1P/RNK2B1R w - - 0 13",
        },
        {
          move: "Nd2",
          fen: "2kr1br1/ppp1qp1p/5np1/3p1b2/8/2P1BP2/PP1NQP1P/R1K2B1R b - - 1 13",
        },
        {
          move: "c5",
          fen: "2kr1br1/pp2qp1p/5np1/2pp1b2/8/2P1BP2/PP1NQP1P/R1K2B1R w - - 0 14",
        },
      ],
    },
    {
      move: "Nxe5",
      moveFen: "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2PQ4/PP3PPP/RNB1KBNR w KQkq - 0 7",
      evalBefore: "-1.98",
      evalAfter: "-1.91",
      bestMovesBefore: [
        {
          move: "Nxe5",
          fen: "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2PQ4/PP3PPP/RNB1KBNR w KQkq - 0 7",
        },
        {
          move: "Qe2",
          fen: "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR b KQkq - 1 7",
        },
        {
          move: "Qe7",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR w KQkq - 2 8",
        },
        {
          move: "Kd1",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNBK1BNR b kq - 3 8",
        },
        {
          move: "Bf5",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P5/PP2QPPP/RNBK1BNR w kq - 4 9",
        },
        {
          move: "Nf3",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P2N2/PP2QPPP/RNBK1B1R b kq - 5 9",
        },
        {
          move: "Nxf3",
          fen: "r3kb1r/ppp1qppp/5n2/3p1b2/8/2P2n2/PP2QPPP/RNBK1B1R w kq - 0 10",
        },
        {
          move: "gxf3",
          fen: "r3kb1r/ppp1qppp/5n2/3p1b2/8/2P2P2/PP2QP1P/RNBK1B1R b kq - 0 10",
        },
        {
          move: "O-O-O",
          fen: "2kr1b1r/ppp1qppp/5n2/3p1b2/8/2P2P2/PP2QP1P/RNBK1B1R w - - 1 11",
        },
        {
          move: "Be3",
          fen: "2kr1b1r/ppp1qppp/5n2/3p1b2/8/2P1BP2/PP2QP1P/RN1K1B1R b - - 2 11",
        },
        {
          move: "Rg8",
          fen: "2kr1br1/ppp1qppp/5n2/3p1b2/8/2P1BP2/PP2QP1P/RN1K1B1R w - - 3 12",
        },
        {
          move: "Kc1",
          fen: "2kr1br1/ppp1qppp/5n2/3p1b2/8/2P1BP2/PP2QP1P/RNK2B1R b - - 4 12",
        },
        {
          move: "g6",
          fen: "2kr1br1/ppp1qp1p/5np1/3p1b2/8/2P1BP2/PP2QP1P/RNK2B1R w - - 0 13",
        },
        {
          move: "Nd2",
          fen: "2kr1br1/ppp1qp1p/5np1/3p1b2/8/2P1BP2/PP1NQP1P/R1K2B1R b - - 1 13",
        },
        {
          move: "c5",
          fen: "2kr1br1/pp2qp1p/5np1/2pp1b2/8/2P1BP2/PP1NQP1P/R1K2B1R w - - 0 14",
        },
      ],
      bestMovesAfter: [
        {
          move: "Qe2",
          fen: "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR b KQkq - 1 7",
        },
        {
          move: "Qe7",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR w KQkq - 2 8",
        },
        {
          move: "Kd1",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNBK1BNR b kq - 3 8",
        },
        {
          move: "Bf5",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P5/PP2QPPP/RNBK1BNR w kq - 4 9",
        },
        {
          move: "Nf3",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P2N2/PP2QPPP/RNBK1B1R b kq - 5 9",
        },
        {
          move: "Nfd7",
          fen: "r3kb1r/pppnqppp/8/3pnb2/8/2P2N2/PP2QPPP/RNBK1B1R w kq - 6 10",
        },
        {
          move: "Nxe5",
          fen: "r3kb1r/pppnqppp/8/3pNb2/8/2P5/PP2QPPP/RNBK1B1R b kq - 0 10",
        },
        {
          move: "Nxe5",
          fen: "r3kb1r/ppp1qppp/8/3pnb2/8/2P5/PP2QPPP/RNBK1B1R w kq - 0 11",
        },
        {
          move: "Bf4",
          fen: "r3kb1r/ppp1qppp/8/3pnb2/5B2/2P5/PP2QPPP/RN1K1B1R b kq - 1 11",
        },
        {
          move: "f6",
          fen: "r3kb1r/ppp1q1pp/5p2/3pnb2/5B2/2P5/PP2QPPP/RN1K1B1R w kq - 0 12",
        },
        {
          move: "Bxe5",
          fen: "r3kb1r/ppp1q1pp/5p2/3pBb2/8/2P5/PP2QPPP/RN1K1B1R b kq - 0 12",
        },
        {
          move: "fxe5",
          fen: "r3kb1r/ppp1q1pp/8/3ppb2/8/2P5/PP2QPPP/RN1K1B1R w kq - 0 13",
        },
        {
          move: "Nd2",
          fen: "r3kb1r/ppp1q1pp/8/3ppb2/8/2P5/PP1NQPPP/R2K1B1R b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr1b1r/ppp1q1pp/8/3ppb2/8/2P5/PP1NQPPP/R2K1B1R w - - 2 14",
        },
        {
          move: "g4",
          fen: "2kr1b1r/ppp1q1pp/8/3ppb2/6P1/2P5/PP1NQP1P/R2K1B1R b - - 0 14",
        },
        {
          move: "Bg6",
          fen: "2kr1b1r/ppp1q1pp/6b1/3pp3/6P1/2P5/PP1NQP1P/R2K1B1R w - - 1 15",
        },
        {
          move: "Ke1",
          fen: "2kr1b1r/ppp1q1pp/6b1/3pp3/6P1/2P5/PP1NQP1P/R3KB1R b - - 2 15",
        },
        {
          move: "d4",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/3p2P1/2P5/PP1NQP1P/R3KB1R w - - 0 16",
        },
        {
          move: "Ne4",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/3pN1P1/2P5/PP2QP1P/R3KB1R b - - 1 16",
        },
        {
          move: "d3",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/4N1P1/2Pp4/PP2QP1P/R3KB1R w - - 0 17",
        },
        {
          move: "Qe3",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/4N1P1/2PpQ3/PP3P1P/R3KB1R b - - 1 17",
        },
      ],
    },
    {
      move: "g3",
      moveFen:
        "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2PQ2P1/PP3P1P/RNB1KBNR b KQkq - 0 7",
      evalBefore: "-1.91",
      evalAfter: "-6.52",
      bestMovesBefore: [
        {
          move: "Qe2",
          fen: "r1bqkb1r/ppp2ppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR b KQkq - 1 7",
        },
        {
          move: "Qe7",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNB1KBNR w KQkq - 2 8",
        },
        {
          move: "Kd1",
          fen: "r1b1kb1r/ppp1qppp/5n2/3pn3/8/2P5/PP2QPPP/RNBK1BNR b kq - 3 8",
        },
        {
          move: "Bf5",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P5/PP2QPPP/RNBK1BNR w kq - 4 9",
        },
        {
          move: "Nf3",
          fen: "r3kb1r/ppp1qppp/5n2/3pnb2/8/2P2N2/PP2QPPP/RNBK1B1R b kq - 5 9",
        },
        {
          move: "Nfd7",
          fen: "r3kb1r/pppnqppp/8/3pnb2/8/2P2N2/PP2QPPP/RNBK1B1R w kq - 6 10",
        },
        {
          move: "Nxe5",
          fen: "r3kb1r/pppnqppp/8/3pNb2/8/2P5/PP2QPPP/RNBK1B1R b kq - 0 10",
        },
        {
          move: "Nxe5",
          fen: "r3kb1r/ppp1qppp/8/3pnb2/8/2P5/PP2QPPP/RNBK1B1R w kq - 0 11",
        },
        {
          move: "Bf4",
          fen: "r3kb1r/ppp1qppp/8/3pnb2/5B2/2P5/PP2QPPP/RN1K1B1R b kq - 1 11",
        },
        {
          move: "f6",
          fen: "r3kb1r/ppp1q1pp/5p2/3pnb2/5B2/2P5/PP2QPPP/RN1K1B1R w kq - 0 12",
        },
        {
          move: "Bxe5",
          fen: "r3kb1r/ppp1q1pp/5p2/3pBb2/8/2P5/PP2QPPP/RN1K1B1R b kq - 0 12",
        },
        {
          move: "fxe5",
          fen: "r3kb1r/ppp1q1pp/8/3ppb2/8/2P5/PP2QPPP/RN1K1B1R w kq - 0 13",
        },
        {
          move: "Nd2",
          fen: "r3kb1r/ppp1q1pp/8/3ppb2/8/2P5/PP1NQPPP/R2K1B1R b kq - 1 13",
        },
        {
          move: "O-O-O",
          fen: "2kr1b1r/ppp1q1pp/8/3ppb2/8/2P5/PP1NQPPP/R2K1B1R w - - 2 14",
        },
        {
          move: "g4",
          fen: "2kr1b1r/ppp1q1pp/8/3ppb2/6P1/2P5/PP1NQP1P/R2K1B1R b - - 0 14",
        },
        {
          move: "Bg6",
          fen: "2kr1b1r/ppp1q1pp/6b1/3pp3/6P1/2P5/PP1NQP1P/R2K1B1R w - - 1 15",
        },
        {
          move: "Ke1",
          fen: "2kr1b1r/ppp1q1pp/6b1/3pp3/6P1/2P5/PP1NQP1P/R3KB1R b - - 2 15",
        },
        {
          move: "d4",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/3p2P1/2P5/PP1NQP1P/R3KB1R w - - 0 16",
        },
        {
          move: "Ne4",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/3pN1P1/2P5/PP2QP1P/R3KB1R b - - 1 16",
        },
        {
          move: "d3",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/4N1P1/2Pp4/PP2QP1P/R3KB1R w - - 0 17",
        },
        {
          move: "Qe3",
          fen: "2kr1b1r/ppp1q1pp/6b1/4p3/4N1P1/2PpQ3/PP3P1P/R3KB1R b - - 1 17",
        },
      ],
      bestMovesAfter: [
        {
          move: "Nxd3+",
          fen: "r1bqkb1r/ppp2ppp/5n2/3p4/8/2Pn2P1/PP3P1P/RNB1KBNR w KQkq - 0 8",
        },
        {
          move: "Bxd3",
          fen: "r1bqkb1r/ppp2ppp/5n2/3p4/8/2PB2P1/PP3P1P/RNB1K1NR b KQkq - 0 8",
        },
        {
          move: "Bc5",
          fen: "r1bqk2r/ppp2ppp/5n2/2bp4/8/2PB2P1/PP3P1P/RNB1K1NR w KQkq - 1 9",
        },
        {
          move: "Ne2",
          fen: "r1bqk2r/ppp2ppp/5n2/2bp4/8/2PB2P1/PP2NP1P/RNB1K2R b KQkq - 2 9",
        },
        {
          move: "Bh3",
          fen: "r2qk2r/ppp2ppp/5n2/2bp4/8/2PB2Pb/PP2NP1P/RNB1K2R w KQkq - 3 10",
        },
        {
          move: "b4",
          fen: "r2qk2r/ppp2ppp/5n2/2bp4/1P6/2PB2Pb/P3NP1P/RNB1K2R b KQkq - 0 10",
        },
        {
          move: "Bb6",
          fen: "r2qk2r/ppp2ppp/1b3n2/3p4/1P6/2PB2Pb/P3NP1P/RNB1K2R w KQkq - 1 11",
        },
        {
          move: "Nf4",
          fen: "r2qk2r/ppp2ppp/1b3n2/3p4/1P3N2/2PB2Pb/P4P1P/RNB1K2R b KQkq - 2 11",
        },
        {
          move: "Qe7+",
          fen: "r3k2r/ppp1qppp/1b3n2/3p4/1P3N2/2PB2Pb/P4P1P/RNB1K2R w KQkq - 3 12",
        },
        {
          move: "Kd2",
          fen: "r3k2r/ppp1qppp/1b3n2/3p4/1P3N2/2PB2Pb/P2K1P1P/RNB4R b kq - 4 12",
        },
        {
          move: "Ne4+",
          fen: "r3k2r/ppp1qppp/1b6/3p4/1P2nN2/2PB2Pb/P2K1P1P/RNB4R w kq - 5 13",
        },
        {
          move: "Kc2",
          fen: "r3k2r/ppp1qppp/1b6/3p4/1P2nN2/2PB2Pb/P1K2P1P/RNB4R b kq - 6 13",
        },
        {
          move: "Nxf2",
          fen: "r3k2r/ppp1qppp/1b6/3p4/1P3N2/2PB2Pb/P1K2n1P/RNB4R w kq - 0 14",
        },
        {
          move: "Nxd5",
          fen: "r3k2r/ppp1qppp/1b6/3N4/1P6/2PB2Pb/P1K2n1P/RNB4R b kq - 0 14",
        },
        {
          move: "Qd7",
          fen: "r3k2r/pppq1ppp/1b6/3N4/1P6/2PB2Pb/P1K2n1P/RNB4R w kq - 1 15",
        },
        {
          move: "Re1+",
          fen: "r3k2r/pppq1ppp/1b6/3N4/1P6/2PB2Pb/P1K2n1P/RNB1R3 b kq - 2 15",
        },
        {
          move: "Be6",
          fen: "r3k2r/pppq1ppp/1b2b3/3N4/1P6/2PB2P1/P1K2n1P/RNB1R3 w kq - 3 16",
        },
      ],
    },
    {
      move: "Nxd3+",
      moveFen: "r1bqkb1r/ppp2ppp/5n2/3p4/8/2Pn2P1/PP3P1P/RNB1KBNR w KQkq - 0 8",
      evalBefore: "-6.52",
      evalAfter: "",
      bestMovesBefore: [
        {
          move: "Nxd3+",
          fen: "r1bqkb1r/ppp2ppp/5n2/3p4/8/2Pn2P1/PP3P1P/RNB1KBNR w KQkq - 0 8",
        },
        {
          move: "Bxd3",
          fen: "r1bqkb1r/ppp2ppp/5n2/3p4/8/2PB2P1/PP3P1P/RNB1K1NR b KQkq - 0 8",
        },
        {
          move: "Bc5",
          fen: "r1bqk2r/ppp2ppp/5n2/2bp4/8/2PB2P1/PP3P1P/RNB1K1NR w KQkq - 1 9",
        },
        {
          move: "Ne2",
          fen: "r1bqk2r/ppp2ppp/5n2/2bp4/8/2PB2P1/PP2NP1P/RNB1K2R b KQkq - 2 9",
        },
        {
          move: "Bh3",
          fen: "r2qk2r/ppp2ppp/5n2/2bp4/8/2PB2Pb/PP2NP1P/RNB1K2R w KQkq - 3 10",
        },
        {
          move: "b4",
          fen: "r2qk2r/ppp2ppp/5n2/2bp4/1P6/2PB2Pb/P3NP1P/RNB1K2R b KQkq - 0 10",
        },
        {
          move: "Bb6",
          fen: "r2qk2r/ppp2ppp/1b3n2/3p4/1P6/2PB2Pb/P3NP1P/RNB1K2R w KQkq - 1 11",
        },
        {
          move: "Nf4",
          fen: "r2qk2r/ppp2ppp/1b3n2/3p4/1P3N2/2PB2Pb/P4P1P/RNB1K2R b KQkq - 2 11",
        },
        {
          move: "Qe7+",
          fen: "r3k2r/ppp1qppp/1b3n2/3p4/1P3N2/2PB2Pb/P4P1P/RNB1K2R w KQkq - 3 12",
        },
        {
          move: "Kd2",
          fen: "r3k2r/ppp1qppp/1b3n2/3p4/1P3N2/2PB2Pb/P2K1P1P/RNB4R b kq - 4 12",
        },
        {
          move: "Ne4+",
          fen: "r3k2r/ppp1qppp/1b6/3p4/1P2nN2/2PB2Pb/P2K1P1P/RNB4R w kq - 5 13",
        },
        {
          move: "Kc2",
          fen: "r3k2r/ppp1qppp/1b6/3p4/1P2nN2/2PB2Pb/P1K2P1P/RNB4R b kq - 6 13",
        },
        {
          move: "Nxf2",
          fen: "r3k2r/ppp1qppp/1b6/3p4/1P3N2/2PB2Pb/P1K2n1P/RNB4R w kq - 0 14",
        },
        {
          move: "Nxd5",
          fen: "r3k2r/ppp1qppp/1b6/3N4/1P6/2PB2Pb/P1K2n1P/RNB4R b kq - 0 14",
        },
        {
          move: "Qd7",
          fen: "r3k2r/pppq1ppp/1b6/3N4/1P6/2PB2Pb/P1K2n1P/RNB4R w kq - 1 15",
        },
        {
          move: "Re1+",
          fen: "r3k2r/pppq1ppp/1b6/3N4/1P6/2PB2Pb/P1K2n1P/RNB1R3 b kq - 2 15",
        },
        {
          move: "Be6",
          fen: "r3k2r/pppq1ppp/1b2b3/3N4/1P6/2PB2P1/P1K2n1P/RNB1R3 w kq - 3 16",
        },
      ],
      bestMovesAfter: [],
    },
  ],
};
