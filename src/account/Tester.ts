import { Account } from "./Account";

export class Tester extends Account {
    constructor(id: number, name: string, email: string, phonenumber: string, slack: string) {
        super(id, name, email, phonenumber, slack);
    }
}
