import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetrieveSubscriptionRequest = {
    /**
     * The unique identifier of the subscription
     */
    subscriptionId: string;
    xApiKey: string;
};
/** @internal */
export declare const RetrieveSubscriptionRequest$inboundSchema: z.ZodType<RetrieveSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveSubscriptionRequest$Outbound = {
    subscription_id: string;
    "x-api-key": string;
};
/** @internal */
export declare const RetrieveSubscriptionRequest$outboundSchema: z.ZodType<RetrieveSubscriptionRequest$Outbound, z.ZodTypeDef, RetrieveSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveSubscriptionRequest$ {
    /** @deprecated use `RetrieveSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveSubscriptionRequest$Outbound, z.ZodTypeDef, RetrieveSubscriptionRequest>;
    /** @deprecated use `RetrieveSubscriptionRequest$Outbound` instead. */
    type Outbound = RetrieveSubscriptionRequest$Outbound;
}
export declare function retrieveSubscriptionRequestToJSON(retrieveSubscriptionRequest: RetrieveSubscriptionRequest): string;
export declare function retrieveSubscriptionRequestFromJSON(jsonString: string): SafeParseResult<RetrieveSubscriptionRequest, SDKValidationError>;
//# sourceMappingURL=retrievesubscription.d.ts.map