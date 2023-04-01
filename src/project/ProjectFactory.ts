import { Account } from "../account/Account";
import { KanbanProject } from "./KanbanProject";
import { ScrumProject } from "./ScrumProject";

export class ProjectFactory {

    static getProject(type: string, name: string, productOwner?: Account): KanbanProject | ScrumProject {
        switch (type) {
            case 'Scrum':
                return new ScrumProject(name, productOwner);
            case 'Kanban':
                return new KanbanProject(name, productOwner);
            default:
                return new ScrumProject(name, productOwner);
        }
    }

}