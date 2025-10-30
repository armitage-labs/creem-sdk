import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type FeatureEntity = {
    /**
     * Unique identifier for the feature.
     */
    id: string;
    /**
     * The feature type.
     */
    type: string;
    /**
     * A brief description of the feature
     */
    description: string;
};
/** @internal */
export declare const FeatureEntity$inboundSchema: z.ZodType<FeatureEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type FeatureEntity$Outbound = {
    id: string;
    type: string;
    description: string;
};
/** @internal */
export declare const FeatureEntity$outboundSchema: z.ZodType<FeatureEntity$Outbound, z.ZodTypeDef, FeatureEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeatureEntity$ {
    /** @deprecated use `FeatureEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeatureEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeatureEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeatureEntity$Outbound, z.ZodTypeDef, FeatureEntity>;
    /** @deprecated use `FeatureEntity$Outbound` instead. */
    type Outbound = FeatureEntity$Outbound;
}
export declare function featureEntityToJSON(featureEntity: FeatureEntity): string;
export declare function featureEntityFromJSON(jsonString: string): SafeParseResult<FeatureEntity, SDKValidationError>;
//# sourceMappingURL=featureentity.d.ts.map