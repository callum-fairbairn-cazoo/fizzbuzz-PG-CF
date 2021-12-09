import { GamePiece, GridBoard, Location } from "./types";

export class GameBoard {
  private grid: GridBoard = {
    [Location.TOP_LEFT]: GamePiece.UNSET,
    [Location.TOP_MIDDLE]: GamePiece.UNSET,
    [Location.TOP_RIGHT]: GamePiece.UNSET,
    [Location.CENTRE_LEFT]: GamePiece.UNSET,
    [Location.CENTRE_MIDDLE]: GamePiece.UNSET,
    [Location.CENTRE_RIGHT]: GamePiece.UNSET,
    [Location.BOTTOM_LEFT]: GamePiece.UNSET,
    [Location.BOTTOM_MIDDLE]: GamePiece.UNSET,
    [Location.BOTTOM_RIGHT]: GamePiece.UNSET,
  };

  public setLocation(location: Location, piece: GamePiece) {
    this.grid[location] = piece;
  }

  public isLocationFree(location: Location): boolean {
    return this.grid[location] === GamePiece.UNSET;
  }

  private allLocationsAreX(locations: Location[]): boolean {
    return locations.every((location) => this.grid[location] === GamePiece.X)
  }

  public checkForXWin(): boolean {
    return (
      this.allLocationsAreX([Location.TOP_LEFT, Location.CENTRE_LEFT, Location.BOTTOM_LEFT]) ||
      this.allLocationsAreX([Location.TOP_MIDDLE, Location.CENTRE_MIDDLE, Location.BOTTOM_MIDDLE]) ||
      this.allLocationsAreX([Location.TOP_RIGHT, Location.CENTRE_RIGHT, Location.BOTTOM_RIGHT])
    );
  }

  public toArray(): string[][] {
    return [
      [
        this.grid[Location.TOP_LEFT],
        this.grid[Location.TOP_MIDDLE],
        this.grid[Location.TOP_RIGHT],
      ],
      [
        this.grid[Location.CENTRE_LEFT],
        this.grid[Location.CENTRE_MIDDLE],
        this.grid[Location.CENTRE_RIGHT],
      ],
      [
        this.grid[Location.BOTTOM_LEFT],
        this.grid[Location.BOTTOM_MIDDLE],
        this.grid[Location.BOTTOM_RIGHT],
      ],
    ];
  }
}
