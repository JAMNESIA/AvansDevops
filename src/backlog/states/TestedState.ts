import { BacklogItem } from "../BacklogItem";
import { BacklogItemState } from "./BacklogItemState";
import { DoneState } from "./DoneState";
import { ReadyForTestingState } from "./ReadyForTestingState";

export class TestedState extends BacklogItemState{
    constructor(backlogItem: BacklogItem){
        super(backlogItem);
    }

    public setReadyForTesting(): void {
        return this._backlogItem.setState(new ReadyForTestingState(this._backlogItem));
    }

    public setDone(): void {
        return this._backlogItem.setState(new DoneState(this._backlogItem));
    } 
}
