import { INotifier } from "./INotifier";
import { NotificationDecorator } from "./NotificationDecotrator";

export class MailNotifier extends NotificationDecorator {
    private _email: string;

    constructor(notifier: INotifier, email: string) {
        super(notifier);
        this._email = email;
    }
    
    notify(message: string): string {
        return `Sending email message to ${this._email}: ${super.notify(message)}`;
    }
}
