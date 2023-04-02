const { expect } = require('chai');
const { ScrumMaster } = require('../../src/account/ScrumMaster');
const { ProductOwner } = require('../../src/account/ProductOwner');
const { LeadDeveloper } = require('../../src/account/LeadDeveloper');
const { Tester } = require('../../src/account/Tester');
const { Developer } = require('../../src/account/Developer');
const { Sprint } = require('../../src/sprints/Sprint');
const { Pipeline } = require('../../src/pipeline/Pipeline');
const { Report } = require('../../src/report/Report');
const { Backlog } = require('../../src/backlog/Backlog');
const { PipelineManager } = require('../../src/pipeline/PipelineManager');

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

        // Add report, pipeline and member
        it('should add a member to the sprint', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            const member = new Developer(111, 't', 'e', 's', 't');
            sprint.addMember(member);
            expect(sprint.getSprintMembers().length).to.equal(6);
        });

        it('should add a pipeline to the sprint', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            const pipeline = new Pipeline('New pipeline');
            expect(sprint.getPipelineManager().getPipelines().length).to.equal(2);
            sprint.addPipeline(pipeline);
            expect(sprint.getPipelineManager().getPipelines().length).to.equal(3);
        });

        it('should return null when no report is added', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            expect(sprint.getReport()).to.equal(null);
        });

        it('should add a report to the sprint', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });
            
            const report = new Report();
            sprint.addReport(report);

            expect(sprint.getReport()).to.equal(report);
        });

        it('should set the sprint state', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            sprint.setState('ACTIVE');
            expect(sprint.getState()).to.equal('ACTIVE');
        }); 

        it('should get the state of the sprint', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            sprint.setState('ACTIVE');
            expect(sprint.getState()).to.equal('ACTIVE');
        });

        it('should get the sprint type', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            expect(sprint.getType()).to.equal('RELEASE');
        });

        it('should get the backlog', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            expect(sprint.getBacklogItems()).to.be.instanceof(Backlog);
        })

        it('should throw error adding the same member twice', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            const member = new Developer(111, 't', 'e', 's', 't');
            sprint.addMember(member);
            expect(() => sprint.addMember(member)).to.throw('Member already exists');
        });

        it('should get start date', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            expect(sprint.getStartDate()).to.instanceof(Date);
        });

        it('should get end date', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            expect(sprint.getEndDate()).to.instanceof(Date);
        }); 

        it('should set a pipeline manager', () => {
            const sprint = new Sprint({
                type: "RELEASE",
                name: "name",
                scrumMaster: sprintMembers[1],
                sprintMembers
            });

            const pipelineManager = new PipelineManager();
            sprint.setPipelineManager(pipelineManager);
            expect(sprint.getPipelineManager()).to.equal(pipelineManager); 
        });
    });
});
