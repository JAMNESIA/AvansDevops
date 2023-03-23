import { Sprint } from "../Sprint";
import { FinishedState } from "./FinishedState";
import { ISprintState } from "./ISprintState";

export class InProgressState implements ISprintState {
    
    private _sprint: Sprint;

    constructor(sprint: Sprint) {
        this._sprint = sprint;
    }

    changeToInitialState(): void {
        throw new Error("Can't change from in progress to initial.");
    }

    changeToInProgressState(): void {
        throw new Error("Can't change from in progress to in progress.");
    }

    changeToFinishedState(): void {
        this._sprint.setState(new FinishedState(this._sprint));
    }

    changeToReleasingState(): void {
        throw new Error("Can't change from in progress to releasing.");
    }

    changeToReleasedState(): void {
        throw new Error("Can't change from in progress to released.");
    }

    changeToReleaseCancelledState(): void {
        throw new Error("Can't change from in progress to release cancelled.");
    }

}