export class Comment {

    private _id: number;
    private _text: string;
    private _author: string;
    private _date: Date;

    constructor(id: number, text: string, author: string, date: Date) {
        this._id = id;
        this._text = text;
        this._author = author;
        this._date = date;
    }

    public getId(): number {
        return this._id;
    }

    public getText(): string {
        return this._text;
    }

    public setText(text: string): void {
        this._text = text;
    }

    public getAuthor(): string {
        return this._author;
    }

    public getDate(): Date {
        return this._date;
    }

}