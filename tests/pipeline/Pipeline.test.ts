import { assert, expect } from 'chai';
import { Command } from '../../src/pipeline/Command';
import { Pipeline } from '../../src/pipeline/Pipeline';
import { PipelineVisitor } from '../../src/pipeline/PipelineVisitor';
import { PipelineManager } from '../../src/pipeline/PipelineManager';
import { Stage } from '../../src/pipeline/Stage';

describe('Pipeline', () => {
    describe('constructor', () => {
        it('should create a pipeline', () => {
            const pipeline = new Pipeline('name', true);

            assert.equal(pipeline.getName(), 'name');
            assert.equal(pipeline.isAutomatic(), true);

            pipeline.setName('new name');
            pipeline.setAutomatic(false);

            assert.equal(pipeline.getName(), 'new name');
            assert.equal(pipeline.isAutomatic(), false);
        });

        it('should create a pipeline with default values', () => {
            const pipeline = new Pipeline('name');

            assert.equal(pipeline.getName(), 'name');
            assert.equal(pipeline.isAutomatic(), true);
        });
    });

    describe('Pipeline Manager', () => {
        it('should get componentns', () => {
            const pipelineManager = new PipelineManager(); 
            pipelineManager.executePipeline(0);
            expect(pipelineManager.getPipeline(0).getComponents()).to.have.lengthOf(5);
        }); 

        it('should get pipelines', () => {
            const pipelineManager = new PipelineManager(); 
            expect(pipelineManager.getPipelines()).to.have.lengthOf(2);
        });

        it("should add component", () => {
            const pipelineManager = new PipelineManager(); 
            const component = new Command("test");

            pipelineManager.executePipeline(0);
            pipelineManager.getPipeline(0).addComponent(component);

            expect(pipelineManager.getPipeline(0).getComponents()).to.have.lengthOf(6);
        });

        it("should remove component", () => {
            const pipelineManager = new PipelineManager(); 
            const component = new Command("test");

            pipelineManager.executePipeline(0);
            pipelineManager.getPipeline(0).addComponent(component);
            pipelineManager.getPipeline(0).removeComponent(component);

            expect(pipelineManager.getPipeline(0).getComponents()).to.have.lengthOf(5);
        });

        it('should get component', () => {
            const pipelineManager = new PipelineManager(); 
            const component = new Command("test");

            pipelineManager.executePipeline(0);
            pipelineManager.getPipeline(0).addComponent(component);

            expect(pipelineManager.getPipeline(0).getComponent(5)).to.equal(component);
        });

        it('should accept visitor', () => {
            const pipelineManager = new PipelineManager(); 
            const visitor = new PipelineVisitor();

            pipelineManager.executePipeline(0);
            pipelineManager.getPipeline(0).acceptVisitor(visitor);

            expect(visitor.getVisitedCommands()).to.have.lengthOf(0);
            expect(visitor.getVisitedPipelines()).to.have.lengthOf(0);
            expect(visitor.getVisitedStages()).to.have.lengthOf(0);
        });
    });

    describe('Command', () => {
        it('should create a command', () => {
            const command = new Command('command');

            assert.equal(command.getCommand(), 'command');
        });

        it('should set a command', () => {
            const command = new Command('command');

            command.setCommand('new command');

            assert.equal(command.getCommand(), 'new command');
        });
    });

    describe('Stage', () => {
        it('should create a stage', () => {
            const stage = new Stage('stage');

            assert.equal(stage.getName(), 'stage');
        });

        it('should set a name', () => {
            const stage = new Stage('stage');

            stage.setName('new stage');

            assert.equal(stage.getName(), 'new stage');
        });
    });

});
