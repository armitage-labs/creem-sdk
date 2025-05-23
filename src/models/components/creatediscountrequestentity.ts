/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of the discount, either "percentage" or "fixed".
 */
export const CreateDiscountRequestEntityType = {
  Percentage: "percentage",
  Fixed: "fixed",
} as const;
/**
 * The type of the discount, either "percentage" or "fixed".
 */
export type CreateDiscountRequestEntityType = ClosedEnum<
  typeof CreateDiscountRequestEntityType
>;

/**
 * The duration type for the discount.
 */
export const CreateDiscountRequestEntityDuration = {
  Forever: "forever",
  Once: "once",
  Repeating: "repeating",
} as const;
/**
 * The duration type for the discount.
 */
export type CreateDiscountRequestEntityDuration = ClosedEnum<
  typeof CreateDiscountRequestEntityDuration
>;

export type CreateDiscountRequestEntity = {
  /**
   * The name of the discount.
   */
  name: string;
  /**
   * Optional discount code. If left empty, a code will be generated.
   */
  code?: string | undefined;
  /**
   * The type of the discount, either "percentage" or "fixed".
   */
  type: CreateDiscountRequestEntityType;
  /**
   * The fixed value for the discount. Only applicable if the type is "fixed".
   */
  amount?: number | undefined;
  /**
   * The currency of the discount. Only required if type is "fixed".
   */
  currency?: string | undefined;
  /**
   * The percentage value for the discount. Only applicable if the type is "percentage".
   */
  percentage?: number | undefined;
  /**
   * The expiry date of the discount.
   */
  expiryDate?: Date | undefined;
  /**
   * The maximum number of redemptions for the discount.
   */
  maxRedemptions?: number | undefined;
  /**
   * The duration type for the discount.
   */
  duration: CreateDiscountRequestEntityDuration;
  /**
   * The number of months the discount is valid for. Only applicable if the duration is "repeating" and the product is a subscription.
   */
  durationInMonths?: number | undefined;
  /**
   * The list of product IDs to which this discount applies.
   */
  appliesToProducts: Array<string>;
};

/** @internal */
export const CreateDiscountRequestEntityType$inboundSchema: z.ZodNativeEnum<
  typeof CreateDiscountRequestEntityType
> = z.nativeEnum(CreateDiscountRequestEntityType);

/** @internal */
export const CreateDiscountRequestEntityType$outboundSchema: z.ZodNativeEnum<
  typeof CreateDiscountRequestEntityType
> = CreateDiscountRequestEntityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDiscountRequestEntityType$ {
  /** @deprecated use `CreateDiscountRequestEntityType$inboundSchema` instead. */
  export const inboundSchema = CreateDiscountRequestEntityType$inboundSchema;
  /** @deprecated use `CreateDiscountRequestEntityType$outboundSchema` instead. */
  export const outboundSchema = CreateDiscountRequestEntityType$outboundSchema;
}

/** @internal */
export const CreateDiscountRequestEntityDuration$inboundSchema: z.ZodNativeEnum<
  typeof CreateDiscountRequestEntityDuration
> = z.nativeEnum(CreateDiscountRequestEntityDuration);

/** @internal */
export const CreateDiscountRequestEntityDuration$outboundSchema:
  z.ZodNativeEnum<typeof CreateDiscountRequestEntityDuration> =
    CreateDiscountRequestEntityDuration$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDiscountRequestEntityDuration$ {
  /** @deprecated use `CreateDiscountRequestEntityDuration$inboundSchema` instead. */
  export const inboundSchema =
    CreateDiscountRequestEntityDuration$inboundSchema;
  /** @deprecated use `CreateDiscountRequestEntityDuration$outboundSchema` instead. */
  export const outboundSchema =
    CreateDiscountRequestEntityDuration$outboundSchema;
}

/** @internal */
export const CreateDiscountRequestEntity$inboundSchema: z.ZodType<
  CreateDiscountRequestEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  code: z.string().optional(),
  type: CreateDiscountRequestEntityType$inboundSchema,
  amount: z.number().optional(),
  currency: z.string().optional(),
  percentage: z.number().optional(),
  expiry_date: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  max_redemptions: z.number().optional(),
  duration: CreateDiscountRequestEntityDuration$inboundSchema,
  duration_in_months: z.number().optional(),
  applies_to_products: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "expiry_date": "expiryDate",
    "max_redemptions": "maxRedemptions",
    "duration_in_months": "durationInMonths",
    "applies_to_products": "appliesToProducts",
  });
});

/** @internal */
export type CreateDiscountRequestEntity$Outbound = {
  name: string;
  code?: string | undefined;
  type: string;
  amount?: number | undefined;
  currency?: string | undefined;
  percentage?: number | undefined;
  expiry_date?: string | undefined;
  max_redemptions?: number | undefined;
  duration: string;
  duration_in_months?: number | undefined;
  applies_to_products: Array<string>;
};

/** @internal */
export const CreateDiscountRequestEntity$outboundSchema: z.ZodType<
  CreateDiscountRequestEntity$Outbound,
  z.ZodTypeDef,
  CreateDiscountRequestEntity
> = z.object({
  name: z.string(),
  code: z.string().optional(),
  type: CreateDiscountRequestEntityType$outboundSchema,
  amount: z.number().optional(),
  currency: z.string().optional(),
  percentage: z.number().optional(),
  expiryDate: z.date().transform(v => v.toISOString()).optional(),
  maxRedemptions: z.number().optional(),
  duration: CreateDiscountRequestEntityDuration$outboundSchema,
  durationInMonths: z.number().optional(),
  appliesToProducts: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    expiryDate: "expiry_date",
    maxRedemptions: "max_redemptions",
    durationInMonths: "duration_in_months",
    appliesToProducts: "applies_to_products",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDiscountRequestEntity$ {
  /** @deprecated use `CreateDiscountRequestEntity$inboundSchema` instead. */
  export const inboundSchema = CreateDiscountRequestEntity$inboundSchema;
  /** @deprecated use `CreateDiscountRequestEntity$outboundSchema` instead. */
  export const outboundSchema = CreateDiscountRequestEntity$outboundSchema;
  /** @deprecated use `CreateDiscountRequestEntity$Outbound` instead. */
  export type Outbound = CreateDiscountRequestEntity$Outbound;
}

export function createDiscountRequestEntityToJSON(
  createDiscountRequestEntity: CreateDiscountRequestEntity,
): string {
  return JSON.stringify(
    CreateDiscountRequestEntity$outboundSchema.parse(
      createDiscountRequestEntity,
    ),
  );
}

export function createDiscountRequestEntityFromJSON(
  jsonString: string,
): SafeParseResult<CreateDiscountRequestEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDiscountRequestEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDiscountRequestEntity' from JSON`,
  );
}
