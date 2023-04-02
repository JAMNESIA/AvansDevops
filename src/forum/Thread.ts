import { BacklogItem } from "../backlog/BacklogItem";
import { Account } from "../account/Account";
import { CommentTree } from "./CommentTree";
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

    public getId(): number {
        return this._id;
    }

    public getTitle(): string {
        return this._title;
    }

    public setTitle(title: string): void {
        this._title = title;
    }

    public getDescription(): string {
        return this._description;
    }

    public setDescription(description: string): void {
        this._description = description;
    }

    public getBacklogItem(): BacklogItem {
        return this._backlogItem;
    }

    public getOriginalPoster(): Account {
        return this._originalPoster;
    }

    public getComments(): CommentTree {
        return this._comments;
    }


    public addComment(comment: Comment): void {
        if(!(this._backlogItem.getState() instanceof DoneState)){
            this._comments.addComment(comment);
        }else{
            throw new Error("Backlog item is done");
        }
    }
}
