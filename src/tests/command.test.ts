import { Command } from '../core/command'

describe('The Command', () => {

    it('must throw an error when command not recognized.', () => {
        
        expect(()=>{
            Command.create('X');
        }).toThrow(Error('Invalid command'));
        
	});

    it('must be instantiated when recognized command.', () => {
        expect(Command.create('F')).toBeInstanceOf(Command);
	});
});
