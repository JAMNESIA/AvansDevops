import { Account } from "../account/Account";

export class Comment {

    private _id: number;
    private _text: string;
    private _author: Account;
    private _date: Date;

    constructor(id: number, text: string, author: Account, date?: Date) {
        if (!text) throw new Error("Text cannot be empty");
        if (!author) throw new Error("Author cannot be empty");

        this._id = id;
        this._text = text;
        this._author = author;
        this._date = date ? date : new Date();
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

    public getAuthor(): Account {
        return this._author;
    }

    public getDate(): Date {
        return this._date;
    }

}