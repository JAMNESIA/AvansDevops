import { Account } from "../account/Account";

export class Project {

    private _id: number;
    private _name: string;
    private _productOwner?: Account;
    private _type: string;

    constructor(name: string, productOwner?: Account, type?: string) {
        this._name = name;
        this._productOwner = productOwner;
        this._type = type || "Scrum";
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

    getProjectType(): string {
        return this._type;
    }

    setName(name: string): void {
        this._name = name;
    }

    setProductOwner(productOwner: Account): void {
        this._productOwner = productOwner;
    }

}