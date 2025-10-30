import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * String representing the environment.
 */
export declare const SubscriptionItemEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type SubscriptionItemEntityMode = ClosedEnum<typeof SubscriptionItemEntityMode>;
export type SubscriptionItemEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: SubscriptionItemEntityMode;
    /**
     * String representing the object’s type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The ID of the product associated with the subscription item.
     */
    productId?: string | undefined;
    /**
     * The ID of the price associated with the subscription item.
     */
    priceId?: string | undefined;
    /**
     * The number of units for the subscription item.
     */
    units?: number | undefined;
};
/** @internal */
export declare const SubscriptionItemEntityMode$inboundSchema: z.ZodNativeEnum<typeof SubscriptionItemEntityMode>;
/** @internal */
export declare const SubscriptionItemEntityMode$outboundSchema: z.ZodNativeEnum<typeof SubscriptionItemEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionItemEntityMode$ {
    /** @deprecated use `SubscriptionItemEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `SubscriptionItemEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const SubscriptionItemEntity$inboundSchema: z.ZodType<SubscriptionItemEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriptionItemEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    product_id?: string | undefined;
    price_id?: string | undefined;
    units?: number | undefined;
};
/** @internal */
export declare const SubscriptionItemEntity$outboundSchema: z.ZodType<SubscriptionItemEntity$Outbound, z.ZodTypeDef, SubscriptionItemEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionItemEntity$ {
    /** @deprecated use `SubscriptionItemEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriptionItemEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriptionItemEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriptionItemEntity$Outbound, z.ZodTypeDef, SubscriptionItemEntity>;
    /** @deprecated use `SubscriptionItemEntity$Outbound` instead. */
    type Outbound = SubscriptionItemEntity$Outbound;
}
export declare function subscriptionItemEntityToJSON(subscriptionItemEntity: SubscriptionItemEntity): string;
export declare function subscriptionItemEntityFromJSON(jsonString: string): SafeParseResult<SubscriptionItemEntity, SDKValidationError>;
//# sourceMappingURL=subscriptionitementity.d.ts.map