import { Account } from "../account/Account";

export class Activity {

    private _id: number;
    private _title: string;
    private _description: string;
    private _due: Date;
    private _done: boolean;
    private _assignees: Account[];

    /**
     * 
     * @param id  - The id of the activity
     * @param title  - The title of the activity
     * @param description  - The description of the activity 
     * @param due  - The due date of the activity
     * @param done  - The status of the activity
     * @param assignee  - The assignee(s) of the activity
     */
    constructor(
        id: number, 
        title: string, 
        description: string, 
        due: Date, 
        done: boolean = false,
        assignee?: Account | Account[]
    ) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._due = due;
        this._done = done;

        this._assignees = [];

        if (assignee) {
            Array.isArray(assignee) 
                ? this._assignees = assignee 
                : this._assignees.push(assignee);
        } else {
            this._assignees = [];
        }
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get due(): Date {
        return this._due;
    }

    set due(value: Date) {
        this._due = value;
    }

    get done(): boolean {
        return this._done;
    }

    set done(value: boolean) {
        this._done = value;
    }

    get assignees(): Account[] {
        return this._assignees;
    }

    set assignees(value: Account[]) {
        this._assignees = value;
    }

    public addAssignee(assignee: Account): Account[] {
        if (this._assignees.includes(assignee)) {
            throw new Error("Assignee already exists in this activity");
        } else {
            this._assignees.push(assignee);

            return this._assignees;
        }
    }

    public removeAssignee(assignee: Account): Account[] {
        if (!this._assignees.includes(assignee)) {
            throw new Error("Assignee does not exist in this activity");
        } else {
            this._assignees = this._assignees.filter(a => a !== assignee);

            return this._assignees;
        }
    }

}
