import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The update behavior for the subscription (defaults to proration-charge-immediately)
 */
export declare const UpgradeSubscriptionRequestEntityUpdateBehavior: {
    readonly ProrationChargeImmediately: "proration-charge-immediately";
    readonly ProrationCharge: "proration-charge";
    readonly ProrationNone: "proration-none";
};
/**
 * The update behavior for the subscription (defaults to proration-charge-immediately)
 */
export type UpgradeSubscriptionRequestEntityUpdateBehavior = ClosedEnum<typeof UpgradeSubscriptionRequestEntityUpdateBehavior>;
export type UpgradeSubscriptionRequestEntity = {
    /**
     * The ID of the product to upgrade to
     */
    productId: string;
    /**
     * The update behavior for the subscription (defaults to proration-charge-immediately)
     */
    updateBehavior?: UpgradeSubscriptionRequestEntityUpdateBehavior | undefined;
};
/** @internal */
export declare const UpgradeSubscriptionRequestEntityUpdateBehavior$inboundSchema: z.ZodNativeEnum<typeof UpgradeSubscriptionRequestEntityUpdateBehavior>;
/** @internal */
export declare const UpgradeSubscriptionRequestEntityUpdateBehavior$outboundSchema: z.ZodNativeEnum<typeof UpgradeSubscriptionRequestEntityUpdateBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpgradeSubscriptionRequestEntityUpdateBehavior$ {
    /** @deprecated use `UpgradeSubscriptionRequestEntityUpdateBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly ProrationChargeImmediately: "proration-charge-immediately";
        readonly ProrationCharge: "proration-charge";
        readonly ProrationNone: "proration-none";
    }>;
    /** @deprecated use `UpgradeSubscriptionRequestEntityUpdateBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly ProrationChargeImmediately: "proration-charge-immediately";
        readonly ProrationCharge: "proration-charge";
        readonly ProrationNone: "proration-none";
    }>;
}
/** @internal */
export declare const UpgradeSubscriptionRequestEntity$inboundSchema: z.ZodType<UpgradeSubscriptionRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type UpgradeSubscriptionRequestEntity$Outbound = {
    product_id: string;
    update_behavior: string;
};
/** @internal */
export declare const UpgradeSubscriptionRequestEntity$outboundSchema: z.ZodType<UpgradeSubscriptionRequestEntity$Outbound, z.ZodTypeDef, UpgradeSubscriptionRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpgradeSubscriptionRequestEntity$ {
    /** @deprecated use `UpgradeSubscriptionRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpgradeSubscriptionRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpgradeSubscriptionRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpgradeSubscriptionRequestEntity$Outbound, z.ZodTypeDef, UpgradeSubscriptionRequestEntity>;
    /** @deprecated use `UpgradeSubscriptionRequestEntity$Outbound` instead. */
    type Outbound = UpgradeSubscriptionRequestEntity$Outbound;
}
export declare function upgradeSubscriptionRequestEntityToJSON(upgradeSubscriptionRequestEntity: UpgradeSubscriptionRequestEntity): string;
export declare function upgradeSubscriptionRequestEntityFromJSON(jsonString: string): SafeParseResult<UpgradeSubscriptionRequestEntity, SDKValidationError>;
//# sourceMappingURL=upgradesubscriptionrequestentity.d.ts.map