const { expect } = require('chai');
const { MailLibrary } = require('../../src/notification/MailLibrary');
const { MailNotifier } = require('../../src/notification/MailNotifier');
const { SlackNotifier } = require('../../src/notification/SlackNotifier');

describe('Notification', () => {
    
    describe('MailNotifier', () => {
        let mailLibrary = new MailLibrary();

        it('should send a message to mail', () => {
            const mailNotifier = new MailNotifier(mailLibrary);
            mailNotifier.notify("This is a test message");
        });

        // it('should throw an error when no mail library is configured', () => {
        //     const mailNotifier = new MailNotifier(null);
        //     expect(() => mailNotifier.notify("This is a test message")).to.throw('No mail library configured');
        // });

        // it('should throw an error when no message is provided', () => {
        //     const mailNotifier = new MailNotifier(mailLibrary);
        //     expect(() => mailNotifier.notify("")).to.throw('No message provided');
        // });
    });

    describe('SlackNotifier', () => {
        const slackNotifier = new SlackNotifier("webhook:https://hooks.slack.com/servi");

        it('should send a message to slack', () => {
            slackNotifier.notify("This is a test message");
        });

        it('should throw an error when no webhook is provided', () => {
            expect(() => new SlackNotifier("")).to.throw('No slack webhook configured');
        });

        // it('should throw an error when no message is provided', () => {
        //     expect(() => slackNotifier.notify(null)).to.throw('No message provided');
        // });

        it('should throw an error when no slack webhook is configured', () => {
            expect(() => new SlackNotifier("").notify("")).to.throw('No slack webhook configured');
        });
    });
    
});