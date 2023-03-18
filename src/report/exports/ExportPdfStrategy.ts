import { IExportStrategy } from "../interfaces/IExportStrategy";
import { Report } from "../Report";
import { jsPDF } from "jspdf";

export class ExportPdfStrategy implements IExportStrategy {
    export(report: Report): void {
        const pdfDoc = new jsPDF();
        pdfDoc.text(report.toString(), 14, 14);
        pdfDoc.save("report.pdf");
    }
}
