import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpgradeSubscriptionRequest = {
    id: string;
    xApiKey: string;
    upgradeSubscriptionRequestEntity: components.UpgradeSubscriptionRequestEntity;
};
/** @internal */
export declare const UpgradeSubscriptionRequest$inboundSchema: z.ZodType<UpgradeSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpgradeSubscriptionRequest$Outbound = {
    id: string;
    "x-api-key": string;
    UpgradeSubscriptionRequestEntity: components.UpgradeSubscriptionRequestEntity$Outbound;
};
/** @internal */
export declare const UpgradeSubscriptionRequest$outboundSchema: z.ZodType<UpgradeSubscriptionRequest$Outbound, z.ZodTypeDef, UpgradeSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpgradeSubscriptionRequest$ {
    /** @deprecated use `UpgradeSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpgradeSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpgradeSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpgradeSubscriptionRequest$Outbound, z.ZodTypeDef, UpgradeSubscriptionRequest>;
    /** @deprecated use `UpgradeSubscriptionRequest$Outbound` instead. */
    type Outbound = UpgradeSubscriptionRequest$Outbound;
}
export declare function upgradeSubscriptionRequestToJSON(upgradeSubscriptionRequest: UpgradeSubscriptionRequest): string;
export declare function upgradeSubscriptionRequestFromJSON(jsonString: string): SafeParseResult<UpgradeSubscriptionRequest, SDKValidationError>;
//# sourceMappingURL=upgradesubscription.d.ts.map