// import { assert } from 'chai';
// import { Command } from '../../src/pipeline/Command';
// import { Pipeline } from '../../src/pipeline/Pipeline';
// import { PipelineVisitor } from '../../src/pipeline/PipelineVisitor';

// describe('Pipeline', () => {
//     describe('constructor', () => {
//         it('should create a pipeline', () => {
//             const pipeline = new Pipeline('name', true);

//             assert.equal(pipeline.getName(), 'name');
//             assert.equal(pipeline.isAutomatic(), true);

//             pipeline.setName('new name');
//             pipeline.setAutomatic(false);

//             assert.equal(pipeline.getName(), 'new name');
//             assert.equal(pipeline.isAutomatic(), false);
//         });
//     });

//     describe('acceptVisitor', () => {
//         it('should visit a pipeline', () => {
//             const pipelineVisitor = new PipelineVisitor();
//             const pipeline = new Pipeline('name', true);

//             pipeline.acceptVisitor(pipelineVisitor);

//             assert.equal(pipelineVisitor.getVisitedPipelines().length, 1);
//         });
//     });
// });
