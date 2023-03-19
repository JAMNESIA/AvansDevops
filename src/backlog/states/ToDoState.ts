import { BacklogItemState } from "./BacklogItemState";
import { DoingState } from "./DoingState";


export class ToDoState extends BacklogItemState{
    public setDoing() : BacklogItemState{
        return new DoingState();
    }
}
