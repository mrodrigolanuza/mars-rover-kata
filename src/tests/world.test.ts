import { World } from '../core/world';

describe('The World', () => {

	it('can be instantiated.', () => {
		
		const dimX = 5;
		const dimY = 4;
		
		const world = World.create(dimX, dimY);
		
		expect(world).toBeInstanceOf(World);
		
	});
});