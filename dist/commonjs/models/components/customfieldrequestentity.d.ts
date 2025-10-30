import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Text, Text$Outbound } from "./text.js";
/**
 * The type of the field.
 */
export declare const Type: {
    readonly Text: "text";
};
/**
 * The type of the field.
 */
export type Type = ClosedEnum<typeof Type>;
export type CustomFieldRequestEntity = {
    /**
     * The type of the field.
     */
    type: Type;
    /**
     * Unique key for custom field. Must be unique to this field, alphanumeric, and up to 200 characters.
     */
    key: string;
    /**
     * The label for the field, displayed to the customer, up to 50 characters
     */
    label: string;
    /**
     * Whether the customer is required to complete the field. Defaults to `false`
     */
    optional?: boolean | undefined;
    /**
     * Configuration for type of text field.
     */
    text?: Text | undefined;
};
/** @internal */
export declare const Type$inboundSchema: z.ZodNativeEnum<typeof Type>;
/** @internal */
export declare const Type$outboundSchema: z.ZodNativeEnum<typeof Type>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Text: "text";
    }>;
    /** @deprecated use `Type$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Text: "text";
    }>;
}
/** @internal */
export declare const CustomFieldRequestEntity$inboundSchema: z.ZodType<CustomFieldRequestEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldRequestEntity$Outbound = {
    type: string;
    key: string;
    label: string;
    optional?: boolean | undefined;
    text?: Text$Outbound | undefined;
};
/** @internal */
export declare const CustomFieldRequestEntity$outboundSchema: z.ZodType<CustomFieldRequestEntity$Outbound, z.ZodTypeDef, CustomFieldRequestEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldRequestEntity$ {
    /** @deprecated use `CustomFieldRequestEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldRequestEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldRequestEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldRequestEntity$Outbound, z.ZodTypeDef, CustomFieldRequestEntity>;
    /** @deprecated use `CustomFieldRequestEntity$Outbound` instead. */
    type Outbound = CustomFieldRequestEntity$Outbound;
}
export declare function customFieldRequestEntityToJSON(customFieldRequestEntity: CustomFieldRequestEntity): string;
export declare function customFieldRequestEntityFromJSON(jsonString: string): SafeParseResult<CustomFieldRequestEntity, SDKValidationError>;
//# sourceMappingURL=customfieldrequestentity.d.ts.map