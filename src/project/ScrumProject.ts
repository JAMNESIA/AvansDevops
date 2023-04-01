import { Account } from "../account/Account";
import { Backlog } from "../backlog/Backlog";
import { Sprint } from "../sprints/Sprint";
import { Project } from "./Project";

export class ScrumProject extends Project {

    private _backlog: Backlog;
    private _sprints: Sprint[];
    
    constructor(name: string, productOwner?: Account) {
        super(name, productOwner);

        this._backlog = new Backlog();
        this._sprints = [];
    }

    get backlog(): Backlog {
        return this._backlog;
    }

    set backlog(value: Backlog) {
        this._backlog = value;
    }

    get sprints(): Sprint[] {
        return this._sprints;
    }

    set sprints(value: Sprint[]) {
        this._sprints = value;
    }

    addSprint(sprint: Sprint) {
        this._sprints.push(sprint);
    }

    removeSprint(sprint: Sprint) {
        this._sprints = this._sprints.filter(s => s !== sprint);
    }

    getProjectType(): string {
        return "Scrum";
    }

}