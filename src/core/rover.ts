import { Position } from "./position";
import { World } from "./world";

export class Rover {
    private constructor(private readonly world: World, position :Position) {}

    static create (world :World, position :Position) :Rover{

        if(!world.isAllowed(position)){
            throw new Error('Rover can not be placed in the given position');
        }
        
        return new Rover(world, position);
    }

    actualPosition(): string {
        return '';
    }
}