import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetrieveCheckoutRequest = {
    checkoutId: string;
    xApiKey: string;
};
/** @internal */
export declare const RetrieveCheckoutRequest$inboundSchema: z.ZodType<RetrieveCheckoutRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveCheckoutRequest$Outbound = {
    checkout_id: string;
    "x-api-key": string;
};
/** @internal */
export declare const RetrieveCheckoutRequest$outboundSchema: z.ZodType<RetrieveCheckoutRequest$Outbound, z.ZodTypeDef, RetrieveCheckoutRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveCheckoutRequest$ {
    /** @deprecated use `RetrieveCheckoutRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveCheckoutRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveCheckoutRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveCheckoutRequest$Outbound, z.ZodTypeDef, RetrieveCheckoutRequest>;
    /** @deprecated use `RetrieveCheckoutRequest$Outbound` instead. */
    type Outbound = RetrieveCheckoutRequest$Outbound;
}
export declare function retrieveCheckoutRequestToJSON(retrieveCheckoutRequest: RetrieveCheckoutRequest): string;
export declare function retrieveCheckoutRequestFromJSON(jsonString: string): SafeParseResult<RetrieveCheckoutRequest, SDKValidationError>;
//# sourceMappingURL=retrievecheckout.d.ts.map