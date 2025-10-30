import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PaginationEntity, PaginationEntity$Outbound } from "./paginationentity.js";
import { TransactionEntity, TransactionEntity$Outbound } from "./transactionentity.js";
export type TransactionListEntity = {
    /**
     * List of transactions items
     */
    items: Array<TransactionEntity>;
    /**
     * Pagination details for the list
     */
    pagination: PaginationEntity;
};
/** @internal */
export declare const TransactionListEntity$inboundSchema: z.ZodType<TransactionListEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type TransactionListEntity$Outbound = {
    items: Array<TransactionEntity$Outbound>;
    pagination: PaginationEntity$Outbound;
};
/** @internal */
export declare const TransactionListEntity$outboundSchema: z.ZodType<TransactionListEntity$Outbound, z.ZodTypeDef, TransactionListEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransactionListEntity$ {
    /** @deprecated use `TransactionListEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransactionListEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransactionListEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransactionListEntity$Outbound, z.ZodTypeDef, TransactionListEntity>;
    /** @deprecated use `TransactionListEntity$Outbound` instead. */
    type Outbound = TransactionListEntity$Outbound;
}
export declare function transactionListEntityToJSON(transactionListEntity: TransactionListEntity): string;
export declare function transactionListEntityFromJSON(jsonString: string): SafeParseResult<TransactionListEntity, SDKValidationError>;
//# sourceMappingURL=transactionlistentity.d.ts.map