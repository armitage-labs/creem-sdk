import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * String representing the environment.
 */
export declare const TransactionEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type TransactionEntityMode = ClosedEnum<typeof TransactionEntityMode>;
export type TransactionEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: TransactionEntityMode;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The transaction amount in cents. 1000 = $10.00
     */
    amount: number;
    /**
     * The amount the customer paid in cents. 1000 = $10.00
     */
    amountPaid?: number | undefined;
    /**
     * The discount amount in cents. 1000 = $10.00
     */
    discountAmount?: number | undefined;
    /**
     * Three-letter ISO currency code, in uppercase. Must be a supported currency.
     */
    currency: string;
    /**
     * The type of transaction. payment(one time payments) and invoice(subscription)
     */
    type: string;
    /**
     * The ISO alpha-2 country code where tax is collected.
     */
    taxCountry?: string | undefined;
    /**
     * The sale tax amount in cents. 1000 = $10.00
     */
    taxAmount?: number | undefined;
    /**
     * Status of the transaction.
     */
    status: string;
    /**
     * The amount that has been refunded in cents. 1000 = $10.00
     */
    refundedAmount?: number | null | undefined;
    /**
     * The order associated with the transaction.
     */
    order?: string | null | undefined;
    /**
     * The subscription associated with the transaction.
     */
    subscription?: string | null | undefined;
    /**
     * The customer associated with the transaction.
     */
    customer?: string | null | undefined;
    /**
     * The description of the transaction.
     */
    description?: string | undefined;
    /**
     * Start period for the invoice as timestamp
     */
    periodStart?: number | undefined;
    /**
     * End period for the invoice as timestamp
     */
    periodEnd?: number | undefined;
    /**
     * Creation date of the order as timestamp
     */
    createdAt: number;
};
/** @internal */
export declare const TransactionEntityMode$inboundSchema: z.ZodNativeEnum<typeof TransactionEntityMode>;
/** @internal */
export declare const TransactionEntityMode$outboundSchema: z.ZodNativeEnum<typeof TransactionEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransactionEntityMode$ {
    /** @deprecated use `TransactionEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `TransactionEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const TransactionEntity$inboundSchema: z.ZodType<TransactionEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type TransactionEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    amount: number;
    amount_paid?: number | undefined;
    discount_amount?: number | undefined;
    currency: string;
    type: string;
    tax_country?: string | undefined;
    tax_amount?: number | undefined;
    status: string;
    refunded_amount?: number | null | undefined;
    order?: string | null | undefined;
    subscription?: string | null | undefined;
    customer?: string | null | undefined;
    description?: string | undefined;
    period_start?: number | undefined;
    period_end?: number | undefined;
    created_at: number;
};
/** @internal */
export declare const TransactionEntity$outboundSchema: z.ZodType<TransactionEntity$Outbound, z.ZodTypeDef, TransactionEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransactionEntity$ {
    /** @deprecated use `TransactionEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransactionEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransactionEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransactionEntity$Outbound, z.ZodTypeDef, TransactionEntity>;
    /** @deprecated use `TransactionEntity$Outbound` instead. */
    type Outbound = TransactionEntity$Outbound;
}
export declare function transactionEntityToJSON(transactionEntity: TransactionEntity): string;
export declare function transactionEntityFromJSON(jsonString: string): SafeParseResult<TransactionEntity, SDKValidationError>;
//# sourceMappingURL=transactionentity.d.ts.map