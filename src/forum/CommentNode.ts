import { Comment } from "./Comment";

export class CommentNode {

    private _comment: Comment;
    private _children: CommentNode[];
    private _parent: CommentNode;

    constructor(comment: Comment) {
        if (!comment) throw new Error("Comment cannot be empty");

        this._comment = comment;

        this._children = [];
        this._parent = null;
    }

    get children(): CommentNode[] {
        return this._children;
    }

    public getComment(): Comment {
        return this._comment;
    }

    get comment(): Comment {
        return this._comment;
    }
    
    public log(): void {
        console.log(this._comment.getText());

        for (let child of this._children) {
            child.log();
        }
    }

    public addChild(child: CommentNode): void {
        child.setParent(this);
        this._children.push(child);
    }

    public removeChild(child: CommentNode): void {
        child.setParent(null);

        let index = this._children.indexOf(child);
        if (index > -1) {
            this._children.splice(index, 1);
        }
    }

    public getChildren(): CommentNode[] {
        return this._children;
    }

    public getParent(): CommentNode {
        return this._parent;
    }

    public setParent(parent: CommentNode): void {
        this._parent = parent;
    }

}
