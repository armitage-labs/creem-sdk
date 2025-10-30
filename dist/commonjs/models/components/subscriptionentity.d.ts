import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomerEntity, CustomerEntity$Outbound } from "./customerentity.js";
import { ProductEntity, ProductEntity$Outbound } from "./productentity.js";
import { SubscriptionItemEntity, SubscriptionItemEntity$Outbound } from "./subscriptionitementity.js";
import { TransactionEntity, TransactionEntity$Outbound } from "./transactionentity.js";
/**
 * String representing the environment.
 */
export declare const SubscriptionEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type SubscriptionEntityMode = ClosedEnum<typeof SubscriptionEntityMode>;
/**
 * The product associated with the subscription.
 */
export type Product = ProductEntity | string;
/**
 * The customer who owns the subscription.
 */
export type Customer = CustomerEntity | string;
/**
 * The current status of the subscription.
 */
export declare const Status: {
    readonly Active: "active";
    readonly Canceled: "canceled";
    readonly Unpaid: "unpaid";
    readonly Paused: "paused";
    readonly Trialing: "trialing";
};
/**
 * The current status of the subscription.
 */
export type Status = ClosedEnum<typeof Status>;
export type SubscriptionEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: SubscriptionEntityMode;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The product associated with the subscription.
     */
    product: ProductEntity | string;
    /**
     * The customer who owns the subscription.
     */
    customer: CustomerEntity | string;
    /**
     * Subscription items.
     */
    items?: Array<SubscriptionItemEntity> | undefined;
    /**
     * The method used for collecting payments for the subscription.
     */
    collectionMethod: string;
    /**
     * The current status of the subscription.
     */
    status: Status;
    /**
     * The ID of the last paid transaction.
     */
    lastTransactionId?: string | undefined;
    /**
     * The last paid transaction.
     */
    lastTransaction?: TransactionEntity | undefined;
    /**
     * The date of the last paid transaction.
     */
    lastTransactionDate?: Date | undefined;
    /**
     * The date when the next subscription transaction will be charged.
     */
    nextTransactionDate?: Date | undefined;
    /**
     * The start date of the current subscription period.
     */
    currentPeriodStartDate?: Date | undefined;
    /**
     * The end date of the current subscription period.
     */
    currentPeriodEndDate?: Date | undefined;
    /**
     * The date and time when the subscription was canceled, if applicable.
     */
    canceledAt?: Date | null | undefined;
    /**
     * The date and time when the subscription was created.
     */
    createdAt: Date;
    /**
     * The date and time when the subscription was last updated.
     */
    updatedAt: Date;
};
/** @internal */
export declare const SubscriptionEntityMode$inboundSchema: z.ZodNativeEnum<typeof SubscriptionEntityMode>;
/** @internal */
export declare const SubscriptionEntityMode$outboundSchema: z.ZodNativeEnum<typeof SubscriptionEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionEntityMode$ {
    /** @deprecated use `SubscriptionEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `SubscriptionEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const Product$inboundSchema: z.ZodType<Product, z.ZodTypeDef, unknown>;
/** @internal */
export type Product$Outbound = ProductEntity$Outbound | string;
/** @internal */
export declare const Product$outboundSchema: z.ZodType<Product$Outbound, z.ZodTypeDef, Product>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Product$ {
    /** @deprecated use `Product$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Product, z.ZodTypeDef, unknown>;
    /** @deprecated use `Product$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Product$Outbound, z.ZodTypeDef, Product>;
    /** @deprecated use `Product$Outbound` instead. */
    type Outbound = Product$Outbound;
}
export declare function productToJSON(product: Product): string;
export declare function productFromJSON(jsonString: string): SafeParseResult<Product, SDKValidationError>;
/** @internal */
export declare const Customer$inboundSchema: z.ZodType<Customer, z.ZodTypeDef, unknown>;
/** @internal */
export type Customer$Outbound = CustomerEntity$Outbound | string;
/** @internal */
export declare const Customer$outboundSchema: z.ZodType<Customer$Outbound, z.ZodTypeDef, Customer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Customer$ {
    /** @deprecated use `Customer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Customer, z.ZodTypeDef, unknown>;
    /** @deprecated use `Customer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Customer$Outbound, z.ZodTypeDef, Customer>;
    /** @deprecated use `Customer$Outbound` instead. */
    type Outbound = Customer$Outbound;
}
export declare function customerToJSON(customer: Customer): string;
export declare function customerFromJSON(jsonString: string): SafeParseResult<Customer, SDKValidationError>;
/** @internal */
export declare const Status$inboundSchema: z.ZodNativeEnum<typeof Status>;
/** @internal */
export declare const Status$outboundSchema: z.ZodNativeEnum<typeof Status>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Active: "active";
        readonly Canceled: "canceled";
        readonly Unpaid: "unpaid";
        readonly Paused: "paused";
        readonly Trialing: "trialing";
    }>;
    /** @deprecated use `Status$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Active: "active";
        readonly Canceled: "canceled";
        readonly Unpaid: "unpaid";
        readonly Paused: "paused";
        readonly Trialing: "trialing";
    }>;
}
/** @internal */
export declare const SubscriptionEntity$inboundSchema: z.ZodType<SubscriptionEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriptionEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    product: ProductEntity$Outbound | string;
    customer: CustomerEntity$Outbound | string;
    items?: Array<SubscriptionItemEntity$Outbound> | undefined;
    collection_method: string;
    status: string;
    last_transaction_id?: string | undefined;
    last_transaction?: TransactionEntity$Outbound | undefined;
    last_transaction_date?: string | undefined;
    next_transaction_date?: string | undefined;
    current_period_start_date?: string | undefined;
    current_period_end_date?: string | undefined;
    canceled_at?: string | null | undefined;
    created_at: string;
    updated_at: string;
};
/** @internal */
export declare const SubscriptionEntity$outboundSchema: z.ZodType<SubscriptionEntity$Outbound, z.ZodTypeDef, SubscriptionEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionEntity$ {
    /** @deprecated use `SubscriptionEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriptionEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriptionEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriptionEntity$Outbound, z.ZodTypeDef, SubscriptionEntity>;
    /** @deprecated use `SubscriptionEntity$Outbound` instead. */
    type Outbound = SubscriptionEntity$Outbound;
}
export declare function subscriptionEntityToJSON(subscriptionEntity: SubscriptionEntity): string;
export declare function subscriptionEntityFromJSON(jsonString: string): SafeParseResult<SubscriptionEntity, SDKValidationError>;
//# sourceMappingURL=subscriptionentity.d.ts.map