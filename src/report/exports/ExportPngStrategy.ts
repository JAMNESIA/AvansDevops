import { IExportStrategy } from "../interfaces/IExportStrategy";
import { Report } from "../Report";
import * as textToImage from "text-to-image";

export class ExportPngStrategy implements IExportStrategy {
    export(report: Report): void {
        textToImage.generateSync(report.toString(), {
            debug: true,
            debugFilename: "report.png",
        });
    }
}
