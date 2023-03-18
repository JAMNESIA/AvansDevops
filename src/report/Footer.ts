export class Footer{
    _projectVersion: string;
    _reportDate: Date;

    constructor(projectVersion: string){
        this._projectVersion = projectVersion;
        this._reportDate = new Date();
    }

    public getProjectVersion(): string{
        return this._projectVersion;
    }

    public getReportDate(): Date{
        return this._reportDate;
    }

    public setProjectVersion(projectVersion: string): void{
        this._projectVersion = projectVersion;
    }

    public setReportDate(reportDate: Date): void{
        this._reportDate = reportDate;
    }

    public toString(): string{
        return "\nReport generated on: " + this._reportDate.toISOString() + " for version: " + this._projectVersion;
    }
}
