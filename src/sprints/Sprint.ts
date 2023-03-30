import { Backlog } from "../backlog/Backlog";
import { Account } from "../account/Account";
import { SprintType } from "./SprintType";
import { PipelineManager } from "../pipeline/PipelineManager";
import { ISprintState } from "./states/ISprintState";
import { Pipeline } from "../pipeline/Pipeline";
import { Report } from "../report/Report";

export class Sprint {

    private _type: SprintType;
    private _name: string;
    private _backlog: Backlog;
    private _startDate: Date;
    private _endDate: Date;
    private _state: ISprintState;
    private _report: Report;
    
    private _scrumMaster: Account;
    private _sprintMembers: Account[]; 

    private _pipelineManager: PipelineManager;

    // private _project: IProject

    constructor({
        type,
        name,
        backlog,
        startDate,
        endDate,
        scrumMaster,
        sprintMembers
    }: {
        type: SprintType,
        name: string,
        backlog?: Backlog,
        startDate?: Date,
        endDate?: Date,
        scrumMaster: Account,
        sprintMembers?: Account[]
    }) {
        if (!Object.values(SprintType).includes(type)) {
            throw new Error("Invalid sprint type");
        }

        this._type = type;
        this._name = name;
        this._backlog = backlog || new Backlog();
        this._startDate = startDate || new Date(); // Now
        this._endDate = endDate || new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days from now
        this._scrumMaster = scrumMaster;
        this._sprintMembers = sprintMembers || [];
    }

    public get type(): SprintType {
        return this._type;
    }

    public get name(): string {
        return this._name;
    }

    public getType(): SprintType {
        return this._type;
    }

    public getBacklogItems(): Backlog {
        return this._backlog;
    }

    public getStartDate(): Date {
        return this._startDate;
    }

    public getEndDate(): Date {
        return this._endDate;
    }

    public getScrumMaster(): Account {
        return this._scrumMaster;
    }

    public getSprintMembers(): Account[] {
        return this._sprintMembers;
    }

    public getPipelineManager(): PipelineManager {
        return this._pipelineManager;
    }

    public setPipelineManager(pipelineManager: PipelineManager): void {
        this._pipelineManager = pipelineManager;
    }

    public set state(state: ISprintState) {
        this._state = state;
    }

    public setState(state: ISprintState): void {
        this._state = state;
    }

    public getState(): ISprintState {
        return this._state;
    }

    public addPipeline(pipeline: Pipeline): void {
        this._pipelineManager.addPipeline(pipeline);
    }

    public addReport(report: Report): void {
        this._report = report;
    }

    public getReport(): Report {
        return this._report;
    }   

    public addMember(member: Account): void {
        this._sprintMembers.push(member);
    }
}
