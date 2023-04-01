import { expect } from 'chai';
import { Backlog } from '../../src/backlog/Backlog';
import { BacklogItem } from '../../src/backlog/BacklogItem';
import { describe } from 'mocha';

describe('Backlog', () => {
    it('should create a backlog', () => {
        const backlog = new Backlog(1, 'title', 'description');
        expect(backlog.id).to.equal(1);
        expect(backlog.title).to.equal('title');
        expect(backlog.description).to.equal('description');
        expect(backlog.backlogItems).to.be.empty;
    });

    it('should create a backlog with backlog items', () => {
        const backlogItem = new BacklogItem(1, 'title', 'description', new Date());
        const backlog = new Backlog(1, 'title', 'description', [backlogItem]);
        expect(backlog.id).to.equal(1);
        expect(backlog.title).to.equal('title');
        expect(backlog.description).to.equal('description');
        expect(backlog.backlogItems).to.include(backlogItem);
    }); 

    it('should create a backlog with no backlog items', () => {
        const backlog = new Backlog(1, 'title', 'description');
        expect(backlog.id).to.equal(1);
        expect(backlog.title).to.equal('title');
        expect(backlog.description).to.equal('description');
        expect(backlog.backlogItems).to.be.empty;
    });

    it('should add a backlog item', () => {
        const backlogItem = new BacklogItem(1, 'title', 'description', new Date());
        const backlog = new Backlog(1, 'title', 'description');
        backlog.addBacklogItem(backlogItem);
        expect(backlog.backlogItems).to.include(backlogItem);
    });

    it('should remove a backlog item', () => {
        const backlogItem = new BacklogItem(1, 'title', 'description', new Date());
        const backlog = new Backlog(1, 'title', 'description', [backlogItem]);
        backlog.removeBacklogItem(backlogItem);
        expect(backlog.backlogItems).to.not.include(backlogItem);
    }); 
    
    it('should thow an error when removing a non-existing backlog item', () => {
        const backlogItem = new BacklogItem(1, 'title', 'description', new Date());
        const backlog = new Backlog(1, 'title', 'description');
        expect(() => backlog.removeBacklogItem(backlogItem)).to.throw(Error);
    }); 

    it('should throw an error when adding an existing backlog item', () => {
        const backlogItem = new BacklogItem(1, 'title', 'description', new Date());
        const backlog = new Backlog(1, 'title', 'description', [backlogItem]);
        expect(() => backlog.addBacklogItem(backlogItem)).to.throw(Error);
    }); 

    it('should update the title', () => {
        const backlog = new Backlog(1, 'title', 'description');
        backlog.title = 'new title';
        expect(backlog.title).to.equal('new title');
    }); 

    it('should update the description', () => {
        const backlog = new Backlog(1, 'title', 'description');
        backlog.description = 'new description';
        expect(backlog.description).to.equal('new description');
    });
    
});
