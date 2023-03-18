import { Report } from "./report/Report";
import { ExportPdfStrategy } from "./report/exports/ExportPdfStrategy";
import { ExportPngStrategy } from "./report/exports/ExportPngStrategy";

const report = new Report("Report Title", "Report Content");
report.export(ExportPngStrategy);

