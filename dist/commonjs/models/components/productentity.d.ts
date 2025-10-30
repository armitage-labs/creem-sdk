import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FeatureEntity, FeatureEntity$Outbound } from "./featureentity.js";
/**
 * String representing the environment.
 */
export declare const Mode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type Mode = ClosedEnum<typeof Mode>;
export type ProductEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: Mode;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The name of the product
     */
    name: string;
    /**
     * A brief description of the product
     */
    description: string;
    /**
     * URL of the product image. Only png as jpg are supported
     */
    imageUrl?: string | undefined;
    /**
     * Features of the product.
     */
    features?: Array<FeatureEntity> | undefined;
    /**
     * The price of the product in cents. 1000 = $10.00
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
     * Billing period
     */
    billingPeriod: string;
    /**
     * Status of the product
     */
    status: string;
    /**
     * Specifies the tax calculation mode for the transaction. If set to "inclusive," the tax is included in the price. If set to "exclusive," the tax is added on top of the price.
     */
    taxMode: string;
    /**
     * Categorizes the type of product or service for tax purposes. This helps determine the applicable tax rules based on the nature of the item or service.
     */
    taxCategory: string;
    /**
     * The product page you can redirect your customers to for express checkout.
     */
    productUrl?: string | undefined;
    /**
     * The URL to which the user will be redirected after successfull payment.
     */
    defaultSuccessUrl?: string | null | undefined;
    /**
     * Creation date of the product
     */
    createdAt: Date;
    /**
     * Last updated date of the product
     */
    updatedAt: Date;
};
/** @internal */
export declare const Mode$inboundSchema: z.ZodNativeEnum<typeof Mode>;
/** @internal */
export declare const Mode$outboundSchema: z.ZodNativeEnum<typeof Mode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Mode$ {
    /** @deprecated use `Mode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `Mode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const ProductEntity$inboundSchema: z.ZodType<ProductEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type ProductEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    name: string;
    description: string;
    image_url?: string | undefined;
    features?: Array<FeatureEntity$Outbound> | undefined;
    price: number;
    currency: string;
    billing_type: string;
    billing_period: string;
    status: string;
    tax_mode: string;
    tax_category: string;
    product_url?: string | undefined;
    default_success_url?: string | null | undefined;
    created_at: string;
    updated_at: string;
};
/** @internal */
export declare const ProductEntity$outboundSchema: z.ZodType<ProductEntity$Outbound, z.ZodTypeDef, ProductEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProductEntity$ {
    /** @deprecated use `ProductEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProductEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProductEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProductEntity$Outbound, z.ZodTypeDef, ProductEntity>;
    /** @deprecated use `ProductEntity$Outbound` instead. */
    type Outbound = ProductEntity$Outbound;
}
export declare function productEntityToJSON(productEntity: ProductEntity): string;
export declare function productEntityFromJSON(jsonString: string): SafeParseResult<ProductEntity, SDKValidationError>;
//# sourceMappingURL=productentity.d.ts.map