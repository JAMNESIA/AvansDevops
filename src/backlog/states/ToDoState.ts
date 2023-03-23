import { BacklogItem } from "../BacklogItem";
import { BacklogItemState } from "./BacklogItemState";
import { DoingState } from "./DoingState";


export class ToDoState extends BacklogItemState{
    constructor(backlogItem: BacklogItem){
        super(backlogItem);
    }

    public setDoing() : void{
        return this._backlogItem.setState(new DoingState(this._backlogItem));
    }
}
