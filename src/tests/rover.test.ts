/*
    - The Rover vehicle must be instantiated in a well-formed world and in a particular position in it.
    - The Rover vehicle can not be instantiated if the position is not contained within the world dimensions.
    - The Rover can show its actual position.
    - The Rover can execute a movement with only a Forward command (F) within the world dimensions.
    - The Rover can execute a movement with only a Left command (L) within the world dimensions.
    - The Rover can execute a movement with only a Right command (R) within the world dimensions.
    - The Rover can execute a movement with a sequece of commands (FRFFR) within the world dimensions.
    - The Rover can execute a movement with only a Forward command (F) traspassing the limits of the world.
    - The Rover can execute a movement with a sequece of commands (FRFFR) traspassing the limits of 1x1 world.
*/

import { Movement } from '../core/movement';
import { Rover } from '../core/rover';
import { RoverBuilder } from '../core/roverBuilder';

describe('The Rover vehicle', () => {
    let roverBuilder;

	beforeEach(()=>{
        roverBuilder = new RoverBuilder();
    });

    it('when creation, needs a initial position in the world.', () => {
        expect(() => {
            roverBuilder.withinWorldWithDimensionsXY(3, 5);
            const rover = roverBuilder.build();
        }).toThrow('Rover needs a position to be placed in the world.');
	});
    
    it('when creation, needs a world where to be placed.', () => {
        expect(() => {
            roverBuilder.locatedInPosition(3, 5, 'N');
            const rover = roverBuilder.build();
        }).toThrow('Rover needs a world where to be placed.');
	});

    it('must be instantiated in a well-formed world and in a particular position in it.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(3, 5)
                                  .locatedInPosition(3, 5, 'N')
                                  .build();
		
        expect(rover).toBeInstanceOf(Rover);
	});

    it('can not be instantiated if the position is not contained within the world dimensions.', () => {
        expect(() => {
            roverBuilder.withinWorldWithDimensionsXY(3, 5)
                        .locatedInPosition(-100, 100, 'N')
                        .build();
        }).toThrow('Rover can not be placed in the given position');
	});

    it('can show its actual position.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(5, 5)
                                  .locatedInPosition(3, 3, 'N')
                                  .build();

        expect(rover.actualPosition()).toBe('3,3,N');
	});

     it('can execute a movement with only a Forward command (F) within the world dimensions.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(5, 5)
                                  .locatedInPosition(3, 3, 'N')
                                  .build();
        const movement = Movement.create('F');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('3,4,N');
	 });

     it('can execute a movement with only a Rear command (R) within the world dimensions.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(5, 5)
                                  .locatedInPosition(3, 3, 'N')
                                  .build();
        const movement = Movement.create('L');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('3,3,W');
	 });

     it('can execute a movement with only a Rear command (R) within the world dimensions.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(5, 5)
                                  .locatedInPosition(3, 3, 'N')
                                  .build();
        const movement = Movement.create('R');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('3,3,E');
	 });

     it('can execute a movement with a sequece of commands (FRFFR) within the world dimensions.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(5, 5)
                                  .locatedInPosition(3, 3, 'N')
                                  .build();
        const movement = Movement.create('FRFFR');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('5,4,S');
	 });
     
     it('can execute a movement with only a Forward command (F) traspassing the limits of the world.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(5, 5)
                                  .locatedInPosition(5, 5, 'N')
                                  .build();
        const movement = Movement.create('F');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('5,1,N');
	 });
     
     it('can execute a movement with a sequece of commands (FRFFR) traspassing the limits of 5x5 world.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(5, 5)
                                  .locatedInPosition(5, 1, 'E')
                                  .build();
        const movement = Movement.create('FRFFR');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('1,4,W');
	 });

     it('can execute a movement with a sequece of commands (FRFFR) traspassing the limits of 1x1 world.', () => {
		const rover = roverBuilder.withinWorldWithDimensionsXY(1, 1)
                                  .locatedInPosition(1, 1, 'E')
                                  .build();
        const movement = Movement.create('FRFFR');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('1,1,W');
	 });
});

