import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ValidateLicenseRequestEntity = {
    /**
     * The license key to validate.
     */
    key: string;
    /**
     * Id of the instance to validate.
     */
    instanceId: string;
};
/** @internal */
export declare const ValidateLicenseRequestEntity$inboundSchema: z.ZodType<ValidateLicenseRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type ValidateLicenseRequestEntity$Outbound = {
    key: string;
    instance_id: string;
};
/** @internal */
export declare const ValidateLicenseRequestEntity$outboundSchema: z.ZodType<ValidateLicenseRequestEntity$Outbound, z.ZodTypeDef, ValidateLicenseRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ValidateLicenseRequestEntity$ {
    /** @deprecated use `ValidateLicenseRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ValidateLicenseRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `ValidateLicenseRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ValidateLicenseRequestEntity$Outbound, z.ZodTypeDef, ValidateLicenseRequestEntity>;
    /** @deprecated use `ValidateLicenseRequestEntity$Outbound` instead. */
    type Outbound = ValidateLicenseRequestEntity$Outbound;
}
export declare function validateLicenseRequestEntityToJSON(validateLicenseRequestEntity: ValidateLicenseRequestEntity): string;
export declare function validateLicenseRequestEntityFromJSON(jsonString: string): SafeParseResult<ValidateLicenseRequestEntity, SDKValidationError>;
//# sourceMappingURL=validatelicenserequestentity.d.ts.map