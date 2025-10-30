import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteDiscountRequest = {
    id: string;
    xApiKey: string;
};
/** @internal */
export declare const DeleteDiscountRequest$inboundSchema: z.ZodType<DeleteDiscountRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteDiscountRequest$Outbound = {
    id: string;
    "x-api-key": string;
};
/** @internal */
export declare const DeleteDiscountRequest$outboundSchema: z.ZodType<DeleteDiscountRequest$Outbound, z.ZodTypeDef, DeleteDiscountRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteDiscountRequest$ {
    /** @deprecated use `DeleteDiscountRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteDiscountRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteDiscountRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteDiscountRequest$Outbound, z.ZodTypeDef, DeleteDiscountRequest>;
    /** @deprecated use `DeleteDiscountRequest$Outbound` instead. */
    type Outbound = DeleteDiscountRequest$Outbound;
}
export declare function deleteDiscountRequestToJSON(deleteDiscountRequest: DeleteDiscountRequest): string;
export declare function deleteDiscountRequestFromJSON(jsonString: string): SafeParseResult<DeleteDiscountRequest, SDKValidationError>;
//# sourceMappingURL=deletediscount.d.ts.map