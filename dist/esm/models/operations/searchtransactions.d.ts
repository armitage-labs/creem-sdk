import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SearchTransactionsRequest = {
    /**
     * The customer id
     */
    customerId?: string | undefined;
    /**
     * The order id
     */
    orderId?: string | undefined;
    /**
     * The product id
     */
    productId?: string | undefined;
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
export declare const SearchTransactionsRequest$inboundSchema: z.ZodType<SearchTransactionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchTransactionsRequest$Outbound = {
    customer_id?: string | undefined;
    order_id?: string | undefined;
    product_id?: string | undefined;
    page_number?: number | undefined;
    page_size?: number | undefined;
    "x-api-key": string;
};
/** @internal */
export declare const SearchTransactionsRequest$outboundSchema: z.ZodType<SearchTransactionsRequest$Outbound, z.ZodTypeDef, SearchTransactionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchTransactionsRequest$ {
    /** @deprecated use `SearchTransactionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchTransactionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchTransactionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchTransactionsRequest$Outbound, z.ZodTypeDef, SearchTransactionsRequest>;
    /** @deprecated use `SearchTransactionsRequest$Outbound` instead. */
    type Outbound = SearchTransactionsRequest$Outbound;
}
export declare function searchTransactionsRequestToJSON(searchTransactionsRequest: SearchTransactionsRequest): string;
export declare function searchTransactionsRequestFromJSON(jsonString: string): SafeParseResult<SearchTransactionsRequest, SDKValidationError>;
//# sourceMappingURL=searchtransactions.d.ts.map