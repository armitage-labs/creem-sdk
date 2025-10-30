import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpsertSubscriptionItemEntity = {
    /**
     * The id of the item to update.
     */
    id?: string | undefined;
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
export declare const UpsertSubscriptionItemEntity$inboundSchema: z.ZodType<UpsertSubscriptionItemEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type UpsertSubscriptionItemEntity$Outbound = {
    id?: string | undefined;
    product_id?: string | undefined;
    price_id?: string | undefined;
    units?: number | undefined;
};
/** @internal */
export declare const UpsertSubscriptionItemEntity$outboundSchema: z.ZodType<UpsertSubscriptionItemEntity$Outbound, z.ZodTypeDef, UpsertSubscriptionItemEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpsertSubscriptionItemEntity$ {
    /** @deprecated use `UpsertSubscriptionItemEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpsertSubscriptionItemEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpsertSubscriptionItemEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpsertSubscriptionItemEntity$Outbound, z.ZodTypeDef, UpsertSubscriptionItemEntity>;
    /** @deprecated use `UpsertSubscriptionItemEntity$Outbound` instead. */
    type Outbound = UpsertSubscriptionItemEntity$Outbound;
}
export declare function upsertSubscriptionItemEntityToJSON(upsertSubscriptionItemEntity: UpsertSubscriptionItemEntity): string;
export declare function upsertSubscriptionItemEntityFromJSON(jsonString: string): SafeParseResult<UpsertSubscriptionItemEntity, SDKValidationError>;
//# sourceMappingURL=upsertsubscriptionitementity.d.ts.map