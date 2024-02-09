export class Position {
    
    constructor(private readonly xPos :number, 
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

    private static isInvalidOrientation(orientation :string) :boolean{
        return  orientation.toUpperCase() != 'N' &&
                orientation.toUpperCase() != 'S' &&
                orientation.toUpperCase() != 'E' &&
                orientation.toUpperCase() != 'W';
    }
}