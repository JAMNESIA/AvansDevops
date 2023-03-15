export abstract class Account {

    private _id: number;
    private _name: string;
    private _email: string;
    private _phonenumber: string;
    private _slack: string;

    /**
     * 
     * @param id  - The id of the account
     * @param name  - The name of the account
     * @param email  - The email of the account
     * @param phonenumber  - The phonenumber of the account
     * @param slack  - The slack username of the account
     */
    constructor(id: number, name: string, email: string, phonenumber: string, slack: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phonenumber = phonenumber;
        this._slack = slack;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phonenumber(): string {
        return this._phonenumber;
    }

    set phonenumber(value: string) {
        this._phonenumber = value;
    }

    get slack(): string {
        return this._slack;
    }

    set slack(value: string) { 
        this._slack = value;
    }

}
