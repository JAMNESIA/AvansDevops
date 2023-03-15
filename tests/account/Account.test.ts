import { assert } from 'chai';
import { Account } from '../../src/account/Account';

describe('Account', () => {
    describe('constructor', () => {
        it('should create an account', () => {
            const account = new Account(1, 'name', 'email', 'phonenumber', 'slack');
            assert.equal(account.id, 1);
            assert.equal(account.name, 'name');
            assert.equal(account.email, 'email');
            assert.equal(account.phonenumber, 'phonenumber');
            assert.equal(account.slack, 'slack');
        });
    });
});
