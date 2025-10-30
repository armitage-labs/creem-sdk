import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateSubscriptionRequest = {
    id: string;
    xApiKey: string;
    updateSubscriptionRequestEntity: components.UpdateSubscriptionRequestEntity;
};
/** @internal */
export declare const UpdateSubscriptionRequest$inboundSchema: z.ZodType<UpdateSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSubscriptionRequest$Outbound = {
    id: string;
    "x-api-key": string;
    UpdateSubscriptionRequestEntity: components.UpdateSubscriptionRequestEntity$Outbound;
};
/** @internal */
export declare const UpdateSubscriptionRequest$outboundSchema: z.ZodType<UpdateSubscriptionRequest$Outbound, z.ZodTypeDef, UpdateSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSubscriptionRequest$ {
    /** @deprecated use `UpdateSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSubscriptionRequest$Outbound, z.ZodTypeDef, UpdateSubscriptionRequest>;
    /** @deprecated use `UpdateSubscriptionRequest$Outbound` instead. */
    type Outbound = UpdateSubscriptionRequest$Outbound;
}
export declare function updateSubscriptionRequestToJSON(updateSubscriptionRequest: UpdateSubscriptionRequest): string;
export declare function updateSubscriptionRequestFromJSON(jsonString: string): SafeParseResult<UpdateSubscriptionRequest, SDKValidationError>;
//# sourceMappingURL=updatesubscription.d.ts.map