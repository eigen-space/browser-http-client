import { ContentType, HttpStatusCode, RequestProviderResponse } from '@eigenspace/base-http-client';

export class BrowserProviderResponse<T> extends RequestProviderResponse<Response, T> {

    get status(): HttpStatusCode | number {
        return this.nativeResponse.status;
    }

    protected get contentTypeHeader(): ContentType | string | undefined {
        return this.nativeResponse.headers.get('Content-Type') || undefined;
    }

    protected json(): Promise<T> {
        return this.nativeResponse.json();
    }
}