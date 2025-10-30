import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UpsertSubscriptionItemEntity, UpsertSubscriptionItemEntity$Outbound } from "./upsertsubscriptionitementity.js";
/**
 * The update behavior for the subscription (defaults to proration)
 */
export declare const UpdateBehavior: {
    readonly ProrationChargeImmediately: "proration-charge-immediately";
    readonly ProrationCharge: "proration-charge";
    readonly ProrationNone: "proration-none";
};
/**
 * The update behavior for the subscription (defaults to proration)
 */
export type UpdateBehavior = ClosedEnum<typeof UpdateBehavior>;
export type UpdateSubscriptionRequestEntity = {
    /**
     * List of subscription items to update/create. If no item ID is provided, the item will be created.
     */
    items?: Array<UpsertSubscriptionItemEntity> | undefined;
    /**
     * The update behavior for the subscription (defaults to proration)
     */
    updateBehavior?: UpdateBehavior | undefined;
};
/** @internal */
export declare const UpdateBehavior$inboundSchema: z.ZodNativeEnum<typeof UpdateBehavior>;
/** @internal */
export declare const UpdateBehavior$outboundSchema: z.ZodNativeEnum<typeof UpdateBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateBehavior$ {
    /** @deprecated use `UpdateBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly ProrationChargeImmediately: "proration-charge-immediately";
        readonly ProrationCharge: "proration-charge";
        readonly ProrationNone: "proration-none";
    }>;
    /** @deprecated use `UpdateBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly ProrationChargeImmediately: "proration-charge-immediately";
        readonly ProrationCharge: "proration-charge";
        readonly ProrationNone: "proration-none";
    }>;
}
/** @internal */
export declare const UpdateSubscriptionRequestEntity$inboundSchema: z.ZodType<UpdateSubscriptionRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSubscriptionRequestEntity$Outbound = {
    items?: Array<UpsertSubscriptionItemEntity$Outbound> | undefined;
    update_behavior: string;
};
/** @internal */
export declare const UpdateSubscriptionRequestEntity$outboundSchema: z.ZodType<UpdateSubscriptionRequestEntity$Outbound, z.ZodTypeDef, UpdateSubscriptionRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSubscriptionRequestEntity$ {
    /** @deprecated use `UpdateSubscriptionRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSubscriptionRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSubscriptionRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSubscriptionRequestEntity$Outbound, z.ZodTypeDef, UpdateSubscriptionRequestEntity>;
    /** @deprecated use `UpdateSubscriptionRequestEntity$Outbound` instead. */
    type Outbound = UpdateSubscriptionRequestEntity$Outbound;
}
export declare function updateSubscriptionRequestEntityToJSON(updateSubscriptionRequestEntity: UpdateSubscriptionRequestEntity): string;
export declare function updateSubscriptionRequestEntityFromJSON(jsonString: string): SafeParseResult<UpdateSubscriptionRequestEntity, SDKValidationError>;
//# sourceMappingURL=updatesubscriptionrequestentity.d.ts.map