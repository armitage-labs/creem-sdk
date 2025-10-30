import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Text, Text$Outbound } from "./text.js";
export type CustomField = {
    /**
     * The type of the field.
     */
    type: string;
    /**
     * Unique key for custom field. Must be unique to this field, alphanumeric, and up to 200 characters.
     */
    key: string;
    /**
     * The label for the field, displayed to the customer, up to 50 characters
     */
    label: string;
    /**
     * Whether the customer is required to complete the field. Defaults to `false`.
     */
    optional?: boolean | undefined;
    /**
     * Whether the customer is required to complete the field. Defaults to `false`.
     */
    text?: Text | undefined;
};
/** @internal */
export declare const CustomField$inboundSchema: z.ZodType<CustomField, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomField$Outbound = {
    type: string;
    key: string;
    label: string;
    optional?: boolean | undefined;
    text?: Text$Outbound | undefined;
};
/** @internal */
export declare const CustomField$outboundSchema: z.ZodType<CustomField$Outbound, z.ZodTypeDef, CustomField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomField$ {
    /** @deprecated use `CustomField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomField, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomField$Outbound, z.ZodTypeDef, CustomField>;
    /** @deprecated use `CustomField$Outbound` instead. */
    type Outbound = CustomField$Outbound;
}
export declare function customFieldToJSON(customField: CustomField): string;
export declare function customFieldFromJSON(jsonString: string): SafeParseResult<CustomField, SDKValidationError>;
//# sourceMappingURL=customfield.d.ts.map