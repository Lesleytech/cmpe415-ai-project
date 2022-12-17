import { SquareType } from "../types";

const winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getWin = (squares: SquareType[]) => {
  const moves = winningMoves.find(
    (c) => squares[c[0]] === squares[c[1]] && squares[c[1]] === squares[c[2]]
  );

  if (moves) {
    const winner = squares[moves[0]];

    if (winner) {
      return { moves, winner };
    }
  }

  return undefined;
};

export const getEmptySquares = (squares: SquareType[]): number[] => {
  const emptySquares: number[] = [];

  squares.forEach((value, index) => {
    if (!value) {
      emptySquares.push(index);
    }
  });

  return emptySquares;
};

const minmax = (squares: SquareType[]) => {
  return 1;
};

export const getAiMove = (squares: SquareType[]) => {
  let bestScore = -Infinity;
  let aiMove: number = 0;
  let score;
  let squaresCopy;

  squares.forEach((val, index) => {
    if (!val) {
      squaresCopy = [...squares];
      squaresCopy[index] = "O";
      score = minmax(squaresCopy);

      if (score > bestScore) {
        bestScore = score;
        aiMove = index;
      }
    }
  });

  return aiMove;
};
