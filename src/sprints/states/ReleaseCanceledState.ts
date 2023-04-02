import { CANCELLED } from "dns";
import { Sprint } from "../Sprint";
import { ISprintState } from "./ISprintState";

export class ReleaseCancelledState implements ISprintState {
    
    private _sprint: Sprint;
    private _CANCELLED: string = "CANCELLED";

    constructor(sprint: Sprint) {
        this._sprint = sprint;
    }
    
    changeToInitialState(): void {
        throw new Error(this._CANCELLED);
    }

    changeToInProgressState(): void {
        throw new Error(this._CANCELLED);
    }

    changeToFinishedState(): void {
        throw new Error(this._CANCELLED);
    }

    changeToReleasingState(): void {
        throw new Error(this._CANCELLED);
    }

    changeToReleasedState(): void {
        throw new Error(this._CANCELLED);
    }

    changeToReleaseCancelledState(): void {
        throw new Error('Can\'t change from release cancelled to release cancelled');
    }

}