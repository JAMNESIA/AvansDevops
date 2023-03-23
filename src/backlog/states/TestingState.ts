import { BacklogItem } from "../BacklogItem";
import { BacklogItemState } from "./BacklogItemState";
import { TestedState } from "./TestedState";

export class TestingState extends BacklogItemState{
    constructor(backlogItem: BacklogItem){
        super(backlogItem);
    }

    public setTested(): void {
        return this._backlogItem.setState(new TestedState(this._backlogItem));
    }
}
