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
        if (!message || message.length === 0) throw new Error("Message cannot be empty");
        if (!files || files.length === 0) throw new Error("Files cannot be empty");

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
