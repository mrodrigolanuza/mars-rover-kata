import { World } from "./world";

export class Rover {
    private constructor(private readonly world: World, xPos :number, yPos :number, orientation :string) {}

    static create (world :World, xPos :number, yPos :number, orientation :string) :Rover{

        return new Rover(world, xPos, yPos, orientation);
    }
}