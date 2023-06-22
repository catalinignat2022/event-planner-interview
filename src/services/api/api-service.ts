import { ServiceBase } from "../service-base";
import { IApiService } from "./api-service.interface";

export class ApiService extends ServiceBase implements IApiService {

    buildFullUrl(path: string): string {
        const API_VERSION: string = `/`;
        let origin: string = `${process.env.REACT_APP_BASE_URL}${API_VERSION}`;

        if(origin.endsWith('/')) {
            origin = origin.substr(0, origin.length - 1);
        }
        return origin + path;
    }
    
}