import { Sprint } from "../Sprint";
import { ISprintState } from "./ISprintState";

export class ReleasedState implements ISprintState {

    private _sprint: Sprint;
    private _SUCCESS: string = "SUCCESS";

    constructor(sprint: Sprint) {
        this._sprint = sprint;
    }

    changeToInitialState(): void {
        throw new Error(this._SUCCESS);
    }

    changeToInProgressState(): void {
        throw new Error(this._SUCCESS);
    }

    changeToFinishedState(): void {
        throw new Error(this._SUCCESS);
    }

    changeToReleasingState(): void {
        throw new Error(this._SUCCESS);
    }

    changeToReleasedState(): void {
        throw new Error(this._SUCCESS);
    }

    changeToReleaseCancelledState(): void {
        throw new Error(this._SUCCESS);
    }

}