import { Commit } from "./Commit";

export class Branch {
  
    private _id: number;
    private _name: string;
    private _commits: Commit[];

    /**
     * 
     * @param id  - The id of the branch
     * @param name  - The name of the branch
     * @param commits  - The commits of the branch
     */
    constructor(id: number, name: string, commits: Commit[] = []) {
        this._id = id;
        this._name = name;
        this._commits = commits;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get commits(): Commit[] {
        return this._commits;
    }

    addCommit(commit: Commit) {
        this._commits.push(commit);
    }

}
