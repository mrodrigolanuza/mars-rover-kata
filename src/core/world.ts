import { Position } from "./position";

const MIN_SIZE :number = 1;
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

    isAllowed(position :Position) :boolean {
        return (position.X() >= MIN_SIZE) && (position.X() <= this.dimX)
            && (position.Y() >= MIN_SIZE) && (position.Y() <= this.dimY);
    }

    adjustPositionWhenLimitsExceeded(position: Position): Position {
        
        let xPos = position.X(); 
        if(position.X() <= 0){
            xPos = this.dimX + position.X(); 
        }
        else if(position.X() > this.dimX ){
            xPos = position.X() - this.dimX;
        }
        
        let yPos = position.Y();
        if(position.Y() <= 0){
            yPos = this.dimY + position.Y();
        }
        else if(position.Y() > this.dimY){
            yPos = position.Y() - this.dimY;
        }

        return Position.create(xPos, yPos, position.direction());
    }
}
