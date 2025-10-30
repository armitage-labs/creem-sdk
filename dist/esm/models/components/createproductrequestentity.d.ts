import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomFieldRequestEntity, CustomFieldRequestEntity$Outbound } from "./customfieldrequestentity.js";
export type CreateProductRequestEntity = {
    /**
     * Name of the product
     */
    name: string;
    /**
     * Description of the product
     */
    description?: string | undefined;
    /**
     * URL of the product image
     */
    imageUrl?: string | undefined;
    /**
     * The price of the product in cents
     */
    price: number;
    /**
     * Three-letter ISO currency code, in uppercase. Must be a supported currency.
     */
    currency: string;
    /**
     * Indicates the billing method for the customer. It can either be a `recurring` billing cycle or a `onetime` payment.
     */
    billingType: string;
    /**
     * Billing period, required if billing_type is recurring
     */
    billingPeriod?: string | undefined;
    /**
     * Specifies the tax calculation mode for the transaction. If set to "inclusive," the tax is included in the price. If set to "exclusive," the tax is added on top of the price.
     */
    taxMode?: string | undefined;
    /**
     * Categorizes the type of product or service for tax purposes. This helps determine the applicable tax rules based on the nature of the item or service.
     */
    taxCategory?: string | undefined;
    /**
     * The URL to which the user will be redirected after successfull payment.
     */
    defaultSuccessUrl?: string | undefined;
    /**
     * Collect additional information from your customer using custom fields during checkout. Up to 3 fields are supported.
     */
    customField?: Array<CustomFieldRequestEntity> | undefined;
    /**
     * Enable abandoned cart recovery for this product
     */
    abandonedCartRecoveryEnabled?: boolean | undefined;
};
/** @internal */
export declare const CreateProductRequestEntity$inboundSchema: z.ZodType<CreateProductRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProductRequestEntity$Outbound = {
    name: string;
    description?: string | undefined;
    image_url?: string | undefined;
    price: number;
    currency: string;
    billing_type: string;
    billing_period?: string | undefined;
    tax_mode?: string | undefined;
    tax_category?: string | undefined;
    default_success_url?: string | undefined;
    custom_field?: Array<CustomFieldRequestEntity$Outbound> | undefined;
    abandoned_cart_recovery_enabled: boolean;
};
/** @internal */
export declare const CreateProductRequestEntity$outboundSchema: z.ZodType<CreateProductRequestEntity$Outbound, z.ZodTypeDef, CreateProductRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateProductRequestEntity$ {
    /** @deprecated use `CreateProductRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateProductRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateProductRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateProductRequestEntity$Outbound, z.ZodTypeDef, CreateProductRequestEntity>;
    /** @deprecated use `CreateProductRequestEntity$Outbound` instead. */
    type Outbound = CreateProductRequestEntity$Outbound;
}
export declare function createProductRequestEntityToJSON(createProductRequestEntity: CreateProductRequestEntity): string;
export declare function createProductRequestEntityFromJSON(jsonString: string): SafeParseResult<CreateProductRequestEntity, SDKValidationError>;
//# sourceMappingURL=createproductrequestentity.d.ts.map