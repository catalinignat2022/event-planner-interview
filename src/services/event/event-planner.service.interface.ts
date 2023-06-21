export interface IEventPlannerService {
    getAllEvents():Promise<any>;
    subscribeToEvent(eventId: string): Promise<any>;
}
