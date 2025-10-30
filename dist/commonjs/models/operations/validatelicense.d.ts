import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ValidateLicenseRequest = {
    xApiKey: string;
    validateLicenseRequestEntity: components.ValidateLicenseRequestEntity;
};
/** @internal */
export declare const ValidateLicenseRequest$inboundSchema: z.ZodType<ValidateLicenseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ValidateLicenseRequest$Outbound = {
    "x-api-key": string;
    ValidateLicenseRequestEntity: components.ValidateLicenseRequestEntity$Outbound;
};
/** @internal */
export declare const ValidateLicenseRequest$outboundSchema: z.ZodType<ValidateLicenseRequest$Outbound, z.ZodTypeDef, ValidateLicenseRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ValidateLicenseRequest$ {
    /** @deprecated use `ValidateLicenseRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ValidateLicenseRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ValidateLicenseRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ValidateLicenseRequest$Outbound, z.ZodTypeDef, ValidateLicenseRequest>;
    /** @deprecated use `ValidateLicenseRequest$Outbound` instead. */
    type Outbound = ValidateLicenseRequest$Outbound;
}
export declare function validateLicenseRequestToJSON(validateLicenseRequest: ValidateLicenseRequest): string;
export declare function validateLicenseRequestFromJSON(jsonString: string): SafeParseResult<ValidateLicenseRequest, SDKValidationError>;
//# sourceMappingURL=validatelicense.d.ts.map