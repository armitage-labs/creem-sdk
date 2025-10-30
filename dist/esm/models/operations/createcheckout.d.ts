import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateCheckoutRequest = {
    xApiKey: string;
    /**
     * Create checkout request payload
     */
    createCheckoutRequest: components.CreateCheckoutRequest;
};
/** @internal */
export declare const CreateCheckoutRequest$inboundSchema: z.ZodType<CreateCheckoutRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckoutRequest$Outbound = {
    "x-api-key": string;
    CreateCheckoutRequest: components.CreateCheckoutRequest$Outbound;
};
/** @internal */
export declare const CreateCheckoutRequest$outboundSchema: z.ZodType<CreateCheckoutRequest$Outbound, z.ZodTypeDef, CreateCheckoutRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateCheckoutRequest$ {
    /** @deprecated use `CreateCheckoutRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateCheckoutRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateCheckoutRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateCheckoutRequest$Outbound, z.ZodTypeDef, CreateCheckoutRequest>;
    /** @deprecated use `CreateCheckoutRequest$Outbound` instead. */
    type Outbound = CreateCheckoutRequest$Outbound;
}
export declare function createCheckoutRequestToJSON(createCheckoutRequest: CreateCheckoutRequest): string;
export declare function createCheckoutRequestFromJSON(jsonString: string): SafeParseResult<CreateCheckoutRequest, SDKValidationError>;
//# sourceMappingURL=createcheckout.d.ts.map