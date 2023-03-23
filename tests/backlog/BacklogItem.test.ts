import { expect } from 'chai';
import { BacklogItem } from '../../src/backlog/BacklogItem';
import { ToDoState } from '../../src/backlog/states/ToDoState';
import { ReadyForTestingState } from '../../src/backlog/states/ReadyForTestingState';
import { TestingState } from '../../src/backlog/states/TestingState';
import { TestedState } from '../../src/backlog/states/TestedState';
import { DoneState } from '../../src/backlog/states/DoneState';
import { DoingState } from '../../src/backlog/states/DoingState';

describe('BacklogItem', () => {
    let backlogItem: BacklogItem;

    beforeEach(() => {
        backlogItem = new BacklogItem(1, 'Test Backlog Item', 'This is a test', new Date());
    });

    it('should have a default state of ToDoState', () => {
        expect(backlogItem.getState()).to.be.an.instanceOf(ToDoState);
    });

    it('should be able to change state to Doing', () => {
        backlogItem.setDoing();
        expect(backlogItem.getState()).to.be.an.instanceOf(DoingState);
    });

    it('should be able to change state to ReadyForTestingState', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        expect(backlogItem.getState()).to.be.an.instanceOf(ReadyForTestingState);
    });

    it('should be able to change state to TestingState', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        expect(backlogItem.getState()).to.be.an.instanceOf(TestingState);
    });

    it('should be able to change state to TestedState', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        expect(backlogItem.getState()).to.be.an.instanceOf(TestedState);
    });

    it('should be able to change state to DoneState', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setDone();
        expect(backlogItem.getState()).to.be.an.instanceOf(DoneState);
    });

    // it('should throw an error when trying to change state to ToDoState from ReadyForTestingState', () => {
    //     backlogItem.setReadyForTesting();
    //     expect(() => backlogItem.setToDo()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to TestingState from ReadyForTestingState', () => {
    //     expect(() => backlogItem.setTesting()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to TestedState from ReadyForTestingState', () => {
    //     expect(() => backlogItem.setTested()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to DoneState from ReadyForTestingState', () => {
    //     expect(() => backlogItem.setDone()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to ReadyForTestingState from TestingState', () => {
    //     backlogItem.setTesting();
    //     expect(() => backlogItem.setReadyForTesting()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to ToDoState from TestingState', () => {
    //     backlogItem.setTesting();
    //     expect(() => backlogItem.setToDo()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to TestedState from TestingState', () => {
    //     backlogItem.setTesting();
    //     expect(() => backlogItem.setTested()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to DoneState from TestingState', () => {
    //     backlogItem.setTesting();
    //     expect(() => backlogItem.setDone()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to ToDoState from TestedState', () => {
    //     backlogItem.setTesting();
    //     backlogItem.setTested();
    //     expect(() => backlogItem.setToDo()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to ReadyForTestingState from TestedState', () => {
    //     backlogItem.setTesting();
    //     backlogItem.setTested();
    //     expect(() => backlogItem.setReadyForTesting()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to TestingState from TestedState', () => {
    //     backlogItem.setTesting();
    //     backlogItem.setTested();
    //     expect(() => backlogItem.setTesting()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });

    // it('should throw an error when trying to change state to DoneState from TestedState', () => {
    //     backlogItem.setTesting();
    //     backlogItem.setTested();
    //     expect(() => backlogItem.setDone()).to.throw(Error('InvalidStateException: Can\'t perform action in current state.'));
    // });
});
