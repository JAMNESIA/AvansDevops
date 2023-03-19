import { BacklogItemState } from "./BacklogItemState";
import { ReadyForTestingState } from "./ReadyForTestingState";

export class DoingState extends BacklogItemState{
    public setReadyForTesting(): BacklogItemState {
        return new ReadyForTestingState();
    }
}
