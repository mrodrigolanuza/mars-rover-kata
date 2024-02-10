import { Command } from "./command";

export class Position {
    
    private constructor(private readonly xPos :number, 
                private readonly yPos :number, 
                private readonly orientation :string) {  }

    static create (xPos :number, yPos :number, orientation :string){
        
        if(!orientation){
            throw new Error('Orientation not valid.');
        }

        if(this.isInvalidOrientation(orientation)){
            throw new Error('Orientation with unknown value.')
        }
        
        return new Position(xPos, yPos, orientation);
    }

    X() :number {
        return this.xPos;
    }

    Y() :number {
        return this.yPos;
    }

    direction(): string {
        return this.orientation;
    }

    toString(): string{
         return `${this.xPos},${this.yPos},${this.orientation}`;
    }

    apply(command: Command): Position{
        const cmdType = command.type();

        if(cmdType == 'F'){
            if(this.orientation == 'N'){ return new Position(this.xPos, this.yPos + 1, this.orientation); }
            if(this.orientation == 'S'){ return new Position(this.xPos, this.yPos - 1, this.orientation); }
            if(this.orientation == 'E'){ return new Position(this.xPos + 1, this.yPos, this.orientation); }
            if(this.orientation == 'W'){ return new Position(this.xPos - 1, this.yPos, this.orientation); }
        }
        else if(cmdType == 'R'){
            if(this.orientation == 'N'){ return new Position(this.xPos, this.yPos, 'E'); }
            if(this.orientation == 'S'){ return new Position(this.xPos, this.yPos, 'W'); }
            if(this.orientation == 'E'){ return new Position(this.xPos, this.yPos, 'S'); }
            if(this.orientation == 'W'){ return new Position(this.xPos, this.yPos, 'N'); }
        }
        else if(cmdType == 'L'){
            if(this.orientation == 'N'){ return new Position(this.xPos, this.yPos, 'W'); }
            if(this.orientation == 'S'){ return new Position(this.xPos, this.yPos, 'E'); }
            if(this.orientation == 'E'){ return new Position(this.xPos, this.yPos, 'N'); }
            if(this.orientation == 'W'){ return new Position(this.xPos, this.yPos, 'S'); }
        }
    }

    private static isInvalidOrientation(orientation :string) :boolean{
        return  orientation.toUpperCase() != 'N' &&
                orientation.toUpperCase() != 'S' &&
                orientation.toUpperCase() != 'E' &&
                orientation.toUpperCase() != 'W';
    }
}