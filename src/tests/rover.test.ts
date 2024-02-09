import { Rover } from '../core/rover'
import { World } from '../core/world';

describe('The Rover vehicle', () => {

    it('must be instantiated in a well-formed world and in a particular position in it.', () => {
        const xPos = 3;
        const yPos = 5;
        const orientation = 'N';
        const world = World.create(3, 5)
		
        const rover = Rover.create(world, xPos, yPos, orientation);
		
		expect(rover).toBeInstanceOf(Rover);
	});
});

