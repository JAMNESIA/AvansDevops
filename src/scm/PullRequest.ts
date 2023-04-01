
import { Branch } from "./Branch";

export class PullRequest {

    private _id: number;
    private _title: string;
    private _description: string;
    private _sourceBranch: Branch;
    private _targetBranch: Branch;

    /**
     * 
     * @param id  - The id of the pull request
     * @param title  - The title of the pull request
     * @param description  - The description of the pull request
     * @param sourceBranch  - The source branch of the pull request
     * @param targetBranch  
     */
    constructor(id: number, title: string, description: string, sourceBranch: Branch, targetBranch: Branch) {
        if (!title || title.length === 0) throw new Error("Title cannot be empty");
        if (!description || description.length === 0) throw new Error("Description cannot be empty");
        if (!sourceBranch) throw new Error("Source branch cannot be null");
        if (!targetBranch) throw new Error("Target branch cannot be null");
        
        this._id = id;
        this._title = title;
        this._description = description;
        this._sourceBranch = sourceBranch;
        this._targetBranch = targetBranch;
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

    get sourceBranch(): Branch {
        return this._sourceBranch;
    }

    set sourceBranch(value: Branch) {
        this._sourceBranch = value;
    }

    get targetBranch(): Branch {
        return this._targetBranch;
    }

    set targetBranch(value: Branch) {
        this._targetBranch = value;
    }

}
