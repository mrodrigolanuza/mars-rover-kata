import { Command } from '../core/command'

describe('The Command', () => {

    it('must throw an error when command not recognized.', () => {
        
        expect(()=>{
            const command = Command.create('X');
        }).toThrow(Error('Invalid command'));
        
	});

    it('must be instantiated when recognized command.', () => {
        
        const command = Command.create('F');

        expect(command).toBeInstanceOf(Command);
        
	});
});
