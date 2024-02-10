import { Command } from "./command";

export class Movement {
    private constructor(private readonly cmds: Command[]) { }

    static create(movement: string): Movement{
        
        if(this.isEmpty(movement)){
            throw Error('Movement cannot be empty.')
        }

        let commands = Movement.extractCommandsFrom(movement);
        return new Movement((commands));
    }

    commands(): Command[]{
        return this.cmds;
    }

    private static extractCommandsFrom(movement: string) {
        return movement.split("")
                       .map(cmd => Command.create(cmd));
    }

    private static isEmpty(movement :string) :boolean{
        return !movement || movement.trim().length == 0;
    }
}