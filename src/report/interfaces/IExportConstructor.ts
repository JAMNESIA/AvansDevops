import { IExportStrategy } from './IExportStrategy';

export interface IExportConstructor {
    new (): IExportStrategy;
}
