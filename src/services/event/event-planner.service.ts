import { ApiBase } from "../api/api-base";
import { IEventPlannerService } from "./event-planner.service.interface";
import { IServiceFactory } from "../service-factory.interface";
import { makeObservable, observable } from "mobx";

export class EventPlannerService extends ApiBase implements IEventPlannerService {

    // Tema curentă a aplicației
    private _theme: string = 'light';

    // Constructorul serviciului
    public constructor(services: IServiceFactory) {
        super(services);

        // Facem ca proprietatea _theme să fie observabilă pentru MobX
        makeObservable<this, any>(this, {
            _theme: observable,
        });
    }

    // Getter pentru tema curentă
    public get theme(): string {
        return this._theme;
    }

    // Setter pentru tema curentă
    public set theme(value: string) {
        this._theme = value;
    }

    // Metoda pentru a obține toate evenimentele
    public async getAllEvents(): Promise<any> {
        const url = '/elements';
        const response = await this.get(url);
        return response;
    }

    // Metoda pentru a te abona la un eveniment
    public async subscribeToEvent(eventId: string): Promise<any> {
        const url = '/elements';
        const response = await this.post(url, { body: { id: eventId } });
        return response;
    }
}
