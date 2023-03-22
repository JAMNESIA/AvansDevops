import { INotifier } from "./INotifier";
import { MailLibrary } from "./MailLibrary";

export class MailNotifier implements INotifier {
    private mailLibrary: MailLibrary;

    constructor() {
        this.mailLibrary = new MailLibrary();
    }

    notify(message: string): void {
        this.mailLibrary.sendMail(message);
    }
}