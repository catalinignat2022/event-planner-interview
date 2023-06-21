import { ServiceBase } from "../service-base";
import { Api } from "./api";
import { IApiService } from "./api-service.interface";
import { IApi } from "./api.interface";

export class ApiService extends ServiceBase implements IApiService {

    private _api: IApi | null = null;

    buildFullUrl(path: string): string {
        const API_VERSION: string = `/`;
        let origin: string = `${process.env.REACT_APP_BASE_URL}${API_VERSION}`;

        if(origin.endsWith('/')) {
            origin = origin.substr(0, origin.length - 1);
        }
        return origin + path;
    }

    loadSession(): IApi {
        if(!this._api) {
            this._api = new Api(this.services);
        }
        return this._api;
    }
    
}