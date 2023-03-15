
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

    get targetBranch(): Branch {
        return this._targetBranch;
    }

}
