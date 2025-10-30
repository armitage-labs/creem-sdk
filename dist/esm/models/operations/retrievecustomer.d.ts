import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetrieveCustomerRequest = {
    /**
     * The unique identifier of the customer
     */
    customerId?: string | undefined;
    /**
     * The unique email of the customer
     */
    email?: string | undefined;
    xApiKey: string;
};
/** @internal */
export declare const RetrieveCustomerRequest$inboundSchema: z.ZodType<RetrieveCustomerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveCustomerRequest$Outbound = {
    customer_id?: string | undefined;
    email?: string | undefined;
    "x-api-key": string;
};
/** @internal */
export declare const RetrieveCustomerRequest$outboundSchema: z.ZodType<RetrieveCustomerRequest$Outbound, z.ZodTypeDef, RetrieveCustomerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveCustomerRequest$ {
    /** @deprecated use `RetrieveCustomerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveCustomerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveCustomerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveCustomerRequest$Outbound, z.ZodTypeDef, RetrieveCustomerRequest>;
    /** @deprecated use `RetrieveCustomerRequest$Outbound` instead. */
    type Outbound = RetrieveCustomerRequest$Outbound;
}
export declare function retrieveCustomerRequestToJSON(retrieveCustomerRequest: RetrieveCustomerRequest): string;
export declare function retrieveCustomerRequestFromJSON(jsonString: string): SafeParseResult<RetrieveCustomerRequest, SDKValidationError>;
//# sourceMappingURL=retrievecustomer.d.ts.map