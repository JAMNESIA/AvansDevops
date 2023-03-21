import { Command } from "./Command";
import { Pipeline } from "./Pipeline";
import { Stage } from "./Stage";
import { Visitor } from "./Visitor";

export class PipelineVisitor implements Visitor {

    private _visitedStages: Stage[] = [];
    private _visitedPipelines: Pipeline[] = [];
    private _visitedCommands: Command[] = [];

    public getVisitedStages(): Stage[] {
        return this._visitedStages;
    }

    public getVisitedPipelines(): Pipeline[] {
        return this._visitedPipelines;
    }

    public getVisitedCommands(): Command[] {
        return this._visitedCommands;
    }

    public visitStage(stage: Stage): void {
        console.log("Visiting stage " + stage.getName());
    }
    
    public visitPipeline(pipeline: Pipeline): void {
        console.log("Visiting pipeline " + pipeline.getName());
    }

    public visitCommand(command: Command): void {
        console.log("Visiting command " + command.getCommand());
    }

}