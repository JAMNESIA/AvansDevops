import { Command } from "./Command";
import { Pipeline } from "./Pipeline";
import { Stage } from "./Stage";

export interface Visitor {
    visitPipeline(pipeline: Pipeline): void;
    visitStage(stage: Stage): void;
    visitCommand(command: Command): void;
}