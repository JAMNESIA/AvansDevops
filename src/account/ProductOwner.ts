import { Account } from "./Account";

export class ProductOwner extends Account {
    constructor(id: number, name: string, email: string, phonenumber: string, slack: string) {
        super(id, name, email, phonenumber, slack);
    }
}
