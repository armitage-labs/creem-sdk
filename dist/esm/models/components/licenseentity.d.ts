import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * String representing the environment.
 */
export declare const LicenseEntityMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type LicenseEntityMode = ClosedEnum<typeof LicenseEntityMode>;
/**
 * The current status of the license key.
 */
export declare const LicenseEntityStatus: {
    readonly Inactive: "inactive";
    readonly Active: "active";
    readonly Expired: "expired";
    readonly Disabled: "disabled";
};
/**
 * The current status of the license key.
 */
export type LicenseEntityStatus = ClosedEnum<typeof LicenseEntityStatus>;
/**
 * The activation limit. Null if activations are unlimited.
 */
export type ActivationLimit = {};
/**
 * The date the license key expires. Null if it does not have an expiration date.
 */
export type ExpiresAt = {};
/**
 * String representing the environment.
 */
export declare const LicenseEntityInstanceMode: {
    readonly Test: "test";
    readonly Prod: "prod";
    readonly Sandbox: "sandbox";
};
/**
 * String representing the environment.
 */
export type LicenseEntityInstanceMode = ClosedEnum<typeof LicenseEntityInstanceMode>;
/**
 * The status of the license instance.
 */
export declare const LicenseEntityInstanceStatus: {
    readonly Active: "active";
    readonly Deactivated: "deactivated";
};
/**
 * The status of the license instance.
 */
export type LicenseEntityInstanceStatus = ClosedEnum<typeof LicenseEntityInstanceStatus>;
/**
 * Associated license instances.
 */
