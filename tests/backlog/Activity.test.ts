import { expect } from 'chai';
import { Activity } from '../../src/backlog/Activity';
import { Developer } from '../../src/account/Developer';

describe('Activity', () => {
    describe('constructor', () => {
        it('should create an activity', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date, developer);
            expect(activity.id).to.equal(1);
            expect(activity.title).to.equal('title');
            expect(activity.description).to.equal('description');
            expect(activity.due).to.equal(date);
            expect(activity.assignees).to.include(developer);
        });

        it('should create an activity with multiple assignees', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const developer2 = new Developer(2, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date, [developer, developer2]);
            expect(activity.id).to.equal(1);
            expect(activity.title).to.equal('title');
            expect(activity.description).to.equal('description');
            expect(activity.due).to.equal(date);
            expect(activity.assignees).to.include(developer);
            expect(activity.assignees).to.include(developer2);
        });

        it('should create an activity with no assignees', () => {
            const date = new Date();
            const activity = new Activity(1, 'title', 'description', date);
            expect(activity.id).to.equal(1);
            expect(activity.title).to.equal('title');
            expect(activity.description).to.equal('description');
            expect(activity.due).to.equal(date);
            expect(activity.assignees).to.be.empty;
        });

        it('should create an activity with no assignees', () => {
            const date = new Date();
            const activity = new Activity(1, 'title', 'description', date);
            expect(activity.id).to.equal(1);
            expect(activity.title).to.equal('title');
            expect(activity.description).to.equal('description');
            expect(activity.due).to.equal(date);
            expect(activity.assignees).to.be.empty;
        }); 
    });

    describe('addAssignee', () => {
        it('should add an assignee', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date);
            activity.addAssignee(developer);
            expect(activity.assignees).to.include(developer);
        });

        it('should add multiple assignees', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const developer2 = new Developer(2, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date);
            activity.addAssignee(developer);
            activity.addAssignee(developer2);
            expect(activity.assignees).to.include(developer);
            expect(activity.assignees).to.include(developer2);
        }); 

        it('should not add an assignee twice', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date);
            activity.addAssignee(developer);
            
            expect(() => activity.addAssignee(developer)).to.throw('Assignee already exists in this activity');
        });
    });

    describe('removeAssignee', () => {
        it('should remove an assignee', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date);
            activity.addAssignee(developer);
            activity.removeAssignee(developer);
            expect(activity.assignees).to.be.empty;
        });

        it('should throw an error when removing an assignee that does not exist', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date);
            expect(() => activity.removeAssignee(developer)).to.throw('Assignee does not exist in this activity');
        });
    });

    describe('getters and setters' , () => { 
        it('should set and get the id', () => {
            const date = new Date();
            const activity = new Activity(1, 'title', 'description', date);
            expect(activity.id).to.equal(1);
        });

        it('should set and get the title', () => {
            const date = new Date();
            const activity = new Activity(1, 'title', 'description', date);
            activity.title = "new title";
            expect(activity.title).to.equal('new title');
        }); 

        it('should set and get the description', () => {
            const date = new Date();
            const activity = new Activity(1, 'title', 'description', date);
            activity.description = "new description";
            expect(activity.description).to.equal('new description');
        }); 

        it('should set and get the due date', () => {
            const date = new Date();
            const activity = new Activity(1, 'title', 'description', date);
            const newDate = new Date();
            activity.due = newDate;
            expect(activity.due).to.equal(newDate);
        }); 
        
        it('should set and get the assignees', () => {
            const date = new Date();
            const developer = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            const activity = new Activity(1, 'title', 'description', date);
            activity.assignees = [developer];
            expect(activity.assignees).to.include(developer);
        }); 
    });
});
