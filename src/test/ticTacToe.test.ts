import { TicTacToe } from "../main/ticTacToe";
import { Location } from "../main/types";

describe("tictactoe", () => {
  describe("When it's X's turn to move", () => {
    it("should return an array representing the board with the new X in 1, 1 place", () => {
      let game: TicTacToe = new TicTacToe();

      expect(game.move(Location.CENTRE_MIDDLE)).toEqual([
        ["", "", ""],
        ["", "X", ""],
        ["", "", ""],
      ]);
    });

    it("should return an array representing the board with the new X in 0, 2 place", () => {
      let game: TicTacToe = new TicTacToe();

      expect(game.move(Location.BOTTOM_LEFT)).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["X", "", ""],
      ]);
    });

    it("should return an array representing the board when three moves are played", () => {
      let game: TicTacToe = new TicTacToe();

      game.move(Location.BOTTOM_LEFT);
      game.move(Location.CENTRE_MIDDLE);

      expect(game.move(Location.TOP_LEFT)).toEqual([
        ["X", "", ""],
        ["", "O", ""],
        ["X", "", ""],
      ]);
    });
  });

  describe("When it's O's turn to move", () => {
    it("should return an array representing the board with the new O in 0, 0 place", () => {
      let game: TicTacToe = new TicTacToe();

      game.move(Location.CENTRE_MIDDLE);

      expect(game.move(Location.TOP_LEFT)).toEqual([
        ["O", "", ""],
        ["", "X", ""],
        ["", "", ""],
      ]);
    });

    it("should return an array representing the board with the new O in 1, 2 place", () => {
      let game: TicTacToe = new TicTacToe();

      game.move(Location.CENTRE_MIDDLE);

      expect(game.move(Location.CENTRE_RIGHT)).toEqual([
        ["", "", ""],
        ["", "X", "O"],
        ["", "", ""],
      ]);
    });

    it("should throw an error if given location is already filled", () => {
      let game: TicTacToe = new TicTacToe();

      game.move(Location.CENTRE_MIDDLE);

      expect(() => game.move(Location.CENTRE_MIDDLE)).toThrowError(
        /That space is taken/
      );
    });
  });

  type TestTuple = [string, Location[], string];

  const testCases: TestTuple[] = [
    [
      "When left column is filled",
      [
        Location.TOP_LEFT,
        Location.TOP_RIGHT,
        Location.CENTRE_LEFT,
        Location.CENTRE_RIGHT,
        Location.BOTTOM_LEFT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When middle column is filled",
      [
        Location.TOP_MIDDLE,
        Location.CENTRE_LEFT,
        Location.CENTRE_MIDDLE,
        Location.BOTTOM_RIGHT,
        Location.BOTTOM_MIDDLE,
      ],
      "Congratulations! X has won",
    ],
    [
      "When last column is filled",
      [
        Location.TOP_RIGHT,
        Location.TOP_MIDDLE,
        Location.CENTRE_RIGHT,
        Location.CENTRE_MIDDLE,
        Location.BOTTOM_RIGHT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When first row is filled",
      [
        Location.TOP_LEFT,
        Location.CENTRE_LEFT,
        Location.TOP_MIDDLE,
        Location.CENTRE_MIDDLE,
        Location.TOP_RIGHT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When middle row is filled",
      [
        Location.CENTRE_LEFT,
        Location.TOP_MIDDLE,
        Location.CENTRE_MIDDLE,
        Location.TOP_RIGHT,
        Location.CENTRE_RIGHT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When middle row is filled",
      [
        Location.CENTRE_LEFT,
        Location.TOP_MIDDLE,
        Location.CENTRE_MIDDLE,
        Location.TOP_RIGHT,
        Location.CENTRE_RIGHT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When middle row is filled",
      [
        Location.CENTRE_LEFT,
        Location.TOP_MIDDLE,
        Location.CENTRE_MIDDLE,
        Location.TOP_RIGHT,
        Location.CENTRE_RIGHT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When bottom row is filled",
      [
        Location.BOTTOM_LEFT,
        Location.TOP_MIDDLE,
        Location.BOTTOM_MIDDLE,
        Location.TOP_RIGHT,
        Location.BOTTOM_RIGHT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When left diagnal is filled",
      [
        Location.TOP_LEFT,
        Location.TOP_MIDDLE,
        Location.CENTRE_MIDDLE,
        Location.TOP_RIGHT,
        Location.BOTTOM_RIGHT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When right diagnal is filled",
      [
        Location.TOP_RIGHT,
        Location.TOP_MIDDLE,
        Location.CENTRE_MIDDLE,
        Location.BOTTOM_RIGHT,
        Location.BOTTOM_LEFT,
      ],
      "Congratulations! X has won",
    ],
    [
      "When left column is filled",
      [
        Location.BOTTOM_RIGHT,
        Location.TOP_LEFT,
        Location.BOTTOM_MIDDLE,
        Location.CENTRE_LEFT,
        Location.TOP_RIGHT,
        Location.BOTTOM_LEFT,
      ],
      "Congratulations! O has won",
    ],
    [
      "When the game is a draw",
      [
        Location.TOP_LEFT,
        Location.TOP_MIDDLE,
        Location.TOP_RIGHT,
        Location.CENTRE_LEFT,
        Location.CENTRE_RIGHT,
        Location.CENTRE_MIDDLE,
        Location.BOTTOM_LEFT,
        Location.BOTTOM_RIGHT,
        Location.BOTTOM_MIDDLE,
      ],
      "Game over! It was a draw.",
    ],
  ];

  it.each(testCases)(
    "%s, it renders a win message",
    (testName, moves, expectation) => {
      const game: TicTacToe = new TicTacToe();

      moves.forEach((move, index) => {
        const result = game.move(move);

        if (index === moves.length - 1) {
          expect(result).toEqual(expectation);
        }
      });
    }
  );
});
