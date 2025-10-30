import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomerLinksEntity = {
    /**
     * Customer portal link.
     */
    customerPortalLink: string;
};
/** @internal */
export declare const CustomerLinksEntity$inboundSchema: z.ZodType<CustomerLinksEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerLinksEntity$Outbound = {
    customer_portal_link: string;
};
/** @internal */
export declare const CustomerLinksEntity$outboundSchema: z.ZodType<CustomerLinksEntity$Outbound, z.ZodTypeDef, CustomerLinksEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerLinksEntity$ {
    /** @deprecated use `CustomerLinksEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerLinksEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerLinksEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerLinksEntity$Outbound, z.ZodTypeDef, CustomerLinksEntity>;
    /** @deprecated use `CustomerLinksEntity$Outbound` instead. */
    type Outbound = CustomerLinksEntity$Outbound;
}
export declare function customerLinksEntityToJSON(customerLinksEntity: CustomerLinksEntity): string;
export declare function customerLinksEntityFromJSON(jsonString: string): SafeParseResult<CustomerLinksEntity, SDKValidationError>;
//# sourceMappingURL=customerlinksentity.d.ts.map