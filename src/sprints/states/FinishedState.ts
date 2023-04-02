import { Sprint } from "../Sprint";
import { SprintType } from "../SprintType";
import { ISprintState } from "./ISprintState";
import { ReleaseCancelledState } from "./ReleaseCanceledState";
import { ReleasingState } from "./ReleasingState";

export class FinishedState implements ISprintState {
    
    private _sprint: Sprint

    constructor(sprint: Sprint) {
        this._sprint = sprint;
    }
    
    changeToInitialState(): void {
        throw new Error("Can't change from finished to initial.");
    }

    changeToInProgressState(): void {
        throw new Error("Can't change from finished to in progress.");
    }

    changeToFinishedState(): void {
        throw new Error("Can't change from finished to finished.");
    }

    changeToReleasingState(): void {
        if (this._sprint.getType() === SprintType.RELEASE) {
            this._sprint.setState(new ReleasingState(this._sprint));
        } else {
            throw new Error("Can't change from finished to releasing.");
        }
    }

    changeToReleasedState(): void {
        throw new Error("Can't change from finished to released.");
    }

    changeToReleaseCancelledState(): void {
        if (this._sprint.getType() === SprintType.RELEASE) {
            this._sprint.setState(new ReleaseCancelledState(this._sprint));
        } else {
            throw new Error("Can't change from finished to release cancelled.");
        }
    }
    
}
