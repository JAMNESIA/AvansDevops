import { Account } from "../account/Account";
import { Backlog } from "../backlog/Backlog";
import { Sprint } from "../sprints/Sprint";

export abstract class Project {

    private _id: number;
    private _name: string;
    private _productOwner?: Account;
    private _type: string;
    private _backlog: Backlog;
    private _sprints: Sprint[];
    
    constructor(name: string, productOwner?: Account) {
        this._name = name;
        this._productOwner = productOwner;
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

    getId(): number {
        return this._id;
    }

    getName(): string {
        return this._name;
    }

    getProductOwner(): Account {
        return this._productOwner;
    }

    getProjectType(): string {
        return this._type;
    }

    setName(name: string): void {
        this._name = name;
    }

    setProductOwner(productOwner: Account): void {
        this._productOwner = productOwner;
    }

}
