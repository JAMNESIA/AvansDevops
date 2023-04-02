import { NotificationDecorator } from "./NotificationDecotrator";

export class MailNotifier extends NotificationDecorator {

    notify(message: string): string {
        return `Sending email message: ${super.notify(message)}`;
    }
}
