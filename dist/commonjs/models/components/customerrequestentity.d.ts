import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomerRequestEntity = {
    /**
     * Unique identifier of the customer. You may specify only one of these parameters: id or email.
     */
    id?: string | undefined;
    /**
     * Customer email address. You may only specify one of these parameters: id, email.
     */
    email?: string | undefined;
};
/** @internal */
export declare const CustomerRequestEntity$inboundSchema: z.ZodType<CustomerRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerRequestEntity$Outbound = {
    id?: string | undefined;
    email?: string | undefined;
};
/** @internal */
export declare const CustomerRequestEntity$outboundSchema: z.ZodType<CustomerRequestEntity$Outbound, z.ZodTypeDef, CustomerRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerRequestEntity$ {
    /** @deprecated use `CustomerRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerRequestEntity$Outbound, z.ZodTypeDef, CustomerRequestEntity>;
    /** @deprecated use `CustomerRequestEntity$Outbound` instead. */
    type Outbound = CustomerRequestEntity$Outbound;
}
export declare function customerRequestEntityToJSON(customerRequestEntity: CustomerRequestEntity): string;
export declare function customerRequestEntityFromJSON(jsonString: string): SafeParseResult<CustomerRequestEntity, SDKValidationError>;
//# sourceMappingURL=customerrequestentity.d.ts.map