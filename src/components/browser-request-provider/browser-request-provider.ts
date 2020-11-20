import { RequestProviderResponse } from '@eigenspace/base-http-client';
import { RequestProvider, RequestProviderOptions } from '@eigenspace/base-http-client/types/request-provider';
import { BrowserProviderResponse } from '../browser-provider-response/browser-provider-response';
import { HttpError } from '../../entities/http-error/http-error';

export class BrowserRequestProvider implements RequestProvider<Response> {

    async fetch<T>(url: string, options: RequestProviderOptions): Promise<RequestProviderResponse<Response, T>> {
        // TODO: fix body type later
        // @ts-ignore
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new HttpError(response.status, response.statusText);
        }

        return new BrowserProviderResponse(response);
    }
}