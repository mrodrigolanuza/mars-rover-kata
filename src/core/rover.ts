import { Movement } from "./movement";
import { Position } from "./position";
import { World } from "./world";

export class Rover {
    private constructor(private readonly world: World, 
                        private position :Position) {}

    static create (world :World, position :Position) :Rover{

        if(!world){
            throw new Error('Rover needs a world where to be placed.');
        }
        
        if(!position){
            throw new Error('Rover needs a position to be placed in the world.');
        }
        
        if(!world.isAllowed(position)){
            throw new Error('Rover can not be placed in the given position');
        }
        
        return new Rover(world, position);
    }

    actualPosition(): string {
        return this.position.toString();
    }

    execute(movement: Movement) {
        
        movement.commands()
                .forEach(command => {
            this.position = this.position.apply(command);
            this.position = this.world.adjustPositionWhenLimitsExceeded(this.position);
        });
    }
}