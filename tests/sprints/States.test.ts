const { expect } = require('chai');
const { FinishedState } = require('../../src/sprints/states/FinishedState');
const { InProgressState } = require('../../src/sprints/states/InProgressState');
const { InitialState } = require('../../src/sprints/states/InitialState');
const { ISprintState } = require('../../src/sprints/states/ISprintState');
const { ReleaseCancelledState } = require('../../src/sprints/states/ReleaseCanceledState');
const { ReleasedState } = require('../../src/sprints/states/ReleasedState');
const { ReleasingState } = require('../../src/sprints/states/ReleasingState');
const { Sprint } = require('../../src/sprints/Sprint');
const { ScrumMaster } = require('../../src/account/ScrumMaster');

describe('Sprint States', () => {
    const scrumMaster = new ScrumMaster(1, 'name', 'email', 'phonenumber', 'slack'); 
    const sprint = new Sprint({
        type: "RELEASE",
        name: "name",
        scrumMaster
    });

    const sprint2 = new Sprint({
        type: "REVIEW",
        name: "name",
        scrumMaster
    });

    const sprint3 = new Sprint({
        type: "RELEASE",
        name: "name",
        scrumMaster
    });

    // InitialState
    // InProgressState
    // FinishedState
    // ReleasingState
    // ReleasedState
    // ReleaseCancelledState

    describe('InitialState', () => {
        it('should create a sprint', () => {
            const initialState = new InitialState(sprint);
            expect(initialState instanceof InitialState).to.equal(true);
            expect(initialState instanceof InProgressState).to.equal(false);
            expect(initialState instanceof FinishedState).to.equal(false);
            expect(initialState instanceof ReleasingState).to.equal(false);
            expect(initialState instanceof ReleasedState).to.equal(false);
        });
        
        it('should change state to InProgressState', () => {
            const initialState = new InitialState(sprint);
            initialState.changeToInProgressState();
            expect(sprint.getState()).to.be.an.instanceof(InProgressState);
        });
        
        it('should throw an error when trying to change from initial state to initial state', () => {
            const initialState = new InitialState(sprint);
            expect(() => initialState.changeToInitialState()).to.throw('Can\'t change from initial state to initial state');
        });

        it('should throw an error when trying to change from initial state to finished state', () => {
            const initialState = new InitialState(sprint);
            expect(() => initialState.changeToFinishedState()).to.throw('Can\'t change from initial state to finished state');
        });

        it('should throw an error when trying to change from initial state to releasing state', () => {
            const initialState = new InitialState(sprint);
            expect(() => initialState.changeToReleasingState()).to.throw('Can\'t change from initial state to releasing state');
        });

        it('should throw an error when trying to change from initial state to released state', () => {
            const initialState = new InitialState(sprint);
            expect(() => initialState.changeToReleasedState()).to.throw('Can\'t change from initial state to released state');
        });

        it('should throw an error when trying to change from initial state to release cancelled state', () => {
            const initialState = new InitialState(sprint);
            expect(() => initialState.changeToReleaseCancelledState()).to.throw('Can\'t change from initial state to release cancelled state');
        });

        it('should throw an error when trying to change from initial state to in progress state with no pipeline manager', () => {
            sprint3.setPipelineManager(null);
            const initialState = new InitialState(sprint3);
            expect(() => initialState.changeToInProgressState()).to.throw('Can\'t change to in progress state without a pipeline manager');
        });
    });

    describe('InProgressState', () => { 
        it('should create a sprint', () => {
            const inProgressState = new InProgressState(sprint);
            expect(inProgressState instanceof InitialState).to.equal(false);
            expect(inProgressState instanceof InProgressState).to.equal(true);
            expect(inProgressState instanceof FinishedState).to.equal(false);
            expect(inProgressState instanceof ReleasingState).to.equal(false);
            expect(inProgressState instanceof ReleasedState).to.equal(false);
        });

        it('should throw an error when trying to change from in progress state to initial state', () => {
            const inProgressState = new InProgressState(sprint);
            expect(() => inProgressState.changeToInitialState()).to.throw('Can\'t change from in progress to initial');
        });

        it('should throw an error when trying to change from in progress state to in progress state', () => {
            const inProgressState = new InProgressState(sprint);
            expect(() => inProgressState.changeToInProgressState()).to.throw('Can\'t change from in progress to in progress');
        });

        it('should throw an error when trying to change from in progress state to releasing state', () => {
            const inProgressState = new InProgressState(sprint);
            expect(() => inProgressState.changeToReleasingState()).to.throw('Can\'t change from in progress to releasing');
        });

        it('should throw an error when trying to change from in progress state to released state', () => {
            const inProgressState = new InProgressState(sprint);
            expect(() => inProgressState.changeToReleasedState()).to.throw('Can\'t change from in progress to released');
        });

        it('should throw an error when trying to change from in progress state to release cancelled state', () => {
            const inProgressState = new InProgressState(sprint);
            expect(() => inProgressState.changeToReleaseCancelledState()).to.throw('Can\'t change from in progress to release cancelled');
        });

        it('should change state to FinishedState', () => {
            const inProgressState = new InProgressState(sprint);
            inProgressState.changeToFinishedState();
            expect(sprint.getState()).to.be.an.instanceof(FinishedState);
        });
    });

    describe('FinishedState', () => {
        it('should create a sprint', () => {
            const finishedState = new FinishedState(sprint);
            expect(finishedState instanceof InitialState).to.equal(false);
            expect(finishedState instanceof InProgressState).to.equal(false);
            expect(finishedState instanceof FinishedState).to.equal(true);
            expect(finishedState instanceof ReleasingState).to.equal(false);
            expect(finishedState instanceof ReleasedState).to.equal(false);
        });

        it('should throw an error when trying to change from finished state to initial state', () => {
            const finishedState = new FinishedState(sprint);
            expect(() => finishedState.changeToInitialState()).to.throw('Can\'t change from finished to initial');
        });

        it('should throw an error when trying to change from finished state to in progress state', () => {
            const finishedState = new FinishedState(sprint);
            expect(() => finishedState.changeToInProgressState()).to.throw('Can\'t change from finished to in progress');
        });

        it('should throw an error when trying to change from finished state to finished state', () => {
            const finishedState = new FinishedState(sprint);
            expect(() => finishedState.changeToFinishedState()).to.throw('Can\'t change from finished to finished');
        });

        it('should work when trying to change from finished state to releasing state', () => {
            const finishedState = new FinishedState(sprint);
            expect(() => finishedState.changeToReleasingState()).to.not.throw();
        });

        it('should throw an error when trying to change from finished state to released state', () => {
            const finishedState = new FinishedState(sprint);
            expect(() => finishedState.changeToReleasedState()).to.throw('Can\'t change from finished to released');
        });

        it('should work when trying to change from finished state to release cancelled state', () => {
            const finishedState = new FinishedState(sprint);
            expect(() => finishedState.changeToReleaseCancelledState()).to.not.throw();
        });

        it('should change state to ReleasingState', () => {
            const finishedState = new FinishedState(sprint);
            finishedState.changeToReleasingState();
            expect(sprint.getState()).to.be.an.instanceof(ReleasingState);
        });

        it('should throw error when trying to change state to ReleasingState but sprint is not release type', () => {
            const finishedState = new FinishedState(sprint2);
            expect(() => finishedState.changeToReleasingState()).to.throw('Can\'t change from finished to releasing');
        });

        it('should throw error when trying to change state to changeToReleaseCancelledState but sprint is not release type' , () => {
            const finishedState = new FinishedState(sprint2);
            expect(() => finishedState.changeToReleaseCancelledState()).to.throw('Can\'t change from finished to release cancelled');
        });
    });

    describe('ReleasingState', () => {
        it('should create a sprint', () => {
            const releasingState = new ReleasingState(sprint);
            expect(releasingState instanceof InitialState).to.equal(false);
            expect(releasingState instanceof InProgressState).to.equal(false);
            expect(releasingState instanceof FinishedState).to.equal(false);
            expect(releasingState instanceof ReleasingState).to.equal(true);
            expect(releasingState instanceof ReleasedState).to.equal(false);
        });

        it('should throw an error when trying to change from releasing state to initial state', () => {
            const releasingState = new ReleasingState(sprint);
            expect(() => releasingState.changeToInitialState()).to.throw('Can\'t change state while releasing');
        });

        it('should throw an error when trying to change from releasing state to in progress state', () => {
            const releasingState = new ReleasingState(sprint);
            expect(() => releasingState.changeToInProgressState()).to.throw('Can\'t change state while releasing');
        });

        it('should throw an error when trying to change from releasing state to finished state', () => {
            const releasingState = new ReleasingState(sprint);
            expect(() => releasingState.changeToFinishedState()).to.throw('Can\'t change state while releasing');
        });

        it('should throw an error when trying to change from releasing state to releasing state', () => {
            const releasingState = new ReleasingState(sprint);
            expect(() => releasingState.changeToReleasingState()).to.throw('Can\'t change state while releasing');
        });

        it('should work when trying to change from releasing state to released state', () => {
            const releasingState = new ReleasingState(sprint);
            expect(() => releasingState.changeToReleasedState()).to.not.throw();
        });

        it('should throw an error when trying to change from releasing state to release cancelled state', () => {
            const releasingState = new ReleasingState(sprint);
            expect(() => releasingState.changeToReleaseCancelledState()).to.throw('Method not implemented.');
        });

        it('should change state to ReleasedState', () => {
            const releasingState = new ReleasingState(sprint);
            releasingState.changeToReleasedState();
            expect(sprint.getState()).to.be.an.instanceof(ReleasedState);
        });

        it('should throw when state to ReleaseCancelledState', () => {
            const releasingState = new ReleasingState(sprint);
            expect(() => releasingState.changeToReleaseCancelledState()).to.throw('Method not implemented.');
        });
    });

    describe('ReleasedState', () => {
        it('should create a sprint', () => {
            const releasedState = new ReleasedState(sprint);
            expect(releasedState instanceof InitialState).to.equal(false);
            expect(releasedState instanceof InProgressState).to.equal(false);
            expect(releasedState instanceof FinishedState).to.equal(false);
            expect(releasedState instanceof ReleasingState).to.equal(false);
            expect(releasedState instanceof ReleasedState).to.equal(true);
        });

        it('should throw an error when trying to change from released state to initial state', () => {
            const releasedState = new ReleasedState(sprint);
            expect(() => releasedState.changeToInitialState()).to.throw('SUCCESS');
        });

        it('should throw an error when trying to change from released state to in progress state', () => {
            const releasedState = new ReleasedState(sprint);
            expect(() => releasedState.changeToInProgressState()).to.throw('SUCCESS');
        });

        it('should throw an error when trying to change from released state to finished state', () => {
            const releasedState = new ReleasedState(sprint);
            expect(() => releasedState.changeToFinishedState()).to.throw('SUCCESS');
        });

        it('should throw an error when trying to change from released state to releasing state', () => {
            const releasedState = new ReleasedState(sprint);
            expect(() => releasedState.changeToReleasingState()).to.throw('SUCCESS');
        });

        it('should throw an error when trying to change from released state to released state', () => {
            const releasedState = new ReleasedState(sprint);
            expect(() => releasedState.changeToReleasedState()).to.throw('SUCCESS');
        });

        it('should throw an error when trying to change from released state to release cancelled state', () => {
            const releasedState = new ReleasedState(sprint);
            expect(() => releasedState.changeToReleaseCancelledState()).to.throw('SUCCESS');
        });
    });

    describe('ReleaseCancelledState', () => {
        it('should create a sprint', () => {
            const releaseCancelledState = new ReleaseCancelledState(sprint);
            expect(releaseCancelledState instanceof InitialState).to.equal(false);
            expect(releaseCancelledState instanceof InProgressState).to.equal(false);
            expect(releaseCancelledState instanceof FinishedState).to.equal(false);
            expect(releaseCancelledState instanceof ReleasingState).to.equal(false);
            expect(releaseCancelledState instanceof ReleasedState).to.equal(false);
            expect(releaseCancelledState instanceof ReleaseCancelledState).to.equal(true);
        });

        it('should throw an error when trying to change from release cancelled state to initial state', () => {
            const releaseCancelledState = new ReleaseCancelledState(sprint);
            expect(() => releaseCancelledState.changeToInitialState()).to.throw('CANCELLED');
        });

        it('should throw an error when trying to change from release cancelled state to in progress state', () => {
            const releaseCancelledState = new ReleaseCancelledState(sprint);
            expect(() => releaseCancelledState.changeToInProgressState()).to.throw('CANCELLED');
        });

        it('should throw an error when trying to change from release cancelled state to finished state', () => {
            const releaseCancelledState = new ReleaseCancelledState(sprint);
            expect(() => releaseCancelledState.changeToFinishedState()).to.throw('CANCELLED');
        });

        it('should throw an error when trying to change from release cancelled state to releasing state', () => {
            const releaseCancelledState = new ReleaseCancelledState(sprint);
            expect(() => releaseCancelledState.changeToReleasingState()).to.throw('CANCELLED');
        });

        it('should throw an error when trying to change from release cancelled state to released state', () => {
            const releaseCancelledState = new ReleaseCancelledState(sprint);
            expect(() => releaseCancelledState.changeToReleasedState()).to.throw('CANCELLED');
        });

        it('should throw an error when trying to change from release cancelled state to release cancelled state', () => {
            const releaseCancelledState = new ReleaseCancelledState(sprint);
            expect(() => releaseCancelledState.changeToReleaseCancelledState()).to.throw('Can\'t change from release cancelled to release cancelled');
        });
    });
});
