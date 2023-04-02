import { Project } from "./Project";
import { Account } from "../account/Account";

export class KanbanProject extends Project {
    constructor(name: string, productOwner?: Account) {
        super(name, productOwner);
    }

    getProjectType(): string {
        return "Kanban";
    }
}
