import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * String representing the environment.
 */
export declare const DiscountEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type DiscountEntityMode = ClosedEnum<typeof DiscountEntityMode>;
/**
 * The status of the discount (e.g., active, inactive).
 */
export declare const DiscountEntityStatus: {
    readonly Active: "active";
    readonly Draft: "draft";
    readonly Expired: "expired";
    readonly Scheduled: "scheduled";
};
/**
 * The status of the discount (e.g., active, inactive).
 */
export type DiscountEntityStatus = ClosedEnum<typeof DiscountEntityStatus>;
/**
 * The type of the discount, either "percentage" or "fixed".
 */
export declare const DiscountEntityType: {
    readonly Percentage: "percentage";
    readonly Fixed: "fixed";
};
/**
 * The type of the discount, either "percentage" or "fixed".
 */
export type DiscountEntityType = ClosedEnum<typeof DiscountEntityType>;
/**
 * The duration type for the discount.
 */
export declare const Duration: {
    readonly Forever: "forever";
    readonly Once: "once";
    readonly Repeating: "repeating";
};
/**
 * The duration type for the discount.
 */
export type Duration = ClosedEnum<typeof Duration>;
export type DiscountEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: DiscountEntityMode;
    /**
     * A string representing the object’s type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The status of the discount (e.g., active, inactive).
     */
    status: DiscountEntityStatus;
    /**
     * The name of the discount.
     */
    name: string;
    /**
     * The discount code. A unique identifier for the discount.
     */
    code: string;
    /**
     * The type of the discount, either "percentage" or "fixed".
     */
    type: DiscountEntityType;
    /**
     * The amount of the discount. Can be a percentage or a fixed amount.
     */
    amount?: number | undefined;
    /**
     * The currency of the discount. Only required if type is "fixed".
     */
    currency?: string | undefined;
    /**
     * The percentage of the discount. Only applicable if type is "percentage".
     */
    percentage?: number | undefined;
    /**
     * The expiry date of the discount.
     */
    expiryDate?: Date | undefined;
    /**
     * The maximum number of redemptions allowed for the discount.
     */
    maxRedemptions?: number | undefined;
    /**
     * The duration type for the discount.
     */
    duration?: Duration | undefined;
    /**
     * The number of months the discount is valid for. Only applicable if the duration is "repeating" and the product is a subscription.
     */
    durationInMonths?: number | undefined;
    /**
     * The list of product IDs to which this discount applies.
     */
    appliesToProducts?: Array<string> | undefined;
    /**
     * The number of times this discount has been redeemed.
     */
    redeemCount?: number | undefined;
};
/** @internal */
export declare const DiscountEntityMode$inboundSchema: z.ZodNativeEnum<typeof DiscountEntityMode>;
/** @internal */
export declare const DiscountEntityMode$outboundSchema: z.ZodNativeEnum<typeof DiscountEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountEntityMode$ {
    /** @deprecated use `DiscountEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `DiscountEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const DiscountEntityStatus$inboundSchema: z.ZodNativeEnum<typeof DiscountEntityStatus>;
/** @internal */
export declare const DiscountEntityStatus$outboundSchema: z.ZodNativeEnum<typeof DiscountEntityStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountEntityStatus$ {
    /** @deprecated use `DiscountEntityStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Expired: "expired";
        readonly Scheduled: "scheduled";
    }>;
    /** @deprecated use `DiscountEntityStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Expired: "expired";
        readonly Scheduled: "scheduled";
    }>;
}
/** @internal */
export declare const DiscountEntityType$inboundSchema: z.ZodNativeEnum<typeof DiscountEntityType>;
/** @internal */
export declare const DiscountEntityType$outboundSchema: z.ZodNativeEnum<typeof DiscountEntityType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountEntityType$ {
    /** @deprecated use `DiscountEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Percentage: "percentage";
        readonly Fixed: "fixed";
    }>;
    /** @deprecated use `DiscountEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Percentage: "percentage";
        readonly Fixed: "fixed";
    }>;
}
/** @internal */
export declare const Duration$inboundSchema: z.ZodNativeEnum<typeof Duration>;
/** @internal */
export declare const Duration$outboundSchema: z.ZodNativeEnum<typeof Duration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Duration$ {
    /** @deprecated use `Duration$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Forever: "forever";
        readonly Once: "once";
        readonly Repeating: "repeating";
    }>;
    /** @deprecated use `Duration$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Forever: "forever";
        readonly Once: "once";
        readonly Repeating: "repeating";
    }>;
}
/** @internal */
export declare const DiscountEntity$inboundSchema: z.ZodType<DiscountEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    status: string;
    name: string;
    code: string;
    type: string;
    amount?: number | undefined;
    currency?: string | undefined;
    percentage?: number | undefined;
    expiry_date?: string | undefined;
    max_redemptions?: number | undefined;
    duration?: string | undefined;
    duration_in_months?: number | undefined;
    applies_to_products?: Array<string> | undefined;
    redeem_count?: number | undefined;
};
/** @internal */
export declare const DiscountEntity$outboundSchema: z.ZodType<DiscountEntity$Outbound, z.ZodTypeDef, DiscountEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountEntity$ {
    /** @deprecated use `DiscountEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountEntity$Outbound, z.ZodTypeDef, DiscountEntity>;
    /** @deprecated use `DiscountEntity$Outbound` instead. */
    type Outbound = DiscountEntity$Outbound;
}
export declare function discountEntityToJSON(discountEntity: DiscountEntity): string;
export declare function discountEntityFromJSON(jsonString: string): SafeParseResult<DiscountEntity, SDKValidationError>;
//# sourceMappingURL=discountentity.d.ts.map