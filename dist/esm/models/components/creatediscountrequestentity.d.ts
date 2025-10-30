import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of the discount, either "percentage" or "fixed".
 */
export declare const CreateDiscountRequestEntityType: {
    readonly Percentage: "percentage";
    readonly Fixed: "fixed";
};
/**
 * The type of the discount, either "percentage" or "fixed".
 */
export type CreateDiscountRequestEntityType = ClosedEnum<typeof CreateDiscountRequestEntityType>;
/**
 * The duration type for the discount.
 */
export declare const CreateDiscountRequestEntityDuration: {
    readonly Forever: "forever";
    readonly Once: "once";
    readonly Repeating: "repeating";
};
/**
 * The duration type for the discount.
 */
export type CreateDiscountRequestEntityDuration = ClosedEnum<typeof CreateDiscountRequestEntityDuration>;
export type CreateDiscountRequestEntity = {
    /**
     * The name of the discount.
     */
    name: string;
    /**
     * Optional discount code. If left empty, a code will be generated.
     */
    code?: string | undefined;
    /**
     * The type of the discount, either "percentage" or "fixed".
     */
    type: CreateDiscountRequestEntityType;
    /**
     * The fixed value for the discount. Only applicable if the type is "fixed".
     */
    amount?: number | undefined;
    /**
     * The currency of the discount. Only required if type is "fixed".
     */
    currency?: string | undefined;
    /**
     * The percentage value for the discount. Only applicable if the type is "percentage".
     */
    percentage?: number | undefined;
    /**
     * The expiry date of the discount.
     */
    expiryDate?: Date | undefined;
    /**
     * The maximum number of redemptions for the discount.
     */
    maxRedemptions?: number | undefined;
    /**
     * The duration type for the discount.
     */
    duration: CreateDiscountRequestEntityDuration;
    /**
     * The number of months the discount is valid for. Only applicable if the duration is "repeating" and the product is a subscription.
     */
    durationInMonths?: number | undefined;
    /**
     * The list of product IDs to which this discount applies.
     */
    appliesToProducts: Array<string>;
};
/** @internal */
export declare const CreateDiscountRequestEntityType$inboundSchema: z.ZodNativeEnum<typeof CreateDiscountRequestEntityType>;
/** @internal */
export declare const CreateDiscountRequestEntityType$outboundSchema: z.ZodNativeEnum<typeof CreateDiscountRequestEntityType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateDiscountRequestEntityType$ {
    /** @deprecated use `CreateDiscountRequestEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Percentage: "percentage";
        readonly Fixed: "fixed";
    }>;
    /** @deprecated use `CreateDiscountRequestEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Percentage: "percentage";
        readonly Fixed: "fixed";
    }>;
}
/** @internal */
export declare const CreateDiscountRequestEntityDuration$inboundSchema: z.ZodNativeEnum<typeof CreateDiscountRequestEntityDuration>;
/** @internal */
export declare const CreateDiscountRequestEntityDuration$outboundSchema: z.ZodNativeEnum<typeof CreateDiscountRequestEntityDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateDiscountRequestEntityDuration$ {
    /** @deprecated use `CreateDiscountRequestEntityDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Forever: "forever";
        readonly Once: "once";
        readonly Repeating: "repeating";
    }>;
    /** @deprecated use `CreateDiscountRequestEntityDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Forever: "forever";
        readonly Once: "once";
        readonly Repeating: "repeating";
    }>;
}
/** @internal */
export declare const CreateDiscountRequestEntity$inboundSchema: z.ZodType<CreateDiscountRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDiscountRequestEntity$Outbound = {
    name: string;
    code?: string | undefined;
    type: string;
    amount?: number | undefined;
    currency?: string | undefined;
    percentage?: number | undefined;
    expiry_date?: string | undefined;
    max_redemptions?: number | undefined;
    duration: string;
    duration_in_months?: number | undefined;
    applies_to_products: Array<string>;
};
/** @internal */
export declare const CreateDiscountRequestEntity$outboundSchema: z.ZodType<CreateDiscountRequestEntity$Outbound, z.ZodTypeDef, CreateDiscountRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateDiscountRequestEntity$ {
    /** @deprecated use `CreateDiscountRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateDiscountRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateDiscountRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateDiscountRequestEntity$Outbound, z.ZodTypeDef, CreateDiscountRequestEntity>;
    /** @deprecated use `CreateDiscountRequestEntity$Outbound` instead. */
    type Outbound = CreateDiscountRequestEntity$Outbound;
}
export declare function createDiscountRequestEntityToJSON(createDiscountRequestEntity: CreateDiscountRequestEntity): string;
export declare function createDiscountRequestEntityFromJSON(jsonString: string): SafeParseResult<CreateDiscountRequestEntity, SDKValidationError>;
//# sourceMappingURL=creatediscountrequestentity.d.ts.map