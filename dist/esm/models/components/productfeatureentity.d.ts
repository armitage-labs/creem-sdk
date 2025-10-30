import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { LicenseEntity, LicenseEntity$Outbound } from "./licenseentity.js";
export type ProductFeatureEntity = {
    /**
     * License key issued for the order.
     */
    license: LicenseEntity;
};
/** @internal */
export declare const ProductFeatureEntity$inboundSchema: z.ZodType<ProductFeatureEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type ProductFeatureEntity$Outbound = {
    license: LicenseEntity$Outbound;
};
/** @internal */
export declare const ProductFeatureEntity$outboundSchema: z.ZodType<ProductFeatureEntity$Outbound, z.ZodTypeDef, ProductFeatureEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProductFeatureEntity$ {
    /** @deprecated use `ProductFeatureEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProductFeatureEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProductFeatureEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProductFeatureEntity$Outbound, z.ZodTypeDef, ProductFeatureEntity>;
    /** @deprecated use `ProductFeatureEntity$Outbound` instead. */
    type Outbound = ProductFeatureEntity$Outbound;
}
export declare function productFeatureEntityToJSON(productFeatureEntity: ProductFeatureEntity): string;
export declare function productFeatureEntityFromJSON(jsonString: string): SafeParseResult<ProductFeatureEntity, SDKValidationError>;
//# sourceMappingURL=productfeatureentity.d.ts.map