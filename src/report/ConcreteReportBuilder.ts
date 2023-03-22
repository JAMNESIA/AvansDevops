import { ExportPdfStrategy } from "./exports/ExportPdfStrategy";
import { ExportPngStrategy } from "./exports/ExportPngStrategy";
import { IReportBuilder } from "./interfaces/IReportBuilder";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Report } from "./Report";

export class ConcreteReportBuilder implements IReportBuilder {
    private report: Report;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.report = new Report();
    }

    public produceHeader(companyName: string, projectTitle: string, reportTitle: string): IReportBuilder {
        this.report.setHeader(new Header(companyName, projectTitle, reportTitle));
        return this;
    }

    public produceBody(content: string): IReportBuilder {
        this.report.addContent(content);
        return this;
    }

    public produceFooter(version: string): IReportBuilder {
        this.report.setFooter(new Footer(version));
        return this;
    }

    public producePDF(): IReportBuilder {
        this.report.export(ExportPdfStrategy);
        return this;
    }

    public producePNG(): IReportBuilder {
        this.report.export(ExportPngStrategy);
        return this;
    }

    public getReport(): Report {
        return this.report;
    }
}
