import { Pipeline } from './Pipeline';
import { PipelineVisitor } from './PipelineVisitor';
import { Stage } from './Stage';
import { Command } from './Command';

export class PipelineManager {

    private _pipelines: Pipeline[] = [];

    constructor() {
        this.addPipeline(this.generateDefaultDeployPipeline());
        this.addPipeline(this.generateBasePipeline("DefaultBuildPipeline"));
    }

    public getPipelines(): Pipeline[] {
        return this._pipelines;
    }

    public getPipeline(index: number): Pipeline {
        return this._pipelines[index];
    }

    public addPipeline(pipeline: Pipeline): void {
        this._pipelines.push(pipeline);
    }   

    public executePipeline(index: number): void {
        this._pipelines[index]
            .acceptVisitor(new PipelineVisitor());
    }

    private generateBasePipeline(name: string): Pipeline {
        let pipeline: Pipeline = new Pipeline(name, false);
    
        let stage: Stage = new Stage("source");
        stage.addComponent(new Command("source"));
    
        let stage2: Stage = new Stage("build");
        stage2.addComponent(new Command("build"));

        let stage3: Stage = new Stage("test");
        stage3.addComponent(new Command("test"));

        let stage4: Stage = new Stage("deploy");
        stage4.addComponent(new Command("deploy"));

        pipeline.addComponent(stage);
        pipeline.addComponent(stage2);
        pipeline.addComponent(stage3);
        pipeline.addComponent(stage4);

        return pipeline;
    }

    private generateDefaultDeployPipeline(): Pipeline {
        let pipeline: Pipeline = this.generateBasePipeline("DefaultDeployPipeline");
        let stage: Stage = new Stage("deploy");
        stage.addComponent(new Command("deploy"));

        pipeline.addComponent(stage);

        return pipeline;
    }

}
