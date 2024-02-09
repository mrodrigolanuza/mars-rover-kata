export class Position {
    constructor(xPos :number, yPos :number, orientation :string) {

    }

    static create (xPos :number, yPos :number, orientation :string){
        
        if(!orientation){
            throw new Error('Orientation not valid.');
        }

        return new Position(xPos, yPos, orientation);
    }
}