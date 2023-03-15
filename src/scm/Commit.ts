export class Commit {

    private _id: number;
    private _message: string;
    
    private files: string[];

    /**
     * 
     * @param id  - The id of the commit
     * @param message  - The message of the commit
     * @param files  - The files of the commit 
     */
    constructor(id: number, message: string, files: string[]) {
        this._id = id;
        this._message = message;
        this.files = files;
    }

    get id(): number {
        return this._id;
    }

    get message(): string {
        return this._message;
    }

    getFiles(): string[] {
        return this.files;
    }

}
