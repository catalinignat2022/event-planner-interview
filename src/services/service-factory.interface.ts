import { IApiService } from "./api/api-service.interface";
import { IEventPlannerService } from "./event/event-planner.service.interface";

export interface IServiceFactory {
    readonly api: IApiService;
    readonly eventPlanner: IEventPlannerService;
}