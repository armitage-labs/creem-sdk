import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetrieveProductRequest = {
    /**
     * The unique identifier of the product
     */
    productId: string;
    xApiKey: string;
};
/** @internal */
export declare const RetrieveProductRequest$inboundSchema: z.ZodType<RetrieveProductRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveProductRequest$Outbound = {
    product_id: string;
    "x-api-key": string;
};
/** @internal */
export declare const RetrieveProductRequest$outboundSchema: z.ZodType<RetrieveProductRequest$Outbound, z.ZodTypeDef, RetrieveProductRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveProductRequest$ {
    /** @deprecated use `RetrieveProductRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveProductRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveProductRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveProductRequest$Outbound, z.ZodTypeDef, RetrieveProductRequest>;
    /** @deprecated use `RetrieveProductRequest$Outbound` instead. */
    type Outbound = RetrieveProductRequest$Outbound;
}
export declare function retrieveProductRequestToJSON(retrieveProductRequest: RetrieveProductRequest): string;
export declare function retrieveProductRequestFromJSON(jsonString: string): SafeParseResult<RetrieveProductRequest, SDKValidationError>;
//# sourceMappingURL=retrieveproduct.d.ts.map