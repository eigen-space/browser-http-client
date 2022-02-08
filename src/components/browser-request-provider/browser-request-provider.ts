import { HttpError, RequestProviderResponse } from '@eigenspace/base-http-client';
import { RequestProvider, RequestProviderOptions } from '@eigenspace/base-http-client/types/request-provider';
import { BrowserProviderResponse } from '../browser-provider-response/browser-provider-response';

export class BrowserRequestProvider implements RequestProvider<Response> {

    async fetch<T>(url: string, options: RequestProviderOptions): Promise<RequestProviderResponse<Response, T>> {
        // TODO: fix body type later
        // @ts-ignore
        const response = await fetch(url, options);

        if (!response.ok) {
            const body = await response.json();
            throw new HttpError(response.status, response.statusText, body);
        }

        return new BrowserProviderResponse(response);
    }
}
