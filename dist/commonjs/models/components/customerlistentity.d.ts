import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomerEntity, CustomerEntity$Outbound } from "./customerentity.js";
import { PaginationEntity, PaginationEntity$Outbound } from "./paginationentity.js";
export type CustomerListEntity = {
    /**
     * List of customer items
     */
    items: Array<CustomerEntity>;
    /**
     * Pagination details for the list
     */
    pagination: PaginationEntity;
};
/** @internal */
export declare const CustomerListEntity$inboundSchema: z.ZodType<CustomerListEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerListEntity$Outbound = {
    items: Array<CustomerEntity$Outbound>;
    pagination: PaginationEntity$Outbound;
};
/** @internal */
export declare const CustomerListEntity$outboundSchema: z.ZodType<CustomerListEntity$Outbound, z.ZodTypeDef, CustomerListEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerListEntity$ {
    /** @deprecated use `CustomerListEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerListEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerListEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerListEntity$Outbound, z.ZodTypeDef, CustomerListEntity>;
    /** @deprecated use `CustomerListEntity$Outbound` instead. */
    type Outbound = CustomerListEntity$Outbound;
}
export declare function customerListEntityToJSON(customerListEntity: CustomerListEntity): string;
export declare function customerListEntityFromJSON(jsonString: string): SafeParseResult<CustomerListEntity, SDKValidationError>;
//# sourceMappingURL=customerlistentity.d.ts.map