import { BaseHttpClient, CommonQueryProps, QueryProvider } from '@eigenspace/base-http-client';
import { BrowserRequestProvider } from '../browser-request-provider/browser-request-provider';
import { BrowserFormDataAppender } from '../browser-form-data-appender/browser-form-data-appender';

interface AdditionalProps {
    isMock: boolean;
}

export class BrowserHttpClient implements QueryProvider {
    private baseHttpClient: BaseHttpClient<Response>;
    private isMock = false;

    constructor(baseUrl = '', { isMock }: AdditionalProps) {
        this.isMock = isMock;
        const requestProvider = new BrowserRequestProvider();
        this.baseHttpClient = new BaseHttpClient(requestProvider, undefined, BrowserFormDataAppender, baseUrl);
    }

    delete<T>(url: string, props?: CommonQueryProps): Promise<T> {
        if (this.isMock) {
            return this.baseHttpClient.get<T>(url, props);
        }

        return this.baseHttpClient.delete<T>(url, props);
    }

    get<T>(url: string, props?: CommonQueryProps): Promise<T> {
        return this.baseHttpClient.get<T>(url, props);
    }

    patch<T>(url: string, props?: CommonQueryProps): Promise<T> {
        if (this.isMock) {
            return this.baseHttpClient.get<T>(url, props);
        }

        return this.baseHttpClient.patch<T>(url, props);
    }

    post<T>(url: string, props?: CommonQueryProps): Promise<T> {
        if (this.isMock) {
            return this.baseHttpClient.get<T>(url, props);
        }

        return this.baseHttpClient.post<T>(url, props);
    }

    put<T>(url: string, props?: CommonQueryProps): Promise<T> {
        if (this.isMock) {
            return this.baseHttpClient.get<T>(url, props);
        }

        return this.baseHttpClient.put<T>(url, props);
    }
}
