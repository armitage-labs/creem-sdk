import { CreemError } from "./creemerror.js";
/** The fallback error class if no more specific error class is matched */
export declare class APIError extends CreemError {
    constructor(message: string, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
//# sourceMappingURL=apierror.d.ts.map