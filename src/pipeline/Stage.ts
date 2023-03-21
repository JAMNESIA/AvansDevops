import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./Visitor";

export class Stage extends CompositeComponent {

    private _name: string;

    constructor(name: string) {
        super();

        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitStage(this);
        super.acceptVisitor(visitor);
    }

}