import { Visitor } from "./Visitor";

export interface Component {
    acceptVisitor(visitor: Visitor): void;
}