import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeactivateLicenseRequestEntity = {
    /**
     * The license key to deactivate.
     */
    key: string;
    /**
     * Id of the instance to deactivate.
     */
    instanceId: string;
};
/** @internal */
export declare const DeactivateLicenseRequestEntity$inboundSchema: z.ZodType<DeactivateLicenseRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type DeactivateLicenseRequestEntity$Outbound = {
    key: string;
    instance_id: string;
};
/** @internal */
export declare const DeactivateLicenseRequestEntity$outboundSchema: z.ZodType<DeactivateLicenseRequestEntity$Outbound, z.ZodTypeDef, DeactivateLicenseRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeactivateLicenseRequestEntity$ {
    /** @deprecated use `DeactivateLicenseRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeactivateLicenseRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeactivateLicenseRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeactivateLicenseRequestEntity$Outbound, z.ZodTypeDef, DeactivateLicenseRequestEntity>;
    /** @deprecated use `DeactivateLicenseRequestEntity$Outbound` instead. */
    type Outbound = DeactivateLicenseRequestEntity$Outbound;
}
export declare function deactivateLicenseRequestEntityToJSON(deactivateLicenseRequestEntity: DeactivateLicenseRequestEntity): string;
export declare function deactivateLicenseRequestEntityFromJSON(jsonString: string): SafeParseResult<DeactivateLicenseRequestEntity, SDKValidationError>;
//# sourceMappingURL=deactivatelicenserequestentity.d.ts.map