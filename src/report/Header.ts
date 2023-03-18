export class Header{
    _companyName: string;
    _projectTitle: string;
    _reportTitle: string;

    constructor(companyName: string, projectTitle: string, reportTitle: string){
        this._companyName = companyName;
        this._projectTitle = projectTitle;
        this._reportTitle = reportTitle;
    }

    public getCompanyName(): string{
        return this._companyName;
    }

    public getProjectTitle(): string{
        return this._projectTitle;
    }

    public getReportTitle(): string{
        return this._reportTitle;
    }

    public setCompanyName(companyName: string): void{
        this._companyName = companyName;
    }

    public setProjectTitle(projectTitle: string): void{
        this._projectTitle = projectTitle;
    }

    public setReportTitle(reportTitle: string): void{
        this._reportTitle = reportTitle;
    }

    public toString(): string{
        return "Company: " + this._companyName + " Project: " + this._projectTitle + " Report: " + this._reportTitle + "\n";
    }
}
