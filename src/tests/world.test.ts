import { Position } from '../core/position';
import { World } from '../core/world';

describe('The World', () => {

	it('can be instantiated.', () => {
		const dimX = 5;
		const dimY = 4;
		
		const world = World.create(dimX, dimY);
		
		expect(world).toBeInstanceOf(World);
	});

	it('must be instantiated with X dimension greather than zero.', () => {
		const dimX = -5;
		const dimY = 4;
		
		expect(() => {
			World.create(dimX, dimY);	
		}).toThrow(Error('X dimension must be greather than zero.'));
		
	});

	it('must be instantiated with Y dimension greather than zero.', () => {
		const dimX = 5;
		const dimY = 0;
		
		expect(() => {
			World.create(dimX, dimY);	
		}).toThrow(Error('Y dimension must be greather than zero.'));
		
	});

	it('returns not valid position if it is out of the X dimension limit.', () => {
		const xPos = 8;
		const yPos = 2;
		const dimX = 5;
		const dimY = 5;
		const world = World.create(dimX, dimY)
		const position = Position.create(xPos, yPos, 'N');
		
		expect(world.isAllowed(position)).toBe(false);
	});

	it('returns not valid position if it is out of the Y dimension limit.', () => {
		const xPos = 1;
		const yPos = 12;
		const dimX = 5;
		const dimY = 5;
		const world = World.create(dimX, dimY)
		const position = Position.create(xPos, yPos, 'N');

		expect(world.isAllowed(position)).toBe(false);
	});
});