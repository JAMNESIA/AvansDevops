import { Activity } from "./Activity";
import { BacklogItem } from "./BacklogItem";

export class Backlog {

    private _id: number;
    private _title: string;
    private _description: string;
    private _backlogItems: BacklogItem[];

    /**
     * 
     * @param id  - The id of the backlog
     * @param title  - The title of the backlog
     * @param description  - The description of the backlog
     * @param backlogItems  - The backlog items of the backlog
     */
    constructor(
        id?: number,
        title?: string,
        description?: string,
        backlogItems?: BacklogItem[]
    ) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._backlogItems = backlogItems ? backlogItems : [];
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get backlogItems(): BacklogItem[] {
        return this._backlogItems;
    }

    set backlogItems(value: BacklogItem[]) {
        this._backlogItems = value;
    }

    addBacklogItem(backlogItem: BacklogItem) {
        if (this._backlogItems.includes(backlogItem)) {
            throw new Error("Backlog item already exists in backlog");
        } else {
            this._backlogItems.push(backlogItem);

            return this._backlogItems;
        }
    }

    removeBacklogItem(backlogItem: BacklogItem) {
        if (!this._backlogItems.includes(backlogItem)) {
            throw new Error("Backlog item does not exist in backlog");
        } else {
            this._backlogItems = this._backlogItems.filter(b => b !== backlogItem);
        
            return this._backlogItems;
        }
    }

    addActivityToBacklogItem(backlogItem: BacklogItem, activity: Activity) {
        if (this._backlogItems.includes(backlogItem) && !backlogItem.activities.includes(activity)) {
            backlogItem.addActivity(activity);

            return backlogItem.activities;
        } else {
            throw new Error("Backlog item does not exist in backlog");
        }
    }

}
