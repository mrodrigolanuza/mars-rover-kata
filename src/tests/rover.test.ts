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
                                   xPos, 
                                   yPos, 
                                   orientation);
		
		expect(rover).toBeInstanceOf(Rover);
	});

    it('can not be instantiated if the position is not contained within the world dimensions.', () => {
        const xDim = 3;
        const yDim = 5;
        const world = World.create(xDim, yDim)
		
        expect(() => {
            const xPos = -100;
            const yPos = 100;
            const orientation = 'N';
            const rover = Rover.create(world, xPos, yPos, orientation);
        }).toThrow('Rover can not be placed in the given position');
	});
});

