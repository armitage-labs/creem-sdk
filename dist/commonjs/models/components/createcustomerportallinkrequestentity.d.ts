import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateCustomerPortalLinkRequestEntity = {
    /**
     * Unique identifier of the customer.
     */
    customerId: string;
};
/** @internal */
export declare const CreateCustomerPortalLinkRequestEntity$inboundSchema: z.ZodType<CreateCustomerPortalLinkRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomerPortalLinkRequestEntity$Outbound = {
    customer_id: string;
};
/** @internal */
export declare const CreateCustomerPortalLinkRequestEntity$outboundSchema: z.ZodType<CreateCustomerPortalLinkRequestEntity$Outbound, z.ZodTypeDef, CreateCustomerPortalLinkRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateCustomerPortalLinkRequestEntity$ {
    /** @deprecated use `CreateCustomerPortalLinkRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateCustomerPortalLinkRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateCustomerPortalLinkRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateCustomerPortalLinkRequestEntity$Outbound, z.ZodTypeDef, CreateCustomerPortalLinkRequestEntity>;
    /** @deprecated use `CreateCustomerPortalLinkRequestEntity$Outbound` instead. */
    type Outbound = CreateCustomerPortalLinkRequestEntity$Outbound;
}
export declare function createCustomerPortalLinkRequestEntityToJSON(createCustomerPortalLinkRequestEntity: CreateCustomerPortalLinkRequestEntity): string;
export declare function createCustomerPortalLinkRequestEntityFromJSON(jsonString: string): SafeParseResult<CreateCustomerPortalLinkRequestEntity, SDKValidationError>;
//# sourceMappingURL=createcustomerportallinkrequestentity.d.ts.map