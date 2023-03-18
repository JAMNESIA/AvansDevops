import { IExportConstructor } from "./interfaces/IExportConstructor";

export class Report {
    private _title: string;
    private _content: string;

    constructor(title: string, content: string) {
        this._title = title;
        this._content = content;
    }

    get title(): string {
        return this._title;
    }

    //ToString
    toString(): string {
        return `Title: ${this._title} Content: ${this._content}`;
    }

    //Export
    export(exportStrategy: IExportConstructor): void {
        new exportStrategy().export(this);
    }
}
