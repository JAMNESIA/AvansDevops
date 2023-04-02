import { expect } from 'chai';
import { BacklogItem } from '../../src/backlog/BacklogItem';
import { ToDoState } from '../../src/backlog/states/ToDoState';
import { ReadyForTestingState } from '../../src/backlog/states/ReadyForTestingState';
import { TestingState } from '../../src/backlog/states/TestingState';
import { TestedState } from '../../src/backlog/states/TestedState';
import { DoneState } from '../../src/backlog/states/DoneState';
import { DoingState } from '../../src/backlog/states/DoingState';
import { Activity } from '../../src/backlog/Activity';

describe('BacklogItem', () => {
    let backlogItem: BacklogItem;
    let activity: Activity;

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

    it('should be able to change state to DoneState', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setDone();
        expect(backlogItem.getState()).to.be.an.instanceOf(DoneState);
    });

    it('should be able to change state to ToDoState from Done', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setDone();
        backlogItem.setToDo();
        expect(backlogItem.getState()).to.be.an.instanceOf(ToDoState);
    });

    it('should be able to change state ToDoState from ReadyForTestingState', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setToDo();
        expect(backlogItem.getState()).to.be.an.instanceOf(ToDoState);
    });

    it('should be able to change state to ReadyForTesting from Tested', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setReadyForTesting();
        expect(backlogItem.getState()).to.be.an.instanceOf(ReadyForTestingState);
    });

    //state error tests
    it('should throw an error when trying to set state to ToDo from ToDo', () => {
        expect(() => backlogItem.setToDo()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to ReadyForTesting from ToDo', () => {
        expect(() => backlogItem.setReadyForTesting()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to Testing from ToDo', () => {
        expect(() => backlogItem.setTesting()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to Tested from ToDo', () => {
        expect(() => backlogItem.setTested()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to Done from ToDo', () => {
        expect(() => backlogItem.setDone()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to ToDo from Doing', () => {
        backlogItem.setDoing();
        expect(() => backlogItem.setToDo()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    
    it('should throw an error when trying to set state to Testing from Doing', () => {
        backlogItem.setDoing();
        expect(() => backlogItem.setTesting()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to Tested from Doing', () => {
        backlogItem.setDoing();
        expect(() => backlogItem.setTested()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to Done from Doing', () => {
        backlogItem.setDoing();
        expect(() => backlogItem.setDone()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

   

    it('should throw an error when trying to set state to Doing from ReadyForTesting', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        expect(() => backlogItem.setDoing()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    

    it('should throw an error when trying to set state to Tested from ReadyForTesting', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        expect(() => backlogItem.setTested()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

    it('should throw an error when trying to set state to Done from ReadyForTesting', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        expect(() => backlogItem.setDone()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

    it('should throw an error when trying to set state to ToDo from Testing', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        expect(() => backlogItem.setToDo()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 


    it('should throw an error when trying to set state to Doing from Testing', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        expect(() => backlogItem.setDoing()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

    it('should throw an error when trying to set state to ReadyForTesting from Testing', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        expect(() => backlogItem.setReadyForTesting()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 


    it('should throw an error when trying to set state to Done from Testing', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        expect(() => backlogItem.setDone()).to.throw("InvalidStateException: Can't perform action in current state.");
    });

    it('should throw an error when trying to set state to ToDo from Tested', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        expect(() => backlogItem.setToDo()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

    it('should throw an error when trying to set state to Doing from Tested', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        expect(() => backlogItem.setDoing()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 


    it('should throw an error when trying to set state to Testing from Tested', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        expect(() => backlogItem.setTesting()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

     
    it('should throw an error when trying to set state to Doing from Done', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setDone();
        expect(() => backlogItem.setDoing()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

    it('should throw an error when trying to set state to ReadyForTesting from Done', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setDone();
        expect(() => backlogItem.setReadyForTesting()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

    it('should throw an error when trying to set state to Testing from Done', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setDone();
        expect(() => backlogItem.setTesting()).to.throw("InvalidStateException: Can't perform action in current state.");
    }); 

    it('should throw an error when trying to set state to Tested from Done', () => {
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        backlogItem.setDone();
        expect(() => backlogItem.setTested()).to.throw("InvalidStateException: Can't perform action in current state.");
    });


    it('should set and get activity', () => {
       activity = new Activity(1, 'Test Backlog Item', 'This is a test', new Date()); 
        backlogItem.addActivity(activity);
        expect(backlogItem.getActivities()).to.contain(activity);
    });

    it('should throw error adding the same Activity twice', () => {
        activity = new Activity(1, 'Test Backlog Item', 'This is a test', new Date()); 
        backlogItem.addActivity(activity);
        expect(() => backlogItem.addActivity(activity)).to.throw("Activity already exists in this backlog item");
    });

    it('should remove activity', () => {
        activity = new Activity(1, 'Test Backlog Item', 'This is a test', new Date()); 
        backlogItem.addActivity(activity);
        backlogItem.removeActivity(activity);
        expect(backlogItem.getActivities()).to.not.contain(activity);
    });

    it('should throw error removing an Activity that does not exist', () => {
        activity = new Activity(1, 'Test Backlog Item', 'This is a test', new Date()); 
        expect(() => backlogItem.removeActivity(activity)).to.throw("Activity does not exist in this backlog item");
    });
    
    it('should return true if all activities are completed', () => {
        activity = new Activity(1, 'Test Backlog Item', 'This is a test', new Date()); 
        activity.done = true;
        backlogItem.addActivity(activity);
        expect(backlogItem.isDone()).to.be.true;
    }); 

    it('should return false if not all activities are completed', () => {
        activity = new Activity(1, 'Test Backlog Item', 'This is a test', new Date()); 
        backlogItem.addActivity(activity);
        expect(backlogItem.isDone()).to.be.false;
    });
    
    it('should throw error when trying to set DoneState when not all activities are done', () => {
        activity = new Activity(1, 'Test Backlog Item', 'This is a test', new Date()); 
        backlogItem.addActivity(activity);
        backlogItem.setDoing();
        backlogItem.setReadyForTesting();
        backlogItem.setTesting();
        backlogItem.setTested();
        expect(() => backlogItem.setDone()).to.throw("Not all activities are done");
    });

    
});
