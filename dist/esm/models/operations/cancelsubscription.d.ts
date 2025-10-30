import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CancelSubscriptionRequest = {
    id: string;
    xApiKey: string;
};
/** @internal */
export declare const CancelSubscriptionRequest$inboundSchema: z.ZodType<CancelSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelSubscriptionRequest$Outbound = {
    id: string;
    "x-api-key": string;
};
/** @internal */
export declare const CancelSubscriptionRequest$outboundSchema: z.ZodType<CancelSubscriptionRequest$Outbound, z.ZodTypeDef, CancelSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelSubscriptionRequest$ {
    /** @deprecated use `CancelSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelSubscriptionRequest$Outbound, z.ZodTypeDef, CancelSubscriptionRequest>;
    /** @deprecated use `CancelSubscriptionRequest$Outbound` instead. */
    type Outbound = CancelSubscriptionRequest$Outbound;
}
export declare function cancelSubscriptionRequestToJSON(cancelSubscriptionRequest: CancelSubscriptionRequest): string;
export declare function cancelSubscriptionRequestFromJSON(jsonString: string): SafeParseResult<CancelSubscriptionRequest, SDKValidationError>;
//# sourceMappingURL=cancelsubscription.d.ts.map