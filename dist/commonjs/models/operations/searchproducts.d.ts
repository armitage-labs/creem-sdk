import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SearchProductsRequest = {
    /**
     * The page number
     */
    pageNumber?: number | undefined;
    /**
     * The the page size
     */
    pageSize?: number | undefined;
    xApiKey: string;
};
/** @internal */
export declare const SearchProductsRequest$inboundSchema: z.ZodType<SearchProductsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchProductsRequest$Outbound = {
    page_number?: number | undefined;
    page_size?: number | undefined;
    "x-api-key": string;
};
/** @internal */
export declare const SearchProductsRequest$outboundSchema: z.ZodType<SearchProductsRequest$Outbound, z.ZodTypeDef, SearchProductsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchProductsRequest$ {
    /** @deprecated use `SearchProductsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchProductsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchProductsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchProductsRequest$Outbound, z.ZodTypeDef, SearchProductsRequest>;
    /** @deprecated use `SearchProductsRequest$Outbound` instead. */
    type Outbound = SearchProductsRequest$Outbound;
}
export declare function searchProductsRequestToJSON(searchProductsRequest: SearchProductsRequest): string;
export declare function searchProductsRequestFromJSON(jsonString: string): SafeParseResult<SearchProductsRequest, SDKValidationError>;
//# sourceMappingURL=searchproducts.d.ts.map