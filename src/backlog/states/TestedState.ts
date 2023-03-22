import { BacklogItemState } from "./BacklogItemState";
import { DoneState } from "./DoneState";

export class TestedState extends BacklogItemState{
    public setDone(): BacklogItemState {
        return new DoneState();
    } 
}
