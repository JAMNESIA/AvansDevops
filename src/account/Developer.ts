import { Account } from "./Account";

export class Developer extends Account {
    constructor(id: number, name: string, email: string, phonenumber: string, slack: string) {
        super(id, name, email, phonenumber, slack);
    }
}
