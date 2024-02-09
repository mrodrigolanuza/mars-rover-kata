import { Rover } from '../core/rover'
import { World } from '../core/world';

describe('The Rover vehicle', () => {

    it('must be instantiated in a well-formed world.', () => {
		
		const world = World.create(3, 5)

		const rover = Rover.create(world);
		
		expect(rover).toBeInstanceOf(Rover);
	});
});

