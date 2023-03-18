export class Footer{
    _projectVersion: string;
    _reportDate: Date;

    constructor(projectVersion: string){
        this._projectVersion = projectVersion;
        this._reportDate = new Date();
    }

    public toString(): string{
        return "\nReport generated on: " + this._reportDate.toISOString() + " for version: " + this._projectVersion;
    }
}
