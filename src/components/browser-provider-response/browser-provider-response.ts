import { ContentType, HttpStatusCode, RequestProviderResponse, StreamObserver } from '@eigenspace/base-http-client';

export class BrowserProviderResponse<T> extends RequestProviderResponse<T, Response> {

    get status(): HttpStatusCode | number {
        return this.nativeResponse.status;
    }

    protected get contentTypeHeader(): ContentType | string | undefined {
        return this.nativeResponse.headers.get('Content-Type') || undefined;
    }

    protected json(): Promise<T> {
        return this.nativeResponse.json();
    }

    protected blob(): Promise<Blob> {
        return this.nativeResponse.blob();
    }

    protected observer(): Promise<StreamObserver<T>> {
        throw new Error('Not implemented yet');
    }
}