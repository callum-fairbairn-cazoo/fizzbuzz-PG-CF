import { GameBoard } from "./gameBoard";
import { GamePiece, Location } from "./types";

export class TicTacToe {
    board = new GameBoard()

    lastPiecePlayed: GamePiece = GamePiece.UNSET

    move(location?: Location) {
        const pieceToPlay: GamePiece = this.lastPiecePlayed === GamePiece.X ? GamePiece.O : GamePiece.X;

        if (location === undefined) return this.board.toArray();

        if (!this.board.isLocationFree(location))
            throw new Error("That space is taken")

        this.board.setLocation(location, pieceToPlay);
        this.lastPiecePlayed = pieceToPlay;

        if (this.board.checkForWin() === GamePiece.X)
            return "Congratulations! X has won"

        if (this.board.checkForWin() === GamePiece.O)
            return "Congratulations! O has won"

        if (this.board.checkForDraw())
            return "Game over! It was a draw."

        return this.board.toArray();
    }
}