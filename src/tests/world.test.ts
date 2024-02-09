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
			const world = World.create(dimX, dimY);	
		}).toThrow(Error('X dimension must be greather than zero.'));
		
	});

	it('must be instantiated with Y dimension greather than zero.', () => {
		
		const dimX = 5;
		const dimY = 0;
		
		expect(() => {
			const world = World.create(dimX, dimY);	
		}).toThrow(Error('Y dimension must be greather than zero.'));
		
	});
});