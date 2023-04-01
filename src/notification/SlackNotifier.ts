import { INotifier } from "./INotifier";

export class SlackNotifier implements INotifier {
    private _webhook: string;

    constructor(webhook: string) {
        if (!webhook || webhook.length === 0) {
            throw new Error("No slack webhook configured");
        }   

        this._webhook = webhook;
    }

    public notify(message: string): void {
        if (!this._webhook) {
            console.log("No slack webhook configured");
            return;
        }

        if (!message || message.length === 0) {
            console.log("No message provided");
            return;
        }

        console.log("Sending slack message: " + message);
    }
}