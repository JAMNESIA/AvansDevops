import { Developer } from "./Developer";

export class LeadDeveloper extends Developer {
    constructor(id: number, name: string, email: string, phonenumber: string, slack: string) {
        super(id, name, email, phonenumber, slack);
    }
}
