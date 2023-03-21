import { Component } from "./Component";
import { Visitor } from "./Visitor";

export class CompositeComponent implements Component {

    private _components: Component[];

    constructor() {
        this._components = [];
    }

    public addComponent(component: Component): void {
        this._components.push(component);
    }

    public removeComponent(component: Component): void {
        this._components = this._components.filter(c => c !== component);
    }

    public getComponents(): Component[] {
        return this._components;
    }

    public getComponent(index: number): Component {
        return this._components[index];
    }

    public acceptVisitor(visitor: Visitor): void {
        this._components.forEach(component => component.acceptVisitor(visitor));
    }

}