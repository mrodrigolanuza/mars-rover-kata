import { moveMessagePortToContext } from 'worker_threads';
import { Movement } from '../core/movement'

describe('The Movement', () => {

    it('must throw an error when is empty.', () => {
        
        expect(()=>{
            const movement = Movement.create(' ');
        }).toThrow(Error('Movement cannot be empty.'));
        
	});

    it('must be instantiated when built with valid command.', () => {
        
        const movement = Movement.create('F');

        expect(movement).toBeInstanceOf(Movement);
        expect(movement.commands().length).toBe(1);
        expect(movement.commands()[0].type()).toBe('F');
	});

    it('must be instantiated when built with a valid set of commands.', () => {
        
        const movement = Movement.create('FRFFL');

        expect(movement).toBeInstanceOf(Movement);
        expect(movement.commands().length).toBe(5);
        expect(movement.commands()[0].type()).toBe('F');
        expect(movement.commands()[1].type()).toBe('R');
        expect(movement.commands()[2].type()).toBe('F');
        expect(movement.commands()[3].type()).toBe('F');
        expect(movement.commands()[4].type()).toBe('L');
	});
});
