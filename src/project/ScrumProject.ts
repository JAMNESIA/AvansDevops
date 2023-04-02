import { Account } from "../account/Account";
import { Project } from "./Project";

export class ScrumProject extends Project {
    constructor(name: string, productOwner?: Account) {
        super(name, productOwner);
    }


    getProjectType(): string {
        return "Scrum";
    }
}
