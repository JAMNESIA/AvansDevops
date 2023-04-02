const { expect } = require('chai');
const { Comment } = require('../../src/forum/Comment');
const { CommentNode } = require('../../src/forum/CommentNode');
const { CommentTree } = require('../../src/forum/CommentTree');
const { Thread } = require('../../src/forum/Thread');
const { BacklogItem } = require('../../src/backlog/BacklogItem');
const { Account } = require('../../src/account/Account');

describe('Forum', () => {
    let author = new Account(1, 'name', 'email', 'phonenumber', 'slack');

    describe('Comment', () => {
        it('should create a comment', () => {
            const comment = new Comment(1, 'content', author, new Date())
            expect(comment.getId()).to.equal(1);
            expect(comment.getText()).to.equal('content');
            expect(comment.getAuthor()).to.equal(author);
        });

        it('should throw an error when no text is provided', () => {
            expect(() => new Comment(1, '', author, new Date())).to.throw('Text cannot be empty');
        });

        it('should throw an error when no author is provided', () => {
            expect(() => new Comment(1, 'content', null, new Date())).to.throw('Author cannot be empty');
        });

        it('should work when no date is provided', () => {
            const comment = new Comment(1, 'content', author, null)
            expect(comment.getId()).to.equal(1);
            expect(comment.getText()).to.equal('content');
            expect(comment.getAuthor()).to.equal(author);
        });

        it('should set text', () => {
            const comment = new Comment(1, 'content', author, new Date())
            comment.setText('new content');
            expect(comment.getText()).to.equal('new content');
        }); 

        it('should get text', () => {
            const comment = new Comment(1, 'content', author, new Date())
            expect(comment.getText()).to.equal('content');
        });

        it('should get author', () => {
            const comment = new Comment(1, 'content', author, new Date())
            expect(comment.getAuthor()).to.equal(author);
        });

        it('should get date', () => {
            const date = new Date();
            const comment = new Comment(1, 'content', author, date)
            expect(comment.getDate()).to.equal(date);
        });
    });

    describe('CommentNode', () => {
        let comment = new Comment(1, 'content', author, new Date());
        let commentNode;

        it('should create a comment node', () => {
            commentNode = new CommentNode(comment);
            expect(commentNode.getComment()).to.equal(comment);
            expect(commentNode.getChildren()).to.be.empty;
        });

        it('should throw an error when no comment is provided', () => {
            expect(() => new CommentNode(null)).to.throw('Comment cannot be empty');
        });

        it('should add a child', () => {
            let childComment = new Comment(2, 'content', author, new Date());
            let childCommentNode = new CommentNode(childComment);
            commentNode.addChild(childCommentNode);
            expect(commentNode.children).to.have.length(1);
            expect(commentNode.children[0]).to.equal(childCommentNode);
        });

        it('should remove a child', () => {
            let childComment = new Comment(2, 'content', author, new Date());
            let childCommentNode = new CommentNode(childComment);
            commentNode.addChild(childCommentNode);
            commentNode.removeChild(childCommentNode);
            expect(commentNode.children.length).to.equal(1);
        });

        it('should get children', () => {
            let childComment = new Comment(2, 'content', author, new Date());
            let childCommentNode = new CommentNode(childComment);
            commentNode.addChild(childCommentNode);
            expect(commentNode.children).to.have.length(2);
        });

        it('should get parent', () => {
            let childComment = new Comment(2, 'content', author, new Date());
            let childCommentNode = new CommentNode(childComment);
            commentNode.setParent(childCommentNode);
            expect(commentNode.getParent()).to.equal(childCommentNode);
        });

        it('should set parent', () => {
            let childComment = new Comment(2, 'content', author, new Date());
            let childCommentNode = new CommentNode(childComment);
            commentNode.addChild(childCommentNode);
            let parentComment = new Comment(3, 'content', author, new Date());
            let parentCommentNode = new CommentNode(parentComment);
            childCommentNode.parent = parentCommentNode;
            expect(childCommentNode.parent).to.equal(parentCommentNode);
        });

        it('should log a commentNode to the console', () => {
            commentNode = new CommentNode(comment);
            let childComment = new Comment(2, 'content', author, new Date());
            let childCommentNode = new CommentNode(childComment);
            commentNode.addChild(childCommentNode);
            commentNode.log();
            expect(commentNode.children).to.have.length(1);
            expect(commentNode.children[0]).to.equal(childCommentNode);
        });
    });

    describe('CommentTree', () => {
        let comment = new Comment(1, 'content', author, new Date());
        let comment2 = new Comment(2, 'content', author, new Date());
        let comment3 = new Comment(3, 'content', author, new Date());
        let comment4 = new Comment(4, 'content', author, new Date());

        let commentNode = new CommentNode(comment);
        let commentNode2 = new CommentNode(comment2);
        let commentNode3 = new CommentNode(comment3);
        let commentNode4 = new CommentNode(comment4);

        commentNode.addChild(commentNode2);
        commentNode.addChild(commentNode3);
        commentNode2.addChild(commentNode4);

        let commentTree;

        it('should create a comment tree', () => {
            commentTree = new CommentTree(commentNode);
            expect(commentTree.root).to.equal(commentNode);
        });

        it('should create an empty comment tree', () => {
            commentTree = new CommentTree();
            expect(commentTree.root).to.be.null;
        });

        it('should add a comment to the tree', () => {
            commentTree = new CommentTree(commentNode2);
            commentTree.addComment(comment3);
            expect(commentTree.root.comment).to.equal(comment2);
        }); 

        it('should get a comment from the tree', () => {
            commentTree = new CommentTree(commentNode);
            expect(commentTree.findNode(comment2)).to.equal(commentNode2);
        });
    });
});
