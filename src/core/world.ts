export class World {
    private constructor(private readonly dimX :number, private readonly dimY :number){

    }

    static create(dimX :number, dimY :number) :World {
        return new World(dimX, dimY);
    }
}
