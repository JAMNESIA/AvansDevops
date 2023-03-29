import { BacklogItem } from "../BacklogItem";
import { BacklogItemState } from "./BacklogItemState";
import { ToDoState } from "./ToDoState";

export class DoneState extends BacklogItemState{
    constructor(backlogItem: BacklogItem){
        super(backlogItem);
    }

    public setToDo(): void {
        return this._backlogItem.setState(new ToDoState(this._backlogItem));
    }
}
