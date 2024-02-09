import { World } from '../core/world';

describe('The World', () => {

	it('can be instantiated.', () => {
		
		const world = World.create(5, 4);
		
		expect(world).toBeInstanceOf(World);
		
	});
});