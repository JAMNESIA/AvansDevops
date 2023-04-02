const { expect } = require("chai");
const { Project } = require("../../src/project/Project");
const { ProductOwner } = require("../../src/account/ProductOwner");
const { ProjectFactory } = require("../../src/project/ProjectFactory");
const { KanbanProject } = require("../../src/project/KanbanProject");
const { ScrumProject } = require("../../src/project/ScrumProject");
const { Backlog } = require("../../src/backlog/Backlog");
describe("Project", () => {
    const productOwner = new ProductOwner(1, "TestPerson", "test@test.test", "0612345678", "testr");
    
    describe("Project Class", () => {
        let project;

        beforeEach(() => {
            project = new ScrumProject("Test Project", productOwner); 
        });

        it("should have a name", () => {
            expect(project.getName()).to.equal("Test Project");
        });

        it("should have a product owner", () => {
            expect(project.getProductOwner()).to.equal(productOwner);
        });

        it("should have a project type", () => {
            expect(project.getProjectType()).to.equal("Scrum");
        });

        it("should be able to set name", () => {
            project.setName("New Test Project");
            expect(project.getName()).to.equal("New Test Project");
        });

        it("should be able to set product owner", () => {
            const newProductOwner = new ProductOwner(2, "New TestPerson", "wasd@wasd.wasd", "0612345678", "testr2");

            project.setProductOwner(newProductOwner);
            expect(project.getProductOwner()).to.equal(newProductOwner);
        });
        
        it("should be able to set a backlog", () => {
            const backlog = new Backlog(1, 'title', 'description');
            project.backlog = backlog;
            expect(project.backlog).to.equal(backlog);
        });

        it("should be able to add a sprint", () => {
            const sprint = { id: 1, name: "Sprint 1", startDate: new Date(), endDate: new Date() };
            project.addSprint(sprint);
            expect(project.sprints).to.include(sprint);
        });

        it("should be able to remove a sprint", () => {
            const sprint = { id: 1, name: "Sprint 1", startDate: new Date(), endDate: new Date() };
            project.addSprint(sprint);
            project.removeSprint(sprint);
            expect(project.sprints).to.not.include(sprint);
        });
    });

    describe("Project Factory", () => {
        it("should create a kanban project", () => {
            const project = ProjectFactory.getProject("Kanban", "Test Project", productOwner);
            expect(project).to.be.an.instanceOf(Project);
            expect(project.getProjectType()).to.equal("Kanban");
        });

        it("should create a scrum project", () => {
            const project = ProjectFactory.getProject("Scrum", "Test Project", productOwner);
            expect(project).to.be.an.instanceOf(Project);
            expect(project.getProjectType()).to.equal("Scrum");
        });

        it("should create a scrum project when type is not Scrum or Kanban", () => {
            const project = ProjectFactory.getProject("Test", "Test Project", productOwner);
            expect(project).to.be.an.instanceOf(Project);
            expect(project.getProjectType()).to.equal("Scrum");
        });
    });

    describe("Kanban Project", () => {
        let project;

        beforeEach(() => {
            project = new KanbanProject("Test Project", productOwner); 
        });

        it("should have a project type of Kanban", () => {
            expect(project.getProjectType()).to.equal("Kanban");
        });

        it("should have sprints", () => {
            expect(project.sprints).to.be.an("array");
            expect(project.sprints).to.be.empty;
        });

        it("should have a backlog", () => {
            expect(project.backlog).to.be.an('object')
        });
    });

    describe("Scrum Project", () => {
        let project;

        beforeEach(() => {
            project = new ScrumProject("Test Project", productOwner); 
        });

        it("should have a project type of Scrum", () => {
            expect(project.getProjectType()).to.equal("Scrum");
        });

        it("should have sprints", () => {
            expect(project.sprints).to.be.an("array");
            expect(project.sprints).to.be.empty;
        });

        it("should have a backlog", () => {
            expect(project.backlog).to.be.an("object");
        });
    });
});
