const MIN_SIZE = 1;
export class World {
    
    
    private constructor(private readonly dimX :number, 
                        private readonly dimY :number) { }

    static create(dimX :number, dimY :number) :World {
        
        if(dimX < 1)
			throw new Error("X dimension must be greather than zero.")

        if(dimY < MIN_SIZE)
			throw new Error("Y dimension must be greather than zero.")

        return new World(dimX, dimY);
    }

    isPositionWithinLimits(xPos :number, yPos :number) :boolean {
        return (xPos >= MIN_SIZE) 
            && (yPos >= MIN_SIZE) 
            && (xPos <= this.dimX) 
            && (yPos <= this.dimY);
    }
}
