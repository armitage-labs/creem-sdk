import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomerRequestEntity, CustomerRequestEntity$Outbound } from "./customerrequestentity.js";
import { CustomFieldRequestEntity, CustomFieldRequestEntity$Outbound } from "./customfieldrequestentity.js";
export type CreateCheckoutRequest = {
    /**
     * Identify and track each checkout request.
     */
    requestId?: string | undefined;
    /**
     * The ID of the product associated with the checkout session.
     */
    productId: string;
    /**
     * The number of units for the order.
     */
    units?: number | undefined;
    /**
     * Prefill the checkout session with a discount code.
     */
    discountCode?: string | undefined;
    /**
     * Customer data for checkout session. This will prefill the customer info on the checkout page
     */
    customer?: CustomerRequestEntity | undefined;
    /**
     * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
     */
    customField?: Array<CustomFieldRequestEntity> | undefined;
    /**
     * The URL to which the user will be redirected after the checkout process is completed.
     */
    successUrl?: string | undefined;
    /**
     * Metadata for the checkout in the form of key-value pairs
     */
    metadata?: {
        [k: string]: any;
    } | undefined;
};
/** @internal */
export declare const CreateCheckoutRequest$inboundSchema: z.ZodType<CreateCheckoutRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckoutRequest$Outbound = {
    request_id?: string | undefined;
    product_id: string;
    units?: number | undefined;
    discount_code?: string | undefined;
    customer?: CustomerRequestEntity$Outbound | undefined;
    custom_field?: Array<CustomFieldRequestEntity$Outbound> | undefined;
    success_url?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
};
/** @internal */
export declare const CreateCheckoutRequest$outboundSchema: z.ZodType<CreateCheckoutRequest$Outbound, z.ZodTypeDef, CreateCheckoutRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateCheckoutRequest$ {
    /** @deprecated use `CreateCheckoutRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateCheckoutRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateCheckoutRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateCheckoutRequest$Outbound, z.ZodTypeDef, CreateCheckoutRequest>;
    /** @deprecated use `CreateCheckoutRequest$Outbound` instead. */
    type Outbound = CreateCheckoutRequest$Outbound;
}
export declare function createCheckoutRequestToJSON(createCheckoutRequest: CreateCheckoutRequest): string;
export declare function createCheckoutRequestFromJSON(jsonString: string): SafeParseResult<CreateCheckoutRequest, SDKValidationError>;
//# sourceMappingURL=createcheckoutrequest.d.ts.map