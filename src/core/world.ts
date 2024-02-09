export class World {
    private constructor(private readonly dimX :number, 
                        private readonly dimY :number) { }

    static create(dimX :number, dimY :number) :World {
        const MINIMUN_SIZE = 1;

        if(dimX < MINIMUN_SIZE)
			throw new Error("X dimension must be greather than zero.")

        if(dimY < MINIMUN_SIZE)
			throw new Error("Y dimension must be greather than zero.")

        return new World(dimX, dimY);
    }
}
