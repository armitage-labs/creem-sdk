import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateProductRequest = {
    xApiKey: string;
    createProductRequestEntity: components.CreateProductRequestEntity;
};
/** @internal */
export declare const CreateProductRequest$inboundSchema: z.ZodType<CreateProductRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProductRequest$Outbound = {
    "x-api-key": string;
    CreateProductRequestEntity: components.CreateProductRequestEntity$Outbound;
};
/** @internal */
export declare const CreateProductRequest$outboundSchema: z.ZodType<CreateProductRequest$Outbound, z.ZodTypeDef, CreateProductRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateProductRequest$ {
    /** @deprecated use `CreateProductRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateProductRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateProductRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateProductRequest$Outbound, z.ZodTypeDef, CreateProductRequest>;
    /** @deprecated use `CreateProductRequest$Outbound` instead. */
    type Outbound = CreateProductRequest$Outbound;
}
export declare function createProductRequestToJSON(createProductRequest: CreateProductRequest): string;
export declare function createProductRequestFromJSON(jsonString: string): SafeParseResult<CreateProductRequest, SDKValidationError>;
//# sourceMappingURL=createproduct.d.ts.map