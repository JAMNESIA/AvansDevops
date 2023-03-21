import { INotifier } from "./INotifier";

export class SlackNotifier implements INotifier {
    private _webhook: string;

    constructor(webhook: string) {
        this._webhook = webhook;
    }

    public notify(message: string): void {
        console.log("Sending slack message: " + message);
    }
}