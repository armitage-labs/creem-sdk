import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Text = {
    /**
     * Maximum character length constraint for the input.
     */
    maxLength?: number | undefined;
    /**
     * Minimum character length requirement for the input.
     */
    minLength?: number | undefined;
};
/** @internal */
export declare const Text$inboundSchema: z.ZodType<Text, z.ZodTypeDef, unknown>;
/** @internal */
export type Text$Outbound = {
    max_length?: number | undefined;
    min_length?: number | undefined;
};
/** @internal */
export declare const Text$outboundSchema: z.ZodType<Text$Outbound, z.ZodTypeDef, Text>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Text$ {
    /** @deprecated use `Text$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Text, z.ZodTypeDef, unknown>;
    /** @deprecated use `Text$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Text$Outbound, z.ZodTypeDef, Text>;
    /** @deprecated use `Text$Outbound` instead. */
    type Outbound = Text$Outbound;
}
export declare function textToJSON(text: Text): string;
export declare function textFromJSON(jsonString: string): SafeParseResult<Text, SDKValidationError>;
//# sourceMappingURL=text.d.ts.map