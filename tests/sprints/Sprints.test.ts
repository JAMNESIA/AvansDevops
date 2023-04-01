const { expect } = require('chai');
const { ScrumMaster } = require('../../src/account/ScrumMaster');
const { ProductOwner } = require('../../src/account/ProductOwner');
const { LeadDeveloper } = require('../../src/account/LeadDeveloper');
const { Tester } = require('../../src/account/Tester');
const { Developer } = require('../../src/account/Developer');
const { Sprint } = require('../../src/sprints/Sprint');

describe('Sprint', () => {
    const sprintMembers = [
        new Developer(1, 'name', 'email', 'phonenumber', 'slack'),
        new ScrumMaster(1, 'name', 'email', 'phonenumber', 'slack'),
        new LeadDeveloper(1, 'name', 'email', 'phonenumber', 'slack'),
        new Tester(1, 'name', 'email', 'phonenumber', 'slack'),
        new Developer(1, 'name', 'email', 'phonenumber', 'slack'),
    ];

    describe('constructor', () => {
        it('should create a sprint', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });
            expect(sprint.name).to.equal('name');
            expect(sprint.getSprintMembers().length).to.equal(sprintMembers.length);
            expect(sprint.type).to.equal('RELEASE');
            expect(sprint.getScrumMaster()).to.equal(sprintMembers[1]);
            expect(sprint instanceof Sprint).to.equal(true);
        });

        it('should throw an error when no scrum master is provided', () => {
            expect(() => new Sprint({
                type: "RELEASE",
                name: "name",
                sprintMembers
            })).to.throw('Invalid scrum master');
        });

        it('should throw an error when no name is provided', () => {
            expect(() => new Sprint({
                type: "RELEASE",
                scrumMaster: sprintMembers[1],
                sprintMembers
            })).to.throw('Invalid sprint name'); 
        });

        it('should throw an error when sprint type is not provided', () => {
            expect(() => new Sprint({
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            })).to.throw('Invalid sprint type'); 
        });

        it('should throw an error when sprint type is not valid', () => {
            expect(() => new Sprint({
                type: "INVALID",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            })).to.throw('Invalid sprint type'); 
        });
    });
});