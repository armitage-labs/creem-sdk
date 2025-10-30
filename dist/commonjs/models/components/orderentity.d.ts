import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * String representing the environment.
 */
export declare const OrderEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type OrderEntityMode = ClosedEnum<typeof OrderEntityMode>;
/**
 * Current status of the order.
 */
export declare const OrderEntityStatus: {
    readonly Pending: "pending";
    readonly Paid: "paid";
};
/**
 * Current status of the order.
 */
export type OrderEntityStatus = ClosedEnum<typeof OrderEntityStatus>;
/**
 * The type of order. This can specify whether it's a regular purchase, subscription, etc.
 */
export declare const OrderEntityType: {
    readonly Recurring: "recurring";
    readonly Onetime: "onetime";
};
/**
 * The type of order. This can specify whether it's a regular purchase, subscription, etc.
 */
export type OrderEntityType = ClosedEnum<typeof OrderEntityType>;
export type OrderEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: OrderEntityMode;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The customer who placed the order.
     */
    customer?: string | undefined;
    /**
     * The product associated with the order.
     */
    product: string;
    /**
     * The transaction ID of the order
     */
    transaction?: string | undefined;
    /**
     * The discount ID of the order
     */
    discount?: string | undefined;
    /**
     * The total amount of the order in cents. 1000 = $10.00
     */
    amount: number;
    /**
     * The subtotal of the order in cents. 1000 = $10.00
     */
    subTotal?: number | undefined;
    /**
     * The tax amount of the order in cents. 1000 = $10.00
     */
    taxAmount?: number | undefined;
    /**
     * The discount amount of the order in cents. 1000 = $10.00
     */
    discountAmount?: number | undefined;
    /**
     * The amount due for the order in cents. 1000 = $10.00
     */
    amountDue?: number | undefined;
    /**
     * The amount paid for the order in cents. 1000 = $10.00
     */
    amountPaid?: number | undefined;
    /**
     * Three-letter ISO currency code, in uppercase. Must be a supported currency.
     */
    currency: string;
    /**
     * The amount in the foreign currency, if applicable.
     */
    fxAmount?: number | undefined;
    /**
     * Three-letter ISO code of the foreign currency, if applicable.
     */
    fxCurrency?: string | undefined;
    /**
     * The exchange rate used for converting between currencies, if applicable.
     */
    fxRate?: number | undefined;
    /**
     * Current status of the order.
     */
    status: OrderEntityStatus;
    /**
     * The type of order. This can specify whether it's a regular purchase, subscription, etc.
     */
    type: OrderEntityType;
    /**
     * The affiliate associated with the order, if applicable.
     */
    affiliate?: string | undefined;
    /**
     * Creation date of the order
     */
    createdAt: Date;
    /**
     * Last updated date of the order
     */
    updatedAt: Date;
};
/** @internal */
export declare const OrderEntityMode$inboundSchema: z.ZodNativeEnum<typeof OrderEntityMode>;
/** @internal */
export declare const OrderEntityMode$outboundSchema: z.ZodNativeEnum<typeof OrderEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderEntityMode$ {
    /** @deprecated use `OrderEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `OrderEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const OrderEntityStatus$inboundSchema: z.ZodNativeEnum<typeof OrderEntityStatus>;
/** @internal */
export declare const OrderEntityStatus$outboundSchema: z.ZodNativeEnum<typeof OrderEntityStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderEntityStatus$ {
    /** @deprecated use `OrderEntityStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Paid: "paid";
    }>;
    /** @deprecated use `OrderEntityStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Paid: "paid";
    }>;
}
/** @internal */
export declare const OrderEntityType$inboundSchema: z.ZodNativeEnum<typeof OrderEntityType>;
/** @internal */
export declare const OrderEntityType$outboundSchema: z.ZodNativeEnum<typeof OrderEntityType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderEntityType$ {
    /** @deprecated use `OrderEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Recurring: "recurring";
        readonly Onetime: "onetime";
    }>;
    /** @deprecated use `OrderEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Recurring: "recurring";
        readonly Onetime: "onetime";
    }>;
}
/** @internal */
export declare const OrderEntity$inboundSchema: z.ZodType<OrderEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    customer?: string | undefined;
    product: string;
    transaction?: string | undefined;
    discount?: string | undefined;
    amount: number;
    sub_total?: number | undefined;
    tax_amount?: number | undefined;
    discount_amount?: number | undefined;
    amount_due?: number | undefined;
    amount_paid?: number | undefined;
    currency: string;
    fx_amount?: number | undefined;
    fx_currency?: string | undefined;
    fx_rate?: number | undefined;
    status: string;
    type: string;
    affiliate?: string | undefined;
    created_at: string;
    updated_at: string;
};
/** @internal */
export declare const OrderEntity$outboundSchema: z.ZodType<OrderEntity$Outbound, z.ZodTypeDef, OrderEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderEntity$ {
    /** @deprecated use `OrderEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderEntity$Outbound, z.ZodTypeDef, OrderEntity>;
    /** @deprecated use `OrderEntity$Outbound` instead. */
    type Outbound = OrderEntity$Outbound;
}
export declare function orderEntityToJSON(orderEntity: OrderEntity): string;
export declare function orderEntityFromJSON(jsonString: string): SafeParseResult<OrderEntity, SDKValidationError>;
//# sourceMappingURL=orderentity.d.ts.map