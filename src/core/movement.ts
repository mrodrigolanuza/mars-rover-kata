import { Command } from "./command";

export class Movement {
    
    static create(movement: string): Movement{
        
        if(this.isEmpty(movement)){
            throw Error('A movement must contain one or more commands.')
        }

        let commands = Movement.extractCommandsFrom(movement);
        return new Movement((commands));
    }

    private constructor(private readonly cmds: Command[]) { }

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