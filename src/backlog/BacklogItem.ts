import { Account } from "../account/Account";
import { Activity } from "./Activity";
import { IBacklogItemState } from "./interfaces/IBacklogItemState";
import { ToDoState } from "./states/ToDoState";
import { ConcreteNotifier } from "../notification/ConcreteNotifier";
import { SlackNotifier } from "../notification/SlackNotifier";
import { MailNotifier } from "../notification/MailNotifier";
export class BacklogItem extends Activity implements IBacklogItemState {
    //extends activitiy? 

    private _activities: Activity[];
    private _state: IBacklogItemState = new ToDoState(this);
    /**
     * 
     * @param id  - The id of the backlog item
     * @param title  - The title of the backlog item
     * @param description  - The description of the backlog item
     * @param due  - The due date of the backlog item
     * @param done  - The status of the backlog item
     * @param assignee  - The assignee(s) of the backlog item
     * @param activities  - The activities of the backlog item
     */
    constructor(
        id: number,
        title: string,
        description: string,
        due: Date,
        assignee?: Account | Account[],
        activities?: Activity[]
    ) {
        super(id, title, description, due, assignee);
        this._activities = activities ? activities : [];
    }

    public getActivities(): Activity[] {
        return this._activities;
    }

    public getState(): IBacklogItemState {
        return this._state;
    }

    addActivity(activity: Activity): Activity[] {
        if (this._activities.includes(activity)) {
            throw new Error("Activity already exists in this backlog item");
        } else {
            this._activities.push(activity);

            return this._activities;
        }
    }

    removeActivity(activity: Activity): Activity[] {
        if (!this._activities.includes(activity)) {
            throw new Error("Activity does not exist in this backlog item");
        } else {
            this._activities = this._activities.filter(a => a !== activity);

            return this._activities;
        }
    }
    
    public isDone() : boolean{ //NOSONAR
        let bool = true; 
        
        for(let i = 0; i < this._activities.length; i++){//NOSONAR
            if(!this._activities[i].done){
                bool = false;
            }
        }

        return bool; 
    }

    public setState(state: IBacklogItemState) : void{
        this._state = state;
    }

    public setToDo() : void{
        this._state.setToDo();
    }

    public setDoing() : void{
        this._state.setDoing();
    }

    public setReadyForTesting() : void{
        this.assignees.forEach(assignee => {
            let notifier = new ConcreteNotifier(assignee.name);
            let slackNotifier = new SlackNotifier(notifier, assignee.slack);
            let emailNotifier = new MailNotifier(slackNotifier, assignee.email);

            emailNotifier.notify("Backlog item is ready for testing");
        });   

        this._state.setReadyForTesting();
    }

    public setTesting() : void{
        this._state.setTesting();
    }

    public setTested() : void{
        this._state.setTested();
    }

    public setDone() : void{
        this._state.setDone();
    }
}
