import { CompositeComponent } from './CompositeComponent';
import { Visitor } from './Visitor';

export class Command extends CompositeComponent {
    
    private _command: string;

    constructor(command: string) {
        super();

        this._command = command;
    }

    public getCommand(): string {
        return this._command;
    }

    public setCommand(command: string): void {
        this._command = command;
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitCommand(this);
        super.acceptVisitor(visitor);
    }

}