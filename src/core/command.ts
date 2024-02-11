export class Command {
    
    static create(command :string){

        if(this.notRecognizedCommand(command)){
            throw new Error('Invalid command');
        }

        return new Command(command);
    }

    private constructor(private readonly command :string) { }

    type(): string {
        return this.command;
    }

    private static notRecognizedCommand(command :string) :boolean{
        return  !command || 
                 command.length != 1 || 
                (command.toUpperCase() != 'F' && 
                 command.toUpperCase() != 'R' && 
                 command.toUpperCase() != 'L');
    }
}