import { IServiceFactory } from "../service-factory.interface";

interface IFetchOptions {
    body?: any;
    doNotThrowOnError?: boolean;
}

type HttpVerb = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

export abstract class ApiBase {
    constructor(public readonly services: IServiceFactory) {

    }

    protected async _fetchData<TData>(method: HttpVerb, path: string, options?: IFetchOptions): Promise<any> {
        const url = this.services.api.buildFullUrl(path);
        const headers = {
            'Content-Type': 'application/json'
        }
        
        const fetchResponse = await fetch(url, {
            method: method,
            body: JSON.stringify(options?.body),
            headers: headers
        });
        
        return fetchResponse.json();
    }

    protected async get<TData>(path: string): Promise<any> {
        return await this._fetchData('GET', path);
    }

    protected async post<TData>(path: string, options?: IFetchOptions): Promise<any> {
        return await this._fetchData('POST', path, options);
    }

    protected async put<TData>(path: string, options?: IFetchOptions): Promise<any> {
        return await this._fetchData('PUT', path, options);
    }

    protected async delete<TData>(path: string, options?: IFetchOptions): Promise<any> {
        return await this._fetchData('DELETE', path, options);
    }
}