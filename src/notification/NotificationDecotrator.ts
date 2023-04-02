import { INotifier } from './INotifier';

export class NotificationDecorator implements INotifier {
    private _notifier: INotifier;

    constructor(notifier: INotifier) {
        this._notifier = notifier;
    }

    notify(message: string): string {
        return this._notifier.notify(message);
    }
}
