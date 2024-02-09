export class World {
    private constructor(private readonly dimX :number, 
                        private readonly dimY :number) { }

    static create(dimX :number, dimY :number) :World {
        
        if(dimX < 1)
			throw new Error("X dimension must be greather than zero.")

        return new World(dimX, dimY);
    }
}
