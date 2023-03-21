import { Subscriber } from "./Subscriber";

export interface Publisher {
    subscribe(subscriber: Subscriber): void;
    unsubscribe(subscriber: Subscriber): void;
    notifySubscribers(message: string): void;
}