import { BacklogItemState } from "./BacklogItemState";
import { TestingState } from "./TestingState";

export class ReadyForTestingState extends BacklogItemState{
    public setTesting(): BacklogItemState {
        return new TestingState();
    }
}
