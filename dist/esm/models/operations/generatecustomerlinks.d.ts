import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GenerateCustomerLinksRequest = {
    xApiKey: string;
    createCustomerPortalLinkRequestEntity: components.CreateCustomerPortalLinkRequestEntity;
};
/** @internal */
export declare const GenerateCustomerLinksRequest$inboundSchema: z.ZodType<GenerateCustomerLinksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateCustomerLinksRequest$Outbound = {
    "x-api-key": string;
    CreateCustomerPortalLinkRequestEntity: components.CreateCustomerPortalLinkRequestEntity$Outbound;
};
/** @internal */
export declare const GenerateCustomerLinksRequest$outboundSchema: z.ZodType<GenerateCustomerLinksRequest$Outbound, z.ZodTypeDef, GenerateCustomerLinksRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateCustomerLinksRequest$ {
    /** @deprecated use `GenerateCustomerLinksRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateCustomerLinksRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateCustomerLinksRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateCustomerLinksRequest$Outbound, z.ZodTypeDef, GenerateCustomerLinksRequest>;
    /** @deprecated use `GenerateCustomerLinksRequest$Outbound` instead. */
    type Outbound = GenerateCustomerLinksRequest$Outbound;
}
export declare function generateCustomerLinksRequestToJSON(generateCustomerLinksRequest: GenerateCustomerLinksRequest): string;
export declare function generateCustomerLinksRequestFromJSON(jsonString: string): SafeParseResult<GenerateCustomerLinksRequest, SDKValidationError>;
//# sourceMappingURL=generatecustomerlinks.d.ts.map