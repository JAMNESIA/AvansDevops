import { BacklogItem } from "../BacklogItem";
import { BacklogItemState } from "./BacklogItemState";
import { TestingState } from "./TestingState";
import { ToDoState } from "./ToDoState";

export class ReadyForTestingState extends BacklogItemState{
    constructor(backlogItem: BacklogItem){
        super(backlogItem);
    }

    public setToDo(): void {
        return this._backlogItem.setState(new ToDoState(this._backlogItem));
    }
    
    public setTesting(): void {
        return this._backlogItem.setState(new TestingState(this._backlogItem));
    }
}
