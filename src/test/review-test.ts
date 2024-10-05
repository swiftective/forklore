import { ReviewReport } from "@/lib/reviewer";

export const reviewTest: ReviewReport = {
  opening: {
    eco: "B99",
    name: "Sicilian Defense: Najdorf Variation, Main Line",
  },
  review: [
    {
      move: "e4",
      moveFen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
      dest: {
        from: "e2",
        to: "e4",
      },
      bookMove: true,
    },
    {
      move: "c5",
      moveFen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      dest: {
        from: "c7",
        to: "c5",
      },
      bookMove: true,
    },
    {
      move: "Nf3",
      moveFen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
      dest: {
        from: "g1",
        to: "f3",
      },
      bookMove: true,
    },
    {
      move: "d6",
      moveFen:
        "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
      dest: {
        from: "d7",
        to: "d6",
      },
      bookMove: true,
    },
    {
      move: "d4",
      moveFen:
        "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
      dest: {
        from: "d2",
        to: "d4",
      },
      bookMove: true,
    },
    {
      move: "cxd4",
      moveFen: "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
      dest: {
        from: "c5",
        to: "d4",
      },
      bookMove: true,
    },
    {
      move: "Nxd4",
      moveFen: "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
      dest: {
        from: "f3",
        to: "d4",
      },
      bookMove: true,
    },
    {
      move: "Nf6",
      moveFen: "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
      dest: {
        from: "g8",
        to: "f6",
      },
      bookMove: true,
    },
    {
      move: "Nc3",
      moveFen:
        "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
      dest: {
        from: "b1",
        to: "c3",
      },
      bookMove: true,
    },
    {
      move: "a6",
      moveFen:
        "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      dest: {
        from: "a7",
        to: "a6",
      },
      bookMove: true,
    },
    {
      move: "Bg5",
      moveFen:
        "rnbqkb1r/1p2pppp/p2p1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq - 1 6",
      dest: {
        from: "c1",
        to: "g5",
      },
      bookMove: true,
    },
    {
      move: "e6",
      moveFen:
        "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq - 0 7",
      dest: {
        from: "e7",
        to: "e6",
      },
      bookMove: true,
    },
    {
      move: "f4",
      moveFen:
        "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R b KQkq - 0 7",
      dest: {
        from: "f2",
        to: "f4",
      },
      bookMove: true,
    },
    {
      move: "Be7",
      moveFen:
        "rnbqk2r/1p2bppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq - 1 8",
      dest: {
        from: "f8",
        to: "e7",
      },
      bookMove: true,
    },
    {
      move: "Qf3",
      moveFen:
        "rnbqk2r/1p2bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R b KQkq - 2 8",
      dest: {
        from: "d1",
        to: "f3",
      },
      bookMove: true,
    },
    {
      move: "Qc7",
      moveFen:
        "rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R w KQkq - 3 9",
      dest: {
        from: "d8",
        to: "c7",
      },
      bookMove: true,
    },
    {
      move: "O-O-O",
      moveFen:
        "rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R b kq - 4 9",
      dest: {
        from: "e1",
        to: "c1",
      },
      bookMove: true,
    },
    {
      move: "Nbd7",
      moveFen:
        "r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R w kq - 5 10",
      dest: {
        from: "b8",
        to: "d7",
      },
      bookMove: true,
    },
    {
      move: "g4",
      moveFen:
        "r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPPP1/2N2Q2/PPP4P/2KR1B1R b kq - 0 10",
      dest: {
        from: "g2",
        to: "g4",
      },
      evalBefore: "+0.04",
      evalAfter: "+0.04",
      bestMovesBefore: [
        {
          move: "a3",
          fen: "r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPP2/P1N2Q2/1PP3PP/2KR1B1R b kq - 0 10",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "O-O",
          fen: "r1b2rk1/1pqnbppp/p2ppn2/6B1/3NPP2/P1N2Q2/1PP3PP/2KR1B1R w - - 1 11",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "g4",
          fen: "r1b2rk1/1pqnbppp/p2ppn2/6B1/3NPPP1/P1N2Q2/1PP4P/2KR1B1R b - - 0 11",
          dest: {
            from: "g2",
            to: "g4",
          },
        },
        {
          move: "b5",
          fen: "r1b2rk1/2qnbppp/p2ppn2/1p4B1/3NPPP1/P1N2Q2/1PP4P/2KR1B1R w - - 0 12",
          dest: {
            from: "b7",
            to: "b5",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b2rk1/2qnbppp/p2ppB2/1p6/3NPPP1/P1N2Q2/1PP4P/2KR1B1R b - - 0 12",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b2rk1/2qn1ppp/p2ppb2/1p6/3NPPP1/P1N2Q2/1PP4P/2KR1B1R w - - 0 13",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
        {
          move: "g5",
          fen: "r1b2rk1/2qn1ppp/p2ppb2/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b - - 0 13",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Bd8",
          fen: "r1bb1rk1/2qn1ppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w - - 1 14",
          dest: {
            from: "f6",
            to: "d8",
          },
        },
        {
          move: "h4",
          fen: "r1bb1rk1/2qn1ppp/p2pp3/1p4P1/3NPP1P/P1N2Q2/1PP5/2KR1B1R b - - 0 14",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "Rb8",
          fen: "1rbb1rk1/2qn1ppp/p2pp3/1p4P1/3NPP1P/P1N2Q2/1PP5/2KR1B1R w - - 1 15",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "h5",
          fen: "1rbb1rk1/2qn1ppp/p2pp3/1p4PP/3NPP2/P1N2Q2/1PP5/2KR1B1R b - - 0 15",
          dest: {
            from: "h4",
            to: "h5",
          },
        },
        {
          move: "b4",
          fen: "1rbb1rk1/2qn1ppp/p2pp3/6PP/1p1NPP2/P1N2Q2/1PP5/2KR1B1R w - - 0 16",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rbb1rk1/2qn1ppp/p2pp3/6PP/1P1NPP2/2N2Q2/1PP5/2KR1B1R b - - 0 16",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2bb1rk1/2qn1ppp/p2pp3/6PP/1r1NPP2/2N2Q2/1PP5/2KR1B1R w - - 0 17",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "h6",
          fen: "2bb1rk1/2qn1ppp/p2pp2P/6P1/1r1NPP2/2N2Q2/1PP5/2KR1B1R b - - 0 17",
          dest: {
            from: "h5",
            to: "h6",
          },
        },
        {
          move: "g6",
          fen: "2bb1rk1/2qn1p1p/p2pp1pP/6P1/1r1NPP2/2N2Q2/1PP5/2KR1B1R w - - 0 18",
          dest: {
            from: "g7",
            to: "g6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "b5",
          fen: "r1b1k2r/2qnbppp/p2ppn2/1p4B1/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 11",
          dest: {
            from: "b7",
            to: "b5",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qnbppp/p2ppB2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R b kq - 0 11",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
        {
          move: "g5",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R b kq - 0 12",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Be7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "e7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nb6",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "b6",
          },
        },
        {
          move: "Bg4",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPPB1/P1N2Q2/1PP4P/2KR3R b k - 4 15",
          dest: {
            from: "h3",
            to: "g4",
          },
        },
        {
          move: "O-O",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPPB1/P1N2Q2/1PP4P/2KR3R w - - 5 16",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "h4",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPPBP/P1N2Q2/1PP5/2KR3R b - - 0 16",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "Nc4",
          fen: "1rb2rk1/2q1bppp/p2pp3/1p4P1/2nNPPBP/P1N2Q2/1PP5/2KR3R w - - 1 17",
          dest: {
            from: "b6",
            to: "c4",
          },
        },
        {
          move: "h5",
          fen: "1rb2rk1/2q1bppp/p2pp3/1p4PP/2nNPPB1/P1N2Q2/1PP5/2KR3R b - - 0 17",
          dest: {
            from: "h4",
            to: "h5",
          },
        },
        {
          move: "b4",
          fen: "1rb2rk1/2q1bppp/p2pp3/6PP/1pnNPPB1/P1N2Q2/1PP5/2KR3R w - - 0 18",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb2rk1/2q1bppp/p2pp3/6PP/1PnNPPB1/2N2Q2/1PP5/2KR3R b - - 0 18",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b2rk1/2q1bppp/p2pp3/6PP/1rnNPPB1/2N2Q2/1PP5/2KR3R w - - 0 19",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
      ],
    },
    {
      move: "b5",
      moveFen:
        "r1b1k2r/2qnbppp/p2ppn2/1p4B1/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 11",
      dest: {
        from: "b7",
        to: "b5",
      },
      evalBefore: "+0.04",
      evalAfter: "+0.00",
      bestMovesBefore: [
        {
          move: "b5",
          fen: "r1b1k2r/2qnbppp/p2ppn2/1p4B1/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 11",
          dest: {
            from: "b7",
            to: "b5",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qnbppp/p2ppB2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R b kq - 0 11",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
        {
          move: "g5",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R b kq - 0 12",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Be7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "e7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nb6",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "b6",
          },
        },
        {
          move: "Bg4",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPPB1/P1N2Q2/1PP4P/2KR3R b k - 4 15",
          dest: {
            from: "h3",
            to: "g4",
          },
        },
        {
          move: "O-O",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPPB1/P1N2Q2/1PP4P/2KR3R w - - 5 16",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "h4",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPPBP/P1N2Q2/1PP5/2KR3R b - - 0 16",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "Nc4",
          fen: "1rb2rk1/2q1bppp/p2pp3/1p4P1/2nNPPBP/P1N2Q2/1PP5/2KR3R w - - 1 17",
          dest: {
            from: "b6",
            to: "c4",
          },
        },
        {
          move: "h5",
          fen: "1rb2rk1/2q1bppp/p2pp3/1p4PP/2nNPPB1/P1N2Q2/1PP5/2KR3R b - - 0 17",
          dest: {
            from: "h4",
            to: "h5",
          },
        },
        {
          move: "b4",
          fen: "1rb2rk1/2q1bppp/p2pp3/6PP/1pnNPPB1/P1N2Q2/1PP5/2KR3R w - - 0 18",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb2rk1/2q1bppp/p2pp3/6PP/1PnNPPB1/2N2Q2/1PP5/2KR3R b - - 0 18",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b2rk1/2q1bppp/p2pp3/6PP/1rnNPPB1/2N2Q2/1PP5/2KR3R w - - 0 19",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qnbppp/p2ppB2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R b kq - 0 11",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
        {
          move: "g5",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R b kq - 0 12",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Be7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "e7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nb6",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "b6",
          },
        },
        {
          move: "Bf1",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b k - 4 15",
          dest: {
            from: "h3",
            to: "f1",
          },
        },
        {
          move: "O-O",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w - - 5 16",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "Be2",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q2/1PP1B2P/2KR3R b - - 6 16",
          dest: {
            from: "f1",
            to: "e2",
          },
        },
      ],
    },
    {
      move: "Bxf6",
      moveFen:
        "r1b1k2r/2qnbppp/p2ppB2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R b kq - 0 11",
      dest: {
        from: "g5",
        to: "f6",
      },
      evalBefore: "+0.00",
      evalAfter: "-0.04",
      bestMovesBefore: [
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qnbppp/p2ppB2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R b kq - 0 11",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
        {
          move: "g5",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R b kq - 0 12",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Be7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "e7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nb6",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "b6",
          },
        },
        {
          move: "Bf1",
          fen: "1rb1k2r/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b k - 4 15",
          dest: {
            from: "h3",
            to: "f1",
          },
        },
        {
          move: "O-O",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w - - 5 16",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "Be2",
          fen: "1rb2rk1/2q1bppp/pn1pp3/1p4P1/3NPP2/P1N2Q2/1PP1B2P/2KR3R b - - 6 16",
          dest: {
            from: "f1",
            to: "e2",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
        {
          move: "g5",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R b kq - 0 12",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Be7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "e7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nc5",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "c5",
          },
        },
        {
          move: "b4",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/1P1NPP2/P1N2Q1B/2P4P/2KR3R b k - 0 15",
          dest: {
            from: "b2",
            to: "b4",
          },
        },
        {
          move: "Na4",
          fen: "1rb1k2r/2q1bppp/p2pp3/1p4P1/nP1NPP2/P1N2Q1B/2P4P/2KR3R w k - 1 16",
          dest: {
            from: "c5",
            to: "a4",
          },
        },
        {
          move: "Nxa4",
          fen: "1rb1k2r/2q1bppp/p2pp3/1p4P1/NP1NPP2/P4Q1B/2P4P/2KR3R b k - 0 16",
          dest: {
            from: "c3",
            to: "a4",
          },
        },
        {
          move: "bxa4",
          fen: "1rb1k2r/2q1bppp/p2pp3/6P1/pP1NPP2/P4Q1B/2P4P/2KR3R w k - 0 17",
          dest: {
            from: "b5",
            to: "a4",
          },
        },
        {
          move: "Rd3",
          fen: "1rb1k2r/2q1bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/2P4P/2K4R b k - 1 17",
          dest: {
            from: "d1",
            to: "d3",
          },
        },
        {
          move: "Qb7",
          fen: "1rb1k2r/1q2bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/2P4P/2K4R w k - 2 18",
          dest: {
            from: "c7",
            to: "b7",
          },
        },
        {
          move: "Kb2",
          fen: "1rb1k2r/1q2bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/1KP4P/7R b k - 3 18",
          dest: {
            from: "c1",
            to: "b2",
          },
        },
        {
          move: "O-O",
          fen: "1rb2rk1/1q2bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/1KP4P/7R w - - 4 19",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "e5",
          fen: "1rb2rk1/1q2bppp/p2pp3/4P1P1/pP1N1P2/P2R1Q1B/1KP4P/7R b - - 0 19",
          dest: {
            from: "e4",
            to: "e5",
          },
        },
        {
          move: "Qxf3",
          fen: "1rb2rk1/4bppp/p2pp3/4P1P1/pP1N1P2/P2R1q1B/1KP4P/7R w - - 0 20",
          dest: {
            from: "b7",
            to: "f3",
          },
        },
        {
          move: "Nxf3",
          fen: "1rb2rk1/4bppp/p2pp3/4P1P1/pP3P2/P2R1N1B/1KP4P/7R b - - 0 20",
          dest: {
            from: "d4",
            to: "f3",
          },
        },
        {
          move: "Bb7",
          fen: "1r3rk1/1b2bppp/p2pp3/4P1P1/pP3P2/P2R1N1B/1KP4P/7R w - - 1 21",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
      ],
    },
    {
      move: "Nxf6",
      moveFen:
        "r1b1k2r/2q1bppp/p2ppn2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
      dest: {
        from: "d7",
        to: "f6",
      },
      evalBefore: "-0.04",
      evalAfter: "+0.13",
      bestMovesBefore: [
        {
          move: "Bxf6",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p6/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
        {
          move: "g5",
          fen: "r1b1k2r/2qn1ppp/p2ppb2/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R b kq - 0 12",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Be7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "e7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nc5",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "c5",
          },
        },
        {
          move: "b4",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/1P1NPP2/P1N2Q1B/2P4P/2KR3R b k - 0 15",
          dest: {
            from: "b2",
            to: "b4",
          },
        },
        {
          move: "Na4",
          fen: "1rb1k2r/2q1bppp/p2pp3/1p4P1/nP1NPP2/P1N2Q1B/2P4P/2KR3R w k - 1 16",
          dest: {
            from: "c5",
            to: "a4",
          },
        },
        {
          move: "Nxa4",
          fen: "1rb1k2r/2q1bppp/p2pp3/1p4P1/NP1NPP2/P4Q1B/2P4P/2KR3R b k - 0 16",
          dest: {
            from: "c3",
            to: "a4",
          },
        },
        {
          move: "bxa4",
          fen: "1rb1k2r/2q1bppp/p2pp3/6P1/pP1NPP2/P4Q1B/2P4P/2KR3R w k - 0 17",
          dest: {
            from: "b5",
            to: "a4",
          },
        },
        {
          move: "Rd3",
          fen: "1rb1k2r/2q1bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/2P4P/2K4R b k - 1 17",
          dest: {
            from: "d1",
            to: "d3",
          },
        },
        {
          move: "Qb7",
          fen: "1rb1k2r/1q2bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/2P4P/2K4R w k - 2 18",
          dest: {
            from: "c7",
            to: "b7",
          },
        },
        {
          move: "Kb2",
          fen: "1rb1k2r/1q2bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/1KP4P/7R b k - 3 18",
          dest: {
            from: "c1",
            to: "b2",
          },
        },
        {
          move: "O-O",
          fen: "1rb2rk1/1q2bppp/p2pp3/6P1/pP1NPP2/P2R1Q1B/1KP4P/7R w - - 4 19",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "e5",
          fen: "1rb2rk1/1q2bppp/p2pp3/4P1P1/pP1N1P2/P2R1Q1B/1KP4P/7R b - - 0 19",
          dest: {
            from: "e4",
            to: "e5",
          },
        },
        {
          move: "Qxf3",
          fen: "1rb2rk1/4bppp/p2pp3/4P1P1/pP1N1P2/P2R1q1B/1KP4P/7R w - - 0 20",
          dest: {
            from: "b7",
            to: "f3",
          },
        },
        {
          move: "Nxf3",
          fen: "1rb2rk1/4bppp/p2pp3/4P1P1/pP3P2/P2R1N1B/1KP4P/7R b - - 0 20",
          dest: {
            from: "d4",
            to: "f3",
          },
        },
        {
          move: "Bb7",
          fen: "1r3rk1/1b2bppp/p2pp3/4P1P1/pP3P2/P2R1N1B/1KP4P/7R w - - 1 21",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bg2",
          fen: "r1b1k2r/2q1bppp/p2ppn2/1p6/3NPPP1/2N2Q2/PPP3BP/2KR3R b kq - 1 12",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "O-O",
          fen: "r1b2rk1/2q1bppp/p2ppn2/1p6/3NPPP1/2N2Q2/PPP3BP/2KR3R w - - 2 13",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "a3",
          fen: "r1b2rk1/2q1bppp/p2ppn2/1p6/3NPPP1/P1N2Q2/1PP3BP/2KR3R b - - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb2rk1/2q1bppp/p2ppn2/1p6/3NPPP1/P1N2Q2/1PP3BP/2KR3R w - - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "h4",
          fen: "1rb2rk1/2q1bppp/p2ppn2/1p6/3NPPPP/P1N2Q2/1PP3B1/2KR3R b - - 0 14",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "Nd7",
          fen: "1rb2rk1/2qnbppp/p2pp3/1p6/3NPPPP/P1N2Q2/1PP3B1/2KR3R w - - 1 15",
          dest: {
            from: "f6",
            to: "d7",
          },
        },
        {
          move: "g5",
          fen: "1rb2rk1/2qnbppp/p2pp3/1p4P1/3NPP1P/P1N2Q2/1PP3B1/2KR3R b - - 0 15",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Re8",
          fen: "1rb1r1k1/2qnbppp/p2pp3/1p4P1/3NPP1P/P1N2Q2/1PP3B1/2KR3R w - - 1 16",
          dest: {
            from: "f8",
            to: "e8",
          },
        },
        {
          move: "f5",
          fen: "1rb1r1k1/2qnbppp/p2pp3/1p3PP1/3NP2P/P1N2Q2/1PP3B1/2KR3R b - - 0 16",
          dest: {
            from: "f4",
            to: "f5",
          },
        },
        {
          move: "Ne5",
          fen: "1rb1r1k1/2q1bppp/p2pp3/1p2nPP1/3NP2P/P1N2Q2/1PP3B1/2KR3R w - - 1 17",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qf4",
          fen: "1rb1r1k1/2q1bppp/p2pp3/1p2nPP1/3NPQ1P/P1N5/1PP3B1/2KR3R b - - 2 17",
          dest: {
            from: "f3",
            to: "f4",
          },
        },
      ],
    },
    {
      move: "g5",
      moveFen:
        "r1b1k2r/2q1bppp/p2ppn2/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R b kq - 0 12",
      dest: {
        from: "g4",
        to: "g5",
      },
      evalBefore: "+0.13",
      evalAfter: "-0.00",
      bestMovesBefore: [
        {
          move: "Bg2",
          fen: "r1b1k2r/2q1bppp/p2ppn2/1p6/3NPPP1/2N2Q2/PPP3BP/2KR3R b kq - 1 12",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "O-O",
          fen: "r1b2rk1/2q1bppp/p2ppn2/1p6/3NPPP1/2N2Q2/PPP3BP/2KR3R w - - 2 13",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "a3",
          fen: "r1b2rk1/2q1bppp/p2ppn2/1p6/3NPPP1/P1N2Q2/1PP3BP/2KR3R b - - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb2rk1/2q1bppp/p2ppn2/1p6/3NPPP1/P1N2Q2/1PP3BP/2KR3R w - - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "h4",
          fen: "1rb2rk1/2q1bppp/p2ppn2/1p6/3NPPPP/P1N2Q2/1PP3B1/2KR3R b - - 0 14",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "Nd7",
          fen: "1rb2rk1/2qnbppp/p2pp3/1p6/3NPPPP/P1N2Q2/1PP3B1/2KR3R w - - 1 15",
          dest: {
            from: "f6",
            to: "d7",
          },
        },
        {
          move: "g5",
          fen: "1rb2rk1/2qnbppp/p2pp3/1p4P1/3NPP1P/P1N2Q2/1PP3B1/2KR3R b - - 0 15",
          dest: {
            from: "g4",
            to: "g5",
          },
        },
        {
          move: "Re8",
          fen: "1rb1r1k1/2qnbppp/p2pp3/1p4P1/3NPP1P/P1N2Q2/1PP3B1/2KR3R w - - 1 16",
          dest: {
            from: "f8",
            to: "e8",
          },
        },
        {
          move: "f5",
          fen: "1rb1r1k1/2qnbppp/p2pp3/1p3PP1/3NP2P/P1N2Q2/1PP3B1/2KR3R b - - 0 16",
          dest: {
            from: "f4",
            to: "f5",
          },
        },
        {
          move: "Ne5",
          fen: "1rb1r1k1/2q1bppp/p2pp3/1p2nPP1/3NP2P/P1N2Q2/1PP3B1/2KR3R w - - 1 17",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qf4",
          fen: "1rb1r1k1/2q1bppp/p2pp3/1p2nPP1/3NPQ1P/P1N5/1PP3B1/2KR3R b - - 2 17",
          dest: {
            from: "f3",
            to: "f4",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Nd7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "d7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nc5",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "c5",
          },
        },
        {
          move: "Rhg1",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR2R1 b k - 4 15",
          dest: {
            from: "h1",
            to: "g1",
          },
        },
        {
          move: "b4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1p1NPP2/P1N2Q1B/1PP4P/2KR2R1 w k - 0 16",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1P1NPP2/2N2Q1B/1PP4P/2KR2R1 b k - 0 16",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b1k2r/2q1bppp/p2pp3/2n3P1/1r1NPP2/2N2Q1B/1PP4P/2KR2R1 w k - 0 17",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "f5",
          fen: "2b1k2r/2q1bppp/p2pp3/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 17",
          dest: {
            from: "f4",
            to: "f5",
          },
        },
        {
          move: "g6",
          fen: "2b1k2r/2q1bp1p/p2pp1p1/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 18",
          dest: {
            from: "g7",
            to: "g6",
          },
        },
        {
          move: "fxe6",
          fen: "2b1k2r/2q1bp1p/p2pP1p1/2n3P1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 18",
          dest: {
            from: "f5",
            to: "e6",
          },
        },
      ],
    },
    {
      move: "Nd7",
      moveFen:
        "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
      dest: {
        from: "f6",
        to: "d7",
      },
      evalBefore: "-0.00",
      evalAfter: "+0.00",
      bestMovesBefore: [
        {
          move: "Nd7",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/2N2Q2/PPP4P/2KR1B1R w kq - 1 13",
          dest: {
            from: "f6",
            to: "d7",
          },
        },
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nc5",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "c5",
          },
        },
        {
          move: "Rhg1",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR2R1 b k - 4 15",
          dest: {
            from: "h1",
            to: "g1",
          },
        },
        {
          move: "b4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1p1NPP2/P1N2Q1B/1PP4P/2KR2R1 w k - 0 16",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1P1NPP2/2N2Q1B/1PP4P/2KR2R1 b k - 0 16",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b1k2r/2q1bppp/p2pp3/2n3P1/1r1NPP2/2N2Q1B/1PP4P/2KR2R1 w k - 0 17",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "f5",
          fen: "2b1k2r/2q1bppp/p2pp3/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 17",
          dest: {
            from: "f4",
            to: "f5",
          },
        },
        {
          move: "g6",
          fen: "2b1k2r/2q1bp1p/p2pp1p1/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 18",
          dest: {
            from: "g7",
            to: "g6",
          },
        },
        {
          move: "fxe6",
          fen: "2b1k2r/2q1bp1p/p2pP1p1/2n3P1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 18",
          dest: {
            from: "f5",
            to: "e6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nc5",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "c5",
          },
        },
        {
          move: "Rhg1",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR2R1 b k - 4 15",
          dest: {
            from: "h1",
            to: "g1",
          },
        },
        {
          move: "b4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1p1NPP2/P1N2Q1B/1PP4P/2KR2R1 w k - 0 16",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1P1NPP2/2N2Q1B/1PP4P/2KR2R1 b k - 0 16",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b1k2r/2q1bppp/p2pp3/2n3P1/1r1NPP2/2N2Q1B/1PP4P/2KR2R1 w k - 0 17",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "f5",
          fen: "2b1k2r/2q1bppp/p2pp3/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 17",
          dest: {
            from: "f4",
            to: "f5",
          },
        },
        {
          move: "g6",
          fen: "2b1k2r/2q1bp1p/p2pp1p1/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 18",
          dest: {
            from: "g7",
            to: "g6",
          },
        },
        {
          move: "fxe6",
          fen: "2b1k2r/2q1bp1p/p2pP1p1/2n3P1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 18",
          dest: {
            from: "f5",
            to: "e6",
          },
        },
        {
          move: "Bxe6",
          fen: "4k2r/2q1bp1p/p2pb1p1/2n3P1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 19",
          dest: {
            from: "c8",
            to: "e6",
          },
        },
        {
          move: "Nd5",
          fen: "4k2r/2q1bp1p/p2pb1p1/2nN2P1/1r1NP3/5Q1B/1PP4P/2KR2R1 b k - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "Bxd5",
          fen: "4k2r/2q1bp1p/p2p2p1/2nb2P1/1r1NP3/5Q1B/1PP4P/2KR2R1 w k - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "4k2r/2q1bp1p/p2p2p1/2nP2P1/1r1N4/5Q1B/1PP4P/2KR2R1 b k - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "O-O",
          fen: "5rk1/2q1bp1p/p2p2p1/2nP2P1/1r1N4/5Q1B/1PP4P/2KR2R1 w - - 1 21",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "Nc6",
          fen: "5rk1/2q1bp1p/p1Np2p1/2nP2P1/1r6/5Q1B/1PP4P/2KR2R1 b - - 2 21",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Rh4",
          fen: "5rk1/2q1bp1p/p1Np2p1/2nP2P1/7r/5Q1B/1PP4P/2KR2R1 w - - 3 22",
          dest: {
            from: "b4",
            to: "h4",
          },
        },
        {
          move: "Kb1",
          fen: "5rk1/2q1bp1p/p1Np2p1/2nP2P1/7r/5Q1B/1PP4P/1K1R2R1 b - - 4 22",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "f5",
          fen: "5rk1/2q1b2p/p1Np2p1/2nP1pP1/7r/5Q1B/1PP4P/1K1R2R1 w - f6 0 23",
          dest: {
            from: "f7",
            to: "f5",
          },
        },
        {
          move: "Rd4",
          fen: "5rk1/2q1b2p/p1Np2p1/2nP1pP1/3R3r/5Q1B/1PP4P/1K4R1 b - - 1 23",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "Rxd4",
          fen: "5rk1/2q1b2p/p1Np2p1/2nP1pP1/3r4/5Q1B/1PP4P/1K4R1 w - - 0 24",
          dest: {
            from: "h4",
            to: "d4",
          },
        },
        {
          move: "Nxd4",
          fen: "5rk1/2q1b2p/p2p2p1/2nP1pP1/3N4/5Q1B/1PP4P/1K4R1 b - - 0 24",
          dest: {
            from: "c6",
            to: "d4",
          },
        },
      ],
    },
    {
      move: "f5",
      moveFen:
        "r1b1k2r/2qnbppp/p2pp3/1p3PP1/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 13",
      dest: {
        from: "f4",
        to: "f5",
      },
      evalBefore: "+0.00",
      evalAfter: "+0.10",
      bestMovesBefore: [
        {
          move: "a3",
          fen: "r1b1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R b kq - 0 13",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q2/1PP4P/2KR1B1R w k - 1 14",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1k2r/2qnbppp/p2pp3/1p4P1/3NPP2/P1N2Q1B/1PP4P/2KR3R b k - 2 14",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nc5",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR3R w k - 3 15",
          dest: {
            from: "d7",
            to: "c5",
          },
        },
        {
          move: "Rhg1",
          fen: "1rb1k2r/2q1bppp/p2pp3/1pn3P1/3NPP2/P1N2Q1B/1PP4P/2KR2R1 b k - 4 15",
          dest: {
            from: "h1",
            to: "g1",
          },
        },
        {
          move: "b4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1p1NPP2/P1N2Q1B/1PP4P/2KR2R1 w k - 0 16",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb1k2r/2q1bppp/p2pp3/2n3P1/1P1NPP2/2N2Q1B/1PP4P/2KR2R1 b k - 0 16",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b1k2r/2q1bppp/p2pp3/2n3P1/1r1NPP2/2N2Q1B/1PP4P/2KR2R1 w k - 0 17",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "f5",
          fen: "2b1k2r/2q1bppp/p2pp3/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 17",
          dest: {
            from: "f4",
            to: "f5",
          },
        },
        {
          move: "g6",
          fen: "2b1k2r/2q1bp1p/p2pp1p1/2n2PP1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 18",
          dest: {
            from: "g7",
            to: "g6",
          },
        },
        {
          move: "fxe6",
          fen: "2b1k2r/2q1bp1p/p2pP1p1/2n3P1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 18",
          dest: {
            from: "f5",
            to: "e6",
          },
        },
        {
          move: "Bxe6",
          fen: "4k2r/2q1bp1p/p2pb1p1/2n3P1/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 19",
          dest: {
            from: "c8",
            to: "e6",
          },
        },
        {
          move: "Nd5",
          fen: "4k2r/2q1bp1p/p2pb1p1/2nN2P1/1r1NP3/5Q1B/1PP4P/2KR2R1 b k - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "Bxd5",
          fen: "4k2r/2q1bp1p/p2p2p1/2nb2P1/1r1NP3/5Q1B/1PP4P/2KR2R1 w k - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "4k2r/2q1bp1p/p2p2p1/2nP2P1/1r1N4/5Q1B/1PP4P/2KR2R1 b k - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "O-O",
          fen: "5rk1/2q1bp1p/p2p2p1/2nP2P1/1r1N4/5Q1B/1PP4P/2KR2R1 w - - 1 21",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "Nc6",
          fen: "5rk1/2q1bp1p/p1Np2p1/2nP2P1/1r6/5Q1B/1PP4P/2KR2R1 b - - 2 21",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Rh4",
          fen: "5rk1/2q1bp1p/p1Np2p1/2nP2P1/7r/5Q1B/1PP4P/2KR2R1 w - - 3 22",
          dest: {
            from: "b4",
            to: "h4",
          },
        },
        {
          move: "Kb1",
          fen: "5rk1/2q1bp1p/p1Np2p1/2nP2P1/7r/5Q1B/1PP4P/1K1R2R1 b - - 4 22",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "f5",
          fen: "5rk1/2q1b2p/p1Np2p1/2nP1pP1/7r/5Q1B/1PP4P/1K1R2R1 w - f6 0 23",
          dest: {
            from: "f7",
            to: "f5",
          },
        },
        {
          move: "Rd4",
          fen: "5rk1/2q1b2p/p1Np2p1/2nP1pP1/3R3r/5Q1B/1PP4P/1K4R1 b - - 1 23",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "Rxd4",
          fen: "5rk1/2q1b2p/p1Np2p1/2nP1pP1/3r4/5Q1B/1PP4P/1K4R1 w - - 0 24",
          dest: {
            from: "h4",
            to: "d4",
          },
        },
        {
          move: "Nxd4",
          fen: "5rk1/2q1b2p/p2p2p1/2nP1pP1/3N4/5Q1B/1PP4P/1K4R1 b - - 0 24",
          dest: {
            from: "c6",
            to: "d4",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxg5+",
          fen: "r1b1k2r/2qn1ppp/p2pp3/1p3Pb1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 0 14",
          dest: {
            from: "e7",
            to: "g5",
          },
        },
        {
          move: "Kb1",
          fen: "r1b1k2r/2qn1ppp/p2pp3/1p3Pb1/3NP3/2N2Q2/PPP4P/1K1R1B1R b kq - 1 14",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "O-O",
          fen: "r1b2rk1/2qn1ppp/p2pp3/1p3Pb1/3NP3/2N2Q2/PPP4P/1K1R1B1R w - - 2 15",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "fxe6",
          fen: "r1b2rk1/2qn1ppp/p2pP3/1p4b1/3NP3/2N2Q2/PPP4P/1K1R1B1R b - - 0 15",
          dest: {
            from: "f5",
            to: "e6",
          },
        },
        {
          move: "Nb6",
          fen: "r1b2rk1/2q2ppp/pn1pP3/1p4b1/3NP3/2N2Q2/PPP4P/1K1R1B1R w - - 1 16",
          dest: {
            from: "d7",
            to: "b6",
          },
        },
        {
          move: "Qg3",
          fen: "r1b2rk1/2q2ppp/pn1pP3/1p4b1/3NP3/2N3Q1/PPP4P/1K1R1B1R b - - 2 16",
          dest: {
            from: "f3",
            to: "g3",
          },
        },
        {
          move: "Bf6",
          fen: "r1b2rk1/2q2ppp/pn1pPb2/1p6/3NP3/2N3Q1/PPP4P/1K1R1B1R w - - 3 17",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Nd5",
          fen: "r1b2rk1/2q2ppp/pn1pPb2/1p1N4/3NP3/6Q1/PPP4P/1K1R1B1R b - - 4 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "Nxd5",
          fen: "r1b2rk1/2q2ppp/p2pPb2/1p1n4/3NP3/6Q1/PPP4P/1K1R1B1R w - - 0 18",
          dest: {
            from: "b6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b2rk1/2q2ppp/p2pPb2/1p1P4/3N4/6Q1/PPP4P/1K1R1B1R b - - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Bxd4",
          fen: "r1b2rk1/2q2ppp/p2pP3/1p1P4/3b4/6Q1/PPP4P/1K1R1B1R w - - 0 19",
          dest: {
            from: "f6",
            to: "d4",
          },
        },
        {
          move: "Rxd4",
          fen: "r1b2rk1/2q2ppp/p2pP3/1p1P4/3R4/6Q1/PPP4P/1K3B1R b - - 0 19",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "fxe6",
          fen: "r1b2rk1/2q3pp/p2pp3/1p1P4/3R4/6Q1/PPP4P/1K3B1R w - - 0 20",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "dxe6",
          fen: "r1b2rk1/2q3pp/p2pP3/1p6/3R4/6Q1/PPP4P/1K3B1R b - - 0 20",
          dest: {
            from: "d5",
            to: "e6",
          },
        },
        {
          move: "Bxe6",
          fen: "r4rk1/2q3pp/p2pb3/1p6/3R4/6Q1/PPP4P/1K3B1R w - - 0 21",
          dest: {
            from: "c8",
            to: "e6",
          },
        },
        {
          move: "Qxd6",
          fen: "r4rk1/2q3pp/p2Qb3/1p6/3R4/8/PPP4P/1K3B1R b - - 0 21",
          dest: {
            from: "g3",
            to: "d6",
          },
        },
        {
          move: "Qf7",
          fen: "r4rk1/5qpp/p2Qb3/1p6/3R4/8/PPP4P/1K3B1R w - - 1 22",
          dest: {
            from: "c7",
            to: "f7",
          },
        },
        {
          move: "b3",
          fen: "r4rk1/5qpp/p2Qb3/1p6/3R4/1P6/P1P4P/1K3B1R b - - 0 22",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
      ],
    },
    {
      move: "Nc5",
      moveFen:
        "r1b1k2r/2q1bppp/p2pp3/1pn2PP1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 14",
      dest: {
        from: "d7",
        to: "c5",
      },
      evalBefore: "+0.10",
      evalAfter: "+0.38",
      bestMovesBefore: [
        {
          move: "Bxg5+",
          fen: "r1b1k2r/2qn1ppp/p2pp3/1p3Pb1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 0 14",
          dest: {
            from: "e7",
            to: "g5",
          },
        },
        {
          move: "Kb1",
          fen: "r1b1k2r/2qn1ppp/p2pp3/1p3Pb1/3NP3/2N2Q2/PPP4P/1K1R1B1R b kq - 1 14",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "O-O",
          fen: "r1b2rk1/2qn1ppp/p2pp3/1p3Pb1/3NP3/2N2Q2/PPP4P/1K1R1B1R w - - 2 15",
          dest: {
            from: "e8",
            to: "g8",
          },
        },
        {
          move: "fxe6",
          fen: "r1b2rk1/2qn1ppp/p2pP3/1p4b1/3NP3/2N2Q2/PPP4P/1K1R1B1R b - - 0 15",
          dest: {
            from: "f5",
            to: "e6",
          },
        },
        {
          move: "Nb6",
          fen: "r1b2rk1/2q2ppp/pn1pP3/1p4b1/3NP3/2N2Q2/PPP4P/1K1R1B1R w - - 1 16",
          dest: {
            from: "d7",
            to: "b6",
          },
        },
        {
          move: "Qg3",
          fen: "r1b2rk1/2q2ppp/pn1pP3/1p4b1/3NP3/2N3Q1/PPP4P/1K1R1B1R b - - 2 16",
          dest: {
            from: "f3",
            to: "g3",
          },
        },
        {
          move: "Bf6",
          fen: "r1b2rk1/2q2ppp/pn1pPb2/1p6/3NP3/2N3Q1/PPP4P/1K1R1B1R w - - 3 17",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Nd5",
          fen: "r1b2rk1/2q2ppp/pn1pPb2/1p1N4/3NP3/6Q1/PPP4P/1K1R1B1R b - - 4 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "Nxd5",
          fen: "r1b2rk1/2q2ppp/p2pPb2/1p1n4/3NP3/6Q1/PPP4P/1K1R1B1R w - - 0 18",
          dest: {
            from: "b6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b2rk1/2q2ppp/p2pPb2/1p1P4/3N4/6Q1/PPP4P/1K1R1B1R b - - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Bxd4",
          fen: "r1b2rk1/2q2ppp/p2pP3/1p1P4/3b4/6Q1/PPP4P/1K1R1B1R w - - 0 19",
          dest: {
            from: "f6",
            to: "d4",
          },
        },
        {
          move: "Rxd4",
          fen: "r1b2rk1/2q2ppp/p2pP3/1p1P4/3R4/6Q1/PPP4P/1K3B1R b - - 0 19",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "fxe6",
          fen: "r1b2rk1/2q3pp/p2pp3/1p1P4/3R4/6Q1/PPP4P/1K3B1R w - - 0 20",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "dxe6",
          fen: "r1b2rk1/2q3pp/p2pP3/1p6/3R4/6Q1/PPP4P/1K3B1R b - - 0 20",
          dest: {
            from: "d5",
            to: "e6",
          },
        },
        {
          move: "Bxe6",
          fen: "r4rk1/2q3pp/p2pb3/1p6/3R4/6Q1/PPP4P/1K3B1R w - - 0 21",
          dest: {
            from: "c8",
            to: "e6",
          },
        },
        {
          move: "Qxd6",
          fen: "r4rk1/2q3pp/p2Qb3/1p6/3R4/8/PPP4P/1K3B1R b - - 0 21",
          dest: {
            from: "g3",
            to: "d6",
          },
        },
        {
          move: "Qf7",
          fen: "r4rk1/5qpp/p2Qb3/1p6/3R4/8/PPP4P/1K3B1R w - - 1 22",
          dest: {
            from: "c7",
            to: "f7",
          },
        },
        {
          move: "b3",
          fen: "r4rk1/5qpp/p2Qb3/1p6/3R4/1P6/P1P4P/1K3B1R b - - 0 22",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "f6",
          fen: "r1b1k2r/2q1bppp/p2ppP2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 14",
          dest: {
            from: "f5",
            to: "f6",
          },
        },
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppp2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 0 15",
          dest: {
            from: "g7",
            to: "f6",
          },
        },
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 15",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP3BP/2KR3R w kq - 0 17",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP3BP/2KR3R b kq - 1 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP3BP/2KR3R w kq - 0 18",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP3BP/2KR3R b kq - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP3BP/2KR3R w kq - 1 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rhe1+",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP3BP/2KRR3 b kq - 2 19",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/3Pn3/1p1N4/5Q2/PPP3BP/2KRR3 w kq - 3 20",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/2q2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP3BP/2KRR3 b kq - 4 20",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Bb7",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP3BP/2KRR3 w kq - 5 21",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qf5",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3PnQ2/1p6/8/PPP3BP/2KRR3 b kq - 6 21",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Bxc6",
          fen: "r3kb1r/2q2p1p/p1bp1P2/3PnQ2/1p6/8/PPP3BP/2KRR3 w kq - 0 22",
          dest: {
            from: "b7",
            to: "c6",
          },
        },
        {
          move: "dxc6",
          fen: "r3kb1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP3BP/2KRR3 b kq - 0 22",
          dest: {
            from: "d5",
            to: "c6",
          },
        },
        {
          move: "Rb8",
          fen: "1r2kb1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP3BP/2KRR3 w k - 1 23",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Rxe5+",
          fen: "1r2kb1r/2q2p1p/p1Pp1P2/4RQ2/1p6/8/PPP3BP/2KR4 b k - 0 23",
          dest: {
            from: "e1",
            to: "e5",
          },
        },
        {
          move: "dxe5",
          fen: "1r2kb1r/2q2p1p/p1P2P2/4pQ2/1p6/8/PPP3BP/2KR4 w k - 0 24",
          dest: {
            from: "d6",
            to: "e5",
          },
        },
      ],
    },
    {
      move: "f6",
      moveFen:
        "r1b1k2r/2q1bppp/p2ppP2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 14",
      dest: {
        from: "f5",
        to: "f6",
      },
      evalBefore: "+0.38",
      evalAfter: "+0.31",
      bestMovesBefore: [
        {
          move: "f6",
          fen: "r1b1k2r/2q1bppp/p2ppP2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 14",
          dest: {
            from: "f5",
            to: "f6",
          },
        },
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppp2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 0 15",
          dest: {
            from: "g7",
            to: "f6",
          },
        },
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 15",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP3BP/2KR3R w kq - 0 17",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP3BP/2KR3R b kq - 1 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP3BP/2KR3R w kq - 0 18",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP3BP/2KR3R b kq - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP3BP/2KR3R w kq - 1 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rhe1+",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP3BP/2KRR3 b kq - 2 19",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/3Pn3/1p1N4/5Q2/PPP3BP/2KRR3 w kq - 3 20",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/2q2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP3BP/2KRR3 b kq - 4 20",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Bb7",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP3BP/2KRR3 w kq - 5 21",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qf5",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3PnQ2/1p6/8/PPP3BP/2KRR3 b kq - 6 21",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Bxc6",
          fen: "r3kb1r/2q2p1p/p1bp1P2/3PnQ2/1p6/8/PPP3BP/2KRR3 w kq - 0 22",
          dest: {
            from: "b7",
            to: "c6",
          },
        },
        {
          move: "dxc6",
          fen: "r3kb1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP3BP/2KRR3 b kq - 0 22",
          dest: {
            from: "d5",
            to: "c6",
          },
        },
        {
          move: "Rb8",
          fen: "1r2kb1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP3BP/2KRR3 w k - 1 23",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Rxe5+",
          fen: "1r2kb1r/2q2p1p/p1Pp1P2/4RQ2/1p6/8/PPP3BP/2KR4 b k - 0 23",
          dest: {
            from: "e1",
            to: "e5",
          },
        },
        {
          move: "dxe5",
          fen: "1r2kb1r/2q2p1p/p1P2P2/4pQ2/1p6/8/PPP3BP/2KR4 w k - 0 24",
          dest: {
            from: "d6",
            to: "e5",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppp2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 0 15",
          dest: {
            from: "g7",
            to: "f6",
          },
        },
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 15",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "a3",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/P1N2Q2/1PP4P/2KR1B1R b kq - 0 16",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rg8",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/P1N2Q2/1PP4P/2KR1B1R w q - 1 17",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Bh3",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/2KR3R b q - 2 17",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Bd7",
          fen: "r3kbr1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/2KR3R w q - 3 18",
          dest: {
            from: "c8",
            to: "d7",
          },
        },
        {
          move: "Kb1",
          fen: "r3kbr1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R3R b q - 4 18",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "O-O-O",
          fen: "2kr1br1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R3R w - - 5 19",
          dest: {
            from: "e8",
            to: "c8",
          },
        },
        {
          move: "Rhg1",
          fen: "2kr1br1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R2R1 b - - 6 19",
          dest: {
            from: "h1",
            to: "g1",
          },
        },
        {
          move: "Bh6",
          fen: "2kr2r1/2qb1p1p/p2ppP1b/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R2R1 w - - 7 20",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Bg4",
          fen: "2kr2r1/2qb1p1p/p2ppP1b/1pn5/3NP1B1/P1N2Q2/1PP4P/1K1R2R1 b - - 8 20",
          dest: {
            from: "h3",
            to: "g4",
          },
        },
        {
          move: "Kb8",
          fen: "1k1r2r1/2qb1p1p/p2ppP1b/1pn5/3NP1B1/P1N2Q2/1PP4P/1K1R2R1 w - - 9 21",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Bh5",
          fen: "1k1r2r1/2qb1p1p/p2ppP1b/1pn4B/3NP3/P1N2Q2/1PP4P/1K1R2R1 b - - 10 21",
          dest: {
            from: "g4",
            to: "h5",
          },
        },
        {
          move: "Rxg1",
          fen: "1k1r4/2qb1p1p/p2ppP1b/1pn4B/3NP3/P1N2Q2/1PP4P/1K1R2r1 w - - 0 22",
          dest: {
            from: "g8",
            to: "g1",
          },
        },
        {
          move: "Rxg1",
          fen: "1k1r4/2qb1p1p/p2ppP1b/1pn4B/3NP3/P1N2Q2/1PP4P/1K4R1 b - - 0 22",
          dest: {
            from: "d1",
            to: "g1",
          },
        },
      ],
    },
    {
      move: "gxf6",
      moveFen:
        "r1b1k2r/2q1bp1p/p2ppp2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 0 15",
      dest: {
        from: "g7",
        to: "f6",
      },
      evalBefore: "+0.31",
      evalAfter: "+0.40",
      bestMovesBefore: [
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppp2/1pn3P1/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 0 15",
          dest: {
            from: "g7",
            to: "f6",
          },
        },
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 15",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "a3",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/P1N2Q2/1PP4P/2KR1B1R b kq - 0 16",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rg8",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/P1N2Q2/1PP4P/2KR1B1R w q - 1 17",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Bh3",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/2KR3R b q - 2 17",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Bd7",
          fen: "r3kbr1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/2KR3R w q - 3 18",
          dest: {
            from: "c8",
            to: "d7",
          },
        },
        {
          move: "Kb1",
          fen: "r3kbr1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R3R b q - 4 18",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "O-O-O",
          fen: "2kr1br1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R3R w - - 5 19",
          dest: {
            from: "e8",
            to: "c8",
          },
        },
        {
          move: "Rhg1",
          fen: "2kr1br1/2qb1p1p/p2ppP2/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R2R1 b - - 6 19",
          dest: {
            from: "h1",
            to: "g1",
          },
        },
        {
          move: "Bh6",
          fen: "2kr2r1/2qb1p1p/p2ppP1b/1pn5/3NP3/P1N2Q1B/1PP4P/1K1R2R1 w - - 7 20",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Bg4",
          fen: "2kr2r1/2qb1p1p/p2ppP1b/1pn5/3NP1B1/P1N2Q2/1PP4P/1K1R2R1 b - - 8 20",
          dest: {
            from: "h3",
            to: "g4",
          },
        },
        {
          move: "Kb8",
          fen: "1k1r2r1/2qb1p1p/p2ppP1b/1pn5/3NP1B1/P1N2Q2/1PP4P/1K1R2R1 w - - 9 21",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Bh5",
          fen: "1k1r2r1/2qb1p1p/p2ppP1b/1pn4B/3NP3/P1N2Q2/1PP4P/1K1R2R1 b - - 10 21",
          dest: {
            from: "g4",
            to: "h5",
          },
        },
        {
          move: "Rxg1",
          fen: "1k1r4/2qb1p1p/p2ppP1b/1pn4B/3NP3/P1N2Q2/1PP4P/1K1R2r1 w - - 0 22",
          dest: {
            from: "g8",
            to: "g1",
          },
        },
        {
          move: "Rxg1",
          fen: "1k1r4/2qb1p1p/p2ppP1b/1pn4B/3NP3/P1N2Q2/1PP4P/1K4R1 b - - 0 22",
          dest: {
            from: "d1",
            to: "g1",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 15",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "Rg8",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R w q - 3 17",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Rhe1",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 b q - 4 17",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Qb7",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 w q - 5 18",
          dest: {
            from: "c7",
            to: "b7",
          },
        },
        {
          move: "Bh1",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KRR2B b q - 6 18",
          dest: {
            from: "g2",
            to: "h1",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kbr1/1q1n1p1p/p2ppP2/1p6/3NP3/2N2Q2/PPP4P/2KRR2B w q - 7 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "e5",
          fen: "r1b1kbr1/1q1n1p1p/p2ppP2/1p2P3/3N4/2N2Q2/PPP4P/2KRR2B b q - 0 19",
          dest: {
            from: "e4",
            to: "e5",
          },
        },
        {
          move: "Qxf3",
          fen: "r1b1kbr1/3n1p1p/p2ppP2/1p2P3/3N4/2N2q2/PPP4P/2KRR2B w q - 0 20",
          dest: {
            from: "b7",
            to: "f3",
          },
        },
        {
          move: "Bxf3",
          fen: "r1b1kbr1/3n1p1p/p2ppP2/1p2P3/3N4/2N2B2/PPP4P/2KRR3 b q - 0 20",
          dest: {
            from: "h1",
            to: "f3",
          },
        },
        {
          move: "d5",
          fen: "r1b1kbr1/3n1p1p/p3pP2/1p1pP3/3N4/2N2B2/PPP4P/2KRR3 w q - 0 21",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "a4",
          fen: "r1b1kbr1/3n1p1p/p3pP2/1p1pP3/P2N4/2N2B2/1PP4P/2KRR3 b q - 0 21",
          dest: {
            from: "a2",
            to: "a4",
          },
        },
        {
          move: "bxa4",
          fen: "r1b1kbr1/3n1p1p/p3pP2/3pP3/p2N4/2N2B2/1PP4P/2KRR3 w q - 0 22",
          dest: {
            from: "b5",
            to: "a4",
          },
        },
        {
          move: "Nxa4",
          fen: "r1b1kbr1/3n1p1p/p3pP2/3pP3/N2N4/5B2/1PP4P/2KRR3 b q - 0 22",
          dest: {
            from: "c3",
            to: "a4",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1kbr1/3n1p1p/p3pP2/3pP3/N2N4/5B2/1PP4P/2KRR3 w - - 1 23",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
      ],
    },
    {
      move: "gxf6",
      moveFen:
        "r1b1k2r/2q1bp1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 15",
      dest: {
        from: "g5",
        to: "f6",
      },
      evalBefore: "+0.40",
      evalAfter: "+0.58",
      bestMovesBefore: [
        {
          move: "gxf6",
          fen: "r1b1k2r/2q1bp1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 15",
          dest: {
            from: "g5",
            to: "f6",
          },
        },
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "Rg8",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R w q - 3 17",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Rhe1",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 b q - 4 17",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Qb7",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 w q - 5 18",
          dest: {
            from: "c7",
            to: "b7",
          },
        },
        {
          move: "Bh1",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KRR2B b q - 6 18",
          dest: {
            from: "g2",
            to: "h1",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kbr1/1q1n1p1p/p2ppP2/1p6/3NP3/2N2Q2/PPP4P/2KRR2B w q - 7 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "e5",
          fen: "r1b1kbr1/1q1n1p1p/p2ppP2/1p2P3/3N4/2N2Q2/PPP4P/2KRR2B b q - 0 19",
          dest: {
            from: "e4",
            to: "e5",
          },
        },
        {
          move: "Qxf3",
          fen: "r1b1kbr1/3n1p1p/p2ppP2/1p2P3/3N4/2N2q2/PPP4P/2KRR2B w q - 0 20",
          dest: {
            from: "b7",
            to: "f3",
          },
        },
        {
          move: "Bxf3",
          fen: "r1b1kbr1/3n1p1p/p2ppP2/1p2P3/3N4/2N2B2/PPP4P/2KRR3 b q - 0 20",
          dest: {
            from: "h1",
            to: "f3",
          },
        },
        {
          move: "d5",
          fen: "r1b1kbr1/3n1p1p/p3pP2/1p1pP3/3N4/2N2B2/PPP4P/2KRR3 w q - 0 21",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "a4",
          fen: "r1b1kbr1/3n1p1p/p3pP2/1p1pP3/P2N4/2N2B2/1PP4P/2KRR3 b q - 0 21",
          dest: {
            from: "a2",
            to: "a4",
          },
        },
        {
          move: "bxa4",
          fen: "r1b1kbr1/3n1p1p/p3pP2/3pP3/p2N4/2N2B2/1PP4P/2KRR3 w q - 0 22",
          dest: {
            from: "b5",
            to: "a4",
          },
        },
        {
          move: "Nxa4",
          fen: "r1b1kbr1/3n1p1p/p3pP2/3pP3/N2N4/5B2/1PP4P/2KRR3 b q - 0 22",
          dest: {
            from: "c3",
            to: "a4",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1kbr1/3n1p1p/p3pP2/3pP3/N2N4/5B2/1PP4P/2KRR3 w - - 1 23",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP3BP/2KR3R w kq - 0 17",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP3BP/2KR3R b kq - 1 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP3BP/2KR3R w kq - 0 18",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP3BP/2KR3R b kq - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP3BP/2KR3R w kq - 1 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/2qn1p1p/p1Np1P2/3P4/1p6/5Q2/PPP3BP/2KR3R b kq - 2 19",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1kb1r/2qn1p1p/p1Np1P2/3P4/1p6/5Q2/PPP3BP/2KR3R w k - 3 20",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Rhe1+",
          fen: "1rb1kb1r/2qn1p1p/p1Np1P2/3P4/1p6/5Q2/PPP3BP/2KRR3 b k - 4 20",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "1rb1kb1r/2q2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP3BP/2KRR3 w k - 5 21",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Rxe5+",
          fen: "1rb1kb1r/2q2p1p/p1Np1P2/3PR3/1p6/5Q2/PPP3BP/2KR4 b k - 0 21",
          dest: {
            from: "e1",
            to: "e5",
          },
        },
        {
          move: "dxe5",
          fen: "1rb1kb1r/2q2p1p/p1N2P2/3Pp3/1p6/5Q2/PPP3BP/2KR4 w k - 0 22",
          dest: {
            from: "d6",
            to: "e5",
          },
        },
        {
          move: "d6",
          fen: "1rb1kb1r/2q2p1p/p1NP1P2/4p3/1p6/5Q2/PPP3BP/2KR4 b k - 0 22",
          dest: {
            from: "d5",
            to: "d6",
          },
        },
        {
          move: "Bxd6",
          fen: "1rb1k2r/2q2p1p/p1Nb1P2/4p3/1p6/5Q2/PPP3BP/2KR4 w k - 0 23",
          dest: {
            from: "f8",
            to: "d6",
          },
        },
        {
          move: "Nxb8",
          fen: "1Nb1k2r/2q2p1p/p2b1P2/4p3/1p6/5Q2/PPP3BP/2KR4 b k - 0 23",
          dest: {
            from: "c6",
            to: "b8",
          },
        },
        {
          move: "Qxb8",
          fen: "1qb1k2r/5p1p/p2b1P2/4p3/1p6/5Q2/PPP3BP/2KR4 w k - 0 24",
          dest: {
            from: "c7",
            to: "b8",
          },
        },
        {
          move: "Qc6+",
          fen: "1qb1k2r/5p1p/p1Qb1P2/4p3/1p6/8/PPP3BP/2KR4 b k - 1 24",
          dest: {
            from: "f3",
            to: "c6",
          },
        },
        {
          move: "Bd7",
          fen: "1q2k2r/3b1p1p/p1Qb1P2/4p3/1p6/8/PPP3BP/2KR4 w k - 2 25",
          dest: {
            from: "c8",
            to: "d7",
          },
        },
        {
          move: "Qxd6",
          fen: "1q2k2r/3b1p1p/p2Q1P2/4p3/1p6/8/PPP3BP/2KR4 b k - 0 25",
          dest: {
            from: "c6",
            to: "d6",
          },
        },
        {
          move: "Qxd6",
          fen: "4k2r/3b1p1p/p2q1P2/4p3/1p6/8/PPP3BP/2KR4 w k - 0 26",
          dest: {
            from: "b8",
            to: "d6",
          },
        },
        {
          move: "Rxd6",
          fen: "4k2r/3b1p1p/p2R1P2/4p3/1p6/8/PPP3BP/2K5 b k - 0 26",
          dest: {
            from: "d1",
            to: "d6",
          },
        },
        {
          move: "Rg8",
          fen: "4k1r1/3b1p1p/p2R1P2/4p3/1p6/8/PPP3BP/2K5 w - - 1 27",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Be4",
          fen: "4k1r1/3b1p1p/p2R1P2/4p3/1p2B3/8/PPP4P/2K5 b - - 2 27",
          dest: {
            from: "g2",
            to: "e4",
          },
        },
        {
          move: "Rg1+",
          fen: "4k3/3b1p1p/p2R1P2/4p3/1p2B3/8/PPP4P/2K3r1 w - - 3 28",
          dest: {
            from: "g8",
            to: "g1",
          },
        },
        {
          move: "Kd2",
          fen: "4k3/3b1p1p/p2R1P2/4p3/1p2B3/8/PPPK3P/6r1 b - - 4 28",
          dest: {
            from: "c1",
            to: "d2",
          },
        },
        {
          move: "Rg4",
          fen: "4k3/3b1p1p/p2R1P2/4p3/1p2B1r1/8/PPPK3P/8 w - - 5 29",
          dest: {
            from: "g1",
            to: "g4",
          },
        },
        {
          move: "Rxa6",
          fen: "4k3/3b1p1p/R4P2/4p3/1p2B1r1/8/PPPK3P/8 b - - 0 29",
          dest: {
            from: "d6",
            to: "a6",
          },
        },
        {
          move: "Rxe4",
          fen: "4k3/3b1p1p/R4P2/4p3/1p2r3/8/PPPK3P/8 w - - 0 30",
          dest: {
            from: "g4",
            to: "e4",
          },
        },
        {
          move: "Ra8+",
          fen: "R3k3/3b1p1p/5P2/4p3/1p2r3/8/PPPK3P/8 b - - 1 30",
          dest: {
            from: "a6",
            to: "a8",
          },
        },
        {
          move: "Bc8",
          fen: "R1b1k3/5p1p/5P2/4p3/1p2r3/8/PPPK3P/8 w - - 2 31",
          dest: {
            from: "d7",
            to: "c8",
          },
        },
      ],
    },
    {
      move: "Bf8",
      moveFen:
        "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
      dest: {
        from: "e7",
        to: "f8",
      },
      evalBefore: "+0.58",
      evalAfter: "+0.62",
      bestMovesBefore: [
        {
          move: "Bf8",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1B1R w kq - 1 16",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP3BP/2KR3R w kq - 0 17",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP3BP/2KR3R b kq - 1 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP3BP/2KR3R w kq - 0 18",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP3BP/2KR3R b kq - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP3BP/2KR3R w kq - 1 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/2qn1p1p/p1Np1P2/3P4/1p6/5Q2/PPP3BP/2KR3R b kq - 2 19",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1kb1r/2qn1p1p/p1Np1P2/3P4/1p6/5Q2/PPP3BP/2KR3R w k - 3 20",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Rhe1+",
          fen: "1rb1kb1r/2qn1p1p/p1Np1P2/3P4/1p6/5Q2/PPP3BP/2KRR3 b k - 4 20",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "1rb1kb1r/2q2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP3BP/2KRR3 w k - 5 21",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Rxe5+",
          fen: "1rb1kb1r/2q2p1p/p1Np1P2/3PR3/1p6/5Q2/PPP3BP/2KR4 b k - 0 21",
          dest: {
            from: "e1",
            to: "e5",
          },
        },
        {
          move: "dxe5",
          fen: "1rb1kb1r/2q2p1p/p1N2P2/3Pp3/1p6/5Q2/PPP3BP/2KR4 w k - 0 22",
          dest: {
            from: "d6",
            to: "e5",
          },
        },
        {
          move: "d6",
          fen: "1rb1kb1r/2q2p1p/p1NP1P2/4p3/1p6/5Q2/PPP3BP/2KR4 b k - 0 22",
          dest: {
            from: "d5",
            to: "d6",
          },
        },
        {
          move: "Bxd6",
          fen: "1rb1k2r/2q2p1p/p1Nb1P2/4p3/1p6/5Q2/PPP3BP/2KR4 w k - 0 23",
          dest: {
            from: "f8",
            to: "d6",
          },
        },
        {
          move: "Nxb8",
          fen: "1Nb1k2r/2q2p1p/p2b1P2/4p3/1p6/5Q2/PPP3BP/2KR4 b k - 0 23",
          dest: {
            from: "c6",
            to: "b8",
          },
        },
        {
          move: "Qxb8",
          fen: "1qb1k2r/5p1p/p2b1P2/4p3/1p6/5Q2/PPP3BP/2KR4 w k - 0 24",
          dest: {
            from: "c7",
            to: "b8",
          },
        },
        {
          move: "Qc6+",
          fen: "1qb1k2r/5p1p/p1Qb1P2/4p3/1p6/8/PPP3BP/2KR4 b k - 1 24",
          dest: {
            from: "f3",
            to: "c6",
          },
        },
        {
          move: "Bd7",
          fen: "1q2k2r/3b1p1p/p1Qb1P2/4p3/1p6/8/PPP3BP/2KR4 w k - 2 25",
          dest: {
            from: "c8",
            to: "d7",
          },
        },
        {
          move: "Qxd6",
          fen: "1q2k2r/3b1p1p/p2Q1P2/4p3/1p6/8/PPP3BP/2KR4 b k - 0 25",
          dest: {
            from: "c6",
            to: "d6",
          },
        },
        {
          move: "Qxd6",
          fen: "4k2r/3b1p1p/p2q1P2/4p3/1p6/8/PPP3BP/2KR4 w k - 0 26",
          dest: {
            from: "b8",
            to: "d6",
          },
        },
        {
          move: "Rxd6",
          fen: "4k2r/3b1p1p/p2R1P2/4p3/1p6/8/PPP3BP/2K5 b k - 0 26",
          dest: {
            from: "d1",
            to: "d6",
          },
        },
        {
          move: "Rg8",
          fen: "4k1r1/3b1p1p/p2R1P2/4p3/1p6/8/PPP3BP/2K5 w - - 1 27",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Be4",
          fen: "4k1r1/3b1p1p/p2R1P2/4p3/1p2B3/8/PPP4P/2K5 b - - 2 27",
          dest: {
            from: "g2",
            to: "e4",
          },
        },
        {
          move: "Rg1+",
          fen: "4k3/3b1p1p/p2R1P2/4p3/1p2B3/8/PPP4P/2K3r1 w - - 3 28",
          dest: {
            from: "g8",
            to: "g1",
          },
        },
        {
          move: "Kd2",
          fen: "4k3/3b1p1p/p2R1P2/4p3/1p2B3/8/PPPK3P/6r1 b - - 4 28",
          dest: {
            from: "c1",
            to: "d2",
          },
        },
        {
          move: "Rg4",
          fen: "4k3/3b1p1p/p2R1P2/4p3/1p2B1r1/8/PPPK3P/8 w - - 5 29",
          dest: {
            from: "g1",
            to: "g4",
          },
        },
        {
          move: "Rxa6",
          fen: "4k3/3b1p1p/R4P2/4p3/1p2B1r1/8/PPPK3P/8 b - - 0 29",
          dest: {
            from: "d6",
            to: "a6",
          },
        },
        {
          move: "Rxe4",
          fen: "4k3/3b1p1p/R4P2/4p3/1p2r3/8/PPPK3P/8 w - - 0 30",
          dest: {
            from: "g4",
            to: "e4",
          },
        },
        {
          move: "Ra8+",
          fen: "R3k3/3b1p1p/5P2/4p3/1p2r3/8/PPPK3P/8 b - - 1 30",
          dest: {
            from: "a6",
            to: "a8",
          },
        },
        {
          move: "Bc8",
          fen: "R1b1k3/5p1p/5P2/4p3/1p2r3/8/PPPK3P/8 w - - 2 31",
          dest: {
            from: "d7",
            to: "c8",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "Rg8",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R w q - 3 17",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Rhe1",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 b q - 4 17",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Qb7",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 w q - 5 18",
          dest: {
            from: "c7",
            to: "b7",
          },
        },
        {
          move: "Bh1",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KRR2B b q - 6 18",
          dest: {
            from: "g2",
            to: "h1",
          },
        },
        {
          move: "b4",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP4P/2KRR2B w q - 0 19",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP4P/2KRR2B b q - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kbr1/1q3p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP4P/2KRR2B w q - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5+",
          fen: "r1b1kbr1/1q3p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP4P/2KRR2B b q - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Kd8",
          fen: "r1bk1br1/1q3p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP4P/2KRR2B w - - 1 21",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Qh5",
          fen: "r1bk1br1/1q3p1p/p2p1P2/2nP3Q/1p1N4/8/PPP4P/2KRR2B b - - 2 21",
          dest: {
            from: "f3",
            to: "h5",
          },
        },
        {
          move: "Kc7",
          fen: "r1b2br1/1qk2p1p/p2p1P2/2nP3Q/1p1N4/8/PPP4P/2KRR2B w - - 3 22",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Qxf7+",
          fen: "r1b2br1/1qk2Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/2KRR2B b - - 0 22",
          dest: {
            from: "h5",
            to: "f7",
          },
        },
        {
          move: "Bd7",
          fen: "r4br1/1qkb1Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/2KRR2B w - - 1 23",
          dest: {
            from: "c8",
            to: "d7",
          },
        },
        {
          move: "Kb1",
          fen: "r4br1/1qkb1Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/1K1RR2B b - - 2 23",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "Rh8",
          fen: "r4b1r/1qkb1Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/1K1RR2B w - - 3 24",
          dest: {
            from: "g8",
            to: "h8",
          },
        },
      ],
    },
    {
      move: "Rg1",
      moveFen:
        "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KR1BR1 b kq - 2 16",
      dest: {
        from: "h1",
        to: "g1",
      },
      evalBefore: "+0.62",
      evalAfter: "-0.08",
      bestMovesBefore: [
        {
          move: "Bg2",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R b kq - 2 16",
          dest: {
            from: "f1",
            to: "g2",
          },
        },
        {
          move: "Rg8",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KR3R w q - 3 17",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Rhe1",
          fen: "r1b1kbr1/2q2p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 b q - 4 17",
          dest: {
            from: "h1",
            to: "e1",
          },
        },
        {
          move: "Qb7",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP3BP/2KRR3 w q - 5 18",
          dest: {
            from: "c7",
            to: "b7",
          },
        },
        {
          move: "Bh1",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/1pn5/3NP3/2N2Q2/PPP4P/2KRR2B b q - 6 18",
          dest: {
            from: "g2",
            to: "h1",
          },
        },
        {
          move: "b4",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP4P/2KRR2B w q - 0 19",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kbr1/1q3p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP4P/2KRR2B b q - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kbr1/1q3p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP4P/2KRR2B w q - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5+",
          fen: "r1b1kbr1/1q3p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP4P/2KRR2B b q - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Kd8",
          fen: "r1bk1br1/1q3p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP4P/2KRR2B w - - 1 21",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Qh5",
          fen: "r1bk1br1/1q3p1p/p2p1P2/2nP3Q/1p1N4/8/PPP4P/2KRR2B b - - 2 21",
          dest: {
            from: "f3",
            to: "h5",
          },
        },
        {
          move: "Kc7",
          fen: "r1b2br1/1qk2p1p/p2p1P2/2nP3Q/1p1N4/8/PPP4P/2KRR2B w - - 3 22",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Qxf7+",
          fen: "r1b2br1/1qk2Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/2KRR2B b - - 0 22",
          dest: {
            from: "h5",
            to: "f7",
          },
        },
        {
          move: "Bd7",
          fen: "r4br1/1qkb1Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/2KRR2B w - - 1 23",
          dest: {
            from: "c8",
            to: "d7",
          },
        },
        {
          move: "Kb1",
          fen: "r4br1/1qkb1Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/1K1RR2B b - - 2 23",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "Rh8",
          fen: "r4b1r/1qkb1Q1p/p2p1P2/2nP4/1p1N4/8/PPP4P/1K1RR2B w - - 3 24",
          dest: {
            from: "g8",
            to: "h8",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP4P/2KR1BR1 w kq - 0 17",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP4P/2KR1BR1 b kq - 1 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP4P/2KR1BR1 w kq - 0 18",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP4P/2KR1BR1 b kq - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP4P/2KR1BR1 w kq - 1 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Re1+",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP4P/2K1RBR1 b kq - 2 19",
          dest: {
            from: "d1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/3Pn3/1p1N4/5Q2/PPP4P/2K1RBR1 w kq - 3 20",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/2q2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP4P/2K1RBR1 b kq - 4 20",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Bb7",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP4P/2K1RBR1 w kq - 5 21",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qf5",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3PnQ2/1p6/8/PPP4P/2K1RBR1 b kq - 6 21",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Bxc6",
          fen: "r3kb1r/2q2p1p/p1bp1P2/3PnQ2/1p6/8/PPP4P/2K1RBR1 w kq - 0 22",
          dest: {
            from: "b7",
            to: "c6",
          },
        },
        {
          move: "dxc6",
          fen: "r3kb1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP4P/2K1RBR1 b kq - 0 22",
          dest: {
            from: "d5",
            to: "c6",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP4P/2K1RBR1 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bh3",
          fen: "r2k1b1r/2q2p1p/p1Pp1P2/4nQ2/1p6/7B/PPP4P/2K1R1R1 b - - 2 23",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nxc6",
          fen: "r2k1b1r/2q2p1p/p1np1P2/5Q2/1p6/7B/PPP4P/2K1R1R1 w - - 0 24",
          dest: {
            from: "e5",
            to: "c6",
          },
        },
        {
          move: "Qe4",
          fen: "r2k1b1r/2q2p1p/p1np1P2/8/1p2Q3/7B/PPP4P/2K1R1R1 b - - 1 24",
          dest: {
            from: "f5",
            to: "e4",
          },
        },
        {
          move: "Bh6+",
          fen: "r2k3r/2q2p1p/p1np1P1b/8/1p2Q3/7B/PPP4P/2K1R1R1 w - - 2 25",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Kb1",
          fen: "r2k3r/2q2p1p/p1np1P1b/8/1p2Q3/7B/PPP4P/1K2R1R1 b - - 3 25",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
      ],
    },
    {
      move: "h5",
      moveFen:
        "r1b1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/2N2Q2/PPP4P/2KR1BR1 w kq - 0 17",
      dest: {
        from: "h7",
        to: "h5",
      },
      evalBefore: "-0.08",
      evalAfter: "+0.77",
      bestMovesBefore: [
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2n5/1p1NP3/2N2Q2/PPP4P/2KR1BR1 w kq - 0 17",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p1p/p2ppP2/2nN4/1p1NP3/5Q2/PPP4P/2KR1BR1 b kq - 1 17",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2np4/1p1NP3/5Q2/PPP4P/2KR1BR1 w kq - 0 18",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/2nP4/1p1N4/5Q2/PPP4P/2KR1BR1 b kq - 0 18",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP4P/2KR1BR1 w kq - 1 19",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Re1+",
          fen: "r1b1kb1r/2qn1p1p/p2p1P2/3P4/1p1N4/5Q2/PPP4P/2K1RBR1 b kq - 2 19",
          dest: {
            from: "d1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r1b1kb1r/2q2p1p/p2p1P2/3Pn3/1p1N4/5Q2/PPP4P/2K1RBR1 w kq - 3 20",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Nc6",
          fen: "r1b1kb1r/2q2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP4P/2K1RBR1 b kq - 4 20",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Bb7",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3Pn3/1p6/5Q2/PPP4P/2K1RBR1 w kq - 5 21",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qf5",
          fen: "r3kb1r/1bq2p1p/p1Np1P2/3PnQ2/1p6/8/PPP4P/2K1RBR1 b kq - 6 21",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Bxc6",
          fen: "r3kb1r/2q2p1p/p1bp1P2/3PnQ2/1p6/8/PPP4P/2K1RBR1 w kq - 0 22",
          dest: {
            from: "b7",
            to: "c6",
          },
        },
        {
          move: "dxc6",
          fen: "r3kb1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP4P/2K1RBR1 b kq - 0 22",
          dest: {
            from: "d5",
            to: "c6",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/2q2p1p/p1Pp1P2/4nQ2/1p6/8/PPP4P/2K1RBR1 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bh3",
          fen: "r2k1b1r/2q2p1p/p1Pp1P2/4nQ2/1p6/7B/PPP4P/2K1R1R1 b - - 2 23",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "Nxc6",
          fen: "r2k1b1r/2q2p1p/p1np1P2/5Q2/1p6/7B/PPP4P/2K1R1R1 w - - 0 24",
          dest: {
            from: "e5",
            to: "c6",
          },
        },
        {
          move: "Qe4",
          fen: "r2k1b1r/2q2p1p/p1np1P2/8/1p2Q3/7B/PPP4P/2K1R1R1 b - - 1 24",
          dest: {
            from: "f5",
            to: "e4",
          },
        },
        {
          move: "Bh6+",
          fen: "r2k3r/2q2p1p/p1np1P1b/8/1p2Q3/7B/PPP4P/2K1R1R1 w - - 2 25",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Kb1",
          fen: "r2k3r/2q2p1p/p1np1P1b/8/1p2Q3/7B/PPP4P/1K2R1R1 b - - 3 25",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "a3",
          fen: "r1b1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/P1N2Q2/1PP4P/2KR1BR1 b kq - 0 17",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/P1N2Q2/1PP4P/2KR1BR1 w k - 1 18",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/P1N2Q1B/1PP4P/2KR2R1 b k - 2 18",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "b4",
          fen: "1rb1kb1r/2q2p2/p2ppP2/2n4p/1p1NP3/P1N2Q1B/1PP4P/2KR2R1 w k - 0 19",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb1kb1r/2q2p2/p2ppP2/2n4p/1P1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 19",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b1kb1r/2q2p2/p2ppP2/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 20",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "Rg7",
          fen: "2b1kb1r/2q2pR1/p2ppP2/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 b k - 1 20",
          dest: {
            from: "g1",
            to: "g7",
          },
        },
        {
          move: "Bxg7",
          fen: "2b1k2r/2q2pb1/p2ppP2/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 w k - 0 21",
          dest: {
            from: "f8",
            to: "g7",
          },
        },
        {
          move: "fxg7",
          fen: "2b1k2r/2q2pP1/p2pp3/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 b k - 0 21",
          dest: {
            from: "f6",
            to: "g7",
          },
        },
        {
          move: "Rg8",
          fen: "2b1k1r1/2q2pP1/p2pp3/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 w - - 1 22",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Nf5",
          fen: "2b1k1r1/2q2pP1/p2pp3/2n2N1p/1r2P3/2N2Q1B/1PP4P/2KR4 b - - 2 22",
          dest: {
            from: "d4",
            to: "f5",
          },
        },
        {
          move: "exf5",
          fen: "2b1k1r1/2q2pP1/p2p4/2n2p1p/1r2P3/2N2Q1B/1PP4P/2KR4 w - - 0 23",
          dest: {
            from: "e6",
            to: "f5",
          },
        },
        {
          move: "Nd5",
          fen: "2b1k1r1/2q2pP1/p2p4/2nN1p1p/1r2P3/5Q1B/1PP4P/2KR4 b - - 1 23",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
      ],
    },
    {
      move: "Bh3",
      moveFen:
        "r1b1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/2N2Q1B/PPP4P/2KR2R1 b kq - 1 17",
      dest: {
        from: "f1",
        to: "h3",
      },
      evalBefore: "+0.77",
      evalAfter: "+0.04",
      bestMovesBefore: [
        {
          move: "a3",
          fen: "r1b1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/P1N2Q2/1PP4P/2KR1BR1 b kq - 0 17",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rb8",
          fen: "1rb1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/P1N2Q2/1PP4P/2KR1BR1 w k - 1 18",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Bh3",
          fen: "1rb1kb1r/2q2p2/p2ppP2/1pn4p/3NP3/P1N2Q1B/1PP4P/2KR2R1 b k - 2 18",
          dest: {
            from: "f1",
            to: "h3",
          },
        },
        {
          move: "b4",
          fen: "1rb1kb1r/2q2p2/p2ppP2/2n4p/1p1NP3/P1N2Q1B/1PP4P/2KR2R1 w k - 0 19",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "1rb1kb1r/2q2p2/p2ppP2/2n4p/1P1NP3/2N2Q1B/1PP4P/2KR2R1 b k - 0 19",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Rxb4",
          fen: "2b1kb1r/2q2p2/p2ppP2/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR2R1 w k - 0 20",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "Rg7",
          fen: "2b1kb1r/2q2pR1/p2ppP2/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 b k - 1 20",
          dest: {
            from: "g1",
            to: "g7",
          },
        },
        {
          move: "Bxg7",
          fen: "2b1k2r/2q2pb1/p2ppP2/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 w k - 0 21",
          dest: {
            from: "f8",
            to: "g7",
          },
        },
        {
          move: "fxg7",
          fen: "2b1k2r/2q2pP1/p2pp3/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 b k - 0 21",
          dest: {
            from: "f6",
            to: "g7",
          },
        },
        {
          move: "Rg8",
          fen: "2b1k1r1/2q2pP1/p2pp3/2n4p/1r1NP3/2N2Q1B/1PP4P/2KR4 w - - 1 22",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Nf5",
          fen: "2b1k1r1/2q2pP1/p2pp3/2n2N1p/1r2P3/2N2Q1B/1PP4P/2KR4 b - - 2 22",
          dest: {
            from: "d4",
            to: "f5",
          },
        },
        {
          move: "exf5",
          fen: "2b1k1r1/2q2pP1/p2p4/2n2p1p/1r2P3/2N2Q1B/1PP4P/2KR4 w - - 0 23",
          dest: {
            from: "e6",
            to: "f5",
          },
        },
        {
          move: "Nd5",
          fen: "2b1k1r1/2q2pP1/p2p4/2nN1p1p/1r2P3/5Q1B/1PP4P/2KR4 b - - 1 23",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p2/p2ppP2/2n4p/1p1NP3/2N2Q1B/PPP4P/2KR2R1 w kq - 0 18",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p2/p2ppP2/2nN3p/1p1NP3/5Q1B/PPP4P/2KR2R1 b kq - 1 18",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/2KR2R1 w kq - 0 19",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/2KR2R1 b kq - 0 19",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Bxh3",
          fen: "r3kb1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1b/PPP4P/2KR2R1 w kq - 0 20",
          dest: {
            from: "c8",
            to: "h3",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1b/PPP4P/2KRR3 b kq - 1 20",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1b/PPP4P/2KRR3 w - - 2 21",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Qxh3",
          fen: "r2k1b1r/2q2p2/p2p1P2/2nP3p/1p1N4/7Q/PPP4P/2KRR3 b - - 0 21",
          dest: {
            from: "f3",
            to: "h3",
          },
        },
        {
          move: "Qd7",
          fen: "r2k1b1r/3q1p2/p2p1P2/2nP3p/1p1N4/7Q/PPP4P/2KRR3 w - - 1 22",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
      ],
    },
    {
      move: "Bb7",
      moveFen:
        "r3kb1r/1bq2p2/p2ppP2/1pn4p/3NP3/2N2Q1B/PPP4P/2KR2R1 w kq - 2 18",
      dest: {
        from: "c8",
        to: "b7",
      },
      evalBefore: "+0.04",
      evalAfter: "+1.81",
      bestMovesBefore: [
        {
          move: "b4",
          fen: "r1b1kb1r/2q2p2/p2ppP2/2n4p/1p1NP3/2N2Q1B/PPP4P/2KR2R1 w kq - 0 18",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r1b1kb1r/2q2p2/p2ppP2/2nN3p/1p1NP3/5Q1B/PPP4P/2KR2R1 b kq - 1 18",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/2KR2R1 w kq - 0 19",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r1b1kb1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/2KR2R1 b kq - 0 19",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Bxh3",
          fen: "r3kb1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1b/PPP4P/2KR2R1 w kq - 0 20",
          dest: {
            from: "c8",
            to: "h3",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1b/PPP4P/2KRR3 b kq - 1 20",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/2q2p2/p2p1P2/2nP3p/1p1N4/5Q1b/PPP4P/2KRR3 w - - 2 21",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Qxh3",
          fen: "r2k1b1r/2q2p2/p2p1P2/2nP3p/1p1N4/7Q/PPP4P/2KRR3 b - - 0 21",
          dest: {
            from: "f3",
            to: "h3",
          },
        },
        {
          move: "Qd7",
          fen: "r2k1b1r/3q1p2/p2p1P2/2nP3p/1p1N4/7Q/PPP4P/2KRR3 w - - 1 22",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg7",
          fen: "r3kb1r/1bq2pR1/p2ppP2/1pn4p/3NP3/2N2Q1B/PPP4P/2KR4 b kq - 3 18",
          dest: {
            from: "g1",
            to: "g7",
          },
        },
        {
          move: "Qa5",
          fen: "r3kb1r/1b3pR1/p2ppP2/qpn4p/3NP3/2N2Q1B/PPP4P/2KR4 w kq - 4 19",
          dest: {
            from: "c7",
            to: "a5",
          },
        },
        {
          move: "Kb1",
          fen: "r3kb1r/1b3pR1/p2ppP2/qpn4p/3NP3/2N2Q1B/PPP4P/1K1R4 b kq - 5 19",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "b4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q1n4p/1p1NP3/2N2Q1B/PPP4P/1K1R4 w kq - 0 20",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r3kb1r/1b3pR1/p2ppP2/q1nN3p/1p1NP3/5Q1B/PPP4P/1K1R4 b kq - 1 20",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "Nxe4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q2N3p/1p1Nn3/5Q1B/PPP4P/1K1R4 w kq - 0 21",
          dest: {
            from: "c5",
            to: "e4",
          },
        },
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "Bxd5",
          fen: "r3kb1r/5pR1/p2pBP2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "b7",
            to: "d5",
          },
        },
        {
          move: "Bxf7+",
          fen: "r3kb1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 22",
          dest: {
            from: "e6",
            to: "f7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
      ],
    },
    {
      move: "Kb1",
      moveFen:
        "r3kb1r/1bq2p2/p2ppP2/1pn4p/3NP3/2N2Q1B/PPP4P/1K1R2R1 b kq - 3 18",
      dest: {
        from: "c1",
        to: "b1",
      },
      evalBefore: "+1.81",
      evalAfter: "+0.63",
      bestMovesBefore: [
        {
          move: "Rg7",
          fen: "r3kb1r/1bq2pR1/p2ppP2/1pn4p/3NP3/2N2Q1B/PPP4P/2KR4 b kq - 3 18",
          dest: {
            from: "g1",
            to: "g7",
          },
        },
        {
          move: "Qa5",
          fen: "r3kb1r/1b3pR1/p2ppP2/qpn4p/3NP3/2N2Q1B/PPP4P/2KR4 w kq - 4 19",
          dest: {
            from: "c7",
            to: "a5",
          },
        },
        {
          move: "Kb1",
          fen: "r3kb1r/1b3pR1/p2ppP2/qpn4p/3NP3/2N2Q1B/PPP4P/1K1R4 b kq - 5 19",
          dest: {
            from: "c1",
            to: "b1",
          },
        },
        {
          move: "b4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q1n4p/1p1NP3/2N2Q1B/PPP4P/1K1R4 w kq - 0 20",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r3kb1r/1b3pR1/p2ppP2/q1nN3p/1p1NP3/5Q1B/PPP4P/1K1R4 b kq - 1 20",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "Nxe4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q2N3p/1p1Nn3/5Q1B/PPP4P/1K1R4 w kq - 0 21",
          dest: {
            from: "c5",
            to: "e4",
          },
        },
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "Bxd5",
          fen: "r3kb1r/5pR1/p2pBP2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "b7",
            to: "d5",
          },
        },
        {
          move: "Bxf7+",
          fen: "r3kb1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 22",
          dest: {
            from: "e6",
            to: "f7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "b4",
          fen: "r3kb1r/1bq2p2/p2ppP2/2n4p/1p1NP3/2N2Q1B/PPP4P/1K1R2R1 w kq - 0 19",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r3kb1r/1bq2p2/p2ppP2/2nN3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 b kq - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 w kq - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/1K1R2R1 b kq - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1R2R1 w kq - 1 21",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1RR3 b kq - 2 21",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/5Q1B/PPP4P/1K1RR3 w kq - 3 22",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qb3",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 b kq - 4 22",
          dest: {
            from: "f3",
            to: "b3",
          },
        },
        {
          move: "Bc8",
          fen: "r1b1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 w kq - 5 23",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Bxc8",
          fen: "r1B1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 b kq - 0 23",
          dest: {
            from: "h3",
            to: "c8",
          },
        },
        {
          move: "Rxc8",
          fen: "2r1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 w k - 0 24",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nc6",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 b k - 1 24",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
      ],
    },
    {
      move: "b4",
      moveFen:
        "r3kb1r/1bq2p2/p2ppP2/2n4p/1p1NP3/2N2Q1B/PPP4P/1K1R2R1 w kq - 0 19",
      dest: {
        from: "b5",
        to: "b4",
      },
      evalBefore: "+0.63",
      evalAfter: "+0.71",
      bestMovesBefore: [
        {
          move: "b4",
          fen: "r3kb1r/1bq2p2/p2ppP2/2n4p/1p1NP3/2N2Q1B/PPP4P/1K1R2R1 w kq - 0 19",
          dest: {
            from: "b5",
            to: "b4",
          },
        },
        {
          move: "Nd5",
          fen: "r3kb1r/1bq2p2/p2ppP2/2nN3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 b kq - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 w kq - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/1K1R2R1 b kq - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1R2R1 w kq - 1 21",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1RR3 b kq - 2 21",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/5Q1B/PPP4P/1K1RR3 w kq - 3 22",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qb3",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 b kq - 4 22",
          dest: {
            from: "f3",
            to: "b3",
          },
        },
        {
          move: "Bc8",
          fen: "r1b1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 w kq - 5 23",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Bxc8",
          fen: "r1B1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 b kq - 0 23",
          dest: {
            from: "h3",
            to: "c8",
          },
        },
        {
          move: "Rxc8",
          fen: "2r1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 w k - 0 24",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nc6",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 b k - 1 24",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Nd5",
          fen: "r3kb1r/1bq2p2/p2ppP2/2nN3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 b kq - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 w kq - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/1K1R2R1 b kq - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1R2R1 w kq - 1 21",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1RR3 b kq - 2 21",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/5Q1B/PPP4P/1K1RR3 w kq - 3 22",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qb3",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 b kq - 4 22",
          dest: {
            from: "f3",
            to: "b3",
          },
        },
        {
          move: "Bc8",
          fen: "r1b1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 w kq - 5 23",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Bxc8",
          fen: "r1B1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 b kq - 0 23",
          dest: {
            from: "h3",
            to: "c8",
          },
        },
        {
          move: "Rxc8",
          fen: "2r1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 w k - 0 24",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nc6",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 b k - 1 24",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Rg8",
          fen: "2r1kbr1/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 w - - 2 25",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Qa4",
          fen: "2r1kbr1/2q2p2/p1Np1P2/3Pn2p/Qp6/8/PPP4P/1K1RR3 b - - 3 25",
          dest: {
            from: "b3",
            to: "a4",
          },
        },
        {
          move: "Qd7",
          fen: "2r1kbr1/3q1p2/p1Np1P2/3Pn2p/Qp6/8/PPP4P/1K1RR3 w - - 4 26",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Qxa6",
          fen: "2r1kbr1/3q1p2/Q1Np1P2/3Pn2p/1p6/8/PPP4P/1K1RR3 b - - 0 26",
          dest: {
            from: "a4",
            to: "a6",
          },
        },
        {
          move: "Rg5",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/1p6/8/PPP4P/1K1RR3 w - - 1 27",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
        {
          move: "Rd4",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/1p1R4/8/PPP4P/1K2R3 b - - 2 27",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "b3",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/3R4/1p6/PPP4P/1K2R3 w - - 0 28",
          dest: {
            from: "b4",
            to: "b3",
          },
        },
        {
          move: "axb3",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/3R4/1P6/1PP4P/1K2R3 b - - 0 28",
          dest: {
            from: "a2",
            to: "b3",
          },
        },
        {
          move: "Bh6",
          fen: "2r1k3/3q1p2/Q1Np1P1b/3Pn1rp/3R4/1P6/1PP4P/1K2R3 w - - 1 29",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
      ],
    },
    {
      move: "Nd5",
      moveFen:
        "r3kb1r/1bq2p2/p2ppP2/2nN3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 b kq - 1 19",
      dest: {
        from: "c3",
        to: "d5",
      },
      evalBefore: "+0.71",
      evalAfter: "+0.76",
      bestMovesBefore: [
        {
          move: "Nd5",
          fen: "r3kb1r/1bq2p2/p2ppP2/2nN3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 b kq - 1 19",
          dest: {
            from: "c3",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 w kq - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/1K1R2R1 b kq - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1R2R1 w kq - 1 21",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1RR3 b kq - 2 21",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/5Q1B/PPP4P/1K1RR3 w kq - 3 22",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qb3",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 b kq - 4 22",
          dest: {
            from: "f3",
            to: "b3",
          },
        },
        {
          move: "Bc8",
          fen: "r1b1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 w kq - 5 23",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Bxc8",
          fen: "r1B1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 b kq - 0 23",
          dest: {
            from: "h3",
            to: "c8",
          },
        },
        {
          move: "Rxc8",
          fen: "2r1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 w k - 0 24",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nc6",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 b k - 1 24",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Rg8",
          fen: "2r1kbr1/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 w - - 2 25",
          dest: {
            from: "h8",
            to: "g8",
          },
        },
        {
          move: "Qa4",
          fen: "2r1kbr1/2q2p2/p1Np1P2/3Pn2p/Qp6/8/PPP4P/1K1RR3 b - - 3 25",
          dest: {
            from: "b3",
            to: "a4",
          },
        },
        {
          move: "Qd7",
          fen: "2r1kbr1/3q1p2/p1Np1P2/3Pn2p/Qp6/8/PPP4P/1K1RR3 w - - 4 26",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Qxa6",
          fen: "2r1kbr1/3q1p2/Q1Np1P2/3Pn2p/1p6/8/PPP4P/1K1RR3 b - - 0 26",
          dest: {
            from: "a4",
            to: "a6",
          },
        },
        {
          move: "Rg5",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/1p6/8/PPP4P/1K1RR3 w - - 1 27",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
        {
          move: "Rd4",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/1p1R4/8/PPP4P/1K2R3 b - - 2 27",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "b3",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/3R4/1p6/PPP4P/1K2R3 w - - 0 28",
          dest: {
            from: "b4",
            to: "b3",
          },
        },
        {
          move: "axb3",
          fen: "2r1kb2/3q1p2/Q1Np1P2/3Pn1rp/3R4/1P6/1PP4P/1K2R3 b - - 0 28",
          dest: {
            from: "a2",
            to: "b3",
          },
        },
        {
          move: "Bh6",
          fen: "2r1k3/3q1p2/Q1Np1P1b/3Pn1rp/3R4/1P6/1PP4P/1K2R3 w - - 1 29",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 w kq - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/1K1R2R1 b kq - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1R2R1 w kq - 1 21",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1RR3 b kq - 2 21",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/5Q1B/PPP4P/1K1RR3 w kq - 3 22",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qb3",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 b kq - 4 22",
          dest: {
            from: "f3",
            to: "b3",
          },
        },
        {
          move: "Bc8",
          fen: "r1b1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 w kq - 5 23",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Bxc8",
          fen: "r1B1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 b kq - 0 23",
          dest: {
            from: "h3",
            to: "c8",
          },
        },
        {
          move: "Rxc8",
          fen: "2r1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 w k - 0 24",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nc6",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 b k - 1 24",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Kd7",
          fen: "2r2b1r/2qk1p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 w - - 2 25",
          dest: {
            from: "e8",
            to: "d7",
          },
        },
        {
          move: "Qh3+",
          fen: "2r2b1r/2qk1p2/p1Np1P2/3Pn2p/1p6/7Q/PPP4P/1K1RR3 b - - 3 25",
          dest: {
            from: "b3",
            to: "h3",
          },
        },
        {
          move: "Ke8",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/7Q/PPP4P/1K1RR3 w - - 4 26",
          dest: {
            from: "d7",
            to: "e8",
          },
        },
        {
          move: "Qf5",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3PnQ1p/1p6/8/PPP4P/1K1RR3 b - - 5 26",
          dest: {
            from: "h3",
            to: "f5",
          },
        },
        {
          move: "a5",
          fen: "2r1kb1r/2q2p2/2Np1P2/p2PnQ1p/1p6/8/PPP4P/1K1RR3 w - - 0 27",
          dest: {
            from: "a6",
            to: "a5",
          },
        },
        {
          move: "Nxe5",
          fen: "2r1kb1r/2q2p2/3p1P2/p2PNQ1p/1p6/8/PPP4P/1K1RR3 b - - 0 27",
          dest: {
            from: "c6",
            to: "e5",
          },
        },
        {
          move: "dxe5",
          fen: "2r1kb1r/2q2p2/5P2/p2PpQ1p/1p6/8/PPP4P/1K1RR3 w - - 0 28",
          dest: {
            from: "d6",
            to: "e5",
          },
        },
        {
          move: "Rxe5+",
          fen: "2r1kb1r/2q2p2/5P2/p2PRQ1p/1p6/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "e1",
            to: "e5",
          },
        },
        {
          move: "Kd8",
          fen: "2rk1b1r/2q2p2/5P2/p2PRQ1p/1p6/8/PPP4P/1K1R4 w - - 1 29",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "d6",
          fen: "2rk1b1r/2q2p2/3P1P2/p3RQ1p/1p6/8/PPP4P/1K1R4 b - - 0 29",
          dest: {
            from: "d5",
            to: "d6",
          },
        },
        {
          move: "Qd7",
          fen: "2rk1b1r/3q1p2/3P1P2/p3RQ1p/1p6/8/PPP4P/1K1R4 w - - 1 30",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
      ],
    },
    {
      move: "Qa5",
      moveFen:
        "r3kb1r/1b3p2/p2ppP2/q1nN3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 w kq - 2 20",
      dest: {
        from: "c7",
        to: "a5",
      },
      evalBefore: "+0.76",
      evalAfter: "+2.52",
      bestMovesBefore: [
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2np3p/1p1NP3/5Q1B/PPP4P/1K1R2R1 w kq - 0 20",
          dest: {
            from: "e6",
            to: "d5",
          },
        },
        {
          move: "exd5",
          fen: "r3kb1r/1bq2p2/p2p1P2/2nP3p/1p1N4/5Q1B/PPP4P/1K1R2R1 b kq - 0 20",
          dest: {
            from: "e4",
            to: "d5",
          },
        },
        {
          move: "Nd7",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1R2R1 w kq - 1 21",
          dest: {
            from: "c5",
            to: "d7",
          },
        },
        {
          move: "Rge1+",
          fen: "r3kb1r/1bqn1p2/p2p1P2/3P3p/1p1N4/5Q1B/PPP4P/1K1RR3 b kq - 2 21",
          dest: {
            from: "g1",
            to: "e1",
          },
        },
        {
          move: "Ne5",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/5Q1B/PPP4P/1K1RR3 w kq - 3 22",
          dest: {
            from: "d7",
            to: "e5",
          },
        },
        {
          move: "Qb3",
          fen: "r3kb1r/1bq2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 b kq - 4 22",
          dest: {
            from: "f3",
            to: "b3",
          },
        },
        {
          move: "Bc8",
          fen: "r1b1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q5B/PPP4P/1K1RR3 w kq - 5 23",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Bxc8",
          fen: "r1B1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 b kq - 0 23",
          dest: {
            from: "h3",
            to: "c8",
          },
        },
        {
          move: "Rxc8",
          fen: "2r1kb1r/2q2p2/p2p1P2/3Pn2p/1p1N4/1Q6/PPP4P/1K1RR3 w k - 0 24",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nc6",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 b k - 1 24",
          dest: {
            from: "d4",
            to: "c6",
          },
        },
        {
          move: "Kd7",
          fen: "2r2b1r/2qk1p2/p1Np1P2/3Pn2p/1p6/1Q6/PPP4P/1K1RR3 w - - 2 25",
          dest: {
            from: "e8",
            to: "d7",
          },
        },
        {
          move: "Qh3+",
          fen: "2r2b1r/2qk1p2/p1Np1P2/3Pn2p/1p6/7Q/PPP4P/1K1RR3 b - - 3 25",
          dest: {
            from: "b3",
            to: "h3",
          },
        },
        {
          move: "Ke8",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3Pn2p/1p6/7Q/PPP4P/1K1RR3 w - - 4 26",
          dest: {
            from: "d7",
            to: "e8",
          },
        },
        {
          move: "Qf5",
          fen: "2r1kb1r/2q2p2/p1Np1P2/3PnQ1p/1p6/8/PPP4P/1K1RR3 b - - 5 26",
          dest: {
            from: "h3",
            to: "f5",
          },
        },
        {
          move: "a5",
          fen: "2r1kb1r/2q2p2/2Np1P2/p2PnQ1p/1p6/8/PPP4P/1K1RR3 w - - 0 27",
          dest: {
            from: "a6",
            to: "a5",
          },
        },
        {
          move: "Nxe5",
          fen: "2r1kb1r/2q2p2/3p1P2/p2PNQ1p/1p6/8/PPP4P/1K1RR3 b - - 0 27",
          dest: {
            from: "c6",
            to: "e5",
          },
        },
        {
          move: "dxe5",
          fen: "2r1kb1r/2q2p2/5P2/p2PpQ1p/1p6/8/PPP4P/1K1RR3 w - - 0 28",
          dest: {
            from: "d6",
            to: "e5",
          },
        },
        {
          move: "Rxe5+",
          fen: "2r1kb1r/2q2p2/5P2/p2PRQ1p/1p6/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "e1",
            to: "e5",
          },
        },
        {
          move: "Kd8",
          fen: "2rk1b1r/2q2p2/5P2/p2PRQ1p/1p6/8/PPP4P/1K1R4 w - - 1 29",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "d6",
          fen: "2rk1b1r/2q2p2/3P1P2/p3RQ1p/1p6/8/PPP4P/1K1R4 b - - 0 29",
          dest: {
            from: "d5",
            to: "d6",
          },
        },
        {
          move: "Qd7",
          fen: "2rk1b1r/3q1p2/3P1P2/p3RQ1p/1p6/8/PPP4P/1K1R4 w - - 1 30",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg7",
          fen: "r3kb1r/1b3pR1/p2ppP2/q1nN3p/1p1NP3/5Q1B/PPP4P/1K1R4 b kq - 3 20",
          dest: {
            from: "g1",
            to: "g7",
          },
        },
        {
          move: "Nxe4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q2N3p/1p1Nn3/5Q1B/PPP4P/1K1R4 w kq - 0 21",
          dest: {
            from: "c5",
            to: "e4",
          },
        },
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "Bxd5",
          fen: "r3kb1r/5pR1/p2pBP2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "b7",
            to: "d5",
          },
        },
        {
          move: "Bxf7+",
          fen: "r3kb1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 22",
          dest: {
            from: "e6",
            to: "f7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
        {
          move: "Qh3",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/7Q/PPP4P/1K1R4 b - - 1 24",
          dest: {
            from: "f3",
            to: "h3",
          },
        },
        {
          move: "Nd2+",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1N4/7Q/PPPn3P/1K1R4 w - - 2 25",
          dest: {
            from: "e4",
            to: "d2",
          },
        },
        {
          move: "Kc1",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1N4/7Q/PPPn3P/2KR4 b - - 3 25",
          dest: {
            from: "b1",
            to: "c1",
          },
        },
        {
          move: "Bxg7",
          fen: "r2k3r/6b1/p2p1P2/3q3p/1p1N4/7Q/PPPn3P/2KR4 w - - 0 26",
          dest: {
            from: "f8",
            to: "g7",
          },
        },
        {
          move: "Ne6+",
          fen: "r2k3r/6b1/p2pNP2/3q3p/1p6/7Q/PPPn3P/2KR4 b - - 1 26",
          dest: {
            from: "d4",
            to: "e6",
          },
        },
        {
          move: "Qxe6",
          fen: "r2k3r/6b1/p2pqP2/7p/1p6/7Q/PPPn3P/2KR4 w - - 0 27",
          dest: {
            from: "d5",
            to: "e6",
          },
        },
        {
          move: "Qxe6",
          fen: "r2k3r/6b1/p2pQP2/7p/1p6/8/PPPn3P/2KR4 b - - 0 27",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
      ],
    },
    {
      move: "Rg7",
      moveFen:
        "r3kb1r/1b3pR1/p2ppP2/q1nN3p/1p1NP3/5Q1B/PPP4P/1K1R4 b kq - 3 20",
      dest: {
        from: "g1",
        to: "g7",
      },
      evalBefore: "+2.52",
      evalAfter: "+2.36",
      bestMovesBefore: [
        {
          move: "Rg7",
          fen: "r3kb1r/1b3pR1/p2ppP2/q1nN3p/1p1NP3/5Q1B/PPP4P/1K1R4 b kq - 3 20",
          dest: {
            from: "g1",
            to: "g7",
          },
        },
        {
          move: "Nxe4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q2N3p/1p1Nn3/5Q1B/PPP4P/1K1R4 w kq - 0 21",
          dest: {
            from: "c5",
            to: "e4",
          },
        },
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "Bxd5",
          fen: "r3kb1r/5pR1/p2pBP2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "b7",
            to: "d5",
          },
        },
        {
          move: "Bxf7+",
          fen: "r3kb1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 22",
          dest: {
            from: "e6",
            to: "f7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
        {
          move: "Qh3",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/7Q/PPP4P/1K1R4 b - - 1 24",
          dest: {
            from: "f3",
            to: "h3",
          },
        },
        {
          move: "Nd2+",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1N4/7Q/PPPn3P/1K1R4 w - - 2 25",
          dest: {
            from: "e4",
            to: "d2",
          },
        },
        {
          move: "Kc1",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1N4/7Q/PPPn3P/2KR4 b - - 3 25",
          dest: {
            from: "b1",
            to: "c1",
          },
        },
        {
          move: "Bxg7",
          fen: "r2k3r/6b1/p2p1P2/3q3p/1p1N4/7Q/PPPn3P/2KR4 w - - 0 26",
          dest: {
            from: "f8",
            to: "g7",
          },
        },
        {
          move: "Ne6+",
          fen: "r2k3r/6b1/p2pNP2/3q3p/1p6/7Q/PPPn3P/2KR4 b - - 1 26",
          dest: {
            from: "d4",
            to: "e6",
          },
        },
        {
          move: "Qxe6",
          fen: "r2k3r/6b1/p2pqP2/7p/1p6/7Q/PPPn3P/2KR4 w - - 0 27",
          dest: {
            from: "d5",
            to: "e6",
          },
        },
        {
          move: "Qxe6",
          fen: "r2k3r/6b1/p2pQP2/7p/1p6/8/PPPn3P/2KR4 b - - 0 27",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Nxe4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q2N3p/1p1Nn3/5Q1B/PPP4P/1K1R4 w kq - 0 21",
          dest: {
            from: "c5",
            to: "e4",
          },
        },
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "fxe6",
          fen: "r3kb1r/1b4R1/p2ppP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "Nc7+",
          fen: "r3kb1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 1 22",
          dest: {
            from: "d5",
            to: "c7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Ncxe6+",
          fen: "r2k1b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "c7",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 24",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Rxb7",
          fen: "r1k2b1r/1R6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 24",
          dest: {
            from: "g7",
            to: "b7",
          },
        },
        {
          move: "Kxb7",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 25",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qxe4+",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1NQ3/8/PPP4P/1K1R4 b - - 0 25",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "d5",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1NQ3/8/PPP4P/1K1R4 w - - 0 26",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Qf3",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 b - - 1 26",
          dest: {
            from: "e4",
            to: "f3",
          },
        },
        {
          move: "Rc8",
          fen: "2r2b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 w - - 2 27",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "f7",
          fen: "2r2b1r/1k3P2/p3N3/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 b - - 0 27",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Qb6",
          fen: "2r2b1r/1k3P2/pq2N3/3p3p/1p1N4/5Q2/PPP4P/1K1R4 w - - 1 28",
          dest: {
            from: "a5",
            to: "b6",
          },
        },
        {
          move: "Qxd5+",
          fen: "2r2b1r/1k3P2/pq2N3/3Q3p/1p1N4/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f3",
            to: "d5",
          },
        },
        {
          move: "Kb8",
          fen: "1kr2b1r/5P2/pq2N3/3Q3p/1p1N4/8/PPP4P/1K1R4 w - - 1 29",
          dest: {
            from: "b7",
            to: "b8",
          },
        },
        {
          move: "Nf5",
          fen: "1kr2b1r/5P2/pq2N3/3Q1N1p/1p6/8/PPP4P/1K1R4 b - - 2 29",
          dest: {
            from: "d4",
            to: "f5",
          },
        },
        {
          move: "Ka7",
          fen: "2r2b1r/k4P2/pq2N3/3Q1N1p/1p6/8/PPP4P/1K1R4 w - - 3 30",
          dest: {
            from: "b8",
            to: "a7",
          },
        },
      ],
    },
    {
      move: "Nxe4",
      moveFen: "r3kb1r/1b3pR1/p2ppP2/q2N3p/1p1Nn3/5Q1B/PPP4P/1K1R4 w kq - 0 21",
      dest: {
        from: "c5",
        to: "e4",
      },
      evalBefore: "+2.36",
      evalAfter: "+2.50",
      bestMovesBefore: [
        {
          move: "Nxe4",
          fen: "r3kb1r/1b3pR1/p2ppP2/q2N3p/1p1Nn3/5Q1B/PPP4P/1K1R4 w kq - 0 21",
          dest: {
            from: "c5",
            to: "e4",
          },
        },
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "fxe6",
          fen: "r3kb1r/1b4R1/p2ppP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "Nc7+",
          fen: "r3kb1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 1 22",
          dest: {
            from: "d5",
            to: "c7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Ncxe6+",
          fen: "r2k1b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "c7",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 24",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Rxb7",
          fen: "r1k2b1r/1R6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 24",
          dest: {
            from: "g7",
            to: "b7",
          },
        },
        {
          move: "Kxb7",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 25",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qxe4+",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1NQ3/8/PPP4P/1K1R4 b - - 0 25",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "d5",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1NQ3/8/PPP4P/1K1R4 w - - 0 26",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Qf3",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 b - - 1 26",
          dest: {
            from: "e4",
            to: "f3",
          },
        },
        {
          move: "Rc8",
          fen: "2r2b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 w - - 2 27",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "f7",
          fen: "2r2b1r/1k3P2/p3N3/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 b - - 0 27",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Qb6",
          fen: "2r2b1r/1k3P2/pq2N3/3p3p/1p1N4/5Q2/PPP4P/1K1R4 w - - 1 28",
          dest: {
            from: "a5",
            to: "b6",
          },
        },
        {
          move: "Qxd5+",
          fen: "2r2b1r/1k3P2/pq2N3/3Q3p/1p1N4/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f3",
            to: "d5",
          },
        },
        {
          move: "Kb8",
          fen: "1kr2b1r/5P2/pq2N3/3Q3p/1p1N4/8/PPP4P/1K1R4 w - - 1 29",
          dest: {
            from: "b7",
            to: "b8",
          },
        },
        {
          move: "Nf5",
          fen: "1kr2b1r/5P2/pq2N3/3Q1N1p/1p6/8/PPP4P/1K1R4 b - - 2 29",
          dest: {
            from: "d4",
            to: "f5",
          },
        },
        {
          move: "Ka7",
          fen: "2r2b1r/k4P2/pq2N3/3Q1N1p/1p6/8/PPP4P/1K1R4 w - - 3 30",
          dest: {
            from: "b8",
            to: "a7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "fxe6",
          fen: "r3kb1r/1b4R1/p2ppP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "Nc7+",
          fen: "r3kb1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 1 22",
          dest: {
            from: "d5",
            to: "c7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Ncxe6+",
          fen: "r2k1b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "c7",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 24",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Rxb7",
          fen: "r1k2b1r/1R6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 24",
          dest: {
            from: "g7",
            to: "b7",
          },
        },
        {
          move: "Kxb7",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 25",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qxe4+",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1NQ3/8/PPP4P/1K1R4 b - - 0 25",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "d5",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1NQ3/8/PPP4P/1K1R4 w - - 0 26",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Qg6",
          fen: "r4b1r/1k6/p3NPQ1/q2p3p/1p1N4/8/PPP4P/1K1R4 b - - 1 26",
          dest: {
            from: "e4",
            to: "g6",
          },
        },
        {
          move: "Rc8",
          fen: "2r2b1r/1k6/p3NPQ1/q2p3p/1p1N4/8/PPP4P/1K1R4 w - - 2 27",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Qf7+",
          fen: "2r2b1r/1k3Q2/p3NP2/q2p3p/1p1N4/8/PPP4P/1K1R4 b - - 3 27",
          dest: {
            from: "g6",
            to: "f7",
          },
        },
        {
          move: "Ka8",
          fen: "k1r2b1r/5Q2/p3NP2/q2p3p/1p1N4/8/PPP4P/1K1R4 w - - 4 28",
          dest: {
            from: "b7",
            to: "a8",
          },
        },
        {
          move: "Qd7",
          fen: "k1r2b1r/3Q4/p3NP2/q2p3p/1p1N4/8/PPP4P/1K1R4 b - - 5 28",
          dest: {
            from: "f7",
            to: "d7",
          },
        },
        {
          move: "Bh6",
          fen: "k1r4r/3Q4/p3NP1b/q2p3p/1p1N4/8/PPP4P/1K1R4 w - - 6 29",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Nf5",
          fen: "k1r4r/3Q4/p3NP1b/q2p1N1p/1p6/8/PPP4P/1K1R4 b - - 7 29",
          dest: {
            from: "d4",
            to: "f5",
          },
        },
        {
          move: "Qb5",
          fen: "k1r4r/3Q4/p3NP1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 w - - 8 30",
          dest: {
            from: "a5",
            to: "b5",
          },
        },
        {
          move: "Nc7+",
          fen: "k1r4r/2NQ4/p4P1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 b - - 9 30",
          dest: {
            from: "e6",
            to: "c7",
          },
        },
        {
          move: "Rxc7",
          fen: "k6r/2rQ4/p4P1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 w - - 0 31",
          dest: {
            from: "c8",
            to: "c7",
          },
        },
        {
          move: "Qxc7",
          fen: "k6r/2Q5/p4P1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 b - - 0 31",
          dest: {
            from: "d7",
            to: "c7",
          },
        },
        {
          move: "Qc4",
          fen: "k6r/2Q5/p4P1b/3p1N1p/1pq5/8/PPP4P/1K1R4 w - - 1 32",
          dest: {
            from: "b5",
            to: "c4",
          },
        },
        {
          move: "Qxc4",
          fen: "k6r/8/p4P1b/3p1N1p/1pQ5/8/PPP4P/1K1R4 b - - 0 32",
          dest: {
            from: "c7",
            to: "c4",
          },
        },
      ],
    },
    {
      move: "Bxe6",
      moveFen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
      dest: {
        from: "h3",
        to: "e6",
      },
      evalBefore: "+2.50",
      evalAfter: "+2.55",
      bestMovesBefore: [
        {
          move: "Bxe6",
          fen: "r3kb1r/1b3pR1/p2pBP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 21",
          dest: {
            from: "h3",
            to: "e6",
          },
        },
        {
          move: "fxe6",
          fen: "r3kb1r/1b4R1/p2ppP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "Nc7+",
          fen: "r3kb1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 1 22",
          dest: {
            from: "d5",
            to: "c7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Ncxe6+",
          fen: "r2k1b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "c7",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 24",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Rxb7",
          fen: "r1k2b1r/1R6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 24",
          dest: {
            from: "g7",
            to: "b7",
          },
        },
        {
          move: "Kxb7",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 25",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qxe4+",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1NQ3/8/PPP4P/1K1R4 b - - 0 25",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "d5",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1NQ3/8/PPP4P/1K1R4 w - - 0 26",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Qg6",
          fen: "r4b1r/1k6/p3NPQ1/q2p3p/1p1N4/8/PPP4P/1K1R4 b - - 1 26",
          dest: {
            from: "e4",
            to: "g6",
          },
        },
        {
          move: "Rc8",
          fen: "2r2b1r/1k6/p3NPQ1/q2p3p/1p1N4/8/PPP4P/1K1R4 w - - 2 27",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Qf7+",
          fen: "2r2b1r/1k3Q2/p3NP2/q2p3p/1p1N4/8/PPP4P/1K1R4 b - - 3 27",
          dest: {
            from: "g6",
            to: "f7",
          },
        },
        {
          move: "Ka8",
          fen: "k1r2b1r/5Q2/p3NP2/q2p3p/1p1N4/8/PPP4P/1K1R4 w - - 4 28",
          dest: {
            from: "b7",
            to: "a8",
          },
        },
        {
          move: "Qd7",
          fen: "k1r2b1r/3Q4/p3NP2/q2p3p/1p1N4/8/PPP4P/1K1R4 b - - 5 28",
          dest: {
            from: "f7",
            to: "d7",
          },
        },
        {
          move: "Bh6",
          fen: "k1r4r/3Q4/p3NP1b/q2p3p/1p1N4/8/PPP4P/1K1R4 w - - 6 29",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Nf5",
          fen: "k1r4r/3Q4/p3NP1b/q2p1N1p/1p6/8/PPP4P/1K1R4 b - - 7 29",
          dest: {
            from: "d4",
            to: "f5",
          },
        },
        {
          move: "Qb5",
          fen: "k1r4r/3Q4/p3NP1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 w - - 8 30",
          dest: {
            from: "a5",
            to: "b5",
          },
        },
        {
          move: "Nc7+",
          fen: "k1r4r/2NQ4/p4P1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 b - - 9 30",
          dest: {
            from: "e6",
            to: "c7",
          },
        },
        {
          move: "Rxc7",
          fen: "k6r/2rQ4/p4P1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 w - - 0 31",
          dest: {
            from: "c8",
            to: "c7",
          },
        },
        {
          move: "Qxc7",
          fen: "k6r/2Q5/p4P1b/1q1p1N1p/1p6/8/PPP4P/1K1R4 b - - 0 31",
          dest: {
            from: "d7",
            to: "c7",
          },
        },
        {
          move: "Qc4",
          fen: "k6r/2Q5/p4P1b/3p1N1p/1pq5/8/PPP4P/1K1R4 w - - 1 32",
          dest: {
            from: "b5",
            to: "c4",
          },
        },
        {
          move: "Qxc4",
          fen: "k6r/8/p4P1b/3p1N1p/1pQ5/8/PPP4P/1K1R4 b - - 0 32",
          dest: {
            from: "c7",
            to: "c4",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "fxe6",
          fen: "r3kb1r/1b4R1/p2ppP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "Nc7+",
          fen: "r3kb1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 1 22",
          dest: {
            from: "d5",
            to: "c7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Ncxe6+",
          fen: "r2k1b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "c7",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 24",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Rxb7",
          fen: "r1k2b1r/1R6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 24",
          dest: {
            from: "g7",
            to: "b7",
          },
        },
        {
          move: "Kxb7",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 25",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qxe4+",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1NQ3/8/PPP4P/1K1R4 b - - 0 25",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "d5",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1NQ3/8/PPP4P/1K1R4 w - - 0 26",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Qf3",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 b - - 1 26",
          dest: {
            from: "e4",
            to: "f3",
          },
        },
        {
          move: "Rc8",
          fen: "2r2b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 w - - 2 27",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nb3",
          fen: "2r2b1r/1k6/p3NP2/q2p3p/1p6/1N3Q2/PPP4P/1K1R4 b - - 3 27",
          dest: {
            from: "d4",
            to: "b3",
          },
        },
        {
          move: "Qb6",
          fen: "2r2b1r/1k6/pq2NP2/3p3p/1p6/1N3Q2/PPP4P/1K1R4 w - - 4 28",
          dest: {
            from: "a5",
            to: "b6",
          },
        },
        {
          move: "Qxd5+",
          fen: "2r2b1r/1k6/pq2NP2/3Q3p/1p6/1N6/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f3",
            to: "d5",
          },
        },
        {
          move: "Ka7",
          fen: "2r2b1r/k7/pq2NP2/3Q3p/1p6/1N6/PPP4P/1K1R4 w - - 1 29",
          dest: {
            from: "b7",
            to: "a7",
          },
        },
        {
          move: "Na5",
          fen: "2r2b1r/k7/pq2NP2/N2Q3p/1p6/8/PPP4P/1K1R4 b - - 2 29",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh7",
          fen: "2r2b2/k6r/pq2NP2/N2Q3p/1p6/8/PPP4P/1K1R4 w - - 3 30",
          dest: {
            from: "h8",
            to: "h7",
          },
        },
        {
          move: "Nxf8",
          fen: "2r2N2/k6r/pq3P2/N2Q3p/1p6/8/PPP4P/1K1R4 b - - 0 30",
          dest: {
            from: "e6",
            to: "f8",
          },
        },
        {
          move: "Rxf8",
          fen: "5r2/k6r/pq3P2/N2Q3p/1p6/8/PPP4P/1K1R4 w - - 0 31",
          dest: {
            from: "c8",
            to: "f8",
          },
        },
        {
          move: "Nc6+",
          fen: "5r2/k6r/pqN2P2/3Q3p/1p6/8/PPP4P/1K1R4 b - - 1 31",
          dest: {
            from: "a5",
            to: "c6",
          },
        },
        {
          move: "Ka8",
          fen: "k4r2/7r/pqN2P2/3Q3p/1p6/8/PPP4P/1K1R4 w - - 2 32",
          dest: {
            from: "a7",
            to: "a8",
          },
        },
        {
          move: "Ne5+",
          fen: "k4r2/7r/pq3P2/3QN2p/1p6/8/PPP4P/1K1R4 b - - 3 32",
          dest: {
            from: "c6",
            to: "e5",
          },
        },
        {
          move: "Qb7",
          fen: "k4r2/1q5r/p4P2/3QN2p/1p6/8/PPP4P/1K1R4 w - - 4 33",
          dest: {
            from: "b6",
            to: "b7",
          },
        },
        {
          move: "Qd6",
          fen: "k4r2/1q5r/p2Q1P2/4N2p/1p6/8/PPP4P/1K1R4 b - - 5 33",
          dest: {
            from: "d5",
            to: "d6",
          },
        },
        {
          move: "Qb8",
          fen: "kq3r2/7r/p2Q1P2/4N2p/1p6/8/PPP4P/1K1R4 w - - 6 34",
          dest: {
            from: "b7",
            to: "b8",
          },
        },
      ],
    },
    {
      move: "Bxd5",
      moveFen: "r3kb1r/5pR1/p2pBP2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
      dest: {
        from: "b7",
        to: "d5",
      },
      evalBefore: "+2.55",
      evalAfter: "+0.81",
      bestMovesBefore: [
        {
          move: "fxe6",
          fen: "r3kb1r/1b4R1/p2ppP2/q2N3p/1p1Nn3/5Q2/PPP4P/1K1R4 w kq - 0 22",
          dest: {
            from: "f7",
            to: "e6",
          },
        },
        {
          move: "Nc7+",
          fen: "r3kb1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 1 22",
          dest: {
            from: "d5",
            to: "c7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/1bN3R1/p2ppP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Ncxe6+",
          fen: "r2k1b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "c7",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1b4R1/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 24",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Rxb7",
          fen: "r1k2b1r/1R6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 24",
          dest: {
            from: "g7",
            to: "b7",
          },
        },
        {
          move: "Kxb7",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 25",
          dest: {
            from: "c8",
            to: "b7",
          },
        },
        {
          move: "Qxe4+",
          fen: "r4b1r/1k6/p2pNP2/q6p/1p1NQ3/8/PPP4P/1K1R4 b - - 0 25",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "d5",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1NQ3/8/PPP4P/1K1R4 w - - 0 26",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Qf3",
          fen: "r4b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 b - - 1 26",
          dest: {
            from: "e4",
            to: "f3",
          },
        },
        {
          move: "Rc8",
          fen: "2r2b1r/1k6/p3NP2/q2p3p/1p1N4/5Q2/PPP4P/1K1R4 w - - 2 27",
          dest: {
            from: "a8",
            to: "c8",
          },
        },
        {
          move: "Nb3",
          fen: "2r2b1r/1k6/p3NP2/q2p3p/1p6/1N3Q2/PPP4P/1K1R4 b - - 3 27",
          dest: {
            from: "d4",
            to: "b3",
          },
        },
        {
          move: "Qb6",
          fen: "2r2b1r/1k6/pq2NP2/3p3p/1p6/1N3Q2/PPP4P/1K1R4 w - - 4 28",
          dest: {
            from: "a5",
            to: "b6",
          },
        },
        {
          move: "Qxd5+",
          fen: "2r2b1r/1k6/pq2NP2/3Q3p/1p6/1N6/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f3",
            to: "d5",
          },
        },
        {
          move: "Ka7",
          fen: "2r2b1r/k7/pq2NP2/3Q3p/1p6/1N6/PPP4P/1K1R4 w - - 1 29",
          dest: {
            from: "b7",
            to: "a7",
          },
        },
        {
          move: "Na5",
          fen: "2r2b1r/k7/pq2NP2/N2Q3p/1p6/8/PPP4P/1K1R4 b - - 2 29",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh7",
          fen: "2r2b2/k6r/pq2NP2/N2Q3p/1p6/8/PPP4P/1K1R4 w - - 3 30",
          dest: {
            from: "h8",
            to: "h7",
          },
        },
        {
          move: "Nxf8",
          fen: "2r2N2/k6r/pq3P2/N2Q3p/1p6/8/PPP4P/1K1R4 b - - 0 30",
          dest: {
            from: "e6",
            to: "f8",
          },
        },
        {
          move: "Rxf8",
          fen: "5r2/k6r/pq3P2/N2Q3p/1p6/8/PPP4P/1K1R4 w - - 0 31",
          dest: {
            from: "c8",
            to: "f8",
          },
        },
        {
          move: "Nc6+",
          fen: "5r2/k6r/pqN2P2/3Q3p/1p6/8/PPP4P/1K1R4 b - - 1 31",
          dest: {
            from: "a5",
            to: "c6",
          },
        },
        {
          move: "Ka8",
          fen: "k4r2/7r/pqN2P2/3Q3p/1p6/8/PPP4P/1K1R4 w - - 2 32",
          dest: {
            from: "a7",
            to: "a8",
          },
        },
        {
          move: "Ne5+",
          fen: "k4r2/7r/pq3P2/3QN2p/1p6/8/PPP4P/1K1R4 b - - 3 32",
          dest: {
            from: "c6",
            to: "e5",
          },
        },
        {
          move: "Qb7",
          fen: "k4r2/1q5r/p4P2/3QN2p/1p6/8/PPP4P/1K1R4 w - - 4 33",
          dest: {
            from: "b6",
            to: "b7",
          },
        },
        {
          move: "Qd6",
          fen: "k4r2/1q5r/p2Q1P2/4N2p/1p6/8/PPP4P/1K1R4 b - - 5 33",
          dest: {
            from: "d5",
            to: "d6",
          },
        },
        {
          move: "Qb8",
          fen: "kq3r2/7r/p2Q1P2/4N2p/1p6/8/PPP4P/1K1R4 w - - 6 34",
          dest: {
            from: "b7",
            to: "b8",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf7+",
          fen: "r3kb1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 22",
          dest: {
            from: "e6",
            to: "f7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
        {
          move: "Rg5",
          fen: "r2k1b1r/8/p2p1P2/3q2Rp/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 1 24",
          dest: {
            from: "g7",
            to: "g5",
          },
        },
        {
          move: "Qb7",
          fen: "r2k1b1r/1q6/p2p1P2/6Rp/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 25",
          dest: {
            from: "d5",
            to: "b7",
          },
        },
        {
          move: "Ne6+",
          fen: "r2k1b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 b - - 3 25",
          dest: {
            from: "d4",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 w - - 4 26",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Qf5",
          fen: "r1k2b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 5 26",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Kb8",
          fen: "rk3b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 6 27",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Nd8",
          fen: "rk1N1b1r/1q6/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 7 27",
          dest: {
            from: "e6",
            to: "d8",
          },
        },
        {
          move: "Qc8",
          fen: "rkqN1b1r/8/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 8 28",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Qxe4",
          fen: "rkqN1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f5",
            to: "e4",
          },
        },
        {
          move: "Qxd8",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 w - - 0 29",
          dest: {
            from: "c8",
            to: "d8",
          },
        },
        {
          move: "Rd4",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 b - - 1 29",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "Ka7",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 w - - 2 30",
          dest: {
            from: "b8",
            to: "a7",
          },
        },
        {
          move: "Rxb4",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 b - - 0 30",
          dest: {
            from: "d4",
            to: "b4",
          },
        },
        {
          move: "Rb8",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 w - - 1 31",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Qd4+",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 b - - 2 31",
          dest: {
            from: "e4",
            to: "d4",
          },
        },
        {
          move: "Ka8",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 w - - 3 32",
          dest: {
            from: "a7",
            to: "a8",
          },
        },
        {
          move: "a3",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/P7/1PP4P/1K6 b - - 0 32",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rxb4",
          fen: "k2q1b1r/8/p2p1P2/6Rp/1r1Q4/P7/1PP4P/1K6 w - - 0 33",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "k2q1b1r/8/p2p1P2/6Rp/1P1Q4/8/1PP4P/1K6 b - - 0 33",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Kb8",
          fen: "1k1q1b1r/8/p2p1P2/6Rp/1P1Q4/8/1PP4P/1K6 w - - 1 34",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Ra5",
          fen: "1k1q1b1r/8/p2p1P2/R6p/1P1Q4/8/1PP4P/1K6 b - - 2 34",
          dest: {
            from: "g5",
            to: "a5",
          },
        },
      ],
    },
    {
      move: "Bxf7+",
      moveFen: "r3kb1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 22",
      dest: {
        from: "e6",
        to: "f7",
      },
      evalBefore: "+0.81",
      evalAfter: "+0.68",
      bestMovesBefore: [
        {
          move: "Bxf7+",
          fen: "r3kb1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 b kq - 0 22",
          dest: {
            from: "e6",
            to: "f7",
          },
        },
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
        {
          move: "Rg5",
          fen: "r2k1b1r/8/p2p1P2/3q2Rp/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 1 24",
          dest: {
            from: "g7",
            to: "g5",
          },
        },
        {
          move: "Qb7",
          fen: "r2k1b1r/1q6/p2p1P2/6Rp/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 25",
          dest: {
            from: "d5",
            to: "b7",
          },
        },
        {
          move: "Ne6+",
          fen: "r2k1b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 b - - 3 25",
          dest: {
            from: "d4",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 w - - 4 26",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Qf5",
          fen: "r1k2b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 5 26",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Kb8",
          fen: "rk3b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 6 27",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Nd8",
          fen: "rk1N1b1r/1q6/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 7 27",
          dest: {
            from: "e6",
            to: "d8",
          },
        },
        {
          move: "Qc8",
          fen: "rkqN1b1r/8/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 8 28",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Qxe4",
          fen: "rkqN1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f5",
            to: "e4",
          },
        },
        {
          move: "Qxd8",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 w - - 0 29",
          dest: {
            from: "c8",
            to: "d8",
          },
        },
        {
          move: "Rd4",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 b - - 1 29",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "Ka7",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 w - - 2 30",
          dest: {
            from: "b8",
            to: "a7",
          },
        },
        {
          move: "Rxb4",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 b - - 0 30",
          dest: {
            from: "d4",
            to: "b4",
          },
        },
        {
          move: "Rb8",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 w - - 1 31",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Qd4+",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 b - - 2 31",
          dest: {
            from: "e4",
            to: "d4",
          },
        },
        {
          move: "Ka8",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 w - - 3 32",
          dest: {
            from: "a7",
            to: "a8",
          },
        },
        {
          move: "a3",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/P7/1PP4P/1K6 b - - 0 32",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "Rxb4",
          fen: "k2q1b1r/8/p2p1P2/6Rp/1r1Q4/P7/1PP4P/1K6 w - - 0 33",
          dest: {
            from: "b8",
            to: "b4",
          },
        },
        {
          move: "axb4",
          fen: "k2q1b1r/8/p2p1P2/6Rp/1P1Q4/8/1PP4P/1K6 b - - 0 33",
          dest: {
            from: "a3",
            to: "b4",
          },
        },
        {
          move: "Kb8",
          fen: "1k1q1b1r/8/p2p1P2/6Rp/1P1Q4/8/1PP4P/1K6 w - - 1 34",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Ra5",
          fen: "1k1q1b1r/8/p2p1P2/R6p/1P1Q4/8/1PP4P/1K6 b - - 2 34",
          dest: {
            from: "g5",
            to: "a5",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
        {
          move: "Rg5",
          fen: "r2k1b1r/8/p2p1P2/3q2Rp/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 1 24",
          dest: {
            from: "g7",
            to: "g5",
          },
        },
        {
          move: "Qb7",
          fen: "r2k1b1r/1q6/p2p1P2/6Rp/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 25",
          dest: {
            from: "d5",
            to: "b7",
          },
        },
        {
          move: "Ne6+",
          fen: "r2k1b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 b - - 3 25",
          dest: {
            from: "d4",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 w - - 4 26",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Qf5",
          fen: "r1k2b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 5 26",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Kb8",
          fen: "rk3b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 6 27",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Nd8",
          fen: "rk1N1b1r/1q6/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 7 27",
          dest: {
            from: "e6",
            to: "d8",
          },
        },
        {
          move: "Qc8",
          fen: "rkqN1b1r/8/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 8 28",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Qxe4",
          fen: "rkqN1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f5",
            to: "e4",
          },
        },
        {
          move: "Qxd8",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 w - - 0 29",
          dest: {
            from: "c8",
            to: "d8",
          },
        },
        {
          move: "Rd4",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 b - - 1 29",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "Ka7",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 w - - 2 30",
          dest: {
            from: "b8",
            to: "a7",
          },
        },
        {
          move: "Rxb4",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 b - - 0 30",
          dest: {
            from: "d4",
            to: "b4",
          },
        },
        {
          move: "Rb8",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 w - - 1 31",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Qd4+",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 b - - 2 31",
          dest: {
            from: "e4",
            to: "d4",
          },
        },
        {
          move: "Ka8",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 w - - 3 32",
          dest: {
            from: "a7",
            to: "a8",
          },
        },
        {
          move: "c3",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/2P5/PP5P/1K6 b - - 0 32",
          dest: {
            from: "c2",
            to: "c3",
          },
        },
        {
          move: "Bh6",
          fen: "kr1q3r/8/p2p1P1b/6Rp/1R1Q4/2P5/PP5P/1K6 w - - 1 33",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Qe4+",
          fen: "kr1q3r/8/p2p1P1b/6Rp/1R2Q3/2P5/PP5P/1K6 b - - 2 33",
          dest: {
            from: "d4",
            to: "e4",
          },
        },
        {
          move: "Ka7",
          fen: "1r1q3r/k7/p2p1P1b/6Rp/1R2Q3/2P5/PP5P/1K6 w - - 3 34",
          dest: {
            from: "a8",
            to: "a7",
          },
        },
      ],
    },
    {
      move: "Kd8",
      moveFen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
      dest: {
        from: "e8",
        to: "d8",
      },
      evalBefore: "+0.68",
      evalAfter: "+1.27",
      bestMovesBefore: [
        {
          move: "Kd8",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 1 23",
          dest: {
            from: "e8",
            to: "d8",
          },
        },
        {
          move: "Bxd5",
          fen: "r2k1b1r/6R1/p2p1P2/q2B3p/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 0 23",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Qxd5",
          fen: "r2k1b1r/6R1/p2p1P2/3q3p/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 0 24",
          dest: {
            from: "a5",
            to: "d5",
          },
        },
        {
          move: "Rg5",
          fen: "r2k1b1r/8/p2p1P2/3q2Rp/1p1Nn3/5Q2/PPP4P/1K1R4 b - - 1 24",
          dest: {
            from: "g7",
            to: "g5",
          },
        },
        {
          move: "Qb7",
          fen: "r2k1b1r/1q6/p2p1P2/6Rp/1p1Nn3/5Q2/PPP4P/1K1R4 w - - 2 25",
          dest: {
            from: "d5",
            to: "b7",
          },
        },
        {
          move: "Ne6+",
          fen: "r2k1b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 b - - 3 25",
          dest: {
            from: "d4",
            to: "e6",
          },
        },
        {
          move: "Kc8",
          fen: "r1k2b1r/1q6/p2pNP2/6Rp/1p2n3/5Q2/PPP4P/1K1R4 w - - 4 26",
          dest: {
            from: "d8",
            to: "c8",
          },
        },
        {
          move: "Qf5",
          fen: "r1k2b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 5 26",
          dest: {
            from: "f3",
            to: "f5",
          },
        },
        {
          move: "Kb8",
          fen: "rk3b1r/1q6/p2pNP2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 6 27",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Nd8",
          fen: "rk1N1b1r/1q6/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 b - - 7 27",
          dest: {
            from: "e6",
            to: "d8",
          },
        },
        {
          move: "Qc8",
          fen: "rkqN1b1r/8/p2p1P2/5QRp/1p2n3/8/PPP4P/1K1R4 w - - 8 28",
          dest: {
            from: "b7",
            to: "c8",
          },
        },
        {
          move: "Qxe4",
          fen: "rkqN1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 b - - 0 28",
          dest: {
            from: "f5",
            to: "e4",
          },
        },
        {
          move: "Qxd8",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p2Q3/8/PPP4P/1K1R4 w - - 0 29",
          dest: {
            from: "c8",
            to: "d8",
          },
        },
        {
          move: "Rd4",
          fen: "rk1q1b1r/8/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 b - - 1 29",
          dest: {
            from: "d1",
            to: "d4",
          },
        },
        {
          move: "Ka7",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1p1RQ3/8/PPP4P/1K6 w - - 2 30",
          dest: {
            from: "b8",
            to: "a7",
          },
        },
        {
          move: "Rxb4",
          fen: "r2q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 b - - 0 30",
          dest: {
            from: "d4",
            to: "b4",
          },
        },
        {
          move: "Rb8",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R2Q3/8/PPP4P/1K6 w - - 1 31",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Qd4+",
          fen: "1r1q1b1r/k7/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 b - - 2 31",
          dest: {
            from: "e4",
            to: "d4",
          },
        },
        {
          move: "Ka8",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/8/PPP4P/1K6 w - - 3 32",
          dest: {
            from: "a7",
            to: "a8",
          },
        },
        {
          move: "c3",
          fen: "kr1q1b1r/8/p2p1P2/6Rp/1R1Q4/2P5/PP5P/1K6 b - - 0 32",
          dest: {
            from: "c2",
            to: "c3",
          },
        },
        {
          move: "Bh6",
          fen: "kr1q3r/8/p2p1P1b/6Rp/1R1Q4/2P5/PP5P/1K6 w - - 1 33",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Qe4+",
          fen: "kr1q3r/8/p2p1P1b/6Rp/1R2Q3/2P5/PP5P/1K6 b - - 2 33",
          dest: {
            from: "d4",
            to: "e4",
          },
        },
        {
          move: "Ka7",
          fen: "1r1q3r/k7/p2p1P1b/6Rp/1R2Q3/2P5/PP5P/1K6 w - - 3 34",
          dest: {
            from: "a8",
            to: "a7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Nb3",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p2n3/1N3Q2/PPP4P/1K1R4 b - - 2 23",
          dest: {
            from: "d4",
            to: "b3",
          },
        },
        {
          move: "Nd2+",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPn3P/1K1R4 w - - 3 24",
          dest: {
            from: "e4",
            to: "d2",
          },
        },
        {
          move: "Rxd2",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPR3P/1K6 b - - 0 24",
          dest: {
            from: "d1",
            to: "d2",
          },
        },
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Bg4",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p4b1/8/PPPR3P/1K6 w - - 5 28",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p4b1/8/PPP2R1P/1K6 b - - 6 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be6",
          fen: "r4bR1/2k5/p2pbPBr/N6p/1p6/8/PPP2R1P/1K6 w - - 7 29",
          dest: {
            from: "g4",
            to: "e6",
          },
        },
        {
          move: "f7",
          fen: "r4bR1/2k2P2/p2pb1Br/N6p/1p6/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
      ],
    },
    {
      move: "Nb3",
      moveFen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p2n3/1N3Q2/PPP4P/1K1R4 b - - 2 23",
      dest: {
        from: "d4",
        to: "b3",
      },
      evalBefore: "+1.27",
      evalAfter: "+1.35",
      bestMovesBefore: [
        {
          move: "Nb3",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p2n3/1N3Q2/PPP4P/1K1R4 b - - 2 23",
          dest: {
            from: "d4",
            to: "b3",
          },
        },
        {
          move: "Nd2+",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPn3P/1K1R4 w - - 3 24",
          dest: {
            from: "e4",
            to: "d2",
          },
        },
        {
          move: "Rxd2",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPR3P/1K6 b - - 0 24",
          dest: {
            from: "d1",
            to: "d2",
          },
        },
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Bg4",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p4b1/8/PPPR3P/1K6 w - - 5 28",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p4b1/8/PPP2R1P/1K6 b - - 6 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be6",
          fen: "r4bR1/2k5/p2pbPBr/N6p/1p6/8/PPP2R1P/1K6 w - - 7 29",
          dest: {
            from: "g4",
            to: "e6",
          },
        },
        {
          move: "f7",
          fen: "r4bR1/2k2P2/p2pb1Br/N6p/1p6/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Nd2+",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPn3P/1K1R4 w - - 3 24",
          dest: {
            from: "e4",
            to: "d2",
          },
        },
        {
          move: "Rxd2",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPR3P/1K6 b - - 0 24",
          dest: {
            from: "d1",
            to: "d2",
          },
        },
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "Ne3",
          fen: "3r1bR1/2k5/p4P1r/7p/1p2p3/4N3/PPP2R1P/1K6 b - - 3 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 4 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
      ],
    },
    {
      move: "Nd2+",
      moveFen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPn3P/1K1R4 w - - 3 24",
      dest: {
        from: "e4",
        to: "d2",
      },
      evalBefore: "+1.35",
      evalAfter: "+1.45",
      bestMovesBefore: [
        {
          move: "Nd2+",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPn3P/1K1R4 w - - 3 24",
          dest: {
            from: "e4",
            to: "d2",
          },
        },
        {
          move: "Rxd2",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPR3P/1K6 b - - 0 24",
          dest: {
            from: "d1",
            to: "d2",
          },
        },
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "Ne3",
          fen: "3r1bR1/2k5/p4P1r/7p/1p2p3/4N3/PPP2R1P/1K6 b - - 3 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 4 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rxd2",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPR3P/1K6 b - - 0 24",
          dest: {
            from: "d1",
            to: "d2",
          },
        },
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "Ne3",
          fen: "3r1bR1/2k5/p4P1r/7p/1p2p3/4N3/PPP2R1P/1K6 b - - 3 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 4 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rhd6",
          fen: "3r2R1/2k2P2/p2r4/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 1 33",
          dest: {
            from: "h6",
            to: "d6",
          },
        },
        {
          move: "Rxd8",
          fen: "3R4/2k2P2/p2r4/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 33",
          dest: {
            from: "g8",
            to: "d8",
          },
        },
        {
          move: "Rxd8",
          fen: "3r4/2k2P2/p7/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 0 34",
          dest: {
            from: "d6",
            to: "d8",
          },
        },
        {
          move: "Rf5",
          fen: "3r4/2k2P2/p7/2b2R1p/1p2p3/4N3/PPP4P/1K6 b - - 1 34",
          dest: {
            from: "f2",
            to: "f5",
          },
        },
        {
          move: "Bxe3",
          fen: "3r4/2k2P2/p7/5R1p/1p2p3/4b3/PPP4P/1K6 w - - 0 35",
          dest: {
            from: "c5",
            to: "e3",
          },
        },
      ],
    },
    {
      move: "Rxd2",
      moveFen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPR3P/1K6 b - - 0 24",
      dest: {
        from: "d1",
        to: "d2",
      },
      evalBefore: "+1.45",
      evalAfter: "+1.30",
      bestMovesBefore: [
        {
          move: "Rxd2",
          fen: "r2k1b1r/5BR1/p2p1P2/q2b3p/1p6/1N3Q2/PPPR3P/1K6 b - - 0 24",
          dest: {
            from: "d1",
            to: "d2",
          },
        },
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "Ne3",
          fen: "3r1bR1/2k5/p4P1r/7p/1p2p3/4N3/PPP2R1P/1K6 b - - 3 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 4 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rhd6",
          fen: "3r2R1/2k2P2/p2r4/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 1 33",
          dest: {
            from: "h6",
            to: "d6",
          },
        },
        {
          move: "Rxd8",
          fen: "3R4/2k2P2/p2r4/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 33",
          dest: {
            from: "g8",
            to: "d8",
          },
        },
        {
          move: "Rxd8",
          fen: "3r4/2k2P2/p7/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 0 34",
          dest: {
            from: "d6",
            to: "d8",
          },
        },
        {
          move: "Rf5",
          fen: "3r4/2k2P2/p7/2b2R1p/1p2p3/4N3/PPP4P/1K6 b - - 1 34",
          dest: {
            from: "f2",
            to: "f5",
          },
        },
        {
          move: "Bxe3",
          fen: "3r4/2k2P2/p7/5R1p/1p2p3/4b3/PPP4P/1K6 w - - 0 35",
          dest: {
            from: "c5",
            to: "e3",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "Ne3",
          fen: "3r1bR1/2k5/p4P1r/7p/1p2p3/4N3/PPP2R1P/1K6 b - - 3 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 4 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rhd6",
          fen: "3r2R1/2k2P2/p2r4/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 1 33",
          dest: {
            from: "h6",
            to: "d6",
          },
        },
        {
          move: "c4",
          fen: "3r2R1/2k2P2/p2r4/2b4p/1pP1p3/4N3/PP3R1P/1K6 b - c3 0 33",
          dest: {
            from: "c2",
            to: "c4",
          },
        },
        {
          move: "Bxe3",
          fen: "3r2R1/2k2P2/p2r4/7p/1pP1p3/4b3/PP3R1P/1K6 w - - 0 34",
          dest: {
            from: "c5",
            to: "e3",
          },
        },
        {
          move: "Rxd8",
          fen: "3R4/2k2P2/p2r4/7p/1pP1p3/4b3/PP3R1P/1K6 b - - 0 34",
          dest: {
            from: "g8",
            to: "d8",
          },
        },
        {
          move: "Rxd8",
          fen: "3r4/2k2P2/p7/7p/1pP1p3/4b3/PP3R1P/1K6 w - - 0 35",
          dest: {
            from: "d6",
            to: "d8",
          },
        },
        {
          move: "f8=Q",
          fen: "3r1Q2/2k5/p7/7p/1pP1p3/4b3/PP3R1P/1K6 b - - 0 35",
          dest: {
            from: "f7",
            to: "f8",
          },
        },
        {
          move: "Rxf8",
          fen: "5r2/2k5/p7/7p/1pP1p3/4b3/PP3R1P/1K6 w - - 0 36",
          dest: {
            from: "d8",
            to: "f8",
          },
        },
        {
          move: "Rxf8",
          fen: "5R2/2k5/p7/7p/1pP1p3/4b3/PP5P/1K6 b - - 0 36",
          dest: {
            from: "f2",
            to: "f8",
          },
        },
        {
          move: "Bc5",
          fen: "5R2/2k5/p7/2b4p/1pP1p3/8/PP5P/1K6 w - - 1 37",
          dest: {
            from: "e3",
            to: "c5",
          },
        },
        {
          move: "Re8",
          fen: "4R3/2k5/p7/2b4p/1pP1p3/8/PP5P/1K6 b - - 2 37",
          dest: {
            from: "f8",
            to: "e8",
          },
        },
      ],
    },
    {
      move: "Bxf3",
      moveFen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
      dest: {
        from: "d5",
        to: "f3",
      },
      evalBefore: "+1.30",
      evalAfter: "+1.57",
      bestMovesBefore: [
        {
          move: "Bxf3",
          fen: "r2k1b1r/5BR1/p2p1P2/q6p/1p6/1N3b2/PPPR3P/1K6 w - - 0 25",
          dest: {
            from: "d5",
            to: "f3",
          },
        },
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "Ne3",
          fen: "3r1bR1/2k5/p4P1r/7p/1p2p3/4N3/PPP2R1P/1K6 b - - 3 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 4 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1p2p3/4N3/PPP2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rhd6",
          fen: "3r2R1/2k2P2/p2r4/2b4p/1p2p3/4N3/PPP2R1P/1K6 w - - 1 33",
          dest: {
            from: "h6",
            to: "d6",
          },
        },
        {
          move: "c4",
          fen: "3r2R1/2k2P2/p2r4/2b4p/1pP1p3/4N3/PP3R1P/1K6 b - c3 0 33",
          dest: {
            from: "c2",
            to: "c4",
          },
        },
        {
          move: "Bxe3",
          fen: "3r2R1/2k2P2/p2r4/7p/1pP1p3/4b3/PP3R1P/1K6 w - - 0 34",
          dest: {
            from: "c5",
            to: "e3",
          },
        },
        {
          move: "Rxd8",
          fen: "3R4/2k2P2/p2r4/7p/1pP1p3/4b3/PP3R1P/1K6 b - - 0 34",
          dest: {
            from: "g8",
            to: "d8",
          },
        },
        {
          move: "Rxd8",
          fen: "3r4/2k2P2/p7/7p/1pP1p3/4b3/PP3R1P/1K6 w - - 0 35",
          dest: {
            from: "d6",
            to: "d8",
          },
        },
        {
          move: "f8=Q",
          fen: "3r1Q2/2k5/p7/7p/1pP1p3/4b3/PP3R1P/1K6 b - - 0 35",
          dest: {
            from: "f7",
            to: "f8",
          },
        },
        {
          move: "Rxf8",
          fen: "5r2/2k5/p7/7p/1pP1p3/4b3/PP3R1P/1K6 w - - 0 36",
          dest: {
            from: "d8",
            to: "f8",
          },
        },
        {
          move: "Rxf8",
          fen: "5R2/2k5/p7/7p/1pP1p3/4b3/PP5P/1K6 b - - 0 36",
          dest: {
            from: "f2",
            to: "f8",
          },
        },
        {
          move: "Bc5",
          fen: "5R2/2k5/p7/2b4p/1pP1p3/8/PP5P/1K6 w - - 1 37",
          dest: {
            from: "e3",
            to: "c5",
          },
        },
        {
          move: "Re8",
          fen: "4R3/2k5/p7/2b4p/1pP1p3/8/PP5P/1K6 b - - 2 37",
          dest: {
            from: "f8",
            to: "e8",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Rb8",
          fen: "1r3bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 w - - 5 28",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "h4",
          fen: "1r3bR1/2k5/p2p1PBr/N6p/1p5P/5b2/PPPR4/1K6 b - - 0 28",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "d5",
          fen: "1r3bR1/2k5/p4PBr/N2p3p/1p5P/5b2/PPPR4/1K6 w - - 0 29",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "1r3bR1/2k5/p4PBr/N2p3p/1p5P/5b2/PPP2R2/1K6 b - - 1 29",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Bh1",
          fen: "1r3bR1/2k5/p4PBr/N2p3p/1p5P/8/PPP2R2/1K5b w - - 2 30",
          dest: {
            from: "f3",
            to: "h1",
          },
        },
        {
          move: "Bd3",
          fen: "1r3bR1/2k5/p4P1r/N2p3p/1p5P/3B4/PPP2R2/1K5b b - - 3 30",
          dest: {
            from: "g6",
            to: "d3",
          },
        },
        {
          move: "Re8",
          fen: "4rbR1/2k5/p4P1r/N2p3p/1p5P/3B4/PPP2R2/1K5b w - - 4 31",
          dest: {
            from: "b8",
            to: "e8",
          },
        },
      ],
    },
    {
      move: "Nxa5",
      moveFen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
      dest: {
        from: "b3",
        to: "a5",
      },
      evalBefore: "+1.57",
      evalAfter: "+1.50",
      bestMovesBefore: [
        {
          move: "Nxa5",
          fen: "r2k1b1r/5BR1/p2p1P2/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 25",
          dest: {
            from: "b3",
            to: "a5",
          },
        },
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Rb8",
          fen: "1r3bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 w - - 5 28",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "h4",
          fen: "1r3bR1/2k5/p2p1PBr/N6p/1p5P/5b2/PPPR4/1K6 b - - 0 28",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "d5",
          fen: "1r3bR1/2k5/p4PBr/N2p3p/1p5P/5b2/PPPR4/1K6 w - - 0 29",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "1r3bR1/2k5/p4PBr/N2p3p/1p5P/5b2/PPP2R2/1K6 b - - 1 29",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Bh1",
          fen: "1r3bR1/2k5/p4PBr/N2p3p/1p5P/8/PPP2R2/1K5b w - - 2 30",
          dest: {
            from: "f3",
            to: "h1",
          },
        },
        {
          move: "Bd3",
          fen: "1r3bR1/2k5/p4P1r/N2p3p/1p5P/3B4/PPP2R2/1K5b b - - 3 30",
          dest: {
            from: "g6",
            to: "d3",
          },
        },
        {
          move: "Re8",
          fen: "4rbR1/2k5/p4P1r/N2p3p/1p5P/3B4/PPP2R2/1K5b w - - 4 31",
          dest: {
            from: "b8",
            to: "e8",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "b3",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 31",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rf8",
          fen: "5rR1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 33",
          dest: {
            from: "d8",
            to: "f8",
          },
        },
        {
          move: "Rf5",
          fen: "5rR1/2k2P2/p6r/2b2R1p/1pN1p3/1P6/P1P4P/1K6 b - - 2 33",
          dest: {
            from: "f2",
            to: "f5",
          },
        },
        {
          move: "Be7",
          fen: "5rR1/2k1bP2/p6r/5R1p/1pN1p3/1P6/P1P4P/1K6 w - - 3 34",
          dest: {
            from: "c5",
            to: "e7",
          },
        },
        {
          move: "Rxf8",
          fen: "5R2/2k1bP2/p6r/5R1p/1pN1p3/1P6/P1P4P/1K6 b - - 0 34",
          dest: {
            from: "g8",
            to: "f8",
          },
        },
        {
          move: "Bxf8",
          fen: "5b2/2k2P2/p6r/5R1p/1pN1p3/1P6/P1P4P/1K6 w - - 0 35",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "c3",
          fen: "5b2/2k2P2/p6r/5R1p/1pN1p3/1PP5/P6P/1K6 b - - 0 35",
          dest: {
            from: "c2",
            to: "c3",
          },
        },
        {
          move: "bxc3",
          fen: "5b2/2k2P2/p6r/5R1p/2N1p3/1Pp5/P6P/1K6 w - - 0 36",
          dest: {
            from: "b4",
            to: "c3",
          },
        },
        {
          move: "Kc2",
          fen: "5b2/2k2P2/p6r/5R1p/2N1p3/1Pp5/P1K4P/8 b - - 1 36",
          dest: {
            from: "b1",
            to: "c2",
          },
        },
        {
          move: "Kd7",
          fen: "5b2/3k1P2/p6r/5R1p/2N1p3/1Pp5/P1K4P/8 w - - 2 37",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
      ],
    },
    {
      move: "Rh6",
      moveFen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
      dest: {
        from: "h8",
        to: "h6",
      },
      evalBefore: "+1.50",
      evalAfter: "+1.26",
      bestMovesBefore: [
        {
          move: "Rh6",
          fen: "r2k1b2/5BR1/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 1 26",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "b3",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 31",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rf8",
          fen: "5rR1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 33",
          dest: {
            from: "d8",
            to: "f8",
          },
        },
        {
          move: "Rf5",
          fen: "5rR1/2k2P2/p6r/2b2R1p/1pN1p3/1P6/P1P4P/1K6 b - - 2 33",
          dest: {
            from: "f2",
            to: "f5",
          },
        },
        {
          move: "Be7",
          fen: "5rR1/2k1bP2/p6r/5R1p/1pN1p3/1P6/P1P4P/1K6 w - - 3 34",
          dest: {
            from: "c5",
            to: "e7",
          },
        },
        {
          move: "Rxf8",
          fen: "5R2/2k1bP2/p6r/5R1p/1pN1p3/1P6/P1P4P/1K6 b - - 0 34",
          dest: {
            from: "g8",
            to: "f8",
          },
        },
        {
          move: "Bxf8",
          fen: "5b2/2k2P2/p6r/5R1p/1pN1p3/1P6/P1P4P/1K6 w - - 0 35",
          dest: {
            from: "e7",
            to: "f8",
          },
        },
        {
          move: "c3",
          fen: "5b2/2k2P2/p6r/5R1p/1pN1p3/1PP5/P6P/1K6 b - - 0 35",
          dest: {
            from: "c2",
            to: "c3",
          },
        },
        {
          move: "bxc3",
          fen: "5b2/2k2P2/p6r/5R1p/2N1p3/1Pp5/P6P/1K6 w - - 0 36",
          dest: {
            from: "b4",
            to: "c3",
          },
        },
        {
          move: "Kc2",
          fen: "5b2/2k2P2/p6r/5R1p/2N1p3/1Pp5/P1K4P/8 b - - 1 36",
          dest: {
            from: "b1",
            to: "c2",
          },
        },
        {
          move: "Kd7",
          fen: "5b2/3k1P2/p6r/5R1p/2N1p3/1Pp5/P1K4P/8 w - - 2 37",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "b3",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 31",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rf8",
          fen: "5rR1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 33",
          dest: {
            from: "d8",
            to: "f8",
          },
        },
        {
          move: "Rf4",
          fen: "5rR1/2k2P2/p6r/2b4p/1pN1pR2/1P6/P1P4P/1K6 b - - 2 33",
          dest: {
            from: "f2",
            to: "f4",
          },
        },
        {
          move: "Rh7",
          fen: "5rR1/2k2P1r/p7/2b4p/1pN1pR2/1P6/P1P4P/1K6 w - - 3 34",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Ne5",
          fen: "5rR1/2k2P1r/p7/2b1N2p/1p2pR2/1P6/P1P4P/1K6 b - - 4 34",
          dest: {
            from: "c4",
            to: "e5",
          },
        },
        {
          move: "e3",
          fen: "5rR1/2k2P1r/p7/2b1N2p/1p3R2/1P2p3/P1P4P/1K6 w - - 0 35",
          dest: {
            from: "e4",
            to: "e3",
          },
        },
        {
          move: "Rg6",
          fen: "5r2/2k2P1r/p5R1/2b1N2p/1p3R2/1P2p3/P1P4P/1K6 b - - 1 35",
          dest: {
            from: "g8",
            to: "g6",
          },
        },
      ],
    },
    {
      move: "Rg6",
      moveFen: "r2k1b2/5B2/p2p1PRr/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
      dest: {
        from: "g7",
        to: "g6",
      },
      evalBefore: "+1.26",
      evalAfter: "+0.72",
      bestMovesBefore: [
        {
          move: "Rg8",
          fen: "r2k1bR1/5B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 b - - 2 26",
          dest: {
            from: "g7",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Bg6",
          fen: "r4bR1/2k5/p2p1PBr/N6p/1p6/5b2/PPPR3P/1K6 b - - 4 27",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf2",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p6/5b2/PPP2R1P/1K6 b - - 1 28",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Be4",
          fen: "r4bR1/2k5/p4PBr/N2p3p/1p2b3/8/PPP2R1P/1K6 w - - 2 29",
          dest: {
            from: "f3",
            to: "e4",
          },
        },
        {
          move: "Bxe4",
          fen: "r4bR1/2k5/p4P1r/N2p3p/1p2B3/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "dxe4",
          fen: "r4bR1/2k5/p4P1r/N6p/1p2p3/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d5",
            to: "e4",
          },
        },
        {
          move: "Nc4",
          fen: "r4bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 b - - 1 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/8/PPP2R1P/1K6 w - - 2 31",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "b3",
          fen: "3r1bR1/2k5/p4P1r/7p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 31",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
        {
          move: "Bc5",
          fen: "3r2R1/2k5/p4P1r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 32",
          dest: {
            from: "f8",
            to: "c5",
          },
        },
        {
          move: "f7",
          fen: "3r2R1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rf8",
          fen: "5rR1/2k2P2/p6r/2b4p/1pN1p3/1P6/P1P2R1P/1K6 w - - 1 33",
          dest: {
            from: "d8",
            to: "f8",
          },
        },
        {
          move: "Rf4",
          fen: "5rR1/2k2P2/p6r/2b4p/1pN1pR2/1P6/P1P4P/1K6 b - - 2 33",
          dest: {
            from: "f2",
            to: "f4",
          },
        },
        {
          move: "Rh7",
          fen: "5rR1/2k2P1r/p7/2b4p/1pN1pR2/1P6/P1P4P/1K6 w - - 3 34",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Ne5",
          fen: "5rR1/2k2P1r/p7/2b1N2p/1p2pR2/1P6/P1P4P/1K6 b - - 4 34",
          dest: {
            from: "c4",
            to: "e5",
          },
        },
        {
          move: "e3",
          fen: "5rR1/2k2P1r/p7/2b1N2p/1p3R2/1P2p3/P1P4P/1K6 w - - 0 35",
          dest: {
            from: "e4",
            to: "e3",
          },
        },
        {
          move: "Rg6",
          fen: "5r2/2k2P1r/p5R1/2b1N2p/1p3R2/1P2p3/P1P4P/1K6 b - - 1 35",
          dest: {
            from: "g8",
            to: "g6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Ra7",
          fen: "3k1b2/r4B2/p2p1PRr/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "a8",
            to: "a7",
          },
        },
        {
          move: "Rxh6",
          fen: "3k1b2/r4B2/p2p1P1R/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 27",
          dest: {
            from: "g6",
            to: "h6",
          },
        },
        {
          move: "Bxh6",
          fen: "3k4/r4B2/p2p1P1b/N6p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Rxd6+",
          fen: "3k4/r4B2/p2R1P1b/N6p/1p6/5b2/PPP4P/1K6 b - - 0 28",
          dest: {
            from: "d2",
            to: "d6",
          },
        },
        {
          move: "Rd7",
          fen: "3k4/3r1B2/p2R1P1b/N6p/1p6/5b2/PPP4P/1K6 w - - 1 29",
          dest: {
            from: "a7",
            to: "d7",
          },
        },
        {
          move: "Rxd7+",
          fen: "3k4/3R1B2/p4P1b/N6p/1p6/5b2/PPP4P/1K6 b - - 0 29",
          dest: {
            from: "d6",
            to: "d7",
          },
        },
        {
          move: "Kxd7",
          fen: "8/3k1B2/p4P1b/N6p/1p6/5b2/PPP4P/1K6 w - - 0 30",
          dest: {
            from: "d8",
            to: "d7",
          },
        },
        {
          move: "h4",
          fen: "8/3k1B2/p4P1b/N6p/1p5P/5b2/PPP5/1K6 b - - 0 30",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "Bf4",
          fen: "8/3k1B2/p4P2/N6p/1p3b1P/5b2/PPP5/1K6 w - - 1 31",
          dest: {
            from: "h6",
            to: "f4",
          },
        },
        {
          move: "Nc4",
          fen: "8/3k1B2/p4P2/7p/1pN2b1P/5b2/PPP5/1K6 b - - 2 31",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Bg4",
          fen: "8/3k1B2/p4P2/7p/1pN2bbP/8/PPP5/1K6 w - - 3 32",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "Nb6+",
          fen: "8/3k1B2/pN3P2/7p/1p3bbP/8/PPP5/1K6 b - - 4 32",
          dest: {
            from: "c4",
            to: "b6",
          },
        },
        {
          move: "Kd6",
          fen: "8/5B2/pN1k1P2/7p/1p3bbP/8/PPP5/1K6 w - - 5 33",
          dest: {
            from: "d7",
            to: "d6",
          },
        },
        {
          move: "a3",
          fen: "8/5B2/pN1k1P2/7p/1p3bbP/P7/1PP5/1K6 b - - 0 33",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "bxa3",
          fen: "8/5B2/pN1k1P2/7p/5bbP/p7/1PP5/1K6 w - - 0 34",
          dest: {
            from: "b4",
            to: "a3",
          },
        },
        {
          move: "Nc4+",
          fen: "8/5B2/p2k1P2/7p/2N2bbP/p7/1PP5/1K6 b - - 1 34",
          dest: {
            from: "b6",
            to: "c4",
          },
        },
        {
          move: "Kd7",
          fen: "8/3k1B2/p4P2/7p/2N2bbP/p7/1PP5/1K6 w - - 2 35",
          dest: {
            from: "d6",
            to: "d7",
          },
        },
        {
          move: "Bd5",
          fen: "8/3k4/p4P2/3B3p/2N2bbP/p7/1PP5/1K6 b - - 3 35",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Ke8",
          fen: "4k3/8/p4P2/3B3p/2N2bbP/p7/1PP5/1K6 w - - 4 36",
          dest: {
            from: "d7",
            to: "e8",
          },
        },
        {
          move: "bxa3",
          fen: "4k3/8/p4P2/3B3p/2N2bbP/P7/2P5/1K6 b - - 0 36",
          dest: {
            from: "b2",
            to: "a3",
          },
        },
        {
          move: "Bg3",
          fen: "4k3/8/p4P2/3B3p/2N3bP/P5b1/2P5/1K6 w - - 1 37",
          dest: {
            from: "f4",
            to: "g3",
          },
        },
      ],
    },
    {
      move: "Kc7",
      moveFen: "r4b2/2k2B2/p2p1PRr/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
      dest: {
        from: "d8",
        to: "c7",
      },
      evalBefore: "+0.72",
      evalAfter: "+0.82",
      bestMovesBefore: [
        {
          move: "Ra7",
          fen: "3k1b2/r4B2/p2p1PRr/N6p/1p6/5b2/PPPR3P/1K6 w - - 3 27",
          dest: {
            from: "a8",
            to: "a7",
          },
        },
        {
          move: "Rxh6",
          fen: "3k1b2/r4B2/p2p1P1R/N6p/1p6/5b2/PPPR3P/1K6 b - - 0 27",
          dest: {
            from: "g6",
            to: "h6",
          },
        },
        {
          move: "Bxh6",
          fen: "3k4/r4B2/p2p1P1b/N6p/1p6/5b2/PPPR3P/1K6 w - - 0 28",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Rxd6+",
          fen: "3k4/r4B2/p2R1P1b/N6p/1p6/5b2/PPP4P/1K6 b - - 0 28",
          dest: {
            from: "d2",
            to: "d6",
          },
        },
        {
          move: "Rd7",
          fen: "3k4/3r1B2/p2R1P1b/N6p/1p6/5b2/PPP4P/1K6 w - - 1 29",
          dest: {
            from: "a7",
            to: "d7",
          },
        },
        {
          move: "Rxd7+",
          fen: "3k4/3R1B2/p4P1b/N6p/1p6/5b2/PPP4P/1K6 b - - 0 29",
          dest: {
            from: "d6",
            to: "d7",
          },
        },
        {
          move: "Kxd7",
          fen: "8/3k1B2/p4P1b/N6p/1p6/5b2/PPP4P/1K6 w - - 0 30",
          dest: {
            from: "d8",
            to: "d7",
          },
        },
        {
          move: "h4",
          fen: "8/3k1B2/p4P1b/N6p/1p5P/5b2/PPP5/1K6 b - - 0 30",
          dest: {
            from: "h2",
            to: "h4",
          },
        },
        {
          move: "Bf4",
          fen: "8/3k1B2/p4P2/N6p/1p3b1P/5b2/PPP5/1K6 w - - 1 31",
          dest: {
            from: "h6",
            to: "f4",
          },
        },
        {
          move: "Nc4",
          fen: "8/3k1B2/p4P2/7p/1pN2b1P/5b2/PPP5/1K6 b - - 2 31",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Bg4",
          fen: "8/3k1B2/p4P2/7p/1pN2bbP/8/PPP5/1K6 w - - 3 32",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "Nb6+",
          fen: "8/3k1B2/pN3P2/7p/1p3bbP/8/PPP5/1K6 b - - 4 32",
          dest: {
            from: "c4",
            to: "b6",
          },
        },
        {
          move: "Kd6",
          fen: "8/5B2/pN1k1P2/7p/1p3bbP/8/PPP5/1K6 w - - 5 33",
          dest: {
            from: "d7",
            to: "d6",
          },
        },
        {
          move: "a3",
          fen: "8/5B2/pN1k1P2/7p/1p3bbP/P7/1PP5/1K6 b - - 0 33",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "bxa3",
          fen: "8/5B2/pN1k1P2/7p/5bbP/p7/1PP5/1K6 w - - 0 34",
          dest: {
            from: "b4",
            to: "a3",
          },
        },
        {
          move: "Nc4+",
          fen: "8/5B2/p2k1P2/7p/2N2bbP/p7/1PP5/1K6 b - - 1 34",
          dest: {
            from: "b6",
            to: "c4",
          },
        },
        {
          move: "Kd7",
          fen: "8/3k1B2/p4P2/7p/2N2bbP/p7/1PP5/1K6 w - - 2 35",
          dest: {
            from: "d6",
            to: "d7",
          },
        },
        {
          move: "Bd5",
          fen: "8/3k4/p4P2/3B3p/2N2bbP/p7/1PP5/1K6 b - - 3 35",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Ke8",
          fen: "4k3/8/p4P2/3B3p/2N2bbP/p7/1PP5/1K6 w - - 4 36",
          dest: {
            from: "d7",
            to: "e8",
          },
        },
        {
          move: "bxa3",
          fen: "4k3/8/p4P2/3B3p/2N2bbP/P7/2P5/1K6 b - - 0 36",
          dest: {
            from: "b2",
            to: "a3",
          },
        },
        {
          move: "Bg3",
          fen: "4k3/8/p4P2/3B3p/2N3bP/P5b1/2P5/1K6 w - - 1 37",
          dest: {
            from: "f4",
            to: "g3",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rf2",
          fen: "r4b2/2k2B2/p2p1PRr/N6p/1p6/5b2/PPP2R1P/1K6 b - - 4 27",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Rxg6",
          fen: "r4b2/2k2B2/p2p1Pr1/N6p/1p6/5b2/PPP2R1P/1K6 w - - 0 28",
          dest: {
            from: "h6",
            to: "g6",
          },
        },
        {
          move: "Bxg6",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p6/5b2/PPP2R1P/1K6 b - - 0 28",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Bg4",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p4b1/8/PPP2R1P/1K6 w - - 1 29",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "f7",
          fen: "r4b2/2k2P2/p2p2B1/N6p/1p4b1/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "d5",
          fen: "r4b2/2k2P2/p5B1/N2p3p/1p4b1/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf1",
          fen: "r4b2/2k2P2/p5B1/N2p3p/1p4b1/8/PPP4P/1K3R2 b - - 1 30",
          dest: {
            from: "f2",
            to: "f1",
          },
        },
        {
          move: "Rb8",
          fen: "1r3b2/2k2P2/p5B1/N2p3p/1p4b1/8/PPP4P/1K3R2 w - - 2 31",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Nb3",
          fen: "1r3b2/2k2P2/p5B1/3p3p/1p4b1/1N6/PPP4P/1K3R2 b - - 3 31",
          dest: {
            from: "a5",
            to: "b3",
          },
        },
        {
          move: "Rb6",
          fen: "5b2/2k2P2/pr4B1/3p3p/1p4b1/1N6/PPP4P/1K3R2 w - - 4 32",
          dest: {
            from: "b8",
            to: "b6",
          },
        },
        {
          move: "Bd3",
          fen: "5b2/2k2P2/pr6/3p3p/1p4b1/1N1B4/PPP4P/1K3R2 b - - 5 32",
          dest: {
            from: "g6",
            to: "d3",
          },
        },
        {
          move: "Bh3",
          fen: "5b2/2k2P2/pr6/3p3p/1p6/1N1B3b/PPP4P/1K3R2 w - - 6 33",
          dest: {
            from: "g4",
            to: "h3",
          },
        },
        {
          move: "Rf4",
          fen: "5b2/2k2P2/pr6/3p3p/1p3R2/1N1B3b/PPP4P/1K6 b - - 7 33",
          dest: {
            from: "f1",
            to: "f4",
          },
        },
        {
          move: "Re6",
          fen: "5b2/2k2P2/p3r3/3p3p/1p3R2/1N1B3b/PPP4P/1K6 w - - 8 34",
          dest: {
            from: "b6",
            to: "e6",
          },
        },
        {
          move: "c4",
          fen: "5b2/2k2P2/p3r3/3p3p/1pP2R2/1N1B3b/PP5P/1K6 b - c3 0 34",
          dest: {
            from: "c2",
            to: "c4",
          },
        },
        {
          move: "bxc3",
          fen: "5b2/2k2P2/p3r3/3p3p/5R2/1NpB3b/PP5P/1K6 w - - 0 35",
          dest: {
            from: "b4",
            to: "c3",
          },
        },
        {
          move: "bxc3",
          fen: "5b2/2k2P2/p3r3/3p3p/5R2/1NPB3b/P6P/1K6 b - - 0 35",
          dest: {
            from: "b2",
            to: "c3",
          },
        },
        {
          move: "Kd7",
          fen: "5b2/3k1P2/p3r3/3p3p/5R2/1NPB3b/P6P/1K6 w - - 1 36",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Kc2",
          fen: "5b2/3k1P2/p3r3/3p3p/5R2/1NPB3b/P1K4P/8 b - - 2 36",
          dest: {
            from: "b1",
            to: "c2",
          },
        },
        {
          move: "Ke7",
          fen: "5b2/4kP2/p3r3/3p3p/5R2/1NPB3b/P1K4P/8 w - - 3 37",
          dest: {
            from: "d7",
            to: "e7",
          },
        },
        {
          move: "Nd4",
          fen: "5b2/4kP2/p3r3/3p3p/3N1R2/2PB3b/P1K4P/8 b - - 4 37",
          dest: {
            from: "b3",
            to: "d4",
          },
        },
        {
          move: "Rf6",
          fen: "5b2/4kP2/p4r2/3p3p/3N1R2/2PB3b/P1K4P/8 w - - 5 38",
          dest: {
            from: "e6",
            to: "f6",
          },
        },
        {
          move: "Rxf6",
          fen: "5b2/4kP2/p4R2/3p3p/3N4/2PB3b/P1K4P/8 b - - 0 38",
          dest: {
            from: "f4",
            to: "f6",
          },
        },
        {
          move: "Kxf6",
          fen: "5b2/5P2/p4k2/3p3p/3N4/2PB3b/P1K4P/8 w - - 0 39",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
      ],
    },
    {
      move: "Rf2",
      moveFen: "r4b2/2k2B2/p2p1PRr/N6p/1p6/5b2/PPP2R1P/1K6 b - - 4 27",
      dest: {
        from: "d2",
        to: "f2",
      },
      evalBefore: "+0.82",
      evalAfter: "+0.86",
      bestMovesBefore: [
        {
          move: "Rf2",
          fen: "r4b2/2k2B2/p2p1PRr/N6p/1p6/5b2/PPP2R1P/1K6 b - - 4 27",
          dest: {
            from: "d2",
            to: "f2",
          },
        },
        {
          move: "Rxg6",
          fen: "r4b2/2k2B2/p2p1Pr1/N6p/1p6/5b2/PPP2R1P/1K6 w - - 0 28",
          dest: {
            from: "h6",
            to: "g6",
          },
        },
        {
          move: "Bxg6",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p6/5b2/PPP2R1P/1K6 b - - 0 28",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Bg4",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p4b1/8/PPP2R1P/1K6 w - - 1 29",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "f7",
          fen: "r4b2/2k2P2/p2p2B1/N6p/1p4b1/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "d5",
          fen: "r4b2/2k2P2/p5B1/N2p3p/1p4b1/8/PPP2R1P/1K6 w - - 0 30",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Rf1",
          fen: "r4b2/2k2P2/p5B1/N2p3p/1p4b1/8/PPP4P/1K3R2 b - - 1 30",
          dest: {
            from: "f2",
            to: "f1",
          },
        },
        {
          move: "Rb8",
          fen: "1r3b2/2k2P2/p5B1/N2p3p/1p4b1/8/PPP4P/1K3R2 w - - 2 31",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Nb3",
          fen: "1r3b2/2k2P2/p5B1/3p3p/1p4b1/1N6/PPP4P/1K3R2 b - - 3 31",
          dest: {
            from: "a5",
            to: "b3",
          },
        },
        {
          move: "Rb6",
          fen: "5b2/2k2P2/pr4B1/3p3p/1p4b1/1N6/PPP4P/1K3R2 w - - 4 32",
          dest: {
            from: "b8",
            to: "b6",
          },
        },
        {
          move: "Bd3",
          fen: "5b2/2k2P2/pr6/3p3p/1p4b1/1N1B4/PPP4P/1K3R2 b - - 5 32",
          dest: {
            from: "g6",
            to: "d3",
          },
        },
        {
          move: "Bh3",
          fen: "5b2/2k2P2/pr6/3p3p/1p6/1N1B3b/PPP4P/1K3R2 w - - 6 33",
          dest: {
            from: "g4",
            to: "h3",
          },
        },
        {
          move: "Rf4",
          fen: "5b2/2k2P2/pr6/3p3p/1p3R2/1N1B3b/PPP4P/1K6 b - - 7 33",
          dest: {
            from: "f1",
            to: "f4",
          },
        },
        {
          move: "Re6",
          fen: "5b2/2k2P2/p3r3/3p3p/1p3R2/1N1B3b/PPP4P/1K6 w - - 8 34",
          dest: {
            from: "b6",
            to: "e6",
          },
        },
        {
          move: "c4",
          fen: "5b2/2k2P2/p3r3/3p3p/1pP2R2/1N1B3b/PP5P/1K6 b - c3 0 34",
          dest: {
            from: "c2",
            to: "c4",
          },
        },
        {
          move: "bxc3",
          fen: "5b2/2k2P2/p3r3/3p3p/5R2/1NpB3b/PP5P/1K6 w - - 0 35",
          dest: {
            from: "b4",
            to: "c3",
          },
        },
        {
          move: "bxc3",
          fen: "5b2/2k2P2/p3r3/3p3p/5R2/1NPB3b/P6P/1K6 b - - 0 35",
          dest: {
            from: "b2",
            to: "c3",
          },
        },
        {
          move: "Kd7",
          fen: "5b2/3k1P2/p3r3/3p3p/5R2/1NPB3b/P6P/1K6 w - - 1 36",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Kc2",
          fen: "5b2/3k1P2/p3r3/3p3p/5R2/1NPB3b/P1K4P/8 b - - 2 36",
          dest: {
            from: "b1",
            to: "c2",
          },
        },
        {
          move: "Ke7",
          fen: "5b2/4kP2/p3r3/3p3p/5R2/1NPB3b/P1K4P/8 w - - 3 37",
          dest: {
            from: "d7",
            to: "e7",
          },
        },
        {
          move: "Nd4",
          fen: "5b2/4kP2/p3r3/3p3p/3N1R2/2PB3b/P1K4P/8 b - - 4 37",
          dest: {
            from: "b3",
            to: "d4",
          },
        },
        {
          move: "Rf6",
          fen: "5b2/4kP2/p4r2/3p3p/3N1R2/2PB3b/P1K4P/8 w - - 5 38",
          dest: {
            from: "e6",
            to: "f6",
          },
        },
        {
          move: "Rxf6",
          fen: "5b2/4kP2/p4R2/3p3p/3N4/2PB3b/P1K4P/8 b - - 0 38",
          dest: {
            from: "f4",
            to: "f6",
          },
        },
        {
          move: "Kxf6",
          fen: "5b2/5P2/p4k2/3p3p/3N4/2PB3b/P1K4P/8 w - - 0 39",
          dest: {
            from: "e7",
            to: "f6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rxg6",
          fen: "r4b2/2k2B2/p2p1Pr1/N6p/1p6/5b2/PPP2R1P/1K6 w - - 0 28",
          dest: {
            from: "h6",
            to: "g6",
          },
        },
        {
          move: "Bxg6",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p6/5b2/PPP2R1P/1K6 b - - 0 28",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Bg4",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p4b1/8/PPP2R1P/1K6 w - - 1 29",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "f7",
          fen: "r4b2/2k2P2/p2p2B1/N6p/1p4b1/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rb8",
          fen: "1r3b2/2k2P2/p2p2B1/N6p/1p4b1/8/PPP2R1P/1K6 w - - 1 30",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Rf6",
          fen: "1r3b2/2k2P2/p2p1RB1/N6p/1p4b1/8/PPP4P/1K6 b - - 2 30",
          dest: {
            from: "f2",
            to: "f6",
          },
        },
        {
          move: "Be7",
          fen: "1r6/2k1bP2/p2p1RB1/N6p/1p4b1/8/PPP4P/1K6 w - - 3 31",
          dest: {
            from: "f8",
            to: "e7",
          },
        },
        {
          move: "Rf1",
          fen: "1r6/2k1bP2/p2p2B1/N6p/1p4b1/8/PPP4P/1K3R2 b - - 4 31",
          dest: {
            from: "f6",
            to: "f1",
          },
        },
        {
          move: "Kd7",
          fen: "1r6/3kbP2/p2p2B1/N6p/1p4b1/8/PPP4P/1K3R2 w - - 5 32",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Bf5+",
          fen: "1r6/3kbP2/p2p4/N4B1p/1p4b1/8/PPP4P/1K3R2 b - - 6 32",
          dest: {
            from: "g6",
            to: "f5",
          },
        },
        {
          move: "Bxf5",
          fen: "1r6/3kbP2/p2p4/N4b1p/1p6/8/PPP4P/1K3R2 w - - 0 33",
          dest: {
            from: "g4",
            to: "f5",
          },
        },
        {
          move: "Rxf5",
          fen: "1r6/3kbP2/p2p4/N4R1p/1p6/8/PPP4P/1K6 b - - 0 33",
          dest: {
            from: "f1",
            to: "f5",
          },
        },
        {
          move: "Ke6",
          fen: "1r6/4bP2/p2pk3/N4R1p/1p6/8/PPP4P/1K6 w - - 1 34",
          dest: {
            from: "d7",
            to: "e6",
          },
        },
      ],
    },
    {
      move: "Bg4",
      moveFen: "r4b2/2k2B2/p2p1PRr/N6p/1p4b1/8/PPP2R1P/1K6 w - - 5 28",
      dest: {
        from: "f3",
        to: "g4",
      },
      evalBefore: "+0.86",
      evalAfter: "+1.81",
      bestMovesBefore: [
        {
          move: "Rxg6",
          fen: "r4b2/2k2B2/p2p1Pr1/N6p/1p6/5b2/PPP2R1P/1K6 w - - 0 28",
          dest: {
            from: "h6",
            to: "g6",
          },
        },
        {
          move: "Bxg6",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p6/5b2/PPP2R1P/1K6 b - - 0 28",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Bg4",
          fen: "r4b2/2k5/p2p1PB1/N6p/1p4b1/8/PPP2R1P/1K6 w - - 1 29",
          dest: {
            from: "f3",
            to: "g4",
          },
        },
        {
          move: "f7",
          fen: "r4b2/2k2P2/p2p2B1/N6p/1p4b1/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rb8",
          fen: "1r3b2/2k2P2/p2p2B1/N6p/1p4b1/8/PPP2R1P/1K6 w - - 1 30",
          dest: {
            from: "a8",
            to: "b8",
          },
        },
        {
          move: "Rf6",
          fen: "1r3b2/2k2P2/p2p1RB1/N6p/1p4b1/8/PPP4P/1K6 b - - 2 30",
          dest: {
            from: "f2",
            to: "f6",
          },
        },
        {
          move: "Be7",
          fen: "1r6/2k1bP2/p2p1RB1/N6p/1p4b1/8/PPP4P/1K6 w - - 3 31",
          dest: {
            from: "f8",
            to: "e7",
          },
        },
        {
          move: "Rf1",
          fen: "1r6/2k1bP2/p2p2B1/N6p/1p4b1/8/PPP4P/1K3R2 b - - 4 31",
          dest: {
            from: "f6",
            to: "f1",
          },
        },
        {
          move: "Kd7",
          fen: "1r6/3kbP2/p2p2B1/N6p/1p4b1/8/PPP4P/1K3R2 w - - 5 32",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Bf5+",
          fen: "1r6/3kbP2/p2p4/N4B1p/1p4b1/8/PPP4P/1K3R2 b - - 6 32",
          dest: {
            from: "g6",
            to: "f5",
          },
        },
        {
          move: "Bxf5",
          fen: "1r6/3kbP2/p2p4/N4b1p/1p6/8/PPP4P/1K3R2 w - - 0 33",
          dest: {
            from: "g4",
            to: "f5",
          },
        },
        {
          move: "Rxf5",
          fen: "1r6/3kbP2/p2p4/N4R1p/1p6/8/PPP4P/1K6 b - - 0 33",
          dest: {
            from: "f1",
            to: "f5",
          },
        },
        {
          move: "Ke6",
          fen: "1r6/4bP2/p2pk3/N4R1p/1p6/8/PPP4P/1K6 w - - 1 34",
          dest: {
            from: "d7",
            to: "e6",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg8",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p4b1/8/PPP2R1P/1K6 b - - 6 28",
          dest: {
            from: "g6",
            to: "g8",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k2B2/p4P1r/N2p3p/1p4b1/8/PPP2R1P/1K6 w - - 0 29",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Bxd5",
          fen: "r4bR1/2k5/p4P1r/N2B3p/1p4b1/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/N2B3p/1p4b1/8/PPP2R1P/1K6 w - - 1 30",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "b3",
          fen: "3r1bR1/2k5/p4P1r/N2B3p/1p4b1/1P6/P1P2R1P/1K6 b - - 0 30",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
        {
          move: "Rh7",
          fen: "3r1bR1/2k4r/p4P2/N2B3p/1p4b1/1P6/P1P2R1P/1K6 w - - 1 31",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "f7",
          fen: "3r1bR1/2k2P1r/p7/N2B3p/1p4b1/1P6/P1P2R1P/1K6 b - - 0 31",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rh6",
          fen: "3r1bR1/2k2P2/p6r/N2B3p/1p4b1/1P6/P1P2R1P/1K6 w - - 1 32",
          dest: {
            from: "h7",
            to: "h6",
          },
        },
        {
          move: "Kb2",
          fen: "3r1bR1/2k2P2/p6r/N2B3p/1p4b1/1P6/PKP2R1P/8 b - - 2 32",
          dest: {
            from: "b1",
            to: "b2",
          },
        },
        {
          move: "Rhd6",
          fen: "3r1bR1/2k2P2/p2r4/N2B3p/1p4b1/1P6/PKP2R1P/8 w - - 3 33",
          dest: {
            from: "h6",
            to: "d6",
          },
        },
        {
          move: "Bc4",
          fen: "3r1bR1/2k2P2/p2r4/N6p/1pB3b1/1P6/PKP2R1P/8 b - - 4 33",
          dest: {
            from: "d5",
            to: "c4",
          },
        },
        {
          move: "Rb6",
          fen: "3r1bR1/2k2P2/pr6/N6p/1pB3b1/1P6/PKP2R1P/8 w - - 5 34",
          dest: {
            from: "d6",
            to: "b6",
          },
        },
        {
          move: "Rf4",
          fen: "3r1bR1/2k2P2/pr6/N6p/1pB2Rb1/1P6/PKP4P/8 b - - 6 34",
          dest: {
            from: "f2",
            to: "f4",
          },
        },
        {
          move: "Rbd6",
          fen: "3r1bR1/2k2P2/p2r4/N6p/1pB2Rb1/1P6/PKP4P/8 w - - 7 35",
          dest: {
            from: "b6",
            to: "d6",
          },
        },
        {
          move: "Bd3",
          fen: "3r1bR1/2k2P2/p2r4/N6p/1p3Rb1/1P1B4/PKP4P/8 b - - 8 35",
          dest: {
            from: "c4",
            to: "d3",
          },
        },
        {
          move: "Re6",
          fen: "3r1bR1/2k2P2/p3r3/N6p/1p3Rb1/1P1B4/PKP4P/8 w - - 9 36",
          dest: {
            from: "d6",
            to: "e6",
          },
        },
        {
          move: "Rg5",
          fen: "3r1b2/2k2P2/p3r3/N5Rp/1p3Rb1/1P1B4/PKP4P/8 b - - 10 36",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
      ],
    },
    {
      move: "Rg5",
      moveFen: "r4b2/2k2B2/p2p1P1r/N5Rp/1p4b1/8/PPP2R1P/1K6 b - - 6 28",
      dest: {
        from: "g6",
        to: "g5",
      },
      evalBefore: "+1.81",
      evalAfter: "+1.18",
      bestMovesBefore: [
        {
          move: "Rg8",
          fen: "r4bR1/2k2B2/p2p1P1r/N6p/1p4b1/8/PPP2R1P/1K6 b - - 6 28",
          dest: {
            from: "g6",
            to: "g8",
          },
        },
        {
          move: "d5",
          fen: "r4bR1/2k2B2/p4P1r/N2p3p/1p4b1/8/PPP2R1P/1K6 w - - 0 29",
          dest: {
            from: "d6",
            to: "d5",
          },
        },
        {
          move: "Bxd5",
          fen: "r4bR1/2k5/p4P1r/N2B3p/1p4b1/8/PPP2R1P/1K6 b - - 0 29",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Rd8",
          fen: "3r1bR1/2k5/p4P1r/N2B3p/1p4b1/8/PPP2R1P/1K6 w - - 1 30",
          dest: {
            from: "a8",
            to: "d8",
          },
        },
        {
          move: "b3",
          fen: "3r1bR1/2k5/p4P1r/N2B3p/1p4b1/1P6/P1P2R1P/1K6 b - - 0 30",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
        {
          move: "Rh7",
          fen: "3r1bR1/2k4r/p4P2/N2B3p/1p4b1/1P6/P1P2R1P/1K6 w - - 1 31",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "f7",
          fen: "3r1bR1/2k2P1r/p7/N2B3p/1p4b1/1P6/P1P2R1P/1K6 b - - 0 31",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rh6",
          fen: "3r1bR1/2k2P2/p6r/N2B3p/1p4b1/1P6/P1P2R1P/1K6 w - - 1 32",
          dest: {
            from: "h7",
            to: "h6",
          },
        },
        {
          move: "Kb2",
          fen: "3r1bR1/2k2P2/p6r/N2B3p/1p4b1/1P6/PKP2R1P/8 b - - 2 32",
          dest: {
            from: "b1",
            to: "b2",
          },
        },
        {
          move: "Rhd6",
          fen: "3r1bR1/2k2P2/p2r4/N2B3p/1p4b1/1P6/PKP2R1P/8 w - - 3 33",
          dest: {
            from: "h6",
            to: "d6",
          },
        },
        {
          move: "Bc4",
          fen: "3r1bR1/2k2P2/p2r4/N6p/1pB3b1/1P6/PKP2R1P/8 b - - 4 33",
          dest: {
            from: "d5",
            to: "c4",
          },
        },
        {
          move: "Rb6",
          fen: "3r1bR1/2k2P2/pr6/N6p/1pB3b1/1P6/PKP2R1P/8 w - - 5 34",
          dest: {
            from: "d6",
            to: "b6",
          },
        },
        {
          move: "Rf4",
          fen: "3r1bR1/2k2P2/pr6/N6p/1pB2Rb1/1P6/PKP4P/8 b - - 6 34",
          dest: {
            from: "f2",
            to: "f4",
          },
        },
        {
          move: "Rbd6",
          fen: "3r1bR1/2k2P2/p2r4/N6p/1pB2Rb1/1P6/PKP4P/8 w - - 7 35",
          dest: {
            from: "b6",
            to: "d6",
          },
        },
        {
          move: "Bd3",
          fen: "3r1bR1/2k2P2/p2r4/N6p/1p3Rb1/1P1B4/PKP4P/8 b - - 8 35",
          dest: {
            from: "c4",
            to: "d3",
          },
        },
        {
          move: "Re6",
          fen: "3r1bR1/2k2P2/p3r3/N6p/1p3Rb1/1P1B4/PKP4P/8 w - - 9 36",
          dest: {
            from: "d6",
            to: "e6",
          },
        },
        {
          move: "Rg5",
          fen: "3r1b2/2k2P2/p3r3/N5Rp/1p3Rb1/1P1B4/PKP4P/8 b - - 10 36",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rh7",
          fen: "r4b2/2k2B1r/p2p1P2/N5Rp/1p4b1/8/PPP2R1P/1K6 w - - 7 29",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Bg6",
          fen: "r4b2/2k4r/p2p1PB1/N5Rp/1p4b1/8/PPP2R1P/1K6 b - - 8 29",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Rh8",
          fen: "r4b1r/2k5/p2p1PB1/N5Rp/1p4b1/8/PPP2R1P/1K6 w - - 9 30",
          dest: {
            from: "h7",
            to: "h8",
          },
        },
        {
          move: "Rf1",
          fen: "r4b1r/2k5/p2p1PB1/N5Rp/1p4b1/8/PPP4P/1K3R2 b - - 10 30",
          dest: {
            from: "f2",
            to: "f1",
          },
        },
        {
          move: "Bh6",
          fen: "r6r/2k5/p2p1PBb/N5Rp/1p4b1/8/PPP4P/1K3R2 w - - 11 31",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Rd5",
          fen: "r6r/2k5/p2p1PBb/N2R3p/1p4b1/8/PPP4P/1K3R2 b - - 12 31",
          dest: {
            from: "g5",
            to: "d5",
          },
        },
        {
          move: "Rag8",
          fen: "6rr/2k5/p2p1PBb/N2R3p/1p4b1/8/PPP4P/1K3R2 w - - 13 32",
          dest: {
            from: "a8",
            to: "g8",
          },
        },
        {
          move: "Bf5",
          fen: "6rr/2k5/p2p1P1b/N2R1B1p/1p4b1/8/PPP4P/1K3R2 b - - 14 32",
          dest: {
            from: "g6",
            to: "f5",
          },
        },
        {
          move: "Bf3",
          fen: "6rr/2k5/p2p1P1b/N2R1B1p/1p6/5b2/PPP4P/1K3R2 w - - 15 33",
          dest: {
            from: "g4",
            to: "f3",
          },
        },
        {
          move: "Rd4",
          fen: "6rr/2k5/p2p1P1b/N4B1p/1p1R4/5b2/PPP4P/1K3R2 b - - 16 33",
          dest: {
            from: "d5",
            to: "d4",
          },
        },
        {
          move: "Be2",
          fen: "6rr/2k5/p2p1P1b/N4B1p/1p1R4/8/PPP1b2P/1K3R2 w - - 17 34",
          dest: {
            from: "f3",
            to: "e2",
          },
        },
        {
          move: "Re1",
          fen: "6rr/2k5/p2p1P1b/N4B1p/1p1R4/8/PPP1b2P/1K2R3 b - - 18 34",
          dest: {
            from: "f1",
            to: "e1",
          },
        },
        {
          move: "Rg5",
          fen: "7r/2k5/p2p1P1b/N4Brp/1p1R4/8/PPP1b2P/1K2R3 w - - 19 35",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
        {
          move: "Bh3",
          fen: "7r/2k5/p2p1P1b/N5rp/1p1R4/7B/PPP1b2P/1K2R3 b - - 20 35",
          dest: {
            from: "f5",
            to: "h3",
          },
        },
        {
          move: "Rf8",
          fen: "5r2/2k5/p2p1P1b/N5rp/1p1R4/7B/PPP1b2P/1K2R3 w - - 21 36",
          dest: {
            from: "h8",
            to: "f8",
          },
        },
        {
          move: "Rxb4",
          fen: "5r2/2k5/p2p1P1b/N5rp/1R6/7B/PPP1b2P/1K2R3 b - - 0 36",
          dest: {
            from: "d4",
            to: "b4",
          },
        },
        {
          move: "Rxa5",
          fen: "5r2/2k5/p2p1P1b/r6p/1R6/7B/PPP1b2P/1K2R3 w - - 0 37",
          dest: {
            from: "g5",
            to: "a5",
          },
        },
        {
          move: "Rxe2",
          fen: "5r2/2k5/p2p1P1b/r6p/1R6/7B/PPP1R2P/1K6 b - - 0 37",
          dest: {
            from: "e1",
            to: "e2",
          },
        },
        {
          move: "Re5",
          fen: "5r2/2k5/p2p1P1b/4r2p/1R6/7B/PPP1R2P/1K6 w - - 1 38",
          dest: {
            from: "a5",
            to: "e5",
          },
        },
        {
          move: "Rc4+",
          fen: "5r2/2k5/p2p1P1b/4r2p/2R5/7B/PPP1R2P/1K6 b - - 2 38",
          dest: {
            from: "b4",
            to: "c4",
          },
        },
        {
          move: "Kb6",
          fen: "5r2/8/pk1p1P1b/4r2p/2R5/7B/PPP1R2P/1K6 w - - 3 39",
          dest: {
            from: "c7",
            to: "b6",
          },
        },
        {
          move: "Rxe5",
          fen: "5r2/8/pk1p1P1b/4R2p/2R5/7B/PPP4P/1K6 b - - 0 39",
          dest: {
            from: "e2",
            to: "e5",
          },
        },
      ],
    },
    {
      move: "Rc8",
      moveFen: "2r2b2/2k2B2/p2p1P1r/N5Rp/1p4b1/8/PPP2R1P/1K6 w - - 7 29",
      dest: {
        from: "a8",
        to: "c8",
      },
      evalBefore: "+1.18",
      evalAfter: "+1.73",
      bestMovesBefore: [
        {
          move: "Rh7",
          fen: "r4b2/2k2B1r/p2p1P2/N5Rp/1p4b1/8/PPP2R1P/1K6 w - - 7 29",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Bg6",
          fen: "r4b2/2k4r/p2p1PB1/N5Rp/1p4b1/8/PPP2R1P/1K6 b - - 8 29",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Rh8",
          fen: "r4b1r/2k5/p2p1PB1/N5Rp/1p4b1/8/PPP2R1P/1K6 w - - 9 30",
          dest: {
            from: "h7",
            to: "h8",
          },
        },
        {
          move: "Rf1",
          fen: "r4b1r/2k5/p2p1PB1/N5Rp/1p4b1/8/PPP4P/1K3R2 b - - 10 30",
          dest: {
            from: "f2",
            to: "f1",
          },
        },
        {
          move: "Bh6",
          fen: "r6r/2k5/p2p1PBb/N5Rp/1p4b1/8/PPP4P/1K3R2 w - - 11 31",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Rd5",
          fen: "r6r/2k5/p2p1PBb/N2R3p/1p4b1/8/PPP4P/1K3R2 b - - 12 31",
          dest: {
            from: "g5",
            to: "d5",
          },
        },
        {
          move: "Rag8",
          fen: "6rr/2k5/p2p1PBb/N2R3p/1p4b1/8/PPP4P/1K3R2 w - - 13 32",
          dest: {
            from: "a8",
            to: "g8",
          },
        },
        {
          move: "Bf5",
          fen: "6rr/2k5/p2p1P1b/N2R1B1p/1p4b1/8/PPP4P/1K3R2 b - - 14 32",
          dest: {
            from: "g6",
            to: "f5",
          },
        },
        {
          move: "Bf3",
          fen: "6rr/2k5/p2p1P1b/N2R1B1p/1p6/5b2/PPP4P/1K3R2 w - - 15 33",
          dest: {
            from: "g4",
            to: "f3",
          },
        },
        {
          move: "Rd4",
          fen: "6rr/2k5/p2p1P1b/N4B1p/1p1R4/5b2/PPP4P/1K3R2 b - - 16 33",
          dest: {
            from: "d5",
            to: "d4",
          },
        },
        {
          move: "Be2",
          fen: "6rr/2k5/p2p1P1b/N4B1p/1p1R4/8/PPP1b2P/1K3R2 w - - 17 34",
          dest: {
            from: "f3",
            to: "e2",
          },
        },
        {
          move: "Re1",
          fen: "6rr/2k5/p2p1P1b/N4B1p/1p1R4/8/PPP1b2P/1K2R3 b - - 18 34",
          dest: {
            from: "f1",
            to: "e1",
          },
        },
        {
          move: "Rg5",
          fen: "7r/2k5/p2p1P1b/N4Brp/1p1R4/8/PPP1b2P/1K2R3 w - - 19 35",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
        {
          move: "Bh3",
          fen: "7r/2k5/p2p1P1b/N5rp/1p1R4/7B/PPP1b2P/1K2R3 b - - 20 35",
          dest: {
            from: "f5",
            to: "h3",
          },
        },
        {
          move: "Rf8",
          fen: "5r2/2k5/p2p1P1b/N5rp/1p1R4/7B/PPP1b2P/1K2R3 w - - 21 36",
          dest: {
            from: "h8",
            to: "f8",
          },
        },
        {
          move: "Rxb4",
          fen: "5r2/2k5/p2p1P1b/N5rp/1R6/7B/PPP1b2P/1K2R3 b - - 0 36",
          dest: {
            from: "d4",
            to: "b4",
          },
        },
        {
          move: "Rxa5",
          fen: "5r2/2k5/p2p1P1b/r6p/1R6/7B/PPP1b2P/1K2R3 w - - 0 37",
          dest: {
            from: "g5",
            to: "a5",
          },
        },
        {
          move: "Rxe2",
          fen: "5r2/2k5/p2p1P1b/r6p/1R6/7B/PPP1R2P/1K6 b - - 0 37",
          dest: {
            from: "e1",
            to: "e2",
          },
        },
        {
          move: "Re5",
          fen: "5r2/2k5/p2p1P1b/4r2p/1R6/7B/PPP1R2P/1K6 w - - 1 38",
          dest: {
            from: "a5",
            to: "e5",
          },
        },
        {
          move: "Rc4+",
          fen: "5r2/2k5/p2p1P1b/4r2p/2R5/7B/PPP1R2P/1K6 b - - 2 38",
          dest: {
            from: "b4",
            to: "c4",
          },
        },
        {
          move: "Kb6",
          fen: "5r2/8/pk1p1P1b/4r2p/2R5/7B/PPP1R2P/1K6 w - - 3 39",
          dest: {
            from: "c7",
            to: "b6",
          },
        },
        {
          move: "Rxe5",
          fen: "5r2/8/pk1p1P1b/4R2p/2R5/7B/PPP4P/1K6 b - - 0 39",
          dest: {
            from: "e2",
            to: "e5",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg8",
          fen: "2r2bR1/2k2B2/p2p1P1r/N6p/1p4b1/8/PPP2R1P/1K6 b - - 8 29",
          dest: {
            from: "g5",
            to: "g8",
          },
        },
        {
          move: "Kd7",
          fen: "2r2bR1/3k1B2/p2p1P1r/N6p/1p4b1/8/PPP2R1P/1K6 w - - 9 30",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Nc4",
          fen: "2r2bR1/3k1B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 b - - 10 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rb8",
          fen: "1r3bR1/3k1B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 w - - 11 31",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Nb6+",
          fen: "1r3bR1/3k1B2/pN1p1P1r/7p/1p4b1/8/PPP2R1P/1K6 b - - 12 31",
          dest: {
            from: "c4",
            to: "b6",
          },
        },
        {
          move: "Kc6",
          fen: "1r3bR1/5B2/pNkp1P1r/7p/1p4b1/8/PPP2R1P/1K6 w - - 13 32",
          dest: {
            from: "d7",
            to: "c6",
          },
        },
        {
          move: "Nd5",
          fen: "1r3bR1/5B2/p1kp1P1r/3N3p/1p4b1/8/PPP2R1P/1K6 b - - 14 32",
          dest: {
            from: "b6",
            to: "d5",
          },
        },
        {
          move: "Rh7",
          fen: "1r3bR1/5B1r/p1kp1P2/3N3p/1p4b1/8/PPP2R1P/1K6 w - - 15 33",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Bg6",
          fen: "1r3bR1/7r/p1kp1PB1/3N3p/1p4b1/8/PPP2R1P/1K6 b - - 16 33",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Rh6",
          fen: "1r3bR1/8/p1kp1PBr/3N3p/1p4b1/8/PPP2R1P/1K6 w - - 17 34",
          dest: {
            from: "h7",
            to: "h6",
          },
        },
        {
          move: "Be4",
          fen: "1r3bR1/8/p1kp1P1r/3N3p/1p2B1b1/8/PPP2R1P/1K6 b - - 18 34",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "Kd7",
          fen: "1r3bR1/3k4/p2p1P1r/3N3p/1p2B1b1/8/PPP2R1P/1K6 w - - 19 35",
          dest: {
            from: "c6",
            to: "d7",
          },
        },
        {
          move: "Rg5",
          fen: "1r3b2/3k4/p2p1P1r/3N2Rp/1p2B1b1/8/PPP2R1P/1K6 b - - 20 35",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
        {
          move: "Rh8",
          fen: "1r3b1r/3k4/p2p1P2/3N2Rp/1p2B1b1/8/PPP2R1P/1K6 w - - 21 36",
          dest: {
            from: "h6",
            to: "h8",
          },
        },
        {
          move: "Bf5+",
          fen: "1r3b1r/3k4/p2p1P2/3N1BRp/1p4b1/8/PPP2R1P/1K6 b - - 22 36",
          dest: {
            from: "e4",
            to: "f5",
          },
        },
        {
          move: "Kc6",
          fen: "1r3b1r/8/p1kp1P2/3N1BRp/1p4b1/8/PPP2R1P/1K6 w - - 23 37",
          dest: {
            from: "d7",
            to: "c6",
          },
        },
        {
          move: "Bxg4",
          fen: "1r3b1r/8/p1kp1P2/3N2Rp/1p4B1/8/PPP2R1P/1K6 b - - 0 37",
          dest: {
            from: "f5",
            to: "g4",
          },
        },
      ],
    },
    {
      move: "Nc4",
      moveFen: "2r2b2/2k2B2/p2p1P1r/6Rp/1pN3b1/8/PPP2R1P/1K6 b - - 8 29",
      dest: {
        from: "a5",
        to: "c4",
      },
      evalBefore: "+1.73",
      evalAfter: "+1.52",
      bestMovesBefore: [
        {
          move: "Rg8",
          fen: "2r2bR1/2k2B2/p2p1P1r/N6p/1p4b1/8/PPP2R1P/1K6 b - - 8 29",
          dest: {
            from: "g5",
            to: "g8",
          },
        },
        {
          move: "Kd7",
          fen: "2r2bR1/3k1B2/p2p1P1r/N6p/1p4b1/8/PPP2R1P/1K6 w - - 9 30",
          dest: {
            from: "c7",
            to: "d7",
          },
        },
        {
          move: "Nc4",
          fen: "2r2bR1/3k1B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 b - - 10 30",
          dest: {
            from: "a5",
            to: "c4",
          },
        },
        {
          move: "Rb8",
          fen: "1r3bR1/3k1B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 w - - 11 31",
          dest: {
            from: "c8",
            to: "b8",
          },
        },
        {
          move: "Nb6+",
          fen: "1r3bR1/3k1B2/pN1p1P1r/7p/1p4b1/8/PPP2R1P/1K6 b - - 12 31",
          dest: {
            from: "c4",
            to: "b6",
          },
        },
        {
          move: "Kc6",
          fen: "1r3bR1/5B2/pNkp1P1r/7p/1p4b1/8/PPP2R1P/1K6 w - - 13 32",
          dest: {
            from: "d7",
            to: "c6",
          },
        },
        {
          move: "Nd5",
          fen: "1r3bR1/5B2/p1kp1P1r/3N3p/1p4b1/8/PPP2R1P/1K6 b - - 14 32",
          dest: {
            from: "b6",
            to: "d5",
          },
        },
        {
          move: "Rh7",
          fen: "1r3bR1/5B1r/p1kp1P2/3N3p/1p4b1/8/PPP2R1P/1K6 w - - 15 33",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Bg6",
          fen: "1r3bR1/7r/p1kp1PB1/3N3p/1p4b1/8/PPP2R1P/1K6 b - - 16 33",
          dest: {
            from: "f7",
            to: "g6",
          },
        },
        {
          move: "Rh6",
          fen: "1r3bR1/8/p1kp1PBr/3N3p/1p4b1/8/PPP2R1P/1K6 w - - 17 34",
          dest: {
            from: "h7",
            to: "h6",
          },
        },
        {
          move: "Be4",
          fen: "1r3bR1/8/p1kp1P1r/3N3p/1p2B1b1/8/PPP2R1P/1K6 b - - 18 34",
          dest: {
            from: "g6",
            to: "e4",
          },
        },
        {
          move: "Kd7",
          fen: "1r3bR1/3k4/p2p1P1r/3N3p/1p2B1b1/8/PPP2R1P/1K6 w - - 19 35",
          dest: {
            from: "c6",
            to: "d7",
          },
        },
        {
          move: "Rg5",
          fen: "1r3b2/3k4/p2p1P1r/3N2Rp/1p2B1b1/8/PPP2R1P/1K6 b - - 20 35",
          dest: {
            from: "g8",
            to: "g5",
          },
        },
        {
          move: "Rh8",
          fen: "1r3b1r/3k4/p2p1P2/3N2Rp/1p2B1b1/8/PPP2R1P/1K6 w - - 21 36",
          dest: {
            from: "h6",
            to: "h8",
          },
        },
        {
          move: "Bf5+",
          fen: "1r3b1r/3k4/p2p1P2/3N1BRp/1p4b1/8/PPP2R1P/1K6 b - - 22 36",
          dest: {
            from: "e4",
            to: "f5",
          },
        },
        {
          move: "Kc6",
          fen: "1r3b1r/8/p1kp1P2/3N1BRp/1p4b1/8/PPP2R1P/1K6 w - - 23 37",
          dest: {
            from: "d7",
            to: "c6",
          },
        },
        {
          move: "Bxg4",
          fen: "1r3b1r/8/p1kp1P2/3N2Rp/1p4B1/8/PPP2R1P/1K6 b - - 0 37",
          dest: {
            from: "f5",
            to: "g4",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rh7",
          fen: "2r2b2/2k2B1r/p2p1P2/6Rp/1pN3b1/8/PPP2R1P/1K6 w - - 9 30",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Bg8",
          fen: "2r2bB1/2k4r/p2p1P2/6Rp/1pN3b1/8/PPP2R1P/1K6 b - - 10 30",
          dest: {
            from: "f7",
            to: "g8",
          },
        },
        {
          move: "Rh8",
          fen: "2r2bBr/2k5/p2p1P2/6Rp/1pN3b1/8/PPP2R1P/1K6 w - - 11 31",
          dest: {
            from: "h7",
            to: "h8",
          },
        },
        {
          move: "Bd5",
          fen: "2r2b1r/2k5/p2p1P2/3B2Rp/1pN3b1/8/PPP2R1P/1K6 b - - 12 31",
          dest: {
            from: "g8",
            to: "d5",
          },
        },
        {
          move: "Re8",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN3b1/8/PPP2R1P/1K6 w - - 13 32",
          dest: {
            from: "c8",
            to: "e8",
          },
        },
        {
          move: "Rf1",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN3b1/8/PPP4P/1K3R2 b - - 14 32",
          dest: {
            from: "f2",
            to: "f1",
          },
        },
        {
          move: "Be2",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN5/8/PPP1b2P/1K3R2 w - - 15 33",
          dest: {
            from: "g4",
            to: "e2",
          },
        },
        {
          move: "Rfg1",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN5/8/PPP1b2P/1K4R1 b - - 16 33",
          dest: {
            from: "f1",
            to: "g1",
          },
        },
        {
          move: "Bxc4",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pb5/8/PPP4P/1K4R1 w - - 0 34",
          dest: {
            from: "e2",
            to: "c4",
          },
        },
        {
          move: "Bxc4",
          fen: "4rb1r/2k5/p2p1P2/6Rp/1pB5/8/PPP4P/1K4R1 b - - 0 34",
          dest: {
            from: "d5",
            to: "c4",
          },
        },
        {
          move: "Rh6",
          fen: "4rb2/2k5/p2p1P1r/6Rp/1pB5/8/PPP4P/1K4R1 w - - 1 35",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "f7",
          fen: "4rb2/2k2P2/p2p3r/6Rp/1pB5/8/PPP4P/1K4R1 b - - 0 35",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Re4",
          fen: "5b2/2k2P2/p2p3r/6Rp/1pB1r3/8/PPP4P/1K4R1 w - - 1 36",
          dest: {
            from: "e8",
            to: "e4",
          },
        },
        {
          move: "Bxa6",
          fen: "5b2/2k2P2/B2p3r/6Rp/1p2r3/8/PPP4P/1K4R1 b - - 0 36",
          dest: {
            from: "c4",
            to: "a6",
          },
        },
        {
          move: "Rf4",
          fen: "5b2/2k2P2/B2p3r/6Rp/1p3r2/8/PPP4P/1K4R1 w - - 1 37",
          dest: {
            from: "e4",
            to: "f4",
          },
        },
      ],
    },
    {
      move: "Kd8",
      moveFen: "2rk1b2/5B2/p2p1P1r/6Rp/1pN3b1/8/PPP2R1P/1K6 w - - 9 30",
      dest: {
        from: "c7",
        to: "d8",
      },
      evalBefore: "+1.52",
      evalAfter: "+2.00",
      bestMovesBefore: [
        {
          move: "Rh7",
          fen: "2r2b2/2k2B1r/p2p1P2/6Rp/1pN3b1/8/PPP2R1P/1K6 w - - 9 30",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "Bg8",
          fen: "2r2bB1/2k4r/p2p1P2/6Rp/1pN3b1/8/PPP2R1P/1K6 b - - 10 30",
          dest: {
            from: "f7",
            to: "g8",
          },
        },
        {
          move: "Rh8",
          fen: "2r2bBr/2k5/p2p1P2/6Rp/1pN3b1/8/PPP2R1P/1K6 w - - 11 31",
          dest: {
            from: "h7",
            to: "h8",
          },
        },
        {
          move: "Bd5",
          fen: "2r2b1r/2k5/p2p1P2/3B2Rp/1pN3b1/8/PPP2R1P/1K6 b - - 12 31",
          dest: {
            from: "g8",
            to: "d5",
          },
        },
        {
          move: "Re8",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN3b1/8/PPP2R1P/1K6 w - - 13 32",
          dest: {
            from: "c8",
            to: "e8",
          },
        },
        {
          move: "Rf1",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN3b1/8/PPP4P/1K3R2 b - - 14 32",
          dest: {
            from: "f2",
            to: "f1",
          },
        },
        {
          move: "Be2",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN5/8/PPP1b2P/1K3R2 w - - 15 33",
          dest: {
            from: "g4",
            to: "e2",
          },
        },
        {
          move: "Rfg1",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pN5/8/PPP1b2P/1K4R1 b - - 16 33",
          dest: {
            from: "f1",
            to: "g1",
          },
        },
        {
          move: "Bxc4",
          fen: "4rb1r/2k5/p2p1P2/3B2Rp/1pb5/8/PPP4P/1K4R1 w - - 0 34",
          dest: {
            from: "e2",
            to: "c4",
          },
        },
        {
          move: "Bxc4",
          fen: "4rb1r/2k5/p2p1P2/6Rp/1pB5/8/PPP4P/1K4R1 b - - 0 34",
          dest: {
            from: "d5",
            to: "c4",
          },
        },
        {
          move: "Rh6",
          fen: "4rb2/2k5/p2p1P1r/6Rp/1pB5/8/PPP4P/1K4R1 w - - 1 35",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "f7",
          fen: "4rb2/2k2P2/p2p3r/6Rp/1pB5/8/PPP4P/1K4R1 b - - 0 35",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Re4",
          fen: "5b2/2k2P2/p2p3r/6Rp/1pB1r3/8/PPP4P/1K4R1 w - - 1 36",
          dest: {
            from: "e8",
            to: "e4",
          },
        },
        {
          move: "Bxa6",
          fen: "5b2/2k2P2/B2p3r/6Rp/1p2r3/8/PPP4P/1K4R1 b - - 0 36",
          dest: {
            from: "c4",
            to: "a6",
          },
        },
        {
          move: "Rf4",
          fen: "5b2/2k2P2/B2p3r/6Rp/1p3r2/8/PPP4P/1K4R1 w - - 1 37",
          dest: {
            from: "e4",
            to: "f4",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rg8",
          fen: "2rk1bR1/5B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 b - - 10 30",
          dest: {
            from: "g5",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "2r2bR1/2k2B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 w - - 11 31",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Ne3",
          fen: "2r2bR1/2k2B2/p2p1P1r/7p/1p4b1/4N3/PPP2R1P/1K6 b - - 12 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "a5",
          fen: "2r2bR1/2k2B2/3p1P1r/p6p/1p4b1/4N3/PPP2R1P/1K6 w - - 0 32",
          dest: {
            from: "a6",
            to: "a5",
          },
        },
        {
          move: "Rf4",
          fen: "2r2bR1/2k2B2/3p1P1r/p6p/1p3Rb1/4N3/PPP4P/1K6 b - - 1 32",
          dest: {
            from: "f2",
            to: "f4",
          },
        },
        {
          move: "Kb6",
          fen: "2r2bR1/5B2/1k1p1P1r/p6p/1p3Rb1/4N3/PPP4P/1K6 w - - 2 33",
          dest: {
            from: "c7",
            to: "b6",
          },
        },
        {
          move: "Nc4+",
          fen: "2r2bR1/5B2/1k1p1P1r/p6p/1pN2Rb1/8/PPP4P/1K6 b - - 3 33",
          dest: {
            from: "e3",
            to: "c4",
          },
        },
        {
          move: "Ka6",
          fen: "2r2bR1/5B2/k2p1P1r/p6p/1pN2Rb1/8/PPP4P/1K6 w - - 4 34",
          dest: {
            from: "b6",
            to: "a6",
          },
        },
        {
          move: "Bd5",
          fen: "2r2bR1/8/k2p1P1r/p2B3p/1pN2Rb1/8/PPP4P/1K6 b - - 5 34",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Rh7",
          fen: "2r2bR1/7r/k2p1P2/p2B3p/1pN2Rb1/8/PPP4P/1K6 w - - 6 35",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "b3",
          fen: "2r2bR1/7r/k2p1P2/p2B3p/1pN2Rb1/1P6/P1P4P/1K6 b - - 0 35",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
      ],
    },
    {
      move: "b3",
      moveFen: "2rk1b2/5B2/p2p1P1r/6Rp/1pN3b1/1P6/P1P2R1P/1K6 b - - 0 30",
      dest: {
        from: "b2",
        to: "b3",
      },
      evalBefore: "+2.00",
      evalAfter: "+1.79",
      bestMovesBefore: [
        {
          move: "Rg8",
          fen: "2rk1bR1/5B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 b - - 10 30",
          dest: {
            from: "g5",
            to: "g8",
          },
        },
        {
          move: "Kc7",
          fen: "2r2bR1/2k2B2/p2p1P1r/7p/1pN3b1/8/PPP2R1P/1K6 w - - 11 31",
          dest: {
            from: "d8",
            to: "c7",
          },
        },
        {
          move: "Ne3",
          fen: "2r2bR1/2k2B2/p2p1P1r/7p/1p4b1/4N3/PPP2R1P/1K6 b - - 12 31",
          dest: {
            from: "c4",
            to: "e3",
          },
        },
        {
          move: "a5",
          fen: "2r2bR1/2k2B2/3p1P1r/p6p/1p4b1/4N3/PPP2R1P/1K6 w - - 0 32",
          dest: {
            from: "a6",
            to: "a5",
          },
        },
        {
          move: "Rf4",
          fen: "2r2bR1/2k2B2/3p1P1r/p6p/1p3Rb1/4N3/PPP4P/1K6 b - - 1 32",
          dest: {
            from: "f2",
            to: "f4",
          },
        },
        {
          move: "Kb6",
          fen: "2r2bR1/5B2/1k1p1P1r/p6p/1p3Rb1/4N3/PPP4P/1K6 w - - 2 33",
          dest: {
            from: "c7",
            to: "b6",
          },
        },
        {
          move: "Nc4+",
          fen: "2r2bR1/5B2/1k1p1P1r/p6p/1pN2Rb1/8/PPP4P/1K6 b - - 3 33",
          dest: {
            from: "e3",
            to: "c4",
          },
        },
        {
          move: "Ka6",
          fen: "2r2bR1/5B2/k2p1P1r/p6p/1pN2Rb1/8/PPP4P/1K6 w - - 4 34",
          dest: {
            from: "b6",
            to: "a6",
          },
        },
        {
          move: "Bd5",
          fen: "2r2bR1/8/k2p1P1r/p2B3p/1pN2Rb1/8/PPP4P/1K6 b - - 5 34",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Rh7",
          fen: "2r2bR1/7r/k2p1P2/p2B3p/1pN2Rb1/8/PPP4P/1K6 w - - 6 35",
          dest: {
            from: "h6",
            to: "h7",
          },
        },
        {
          move: "b3",
          fen: "2r2bR1/7r/k2p1P2/p2B3p/1pN2Rb1/1P6/P1P4P/1K6 b - - 0 35",
          dest: {
            from: "b2",
            to: "b3",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Rh8",
          fen: "2rk1b1r/5B2/p2p1P2/6Rp/1pN3b1/1P6/P1P2R1P/1K6 w - - 1 31",
          dest: {
            from: "h6",
            to: "h8",
          },
        },
        {
          move: "Ra5",
          fen: "2rk1b1r/5B2/p2p1P2/R6p/1pN3b1/1P6/P1P2R1P/1K6 b - - 2 31",
          dest: {
            from: "g5",
            to: "a5",
          },
        },
        {
          move: "Rc7",
          fen: "3k1b1r/2r2B2/p2p1P2/R6p/1pN3b1/1P6/P1P2R1P/1K6 w - - 3 32",
          dest: {
            from: "c8",
            to: "c7",
          },
        },
        {
          move: "Bd5",
          fen: "3k1b1r/2r5/p2p1P2/R2B3p/1pN3b1/1P6/P1P2R1P/1K6 b - - 4 32",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Bc8",
          fen: "2bk1b1r/2r5/p2p1P2/R2B3p/1pN5/1P6/P1P2R1P/1K6 w - - 5 33",
          dest: {
            from: "g4",
            to: "c8",
          },
        },
        {
          move: "a3",
          fen: "2bk1b1r/2r5/p2p1P2/R2B3p/1pN5/PP6/2P2R1P/1K6 b - - 0 33",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "bxa3",
          fen: "2bk1b1r/2r5/p2p1P2/R2B3p/2N5/pP6/2P2R1P/1K6 w - - 0 34",
          dest: {
            from: "b4",
            to: "a3",
          },
        },
        {
          move: "Nb6",
          fen: "2bk1b1r/2r5/pN1p1P2/R2B3p/8/pP6/2P2R1P/1K6 b - - 1 34",
          dest: {
            from: "c4",
            to: "b6",
          },
        },
        {
          move: "Rhh7",
          fen: "2bk1b2/2r4r/pN1p1P2/R2B3p/8/pP6/2P2R1P/1K6 w - - 2 35",
          dest: {
            from: "h8",
            to: "h7",
          },
        },
        {
          move: "Rxa3",
          fen: "2bk1b2/2r4r/pN1p1P2/3B3p/8/RP6/2P2R1P/1K6 b - - 0 35",
          dest: {
            from: "a5",
            to: "a3",
          },
        },
        {
          move: "Ra7",
          fen: "2bk1b2/r6r/pN1p1P2/3B3p/8/RP6/2P2R1P/1K6 w - - 1 36",
          dest: {
            from: "c7",
            to: "a7",
          },
        },
        {
          move: "b4",
          fen: "2bk1b2/r6r/pN1p1P2/3B3p/1P6/R7/2P2R1P/1K6 b - - 0 36",
          dest: {
            from: "b3",
            to: "b4",
          },
        },
        {
          move: "Rhc7",
          fen: "2bk1b2/r1r5/pN1p1P2/3B3p/1P6/R7/2P2R1P/1K6 w - - 1 37",
          dest: {
            from: "h7",
            to: "c7",
          },
        },
        {
          move: "Nc4",
          fen: "2bk1b2/r1r5/p2p1P2/3B3p/1PN5/R7/2P2R1P/1K6 b - - 2 37",
          dest: {
            from: "b6",
            to: "c4",
          },
        },
      ],
    },
    {
      move: "Rc7",
      moveFen: "3k1b2/2r2B2/p2p1P1r/6Rp/1pN3b1/1P6/P1P2R1P/1K6 w - - 1 31",
      dest: {
        from: "c8",
        to: "c7",
      },
      evalBefore: "+1.79",
      evalAfter: "+2.50",
      bestMovesBefore: [
        {
          move: "Rh8",
          fen: "2rk1b1r/5B2/p2p1P2/6Rp/1pN3b1/1P6/P1P2R1P/1K6 w - - 1 31",
          dest: {
            from: "h6",
            to: "h8",
          },
        },
        {
          move: "Ra5",
          fen: "2rk1b1r/5B2/p2p1P2/R6p/1pN3b1/1P6/P1P2R1P/1K6 b - - 2 31",
          dest: {
            from: "g5",
            to: "a5",
          },
        },
        {
          move: "Rc7",
          fen: "3k1b1r/2r2B2/p2p1P2/R6p/1pN3b1/1P6/P1P2R1P/1K6 w - - 3 32",
          dest: {
            from: "c8",
            to: "c7",
          },
        },
        {
          move: "Bd5",
          fen: "3k1b1r/2r5/p2p1P2/R2B3p/1pN3b1/1P6/P1P2R1P/1K6 b - - 4 32",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Bc8",
          fen: "2bk1b1r/2r5/p2p1P2/R2B3p/1pN5/1P6/P1P2R1P/1K6 w - - 5 33",
          dest: {
            from: "g4",
            to: "c8",
          },
        },
        {
          move: "a3",
          fen: "2bk1b1r/2r5/p2p1P2/R2B3p/1pN5/PP6/2P2R1P/1K6 b - - 0 33",
          dest: {
            from: "a2",
            to: "a3",
          },
        },
        {
          move: "bxa3",
          fen: "2bk1b1r/2r5/p2p1P2/R2B3p/2N5/pP6/2P2R1P/1K6 w - - 0 34",
          dest: {
            from: "b4",
            to: "a3",
          },
        },
        {
          move: "Nb6",
          fen: "2bk1b1r/2r5/pN1p1P2/R2B3p/8/pP6/2P2R1P/1K6 b - - 1 34",
          dest: {
            from: "c4",
            to: "b6",
          },
        },
        {
          move: "Rhh7",
          fen: "2bk1b2/2r4r/pN1p1P2/R2B3p/8/pP6/2P2R1P/1K6 w - - 2 35",
          dest: {
            from: "h8",
            to: "h7",
          },
        },
        {
          move: "Rxa3",
          fen: "2bk1b2/2r4r/pN1p1P2/3B3p/8/RP6/2P2R1P/1K6 b - - 0 35",
          dest: {
            from: "a5",
            to: "a3",
          },
        },
        {
          move: "Ra7",
          fen: "2bk1b2/r6r/pN1p1P2/3B3p/8/RP6/2P2R1P/1K6 w - - 1 36",
          dest: {
            from: "c7",
            to: "a7",
          },
        },
        {
          move: "b4",
          fen: "2bk1b2/r6r/pN1p1P2/3B3p/1P6/R7/2P2R1P/1K6 b - - 0 36",
          dest: {
            from: "b3",
            to: "b4",
          },
        },
        {
          move: "Rhc7",
          fen: "2bk1b2/r1r5/pN1p1P2/3B3p/1P6/R7/2P2R1P/1K6 w - - 1 37",
          dest: {
            from: "h7",
            to: "c7",
          },
        },
        {
          move: "Nc4",
          fen: "2bk1b2/r1r5/p2p1P2/3B3p/1PN5/R7/2P2R1P/1K6 b - - 2 37",
          dest: {
            from: "b6",
            to: "c4",
          },
        },
      ],
      bestMovesAfter: [
        {
          move: "Bd5",
          fen: "3k1b2/2r5/p2p1P1r/3B2Rp/1pN3b1/1P6/P1P2R1P/1K6 b - - 2 31",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Rh8",
          fen: "3k1b1r/2r5/p2p1P2/3B2Rp/1pN3b1/1P6/P1P2R1P/1K6 w - - 3 32",
          dest: {
            from: "h6",
            to: "h8",
          },
        },
        {
          move: "f7",
          fen: "3k1b1r/2r2P2/p2p4/3B2Rp/1pN3b1/1P6/P1P2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rc5",
          fen: "3k1b1r/5P2/p2p4/2rB2Rp/1pN3b1/1P6/P1P2R1P/1K6 w - - 1 33",
          dest: {
            from: "c7",
            to: "c5",
          },
        },
        {
          move: "Rf6",
          fen: "3k1b1r/5P2/p2p1R2/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 b - - 2 33",
          dest: {
            from: "f2",
            to: "f6",
          },
        },
        {
          move: "Rh6",
          fen: "3k1b2/5P2/p2p1R1r/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 w - - 3 34",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rxh6",
          fen: "3k1b2/5P2/p2p3R/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 b - - 0 34",
          dest: {
            from: "f6",
            to: "h6",
          },
        },
        {
          move: "Bxh6",
          fen: "3k4/5P2/p2p3b/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 w - - 0 35",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Rg8+",
          fen: "3k2R1/5P2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 b - - 1 35",
          dest: {
            from: "g5",
            to: "g8",
          },
        },
        {
          move: "Ke7",
          fen: "6R1/4kP2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 w - - 2 36",
          dest: {
            from: "d8",
            to: "e7",
          },
        },
        {
          move: "Re8+",
          fen: "4R3/4kP2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 b - - 3 36",
          dest: {
            from: "g8",
            to: "e8",
          },
        },
        {
          move: "Kd7",
          fen: "4R3/3k1P2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 w - - 4 37",
          dest: {
            from: "e7",
            to: "d7",
          },
        },
      ],
    },
    {
      move: "Bd5",
      moveFen: "3k1b2/2r5/p2p1P1r/3B2Rp/1pN3b1/1P6/P1P2R1P/1K6 b - - 2 31",
      dest: {
        from: "f7",
        to: "d5",
      },
      evalBefore: "+2.50",
      evalAfter: "",
      bestMovesBefore: [
        {
          move: "Bd5",
          fen: "3k1b2/2r5/p2p1P1r/3B2Rp/1pN3b1/1P6/P1P2R1P/1K6 b - - 2 31",
          dest: {
            from: "f7",
            to: "d5",
          },
        },
        {
          move: "Rh8",
          fen: "3k1b1r/2r5/p2p1P2/3B2Rp/1pN3b1/1P6/P1P2R1P/1K6 w - - 3 32",
          dest: {
            from: "h6",
            to: "h8",
          },
        },
        {
          move: "f7",
          fen: "3k1b1r/2r2P2/p2p4/3B2Rp/1pN3b1/1P6/P1P2R1P/1K6 b - - 0 32",
          dest: {
            from: "f6",
            to: "f7",
          },
        },
        {
          move: "Rc5",
          fen: "3k1b1r/5P2/p2p4/2rB2Rp/1pN3b1/1P6/P1P2R1P/1K6 w - - 1 33",
          dest: {
            from: "c7",
            to: "c5",
          },
        },
        {
          move: "Rf6",
          fen: "3k1b1r/5P2/p2p1R2/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 b - - 2 33",
          dest: {
            from: "f2",
            to: "f6",
          },
        },
        {
          move: "Rh6",
          fen: "3k1b2/5P2/p2p1R1r/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 w - - 3 34",
          dest: {
            from: "h8",
            to: "h6",
          },
        },
        {
          move: "Rxh6",
          fen: "3k1b2/5P2/p2p3R/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 b - - 0 34",
          dest: {
            from: "f6",
            to: "h6",
          },
        },
        {
          move: "Bxh6",
          fen: "3k4/5P2/p2p3b/2rB2Rp/1pN3b1/1P6/P1P4P/1K6 w - - 0 35",
          dest: {
            from: "f8",
            to: "h6",
          },
        },
        {
          move: "Rg8+",
          fen: "3k2R1/5P2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 b - - 1 35",
          dest: {
            from: "g5",
            to: "g8",
          },
        },
        {
          move: "Ke7",
          fen: "6R1/4kP2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 w - - 2 36",
          dest: {
            from: "d8",
            to: "e7",
          },
        },
        {
          move: "Re8+",
          fen: "4R3/4kP2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 b - - 3 36",
          dest: {
            from: "g8",
            to: "e8",
          },
        },
        {
          move: "Kd7",
          fen: "4R3/3k1P2/p2p3b/2rB3p/1pN3b1/1P6/P1P4P/1K6 w - - 4 37",
          dest: {
            from: "e7",
            to: "d7",
          },
        },
      ],
      bestMovesAfter: [],
    },
  ],
};
