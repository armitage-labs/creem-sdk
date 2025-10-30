import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomerEntity, CustomerEntity$Outbound } from "./customerentity.js";
import { CustomField, CustomField$Outbound } from "./customfield.js";
import { OrderEntity, OrderEntity$Outbound } from "./orderentity.js";
import { ProductEntity, ProductEntity$Outbound } from "./productentity.js";
import { ProductFeatureEntity, ProductFeatureEntity$Outbound } from "./productfeatureentity.js";
import { SubscriptionEntity, SubscriptionEntity$Outbound } from "./subscriptionentity.js";
/**
 * String representing the environment.
 */
export declare const CheckoutEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type CheckoutEntityMode = ClosedEnum<typeof CheckoutEntityMode>;
/**
 * Status of the checkout.
 */
export declare const CheckoutEntityStatus: {
    readonly Pending: "pending";
    readonly Processing: "processing";
    readonly Completed: "completed";
    readonly Expired: "expired";
};
/**
 * Status of the checkout.
 */
export type CheckoutEntityStatus = ClosedEnum<typeof CheckoutEntityStatus>;
/**
 * The product associated with the checkout session.
 */
export type CheckoutEntityProduct = ProductEntity | string;
/**
 * The subscription associated with the checkout session.
 */
export type Subscription = SubscriptionEntity | string;
/**
 * The customer associated with the checkout session.
 */
