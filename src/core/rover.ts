import { World } from "./world";

export class Rover {
    private constructor(private readonly world: World) {}

    static create (world :World) :Rover{

        return new Rover(world);
    }
}