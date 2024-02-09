import { World } from "./world";

export class Rover {
    private constructor(private readonly world: World, xPos :number, yPos :number, orientation :string) {}

    static create (world :World, xPos :number, yPos :number, orientation :string) :Rover{

        if(!world.isPositionWithinLimits(xPos, yPos)){
            throw new Error('Rover can not be placed in the given position');
        }
        
        return new Rover(world, xPos, yPos, orientation);
    }
}