export type CheckoutEntityCustomer = CustomerEntity | string;
export type CheckoutEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: CheckoutEntityMode;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * Status of the checkout.
     */
    status: CheckoutEntityStatus;
    /**
     * Identify and track each checkout request.
     */
    requestId?: string | undefined;
    /**
     * The product associated with the checkout session.
     */
    product: ProductEntity | string;
    /**
     * The number of units for the of the product.
     */
    units?: number | undefined;
    /**
     * The order associated with the checkout session.
     */
    order?: OrderEntity | undefined;
    /**
     * The subscription associated with the checkout session.
     */
    subscription?: SubscriptionEntity | string | undefined;
    /**
     * The customer associated with the checkout session.
     */
    customer?: CustomerEntity | string | undefined;
    /**
     * Additional information collected from your customer during the checkout process.
     */
    customFields?: Array<CustomField> | undefined;
    /**
     * The URL to which the customer will be redirected to complete the payment.
     */
    checkoutUrl?: string | undefined;
    /**
     * The URL to which the user will be redirected after the checkout process is completed.
     */
    successUrl?: string | null | undefined;
    /**
     * Features issued for the order.
     */
    feature?: Array<ProductFeatureEntity> | undefined;
    /**
     * Metadata for the checkout in the form of key-value pairs
     */
    metadata?: {
        [k: string]: any;
    } | undefined;
};
/** @internal */
export declare const CheckoutEntityMode$inboundSchema: z.ZodNativeEnum<typeof CheckoutEntityMode>;
/** @internal */
export declare const CheckoutEntityMode$outboundSchema: z.ZodNativeEnum<typeof CheckoutEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutEntityMode$ {
    /** @deprecated use `CheckoutEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `CheckoutEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const CheckoutEntityStatus$inboundSchema: z.ZodNativeEnum<typeof CheckoutEntityStatus>;
/** @internal */
export declare const CheckoutEntityStatus$outboundSchema: z.ZodNativeEnum<typeof CheckoutEntityStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutEntityStatus$ {
    /** @deprecated use `CheckoutEntityStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Processing: "processing";
        readonly Completed: "completed";
        readonly Expired: "expired";
    }>;
    /** @deprecated use `CheckoutEntityStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Processing: "processing";
        readonly Completed: "completed";
        readonly Expired: "expired";
    }>;
}
/** @internal */
export declare const CheckoutEntityProduct$inboundSchema: z.ZodType<CheckoutEntityProduct, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutEntityProduct$Outbound = ProductEntity$Outbound | string;
/** @internal */
export declare const CheckoutEntityProduct$outboundSchema: z.ZodType<CheckoutEntityProduct$Outbound, z.ZodTypeDef, CheckoutEntityProduct>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutEntityProduct$ {
    /** @deprecated use `CheckoutEntityProduct$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutEntityProduct, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutEntityProduct$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutEntityProduct$Outbound, z.ZodTypeDef, CheckoutEntityProduct>;
    /** @deprecated use `CheckoutEntityProduct$Outbound` instead. */
    type Outbound = CheckoutEntityProduct$Outbound;
}
export declare function checkoutEntityProductToJSON(checkoutEntityProduct: CheckoutEntityProduct): string;
export declare function checkoutEntityProductFromJSON(jsonString: string): SafeParseResult<CheckoutEntityProduct, SDKValidationError>;
/** @internal */
export declare const Subscription$inboundSchema: z.ZodType<Subscription, z.ZodTypeDef, unknown>;
/** @internal */
export type Subscription$Outbound = SubscriptionEntity$Outbound | string;
/** @internal */
export declare const Subscription$outboundSchema: z.ZodType<Subscription$Outbound, z.ZodTypeDef, Subscription>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Subscription$ {
    /** @deprecated use `Subscription$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Subscription, z.ZodTypeDef, unknown>;
    /** @deprecated use `Subscription$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Subscription$Outbound, z.ZodTypeDef, Subscription>;
    /** @deprecated use `Subscription$Outbound` instead. */
    type Outbound = Subscription$Outbound;
}
export declare function subscriptionToJSON(subscription: Subscription): string;
export declare function subscriptionFromJSON(jsonString: string): SafeParseResult<Subscription, SDKValidationError>;
/** @internal */
export declare const CheckoutEntityCustomer$inboundSchema: z.ZodType<CheckoutEntityCustomer, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutEntityCustomer$Outbound = CustomerEntity$Outbound | string;
/** @internal */
export declare const CheckoutEntityCustomer$outboundSchema: z.ZodType<CheckoutEntityCustomer$Outbound, z.ZodTypeDef, CheckoutEntityCustomer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutEntityCustomer$ {
    /** @deprecated use `CheckoutEntityCustomer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutEntityCustomer, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutEntityCustomer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutEntityCustomer$Outbound, z.ZodTypeDef, CheckoutEntityCustomer>;
    /** @deprecated use `CheckoutEntityCustomer$Outbound` instead. */
    type Outbound = CheckoutEntityCustomer$Outbound;
}
export declare function checkoutEntityCustomerToJSON(checkoutEntityCustomer: CheckoutEntityCustomer): string;
export declare function checkoutEntityCustomerFromJSON(jsonString: string): SafeParseResult<CheckoutEntityCustomer, SDKValidationError>;
/** @internal */
export declare const CheckoutEntity$inboundSchema: z.ZodType<CheckoutEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    status: string;
    request_id?: string | undefined;
    product: ProductEntity$Outbound | string;
    units: number;
    order?: OrderEntity$Outbound | undefined;
    subscription?: SubscriptionEntity$Outbound | string | undefined;
    customer?: CustomerEntity$Outbound | string | undefined;
    custom_fields?: Array<CustomField$Outbound> | undefined;
    checkout_url?: string | undefined;
    success_url?: string | null | undefined;
    feature?: Array<ProductFeatureEntity$Outbound> | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
};
/** @internal */
export declare const CheckoutEntity$outboundSchema: z.ZodType<CheckoutEntity$Outbound, z.ZodTypeDef, CheckoutEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutEntity$ {
    /** @deprecated use `CheckoutEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutEntity$Outbound, z.ZodTypeDef, CheckoutEntity>;
    /** @deprecated use `CheckoutEntity$Outbound` instead. */
    type Outbound = CheckoutEntity$Outbound;
}
export declare function checkoutEntityToJSON(checkoutEntity: CheckoutEntity): string;
export declare function checkoutEntityFromJSON(jsonString: string): SafeParseResult<CheckoutEntity, SDKValidationError>;
//# sourceMappingURL=checkoutentity.d.ts.map