import { Position } from "./position";
import { Rover } from "./rover";
import { World } from "./world";

export class RoverBuilder {
    private world: World;
    private position: Position;


    withinWorldWithDimensionsXY(dimX: number, dimY: number): this {
        this.world = World.create(dimX, dimY);
        return this;
    }

    locatedInPosition(xPos: number, yPos: number, orientation: string): this {
        this.position = Position.create(xPos, yPos, orientation);
        return this;
    }

    build(): Rover {
        return Rover.create(this.world, this.position);
    }
}