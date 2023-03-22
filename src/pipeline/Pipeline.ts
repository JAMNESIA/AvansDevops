import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./Visitor";

export class Pipeline extends CompositeComponent {

    private _name: string;
    private _automatic: boolean;

    constructor(name: string, automatic: boolean) {
        super();
     
        this._name = name;
        this._automatic = automatic;
    }

    public getName(): string {
        return this._name;
    }

    public isAutomatic(): boolean {
        return this._automatic;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public setAutomatic(automatic: boolean): void {
        this._automatic = automatic;
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitPipeline(this);
        super.acceptVisitor(visitor);
    }

}