import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetrieveDiscountRequest = {
    /**
     * The unique identifier of the discount (provide either discount_id OR discount_code)
     */
    discountId?: string | undefined;
    /**
     * The unique discount code (provide either discount_id OR discount_code)
     */
    discountCode?: string | undefined;
    xApiKey: string;
};
/** @internal */
export declare const RetrieveDiscountRequest$inboundSchema: z.ZodType<RetrieveDiscountRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveDiscountRequest$Outbound = {
    discount_id?: string | undefined;
    discount_code?: string | undefined;
    "x-api-key": string;
};
/** @internal */
export declare const RetrieveDiscountRequest$outboundSchema: z.ZodType<RetrieveDiscountRequest$Outbound, z.ZodTypeDef, RetrieveDiscountRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveDiscountRequest$ {
    /** @deprecated use `RetrieveDiscountRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveDiscountRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveDiscountRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveDiscountRequest$Outbound, z.ZodTypeDef, RetrieveDiscountRequest>;
    /** @deprecated use `RetrieveDiscountRequest$Outbound` instead. */
    type Outbound = RetrieveDiscountRequest$Outbound;
}
export declare function retrieveDiscountRequestToJSON(retrieveDiscountRequest: RetrieveDiscountRequest): string;
export declare function retrieveDiscountRequestFromJSON(jsonString: string): SafeParseResult<RetrieveDiscountRequest, SDKValidationError>;
//# sourceMappingURL=retrievediscount.d.ts.map