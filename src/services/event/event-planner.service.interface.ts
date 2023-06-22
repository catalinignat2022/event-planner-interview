export interface IEventPlannerService {
    theme: string;
    getAllEvents():Promise<any>;
    subscribeToEvent(eventId: string): Promise<any>;
}
