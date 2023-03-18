import { ConcreteReportBuilder } from '../../src/report/ConcreteReportBuilder';
import { Report } from '../../src/report/Report';
import { assert } from 'chai';
import { should } from 'chai';
import { expect } from 'chai';
import { Header } from '../../src/report/Header';
import { Footer } from '../../src/report/Footer';

describe('ConcreteReportBuilder', () => {
    it('should create a report', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceHeader('companyName', 'projectTitle', 'reportTitle')
            .produceBody('content')
            .produceFooter('version')
            .getReport();
        expect(report).to.be.an.instanceof(Report);
    });

    it('should create a report with a header', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceHeader('companyName', 'projectTitle', 'reportTitle')
            .getReport();
        expect(report.getHeader()).to.not.be.null;
        expect(report.getBody()).to.be.empty;
        expect(report.getFooter()).to.be.undefined;
        expect(report.getHeader()).to.be.instanceOf(Header);
        expect(report.getHeader().toString()).to.equal('Company: companyName Project: projectTitle Report: reportTitle\n');
    });

    it('should create a report with a body', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceBody('content')
            .getReport();
        expect(report.getBody()).to.not.be.null;
        expect(report.getHeader()).to.be.undefined;
        expect(report.getFooter()).to.be.undefined;
        expect(report.getBody()).to.be.an('array');
        expect(report.getBody().toString()).to.equal('content\n');
    });

    it('should create a report with a footer', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceFooter('version')
            .getReport();
        expect(report.getFooter()).to.not.be.null;
        expect(report.getHeader()).to.be.undefined;
        expect(report.getBody()).to.be.empty;
        expect(report.getFooter()).to.be.instanceOf(Footer);
        expect(report.getFooter().toString()).to.equal(`\nReport generated on: ${new Date().toISOString()} for version: version`);
    }); 

    it('should create a report with a header, body and footer', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceHeader('companyName', 'projectTitle', 'reportTitle')
            .produceBody('content')
            .produceFooter('version')
            .getReport();
        expect(report.getFooter().toString()).to.equal(`\nReport generated on: ${new Date().toISOString()} for version: version`);
        expect(report.getHeader().toString()).to.equal('Company: companyName Project: projectTitle Report: reportTitle\n');
        expect(report.getBody().toString()).to.equal('content\n');
        expect(report.getHeader()).to.not.be.null;
        expect(report.getBody()).to.not.be.null;
        expect(report.getFooter()).to.not.be.null;
        expect(report.getHeader()).to.be.instanceOf(Header);
        expect(report.getBody()).to.be.an('array');
        expect(report.getFooter()).to.be.instanceOf(Footer);
    });

    it('should create a report with a header, body and footer and export to pdf', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceHeader('companyName', 'projectTitle', 'reportTitle')
            .produceBody('content')
            .produceFooter('version')
            .producePDF()
            .getReport();
        expect(report.getHeader().toString()).to.equal('Company: companyName Project: projectTitle Report: reportTitle\n');
        expect(report.getBody().toString()).to.equal('content\n');
        expect(report.getHeader()).to.not.be.null;
        expect(report.getBody()).to.not.be.null;
        expect(report.getFooter()).to.not.be.null;
        expect(report.getHeader()).to.be.instanceOf(Header);
        expect(report.getBody()).to.be.an('array');
        expect(report.getFooter()).to.be.instanceOf(Footer);
    });

    it('should create a report with a header, body and footer and export to png', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceHeader('companyName', 'projectTitle', 'reportTitle')
            .produceBody('content')
            .produceFooter('version')
            .producePNG()
            .getReport();
        expect(report.getHeader().toString()).to.equal('Company: companyName Project: projectTitle Report: reportTitle\n');
        expect(report.getBody().toString()).to.equal('content\n');
        expect(report.getHeader()).to.not.be.null;
        expect(report.getBody()).to.not.be.null;
        expect(report.getFooter()).to.not.be.null;
        expect(report.getHeader()).to.be.instanceOf(Header);
        expect(report.getBody()).to.be.an('array');
        expect(report.getFooter()).to.be.instanceOf(Footer);
    });

    it('should create a report with a header, body and footer and export to pdf and png', () => {
        const reportBuilder = new ConcreteReportBuilder();
        const report = reportBuilder
            .produceHeader('companyName', 'projectTitle', 'reportTitle')
            .produceBody('content')
            .produceFooter('version')
            .producePDF()
            .producePNG()
            .getReport();
        expect(report.getHeader().toString()).to.equal('Company: companyName Project: projectTitle Report: reportTitle\n');
        expect(report.getBody().toString()).to.equal('content\n');
        expect(report.getHeader()).to.not.be.null;
        expect(report.getBody()).to.not.be.null;
        expect(report.getFooter()).to.not.be.null;
        expect(report.getHeader()).to.be.instanceOf(Header);
        expect(report.getBody()).to.be.an('array');
        expect(report.getFooter()).to.be.instanceOf(Footer);
    });
});
