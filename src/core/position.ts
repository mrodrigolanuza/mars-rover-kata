export class Position {
    constructor(private readonly xPos :number, private readonly yPos :number, private readonly orientation :string) {

    }

    static create (xPos :number, yPos :number, orientation :string){
        
        if(!orientation){
            throw new Error('Orientation not valid.');
        }

        if(orientation != 'N' &&
           orientation != 'S' &&
           orientation != 'E' &&
           orientation != 'W'){
            throw new Error('Orientation with unknown value.');
           }


        return new Position(xPos, yPos, orientation);
    }
}