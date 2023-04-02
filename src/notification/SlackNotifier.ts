import { INotifier } from "./INotifier";
import { NotificationDecorator } from "./NotificationDecotrator";

export class SlackNotifier extends NotificationDecorator {
    private _slack: string;
    constructor(notifier: INotifier, slack: string) {
        super(notifier);
        this._slack = slack;
    }
    
    public notify(message: string): string {
        return `Sending Slack message to ${this._slack}: ${super.notify(message)}`;
    }
}
