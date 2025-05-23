/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Text,
  Text$inboundSchema,
  Text$Outbound,
  Text$outboundSchema,
} from "./text.js";

/**
 * The type of the field.
 */
export const Type = {
  Text: "text",
} as const;
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
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const CustomFieldRequestEntity$inboundSchema: z.ZodType<
  CustomFieldRequestEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: Type$inboundSchema,
  key: z.string(),
  label: z.string(),
  optional: z.boolean().optional(),
  text: Text$inboundSchema.optional(),
});

/** @internal */
export type CustomFieldRequestEntity$Outbound = {
  type: string;
  key: string;
  label: string;
  optional?: boolean | undefined;
  text?: Text$Outbound | undefined;
};

/** @internal */
export const CustomFieldRequestEntity$outboundSchema: z.ZodType<
  CustomFieldRequestEntity$Outbound,
  z.ZodTypeDef,
  CustomFieldRequestEntity
> = z.object({
  type: Type$outboundSchema,
  key: z.string(),
  label: z.string(),
  optional: z.boolean().optional(),
  text: Text$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldRequestEntity$ {
  /** @deprecated use `CustomFieldRequestEntity$inboundSchema` instead. */
  export const inboundSchema = CustomFieldRequestEntity$inboundSchema;
  /** @deprecated use `CustomFieldRequestEntity$outboundSchema` instead. */
  export const outboundSchema = CustomFieldRequestEntity$outboundSchema;
  /** @deprecated use `CustomFieldRequestEntity$Outbound` instead. */
  export type Outbound = CustomFieldRequestEntity$Outbound;
}

export function customFieldRequestEntityToJSON(
  customFieldRequestEntity: CustomFieldRequestEntity,
): string {
  return JSON.stringify(
    CustomFieldRequestEntity$outboundSchema.parse(customFieldRequestEntity),
  );
}

export function customFieldRequestEntityFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldRequestEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldRequestEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldRequestEntity' from JSON`,
  );
}
