import { BacklogItem } from "../backlog/BacklogItem";
import { Account } from "../account/Account";
import { CommentTree } from "./CommentTree";
import  { CommentNode } from "./CommentNode";
import { Comment } from "./Comment";
import { DoneState } from "../backlog/states/DoneState";

export class Thread {
    private _id: number;
    private _title: string;
    private _description: string;
    private _backlogItem: BacklogItem;
    private _originalPoster: Account;
    private _comments: CommentTree;

    constructor(
        id: number,
        title: string,
        description: string,
        backlogItem: BacklogItem,
        originalPoster: Account
    ) {
        if(!(backlogItem.getState() instanceof DoneState)){
            this._id = id;
            this._title = title;
            this._description = description;
            this._backlogItem = backlogItem;
            this._originalPoster = originalPoster;
            this._comments = new CommentTree();
        }else{
            throw new Error("Backlog item is done");
        }
    }

    public addComment(comment: Comment): void {
        if(!(this._backlogItem.getState() instanceof DoneState)){
            this._comments.addComment(comment);
        }else{
            throw new Error("Backlog item is done");
        }
    }
}
