const { expect } = require('chai');
const { Branch } = require('../../src/scm/Branch');
const { Commit } = require('../../src/scm/Commit');
const { PullRequest } = require('../../src/scm/PullRequest');

describe('SCM', () => {
    describe('Commit', () => {
        it('should create a commit', () => {
            const commit = new Commit(1, 'Commit message', ['file1.txt', 'file2.js']);

            expect(commit.id).to.equal(1);
            expect(commit.message).to.equal('Commit message');
            expect(commit.getFiles()).to.include('file1.txt');
            expect(commit.getFiles()).to.include('file2.js');
            expect(commit.getFiles()).to.have.lengthOf(2);
        });   

        it('should throw an error when creating a commit with an empty message', () => {
            expect(() => new Commit(1, '', ['file1.txt', 'file2.js'])).to.throw(Error);
        });

        it('should throw an error when creating a commit with no files', () => {
            expect(() => new Commit(1, 'Commit message', [])).to.throw(Error);
        });
    })

    describe('Branch', () => {
        let commits = [
            new Commit(1, 'Commit message 1', ['file1.txt', 'file2.js']),
            new Commit(2, 'Commit message 2', ['file3.txt', 'file4.js']),
            new Commit(3, 'Commit message 3', ['file5.txt', 'file6.js'])
        ];

        it('should create a branch', () => {
            const branch = new Branch(1, 'Branch name', commits);

            expect(branch.id).to.equal(1);
            expect(branch.name).to.equal('Branch name');
            expect(branch.commits).to.include(commits[0]);
            expect(branch.commits).to.include(commits[1]);
            expect(branch.commits).to.include(commits[2]);
            expect(branch.commits).to.have.lengthOf(3);
        });

        it('should throw an error when creating a branch with an empty name', () => {
            expect(() => new Branch(1, '', commits)).to.throw(Error);
        });

        it('should throw an error when creating a branch with no commits', () => {
            expect(() => new Branch(1, 'Branch name', [])).to.throw(Error);
        });

        it('should add a commit', () => {
            const branch = new Branch(1, 'Branch name', commits);
            const commit = new Commit(4, 'Commit message 4', ['file7.txt', 'file8.js']);
            branch.addCommit(commit);

            expect(branch.commits).to.include(commit);
            expect(branch.commits).to.have.lengthOf(4);
        });

        it('should set the name', () => {
            const branch = new Branch(1, 'Branch name', commits);
            branch.name = 'New branch name';

            expect(branch.name).to.equal('New branch name');
        });

        it('should throw an error when setting an empty name', () => {
            expect(() => new Branch(1, '', commits)).to.throw("Name cannot be empty");
        });

        it('should throw an error when setting an no name', () => {
            expect(() => new Branch(1, )).to.throw("Name cannot be empty");
        });

        it('should throw error with empty commits', () => {
            expect(() => new Branch(1, 'Branch name', [])).to.throw("Commits cannot be null");
        });

        it('should throw error with no commits', () => {
            expect(() => new Branch(1, 'Branch name')).to.throw("Commits cannot be null");
        });
    });

    describe('PullRequest', () => {
        let commits = [
            new Commit(1, 'Commit message 1', ['file1.txt', 'file2.js']),
            new Commit(2, 'Commit message 2', ['file3.txt', 'file4.js']),
            new Commit(3, 'Commit message 3', ['file5.txt', 'file6.js'])
        ];
        
        let sourceBranch = new Branch(1, 'Branch 1 name', commits);
        let targetBranch = new Branch(2, 'Branch 2 name', commits);

        it('should create a pull request', () => {
            const pullRequest = new PullRequest(1, 'Pull request title', 'Pull request description', sourceBranch, targetBranch);

            expect(pullRequest.id).to.equal(1);
            expect(pullRequest.title).to.equal('Pull request title');
            expect(pullRequest.description).to.equal('Pull request description');
            expect(pullRequest.sourceBranch).to.equal(sourceBranch);
            expect(pullRequest.targetBranch).to.equal(targetBranch);
        }); 

        it('should throw an error when creating a pull request with an empty title', () => {
            expect(() => new PullRequest(1, '', 'Pull request description', sourceBranch, targetBranch)).to.throw(Error);
        });

        it('should throw an error when creating a pull request with an empty description', () => {
            expect(() => new PullRequest(1, 'Pull request title', '', sourceBranch, targetBranch)).to.throw(Error);
        });

        it('should throw an error when creating a pull request with no source branch', () => {
            expect(() => new PullRequest(1, 'Pull request title', 'Pull request description', null, targetBranch)).to.throw(Error);
        });

        it('should throw an error when creating a pull request with no target branch', () => {
            expect(() => new PullRequest(1, 'Pull request title', 'Pull request description', sourceBranch, null)).to.throw(Error);
        });

        it('should set the title', () => {
            const pullRequest = new PullRequest(1, 'Pull request title', 'Pull request description', sourceBranch, targetBranch);
            pullRequest.title = 'New pull request title';
            expect(pullRequest.title).to.equal('New pull request title');
        });

        it('should set the description', () => {
            const pullRequest = new PullRequest(1, 'Pull request title', 'Pull request description', sourceBranch, targetBranch);
            pullRequest.description = 'New pull request description';
            expect(pullRequest.description).to.equal('New pull request description');
        });

        it('should set the source branch', () => {
            const pullRequest = new PullRequest(1, 'Pull request title', 'Pull request description', sourceBranch, targetBranch);
            const newSourceBranch = new Branch(3, 'Branch 3 name', commits);
            pullRequest.sourceBranch = newSourceBranch;
            expect(pullRequest.sourceBranch).to.equal(newSourceBranch);
        });

        it('should set the target branch', () => {
            const pullRequest = new PullRequest(1, 'Pull request title', 'Pull request description', sourceBranch, targetBranch);
            const newTargetBranch = new Branch(4, 'Branch 4 name', commits);
            pullRequest.targetBranch = newTargetBranch;
            expect(pullRequest.targetBranch).to.equal(newTargetBranch);
        });
    });
});
