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
        throw new Error(CANCELLED);
    }

    changeToInProgressState(): void {
        throw new Error(CANCELLED);
    }

    changeToFinishedState(): void {
        throw new Error(CANCELLED);
    }

    changeToReleasingState(): void {
        throw new Error(CANCELLED);
    }

    changeToReleasedState(): void {
        throw new Error(CANCELLED);
    }

    changeToReleaseCancelledState(): void {
        throw new Error(CANCELLED);
    }

}