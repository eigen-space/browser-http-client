import { FormDataAppender, FormEntry } from '@eigenspace/base-http-client';
import { Dictionary } from '@eigenspace/common-types';

export class BrowserFormDataAppender extends FormData implements FormDataAppender {

    // TODO: fix types of entry later
    // @ts-ignore
    append(...args: FormEntry<string>): void {
        // @ts-ignore
        super.append(...args);
    }

    getHeaders(): Dictionary<string> {
        return {};
    }
}