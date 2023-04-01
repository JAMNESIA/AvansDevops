import { KanbanProject } from "./KanbanProject";
import { ScrumProject } from "./ScrumProject";

export class ProjectFactory {

    static getProject(type: string, name: string) {
        switch (type) {
            case 'Scrum':
                return new ScrumProject(name);
            case 'Kanban':
                return new KanbanProject(name);
            default:
                return new ScrumProject(name);
        }
    }

}