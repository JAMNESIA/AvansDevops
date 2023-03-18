import { Footer } from "./Footer";
import { Header } from "./Header";
import { IExportConstructor } from "./interfaces/IExportConstructor";

export class Report {
    private _header: Header;
    private _body: string[];
    private _footer: Footer;
    
    public constructor() {
        this._body = [];
    }

    public addContent(content: string): void {
        this._body.push(content + "\n");
    }

    public setHeader(header: Header): void {
        this._header = header;
    }

    public setFooter(footer: Footer): void {
        this._footer = footer;
    }

    public getBody(): string[] {
        return this._body;
    }

    public getHeader(): Header {
        return this._header;
    }

    public getFooter(): Footer {
        return this._footer;
    }

    public toString(): string {
        return this._header.toString() + this._body.toString() + this._footer.toString()
    }
 
    public export(exportStrategy: IExportConstructor): void {
        new exportStrategy().export(this);
    }
}
