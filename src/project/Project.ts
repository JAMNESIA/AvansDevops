import { Account } from "../account/Account";

export class Project {

    private _id: number;
    private _name: string;
    private _productOwner?: Account;

    constructor(name: string, productOwner?: Account) {
        this._name = name;
        this._productOwner = productOwner;
    }


    getId(): number {
        return this._id;
    }

    getName(): string {
        return this._name;
    }

    getProductOwner(): Account {
        return this._productOwner;
    }

    setName(name: string): void {
        this._name = name;
    }

    setProductOwner(productOwner: Account): void {
        this._productOwner = productOwner;
    }

}