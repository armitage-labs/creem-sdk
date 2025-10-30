import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetTransactionByIdRequest = {
    /**
     * The unique identifier of the transaction
     */
    transactionId: string;
    xApiKey: string;
};
/** @internal */
export declare const GetTransactionByIdRequest$inboundSchema: z.ZodType<GetTransactionByIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTransactionByIdRequest$Outbound = {
    transaction_id: string;
    "x-api-key": string;
};
/** @internal */
export declare const GetTransactionByIdRequest$outboundSchema: z.ZodType<GetTransactionByIdRequest$Outbound, z.ZodTypeDef, GetTransactionByIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetTransactionByIdRequest$ {
    /** @deprecated use `GetTransactionByIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetTransactionByIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetTransactionByIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetTransactionByIdRequest$Outbound, z.ZodTypeDef, GetTransactionByIdRequest>;
    /** @deprecated use `GetTransactionByIdRequest$Outbound` instead. */
    type Outbound = GetTransactionByIdRequest$Outbound;
}
export declare function getTransactionByIdRequestToJSON(getTransactionByIdRequest: GetTransactionByIdRequest): string;
export declare function getTransactionByIdRequestFromJSON(jsonString: string): SafeParseResult<GetTransactionByIdRequest, SDKValidationError>;
//# sourceMappingURL=gettransactionbyid.d.ts.map