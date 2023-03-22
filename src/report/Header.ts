export class Header{
    _companyName: string;
    _projectTitle: string;
    _reportTitle: string;

    constructor(companyName: string, projectTitle: string, reportTitle: string){
        this._companyName = companyName;
        this._projectTitle = projectTitle;
        this._reportTitle = reportTitle;
    }

    public toString(): string{
        return "Company: " + this._companyName + " Project: " + this._projectTitle + " Report: " + this._reportTitle + "\n";
    }
}
