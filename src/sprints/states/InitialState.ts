import { Sprint } from "../Sprint";
import { SprintType } from "../SprintType";
import { InProgressState } from "./InProgressState";
import { ISprintState } from "./ISprintState";

export class InitialState implements ISprintState {
    
    private _sprint: Sprint;

    constructor(sprint: Sprint) {
        this._sprint = sprint;
    }

    changeToInitialState(): void {
        throw new Error("Can't change from initial state to initial state");
    }

    changeToInProgressState(): void {
        if (
            this._sprint.getType() === SprintType.RELEASE &&
            this._sprint.getPipelineManager() == null
        ) {
            throw new Error("Can't change to in progress state without a pipeline manager");
        } else {
            this._sprint.setState(new InProgressState(this._sprint));
        }
    }

    changeToFinishedState(): void {
        throw new Error("Can't change from initial state to finished state");
    }

    changeToReleasingState(): void {
        throw new Error("Can't change from initial state to releasing state");
    }

    changeToReleasedState(): void {
        throw new Error("Can't change from initial state to released state");
    }

    changeToReleaseCancelledState(): void {
        throw new Error("Can't change from initial state to release cancelled state");
    }
}