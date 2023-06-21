import { IApi } from "./api.interface";

export interface IApiService {
    loadSession(): IApi;
    buildFullUrl(path: string): string;
}