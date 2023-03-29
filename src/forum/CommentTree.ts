import { Comment } from './Comment';
import { CommentNode } from './CommentNode';

export class CommentTree {

    private _root: CommentNode;

    constructor() {
        this._root = new CommentNode(null);
    }

    public getRoot(): CommentNode {
        return this._root;
    }

    public log(): void {
        this._root.log();
    }

    public addComment(comment: Comment): void {
        let node = new CommentNode(comment);

        this._root.addChild(node);
    }

    public removeComment(comment: Comment): void {
        let node = this.findNode(comment);

        if (node) {
            node.getParent().removeChild(node);
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
