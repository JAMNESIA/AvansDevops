
import { ConcreteNotifier } from "../../src/notification/ConcreteNotifier";
import { MailNotifier } from "../../src/notification/MailNotifier";
import { SlackNotifier } from "../../src/notification/SlackNotifier";
import { expect } from "chai";

describe('Notification', () => {
    it('should send a message', () => {
        const notifier = new ConcreteNotifier("John");
        expect(notifier.notify('Hello')).to.equal('Message for John: Hello');
    });

    it('should send a message via Slack', () => {
        const notifier = new ConcreteNotifier("John");
        const slackNotifier = new SlackNotifier(notifier, "slack");
        expect(slackNotifier.notify('Hello')).to.equal('Sending Slack message to slack: Message for John: Hello');
    });

    it('should send a message via email', () => {
        const notifier = new ConcreteNotifier("John");
        const emailNotifier = new MailNotifier(notifier, "email");
        expect(emailNotifier.notify('Hello')).to.equal('Sending email message to email: Message for John: Hello');
    });

    it('should send a message via Slack and email', () => {
        const notifier = new ConcreteNotifier("John");
        const slackNotifier = new SlackNotifier(notifier, "slack");
        const emailNotifier = new MailNotifier(slackNotifier, "email");
        expect(emailNotifier.notify('Hello')).to.equal('Sending email message to email: Sending Slack message to slack: Message for John: Hello');
    });

    it('should send a message via email and Slack', () => {
        const notifier = new ConcreteNotifier("John");
        const emailNotifier = new MailNotifier(notifier, "email");
        const slackNotifier = new SlackNotifier(emailNotifier, "slack");
        expect(slackNotifier.notify('Hello')).to.equal('Sending Slack message to slack: Sending email message to email: Message for John: Hello');
    }); 
});
