import { Report } from '../Report';

export interface IExportStrategy {
    export(report: Report): void;
}
