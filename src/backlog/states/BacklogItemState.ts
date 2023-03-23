import { BacklogItem } from "../BacklogItem";
import { IBacklogItemState } from "../interfaces/IBacklogItemState";

export abstract class BacklogItemState implements IBacklogItemState{
    public _backlogItem : BacklogItem;
    
    constructor(backlogItem : BacklogItem){
        this._backlogItem = backlogItem;
    }

    public setToDo() : void{
        throw new Error("InvalidStateException: Can't perform action in current state.");
    }
    public setDoing() : void{
        throw new Error("InvalidStateException: Can't perform action in current state.");
    }
    public setReadyForTesting() : void{
        throw new Error("InvalidStateException: Can't perform action in current state.");
    }
    public setTesting() : void{
        throw new Error("InvalidStateException: Can't perform action in current state.");
    }
    public setTested() : void{
        throw new Error("InvalidStateException: Can't perform action in current state.");
    }
    public setDone() : void{
        throw new Error("InvalidStateException: Can't perform action in current state.");
    }
}
