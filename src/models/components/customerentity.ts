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
 * String representing the environment.
 */
export const CustomerEntityMode = {
  Test: "test",
  Prod: "prod",
  Sandbox: "sandbox",
} as const;
/**
 * String representing the environment.
 */
export type CustomerEntityMode = ClosedEnum<typeof CustomerEntityMode>;

export type CustomerEntity = {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the environment.
   */
  mode: CustomerEntityMode;
  /**
   * String representing the object’s type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Customer email address.
   */
  email: string;
  /**
   * Customer name.
   */
  name?: string | undefined;
  /**
   * The ISO alpha-2 country code for the customer.
   */
  country: string;
  /**
   * Creation date of the product
   */
  createdAt: Date;
  /**
   * Last updated date of the product
   */
  updatedAt: Date;
};

/** @internal */
export const CustomerEntityMode$inboundSchema: z.ZodNativeEnum<
  typeof CustomerEntityMode
> = z.nativeEnum(CustomerEntityMode);

/** @internal */
export const CustomerEntityMode$outboundSchema: z.ZodNativeEnum<
  typeof CustomerEntityMode
> = CustomerEntityMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerEntityMode$ {
  /** @deprecated use `CustomerEntityMode$inboundSchema` instead. */
  export const inboundSchema = CustomerEntityMode$inboundSchema;
  /** @deprecated use `CustomerEntityMode$outboundSchema` instead. */
  export const outboundSchema = CustomerEntityMode$outboundSchema;
}

/** @internal */
export const CustomerEntity$inboundSchema: z.ZodType<
  CustomerEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  mode: CustomerEntityMode$inboundSchema,
  object: z.string(),
  email: z.string(),
  name: z.string().optional(),
  country: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CustomerEntity$Outbound = {
  id: string;
  mode: string;
  object: string;
  email: string;
  name?: string | undefined;
  country: string;
  created_at: string;
  updated_at: string;
};

/** @internal */
export const CustomerEntity$outboundSchema: z.ZodType<
  CustomerEntity$Outbound,
  z.ZodTypeDef,
  CustomerEntity
> = z.object({
  id: z.string(),
  mode: CustomerEntityMode$outboundSchema,
  object: z.string(),
  email: z.string(),
  name: z.string().optional(),
  country: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerEntity$ {
  /** @deprecated use `CustomerEntity$inboundSchema` instead. */
  export const inboundSchema = CustomerEntity$inboundSchema;
  /** @deprecated use `CustomerEntity$outboundSchema` instead. */
  export const outboundSchema = CustomerEntity$outboundSchema;
  /** @deprecated use `CustomerEntity$Outbound` instead. */
  export type Outbound = CustomerEntity$Outbound;
}

export function customerEntityToJSON(customerEntity: CustomerEntity): string {
  return JSON.stringify(CustomerEntity$outboundSchema.parse(customerEntity));
}

export function customerEntityFromJSON(
  jsonString: string,
): SafeParseResult<CustomerEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerEntity' from JSON`,
  );
}
