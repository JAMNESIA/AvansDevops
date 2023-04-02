import { INotifier } from "./INotifier";
import { MailLibrary } from "./MailLibrary";

export class MailNotifier implements INotifier {
    private mailLibrary: MailLibrary;

    constructor(mailLibrary: MailLibrary) {
        this.mailLibrary = mailLibrary;
    }

    notify(message: string): void {
        if (!this.mailLibrary) {
            console.log("No mail library configured");
            return;
        }

        if (!message || message.length === 0) {
            console.log("No message provided");
            return;
        }

        this.mailLibrary.sendMail(message);
    }
}