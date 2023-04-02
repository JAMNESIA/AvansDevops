import { INotifier } from "./INotifier";

export class ConcreteNotifier implements INotifier {
    public notify(message: string): string {
        return message;
    }
}
