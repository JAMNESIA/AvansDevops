import { Comment } from './Comment';
import { CommentNode } from './CommentNode';

export class CommentTree {

    private _root: CommentNode;

    constructor(root: CommentNode) {
        this._root = root || null;
    }

    get root(): CommentNode {
        return this._root;
    }

    public getRoot(): CommentNode {
        return this._root;
    }

    public log(): void {
        this._root.log();
    }

    public addComment(comment: Comment): void {
        let node = new CommentNode(comment);
        if(this.getRoot() === null) {
            this._root = node;
        }else{
            this._root.addChild(node);
        }
    }

    public removeComment(comment: Comment): void {
        let node = this.findNode(comment);

        if (node) {
            node.getParent().removeChild(node);
        }else{
            throw new Error('Comment not found');
        }
    }

    public findNode(comment: Comment): CommentNode {
        return this.findNodeRecursive(this._root, comment);
    }

    private findNodeRecursive(node: CommentNode, comment: Comment): CommentNode {
        if (node.getComment().getId() === comment.getId()) {
            return node;
        }

        for (let child of node.getChildren()) {
            let result = this.findNodeRecursive(child, comment);

            if (result) {
                return result;
            }
        }

        return null;
    }

}
