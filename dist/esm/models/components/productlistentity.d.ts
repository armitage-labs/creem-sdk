import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PaginationEntity, PaginationEntity$Outbound } from "./paginationentity.js";
import { ProductEntity, ProductEntity$Outbound } from "./productentity.js";
export type ProductListEntity = {
    /**
     * List of product items
     */
    items: Array<ProductEntity>;
    /**
     * Pagination details for the list
     */
    pagination: PaginationEntity;
};
/** @internal */
export declare const ProductListEntity$inboundSchema: z.ZodType<ProductListEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type ProductListEntity$Outbound = {
    items: Array<ProductEntity$Outbound>;
    pagination: PaginationEntity$Outbound;
};
/** @internal */
export declare const ProductListEntity$outboundSchema: z.ZodType<ProductListEntity$Outbound, z.ZodTypeDef, ProductListEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProductListEntity$ {
    /** @deprecated use `ProductListEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProductListEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProductListEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProductListEntity$Outbound, z.ZodTypeDef, ProductListEntity>;
    /** @deprecated use `ProductListEntity$Outbound` instead. */
    type Outbound = ProductListEntity$Outbound;
}
export declare function productListEntityToJSON(productListEntity: ProductListEntity): string;
export declare function productListEntityFromJSON(jsonString: string): SafeParseResult<ProductListEntity, SDKValidationError>;
//# sourceMappingURL=productlistentity.d.ts.map