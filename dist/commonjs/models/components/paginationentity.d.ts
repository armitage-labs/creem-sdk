import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PaginationEntity = {
    /**
     * Total number of records in the list
     */
    totalRecords: number;
    /**
     * Total number of pages available
     */
    totalPages: number;
    /**
     * The current page number
     */
    currentPage: number;
    /**
     * The next page number, or null if there is no next page
     */
    nextPage: number | null;
    /**
     * The previous page number, or null if there is no previous page
     */
    prevPage: number | null;
};
/** @internal */
export declare const PaginationEntity$inboundSchema: z.ZodType<PaginationEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type PaginationEntity$Outbound = {
    total_records: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    prev_page: number | null;
};
/** @internal */
export declare const PaginationEntity$outboundSchema: z.ZodType<PaginationEntity$Outbound, z.ZodTypeDef, PaginationEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaginationEntity$ {
    /** @deprecated use `PaginationEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PaginationEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `PaginationEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PaginationEntity$Outbound, z.ZodTypeDef, PaginationEntity>;
    /** @deprecated use `PaginationEntity$Outbound` instead. */
    type Outbound = PaginationEntity$Outbound;
}
export declare function paginationEntityToJSON(paginationEntity: PaginationEntity): string;
export declare function paginationEntityFromJSON(jsonString: string): SafeParseResult<PaginationEntity, SDKValidationError>;
//# sourceMappingURL=paginationentity.d.ts.map