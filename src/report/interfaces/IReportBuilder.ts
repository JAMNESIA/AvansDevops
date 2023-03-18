export interface IReportBuilder {
    produceHeader(companyName: string, projectTitle: string, reportTitle: string): IReportBuilder;
    produceBody(content: string): IReportBuilder; 
    produceFooter(version: string): IReportBuilder; 
    producePDF(): IReportBuilder;
    producePNG(): IReportBuilder;
}
