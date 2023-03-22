import { BacklogItemState } from "./BacklogItemState";
import { TestedState } from "./TestedState";

export class TestingState extends BacklogItemState{
    public setTested(): BacklogItemState {
        return new TestedState();
    }
}
