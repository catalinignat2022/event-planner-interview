import { makeAutoObservable } from "mobx";
import { ApiService } from "./api/api-service";
import { IApiService } from "./api/api-service.interface";
import { Lazy } from "./lazy";
import { IEventPlannerService } from "./event/event-planner.service.interface";
import { IServiceFactory } from "./service-factory.interface";
import { EventPlannerService } from "./event/event-planner.service";

export class ServiceFactory implements IServiceFactory {
    constructor() {
        makeAutoObservable(this);
    }
    
    private _api: Lazy<IApiService> = new Lazy<IApiService>(() => new ApiService(this));
    get api(): IApiService {
        return this._api.value;
    }

    private _eventPlanner: Lazy<IEventPlannerService> = new Lazy<IEventPlannerService>(() => new EventPlannerService(this));
    get eventPlanner(): IEventPlannerService {
        return this._eventPlanner.value;
    }
}