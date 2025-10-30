import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * String representing the environment.
 */
export declare const CustomerEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
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
export declare const CustomerEntityMode$inboundSchema: z.ZodNativeEnum<typeof CustomerEntityMode>;
/** @internal */
export declare const CustomerEntityMode$outboundSchema: z.ZodNativeEnum<typeof CustomerEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerEntityMode$ {
    /** @deprecated use `CustomerEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `CustomerEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const CustomerEntity$inboundSchema: z.ZodType<CustomerEntity, z.ZodTypeDef, unknown>;
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
export declare const CustomerEntity$outboundSchema: z.ZodType<CustomerEntity$Outbound, z.ZodTypeDef, CustomerEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerEntity$ {
    /** @deprecated use `CustomerEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerEntity$Outbound, z.ZodTypeDef, CustomerEntity>;
    /** @deprecated use `CustomerEntity$Outbound` instead. */
    type Outbound = CustomerEntity$Outbound;
}
export declare function customerEntityToJSON(customerEntity: CustomerEntity): string;
export declare function customerEntityFromJSON(jsonString: string): SafeParseResult<CustomerEntity, SDKValidationError>;
//# sourceMappingURL=customerentity.d.ts.map