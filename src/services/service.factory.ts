// Clasa ServiceFactory definește două proprietăți private de tip Lazy<T>, 
// unde T este tipul serviciului corespunzător. 
// Clasa Lazy<T> este o clasă definită separat care permite inițializarea leneșă a unei valori,
//  adică valoarea este creată doar atunci când este nevoie. 
//  Proprietatea _api este de tip Lazy<IApiService> și utilizează ApiService pentru a crea o instanță a serviciului API. 
//  Proprietatea api este un getter care returnează valoarea serviciului API prin intermediul Lazy<T>.value.
//  Proprietatea _eventPlanner este de tip Lazy<IEventPlannerService> și utilizează EventPlannerService pentru a crea o instanță a serviciului Event Planner.
// Proprietatea eventPlanner este un getter care returnează valoarea serviciului Event Planner prin intermediul Lazy<T>.value.
// Această clasă permite accesul la instanțele serviciilor API și Event Planner prin intermediul getter-ilor api și eventPlanner.
// Prin utilizarea Lazy<T>, se asigură că serviciile sunt create doar atunci când sunt solicitate pentru prima dată, optimizând astfel performanța aplicației și economisind resurse.



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