
import { ConcreteNotifier } from "../../src/notification/ConcreteNotifier";
import { MailNotifier } from "../../src/notification/MailNotifier";
import { SlackNotifier } from "../../src/notification/SlackNotifier";
import { expect } from "chai";

describe('Notification', () => {
    it('should send a message', () => {
        const notifier = new ConcreteNotifier();
        expect(notifier.notify('Hello')).to.equal('Hello');
    });
    
    it('should send a message via email', () => {
        const notifier = new MailNotifier(new ConcreteNotifier());
        expect(notifier.notify('Hello')).to.equal('Sending email message: Hello');
    }); 

    it('should send a message via slack', () => {
        const notifier = new SlackNotifier(new ConcreteNotifier());
        expect(notifier.notify('Hello')).to.equal('Sending Slack message: Hello');
    });

    it('should send a message via email and slack', () => {
        const notifier = new SlackNotifier(new MailNotifier(new ConcreteNotifier()));
        expect(notifier.notify('Hello')).to.equal('Sending Slack message: Sending email message: Hello');
    });

    it('should send a message via slack and email', () => {
        const notifier = new MailNotifier(new SlackNotifier(new ConcreteNotifier()));
        expect(notifier.notify('Hello')).to.equal('Sending email message: Sending Slack message: Hello');
    });
});
