import { BacklogItem } from "../BacklogItem";
import { BacklogItemState } from "./BacklogItemState";
import { ReadyForTestingState } from "./ReadyForTestingState";

export class DoingState extends BacklogItemState{
    constructor(backlogItem: BacklogItem){
        super(backlogItem);
    }

    public setReadyForTesting(): void {
        return this._backlogItem.setState(new ReadyForTestingState(this._backlogItem));
    }
}
