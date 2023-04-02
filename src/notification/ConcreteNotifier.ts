import { INotifier } from "./INotifier";

export class ConcreteNotifier implements INotifier {
    private _recipient: string;

    constructor(recipient: string) {
        this._recipient = recipient;
    }

    public notify(message: string): string {
        return `Message for ${this._recipient}: ${message}`;
    }
}
