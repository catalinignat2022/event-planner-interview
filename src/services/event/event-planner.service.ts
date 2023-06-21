import { ApiBase } from "../api/api-base";
import { IEventPlannerService } from "./event-planner.service.interface";
import { IServiceFactory } from "../service-factory.interface";

export class EventPlannerService extends ApiBase implements IEventPlannerService {

    public constructor(services: IServiceFactory) {
        super(services);
    }

    public async getAllEvents():Promise<any> {
        const url = '/elements';
        const response = await this.get(url);
        return response;
    }

    public async subscribeToEvent(eventId: string):Promise<any> {
        const url = '/elements';
        const response = await this.post(url, { body: { id: eventId } });
        return response;
    }
}