export type Instance = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: LicenseEntityInstanceMode;
    /**
     * A string representing the object’s type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The name of the license instance.
     */
    name: string;
    /**
     * The status of the license instance.
     */
    status: LicenseEntityInstanceStatus;
    /**
     * The creation date of the license instance.
     */
    createdAt: Date;
};
export type LicenseEntity = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the environment.
     */
    mode: LicenseEntityMode;
    /**
     * A string representing the object’s type. Objects of the same type share the same value.
     */
    object: string;
    /**
     * The current status of the license key.
     */
    status: LicenseEntityStatus;
    /**
     * The license key.
     */
    key: string;
    /**
     * The number of instances that this license key was activated.
     */
    activation: number;
    /**
     * The activation limit. Null if activations are unlimited.
     */
    activationLimit?: ActivationLimit | null | undefined;
    /**
     * The date the license key expires. Null if it does not have an expiration date.
     */
    expiresAt?: ExpiresAt | null | undefined;
    /**
     * The creation date of the license key.
     */
    createdAt: Date;
    /**
     * Associated license instances.
     */
    instance?: Instance | null | undefined;
};
/** @internal */
export declare const LicenseEntityMode$inboundSchema: z.ZodNativeEnum<typeof LicenseEntityMode>;
/** @internal */
export declare const LicenseEntityMode$outboundSchema: z.ZodNativeEnum<typeof LicenseEntityMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseEntityMode$ {
    /** @deprecated use `LicenseEntityMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `LicenseEntityMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const LicenseEntityStatus$inboundSchema: z.ZodNativeEnum<typeof LicenseEntityStatus>;
/** @internal */
export declare const LicenseEntityStatus$outboundSchema: z.ZodNativeEnum<typeof LicenseEntityStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseEntityStatus$ {
    /** @deprecated use `LicenseEntityStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Inactive: "inactive";
        readonly Active: "active";
        readonly Expired: "expired";
        readonly Disabled: "disabled";
    }>;
    /** @deprecated use `LicenseEntityStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Inactive: "inactive";
        readonly Active: "active";
        readonly Expired: "expired";
        readonly Disabled: "disabled";
    }>;
}
/** @internal */
export declare const ActivationLimit$inboundSchema: z.ZodType<ActivationLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type ActivationLimit$Outbound = {};
/** @internal */
export declare const ActivationLimit$outboundSchema: z.ZodType<ActivationLimit$Outbound, z.ZodTypeDef, ActivationLimit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ActivationLimit$ {
    /** @deprecated use `ActivationLimit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ActivationLimit, z.ZodTypeDef, unknown>;
    /** @deprecated use `ActivationLimit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ActivationLimit$Outbound, z.ZodTypeDef, ActivationLimit>;
    /** @deprecated use `ActivationLimit$Outbound` instead. */
    type Outbound = ActivationLimit$Outbound;
}
export declare function activationLimitToJSON(activationLimit: ActivationLimit): string;
export declare function activationLimitFromJSON(jsonString: string): SafeParseResult<ActivationLimit, SDKValidationError>;
/** @internal */
export declare const ExpiresAt$inboundSchema: z.ZodType<ExpiresAt, z.ZodTypeDef, unknown>;
/** @internal */
export type ExpiresAt$Outbound = {};
/** @internal */
export declare const ExpiresAt$outboundSchema: z.ZodType<ExpiresAt$Outbound, z.ZodTypeDef, ExpiresAt>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExpiresAt$ {
    /** @deprecated use `ExpiresAt$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExpiresAt, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExpiresAt$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExpiresAt$Outbound, z.ZodTypeDef, ExpiresAt>;
    /** @deprecated use `ExpiresAt$Outbound` instead. */
    type Outbound = ExpiresAt$Outbound;
}
export declare function expiresAtToJSON(expiresAt: ExpiresAt): string;
export declare function expiresAtFromJSON(jsonString: string): SafeParseResult<ExpiresAt, SDKValidationError>;
/** @internal */
export declare const LicenseEntityInstanceMode$inboundSchema: z.ZodNativeEnum<typeof LicenseEntityInstanceMode>;
/** @internal */
export declare const LicenseEntityInstanceMode$outboundSchema: z.ZodNativeEnum<typeof LicenseEntityInstanceMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseEntityInstanceMode$ {
    /** @deprecated use `LicenseEntityInstanceMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
    /** @deprecated use `LicenseEntityInstanceMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Test: "test";
        readonly Prod: "prod";
        readonly Sandbox: "sandbox";
    }>;
}
/** @internal */
export declare const LicenseEntityInstanceStatus$inboundSchema: z.ZodNativeEnum<typeof LicenseEntityInstanceStatus>;
/** @internal */
export declare const LicenseEntityInstanceStatus$outboundSchema: z.ZodNativeEnum<typeof LicenseEntityInstanceStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseEntityInstanceStatus$ {
    /** @deprecated use `LicenseEntityInstanceStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Active: "active";
        readonly Deactivated: "deactivated";
    }>;
    /** @deprecated use `LicenseEntityInstanceStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Active: "active";
        readonly Deactivated: "deactivated";
    }>;
}
/** @internal */
export declare const Instance$inboundSchema: z.ZodType<Instance, z.ZodTypeDef, unknown>;
/** @internal */
export type Instance$Outbound = {
    id: string;
    mode: string;
    object: string;
    name: string;
    status: string;
    created_at: string;
};
/** @internal */
export declare const Instance$outboundSchema: z.ZodType<Instance$Outbound, z.ZodTypeDef, Instance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Instance$ {
    /** @deprecated use `Instance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Instance, z.ZodTypeDef, unknown>;
    /** @deprecated use `Instance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Instance$Outbound, z.ZodTypeDef, Instance>;
    /** @deprecated use `Instance$Outbound` instead. */
    type Outbound = Instance$Outbound;
}
export declare function instanceToJSON(instance: Instance): string;
export declare function instanceFromJSON(jsonString: string): SafeParseResult<Instance, SDKValidationError>;
/** @internal */
export declare const LicenseEntity$inboundSchema: z.ZodType<LicenseEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseEntity$Outbound = {
    id: string;
    mode: string;
    object: string;
    status: string;
    key: string;
    activation: number;
    activation_limit?: ActivationLimit$Outbound | null | undefined;
    expires_at?: ExpiresAt$Outbound | null | undefined;
    created_at: string;
    instance?: Instance$Outbound | null | undefined;
};
/** @internal */
export declare const LicenseEntity$outboundSchema: z.ZodType<LicenseEntity$Outbound, z.ZodTypeDef, LicenseEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseEntity$ {
    /** @deprecated use `LicenseEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseEntity$Outbound, z.ZodTypeDef, LicenseEntity>;
    /** @deprecated use `LicenseEntity$Outbound` instead. */
    type Outbound = LicenseEntity$Outbound;
}
export declare function licenseEntityToJSON(licenseEntity: LicenseEntity): string;
export declare function licenseEntityFromJSON(jsonString: string): SafeParseResult<LicenseEntity, SDKValidationError>;
//# sourceMappingURL=licenseentity.d.ts.map