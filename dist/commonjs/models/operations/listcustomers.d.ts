import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListCustomersRequest = {
    /**
     * The page number
     */
    pageNumber?: number | undefined;
    /**
     * The page size
     */
    pageSize?: number | undefined;
    xApiKey: string;
};
/** @internal */
export declare const ListCustomersRequest$inboundSchema: z.ZodType<ListCustomersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCustomersRequest$Outbound = {
    page_number?: number | undefined;
    page_size?: number | undefined;
    "x-api-key": string;
};
/** @internal */
export declare const ListCustomersRequest$outboundSchema: z.ZodType<ListCustomersRequest$Outbound, z.ZodTypeDef, ListCustomersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListCustomersRequest$ {
    /** @deprecated use `ListCustomersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListCustomersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListCustomersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListCustomersRequest$Outbound, z.ZodTypeDef, ListCustomersRequest>;
    /** @deprecated use `ListCustomersRequest$Outbound` instead. */
    type Outbound = ListCustomersRequest$Outbound;
}
export declare function listCustomersRequestToJSON(listCustomersRequest: ListCustomersRequest): string;
export declare function listCustomersRequestFromJSON(jsonString: string): SafeParseResult<ListCustomersRequest, SDKValidationError>;
//# sourceMappingURL=listcustomers.d.ts.map