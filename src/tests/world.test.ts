import { World } from '../core/world';

describe('The World', () => {

	it('can be instantiated.', () => {
		
		const world = new World(5, 4);
		
		expect(world).toBeInstanceOf(World);
		
	});
});