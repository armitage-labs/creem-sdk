import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ActivateLicenseRequest = {
    xApiKey: string;
    activateLicenseRequestEntity: components.ActivateLicenseRequestEntity;
};
/** @internal */
export declare const ActivateLicenseRequest$inboundSchema: z.ZodType<ActivateLicenseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ActivateLicenseRequest$Outbound = {
    "x-api-key": string;
    ActivateLicenseRequestEntity: components.ActivateLicenseRequestEntity$Outbound;
};
/** @internal */
export declare const ActivateLicenseRequest$outboundSchema: z.ZodType<ActivateLicenseRequest$Outbound, z.ZodTypeDef, ActivateLicenseRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ActivateLicenseRequest$ {
    /** @deprecated use `ActivateLicenseRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ActivateLicenseRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ActivateLicenseRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ActivateLicenseRequest$Outbound, z.ZodTypeDef, ActivateLicenseRequest>;
    /** @deprecated use `ActivateLicenseRequest$Outbound` instead. */
    type Outbound = ActivateLicenseRequest$Outbound;
}
export declare function activateLicenseRequestToJSON(activateLicenseRequest: ActivateLicenseRequest): string;
export declare function activateLicenseRequestFromJSON(jsonString: string): SafeParseResult<ActivateLicenseRequest, SDKValidationError>;
//# sourceMappingURL=activatelicense.d.ts.map