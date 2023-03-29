import { assert } from 'chai';
import { Developer } from '../../src/account/Developer';
import { Account } from '../../src/account/Account';
import { ScrumMaster } from '../../src/account/ScrumMaster';
import { ProductOwner } from '../../src/account/ProductOwner';
import { LeadDeveloper } from "../../src/account/LeadDeveloper";
import { Tester } from "../../src/account/Tester";

describe('Account', () => {
    describe('constructor', () => {
        it('should create an developer account', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.id, 1);
            assert.equal(account.name, 'name');
            assert.equal(account.email, 'email');
            assert.equal(account.phonenumber, 'phonenumber');
            assert.equal(account.slack, 'slack');
            assert.equal(account instanceof Account, true);
        });

        it('should create an scrum master account', () => {
            const account = new ScrumMaster(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.id, 1);
            assert.equal(account.name, 'name');
            assert.equal(account.email, 'email');
            assert.equal(account.phonenumber, 'phonenumber');
            assert.equal(account.slack, 'slack');
            assert.equal(account instanceof Account, true);
        });

        it('should create an product owner account', () => {
            const account = new ProductOwner(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.id, 1);
            assert.equal(account.name, 'name');
            assert.equal(account.email, 'email');
            assert.equal(account.phonenumber, 'phonenumber');
            assert.equal(account.slack, 'slack');
            assert.equal(account instanceof Account, true);
        });

        it('should create an lead developer account', () => {
            const account = new LeadDeveloper(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.id, 1);
            assert.equal(account.name, 'name');
            assert.equal(account.email, 'email');
            assert.equal(account.phonenumber, 'phonenumber');
            assert.equal(account.slack, 'slack');
            assert.equal(account instanceof Account, true);
        });

        it('should create an tester account', () => {
            const account = new Tester(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.id, 1);
            assert.equal(account.name, 'name');
            assert.equal(account.email, 'email');
            assert.equal(account.phonenumber, 'phonenumber');
            assert.equal(account.slack, 'slack');
            assert.equal(account instanceof Account, true);
        });
    });
    
    describe('setters', () => {
        it('should set the name', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            account.name = 'new name';
            assert.equal(account.name, 'new name');
        });

        it('should set the email', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            account.email = 'new email';
            assert.equal(account.email, 'new email');
        });

        it('should set the phonenumber', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            account.phonenumber = 'new phonenumber';
            assert.equal(account.phonenumber, 'new phonenumber');
        });

        it('should set the slack', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            account.slack = 'new slack';
            assert.equal(account.slack, 'new slack');
        });
    });

    describe('getters', () => {
        it('should get the id', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.id, 1);
        });

        it('should get the name', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.name, 'name');
        });

        it('should get the email', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.email, 'email');
        });

        it('should get the phonenumber', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.phonenumber, 'phonenumber');
        });

        it('should get the slack', () => {
            const account = new Developer(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.slack, 'slack');
        });
    });
});
