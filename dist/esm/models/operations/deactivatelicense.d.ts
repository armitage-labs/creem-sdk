import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeactivateLicenseRequest = {
    xApiKey: string;
    deactivateLicenseRequestEntity: components.DeactivateLicenseRequestEntity;
};
/** @internal */
export declare const DeactivateLicenseRequest$inboundSchema: z.ZodType<DeactivateLicenseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeactivateLicenseRequest$Outbound = {
    "x-api-key": string;
    DeactivateLicenseRequestEntity: components.DeactivateLicenseRequestEntity$Outbound;
};
/** @internal */
export declare const DeactivateLicenseRequest$outboundSchema: z.ZodType<DeactivateLicenseRequest$Outbound, z.ZodTypeDef, DeactivateLicenseRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeactivateLicenseRequest$ {
    /** @deprecated use `DeactivateLicenseRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeactivateLicenseRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeactivateLicenseRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeactivateLicenseRequest$Outbound, z.ZodTypeDef, DeactivateLicenseRequest>;
    /** @deprecated use `DeactivateLicenseRequest$Outbound` instead. */
    type Outbound = DeactivateLicenseRequest$Outbound;
}
export declare function deactivateLicenseRequestToJSON(deactivateLicenseRequest: DeactivateLicenseRequest): string;
export declare function deactivateLicenseRequestFromJSON(jsonString: string): SafeParseResult<DeactivateLicenseRequest, SDKValidationError>;
//# sourceMappingURL=deactivatelicense.d.ts.map