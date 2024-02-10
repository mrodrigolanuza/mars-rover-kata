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
import { Position } from '../core/position';
import { Rover } from '../core/rover'
import { World } from '../core/world';

describe('The Rover vehicle', () => {

    it('must be instantiated in a well-formed world and in a particular position in it.', () => {
        const xPos = 3;
        const yPos = 5;
        const orientation = 'N';
        const xDim = 3;
        const yDim = 5;
		
        const rover = Rover.create(World.create(xDim, yDim), 
                                   Position.create(xPos, yPos, orientation));
		
		expect(rover).toBeInstanceOf(Rover);
	});

    it('can not be instantiated if the position is not contained within the world dimensions.', () => {
        const xDim = 3;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = -100;
        const yPos = 100;
        const orientation = 'N';
        const position = Position.create(xPos, yPos, orientation);
		
        expect(() => {
            const rover = Rover.create(world, position);
        }).toThrow('Rover can not be placed in the given position');
	});

    it('can show its actual position.', () => {
        const xDim = 5;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = 3;
        const yPos = 3;
        const orientation = 'N';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);

        expect(rover.actualPosition()).toBe('3,3,N');
	});

     it('can execute a movement with only a Forward command (F) within the world dimensions.', () => {
        const xDim = 5;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = 3;
        const yPos = 3;
        const orientation = 'N';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);
        const movement = Movement.create('F');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('3,4,N');
	 });

     it('can execute a movement with only a Rear command (R) within the world dimensions.', () => {
        const xDim = 5;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = 3;
        const yPos = 3;
        const orientation = 'N';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);
        const movement = Movement.create('L');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('3,3,W');
	 });

     it('can execute a movement with only a Rear command (R) within the world dimensions.', () => {
        const xDim = 5;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = 3;
        const yPos = 3;
        const orientation = 'N';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);
        const movement = Movement.create('R');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('3,3,E');
	 });

     it('can execute a movement with a sequece of commands (FRFFR) within the world dimensions.', () => {
        const xDim = 5;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = 3;
        const yPos = 3;
        const orientation = 'N';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);
        const movement = Movement.create('FRFFR');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('5,4,S');
	 });
     
     it('can execute a movement with only a Forward command (F) traspassing the limits of the world.', () => {
        const xDim = 5;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = 5;
        const yPos = 5;
        const orientation = 'N';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);
        const movement = Movement.create('F');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('5,1,N');
	 });
     
     it('can execute a movement with a sequece of commands (FRFFR) traspassing the limits of 5x5 world.', () => {
        const xDim = 5;
        const yDim = 5;
        const world = World.create(xDim, yDim);
        const xPos = 5;
        const yPos = 1;
        const orientation = 'E';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);
        const movement = Movement.create('FRFFR');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('1,4,W');
	 });

     it('can execute a movement with a sequece of commands (FRFFR) traspassing the limits of 1x1 world.', () => {
        const xDim = 1;
        const yDim = 1;
        const world = World.create(xDim, yDim);
        const xPos = 1;
        const yPos = 1;
        const orientation = 'E';
        const position = Position.create(xPos, yPos, orientation);
        const rover = Rover.create(world, position);
        const movement = Movement.create('FRFFR');

        rover.execute(movement);

        expect(rover.actualPosition()).toBe('1,1,W');
	 });
});

