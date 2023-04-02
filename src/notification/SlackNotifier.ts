import { NotificationDecorator } from "./NotificationDecotrator";

export class SlackNotifier extends NotificationDecorator {
    
    public notify(message: string): string {
        return `Sending Slack message: ${super.notify(message)}`;
    }
}
