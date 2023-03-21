import { IBacklogItemState } from "../interfaces/IBacklogItemState";

export abstract class BacklogItemState implements IBacklogItemState{
    public setToDo() : BacklogItemState{
        throw new Error("InvalidStateExeption: Can't peform action in current state.");
    }
    public setDoing() : BacklogItemState{
        throw new Error("InvalidStateExeption: Can't peform action in current state.");
    }
    public setReadyForTesting() : BacklogItemState{
        throw new Error("InvalidStateExeption: Can't peform action in current state.");
    }
    public setTesting() : BacklogItemState{
        throw new Error("InvalidStateExeption: Can't peform action in current state.");
    }
    public setTested() : BacklogItemState{
        throw new Error("InvalidStateExeption: Can't peform action in current state.");
    }
    public setDone() : BacklogItemState{
        throw new Error("InvalidStateExeption: Can't peform action in current state.");
    }
}
