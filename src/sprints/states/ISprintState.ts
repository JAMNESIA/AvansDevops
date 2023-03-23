export interface ISprintState {
    changeToInitialState(): void;
    changeToInProgressState(): void;
    changeToFinishedState(): void;
    changeToReleasingState(): void;
    changeToReleasedState(): void;
    changeToReleaseCancelledState(): void;
}