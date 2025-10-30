import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateDiscountRequest = {
    xApiKey: string;
    createDiscountRequestEntity: components.CreateDiscountRequestEntity;
};
/** @internal */
export declare const CreateDiscountRequest$inboundSchema: z.ZodType<CreateDiscountRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDiscountRequest$Outbound = {
    "x-api-key": string;
    CreateDiscountRequestEntity: components.CreateDiscountRequestEntity$Outbound;
};
/** @internal */
export declare const CreateDiscountRequest$outboundSchema: z.ZodType<CreateDiscountRequest$Outbound, z.ZodTypeDef, CreateDiscountRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateDiscountRequest$ {
    /** @deprecated use `CreateDiscountRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateDiscountRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateDiscountRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateDiscountRequest$Outbound, z.ZodTypeDef, CreateDiscountRequest>;
    /** @deprecated use `CreateDiscountRequest$Outbound` instead. */
    type Outbound = CreateDiscountRequest$Outbound;
}
export declare function createDiscountRequestToJSON(createDiscountRequest: CreateDiscountRequest): string;
export declare function createDiscountRequestFromJSON(jsonString: string): SafeParseResult<CreateDiscountRequest, SDKValidationError>;
//# sourceMappingURL=creatediscount.d.ts.map