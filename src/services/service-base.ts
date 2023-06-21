import { IServiceFactory } from "./service-factory.interface";

export abstract class ServiceBase {
    constructor(protected services: IServiceFactory) {
        
    }
}