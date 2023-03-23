import { Sprint } from "../Sprint";
import { ISprintState } from "./ISprintState";
import { ReleasedState } from "./ReleasedState";

export class ReleasingState implements ISprintState {

    private _sprint: Sprint;
    private _RELEASED: string = "Can't change state while releasing";

    constructor(sprint: Sprint) {
        this._sprint = sprint;
    }

    changeToInitialState(): void {
        throw new Error(this._RELEASED);
    }

    changeToInProgressState(): void {
        throw new Error(this._RELEASED);
    }

    changeToFinishedState(): void {
        throw new Error(this._RELEASED);
    }

    changeToReleasingState(): void {
        throw new Error(this._RELEASED);
    }

    changeToReleasedState(): void {
        this._sprint
            .getPipelineManager()
            .executePipeline(1)

        this._sprint.setState(new ReleasedState(this._sprint));
    }

    changeToReleaseCancelledState(): void {
        throw new Error("Method not implemented.");
    }

}