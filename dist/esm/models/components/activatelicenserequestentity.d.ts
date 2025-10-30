import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ActivateLicenseRequestEntity = {
    /**
     * The license key to activate.
     */
    key: string;
    /**
     * A label for the new instance to identify it in Creem.
     */
    instanceName: string;
};
/** @internal */
export declare const ActivateLicenseRequestEntity$inboundSchema: z.ZodType<ActivateLicenseRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type ActivateLicenseRequestEntity$Outbound = {
    key: string;
    instance_name: string;
};
/** @internal */
export declare const ActivateLicenseRequestEntity$outboundSchema: z.ZodType<ActivateLicenseRequestEntity$Outbound, z.ZodTypeDef, ActivateLicenseRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ActivateLicenseRequestEntity$ {
    /** @deprecated use `ActivateLicenseRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ActivateLicenseRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `ActivateLicenseRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ActivateLicenseRequestEntity$Outbound, z.ZodTypeDef, ActivateLicenseRequestEntity>;
    /** @deprecated use `ActivateLicenseRequestEntity$Outbound` instead. */
    type Outbound = ActivateLicenseRequestEntity$Outbound;
}
export declare function activateLicenseRequestEntityToJSON(activateLicenseRequestEntity: ActivateLicenseRequestEntity): string;
export declare function activateLicenseRequestEntityFromJSON(jsonString: string): SafeParseResult<ActivateLicenseRequestEntity, SDKValidationError>;
//# sourceMappingURL=activatelicenserequestentity.d.ts.map