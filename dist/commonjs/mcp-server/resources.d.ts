import { McpServer, ResourceMetadata, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { Variables } from "@modelcontextprotocol/sdk/shared/uriTemplate.js";
import { ReadResourceResult } from "@modelcontextprotocol/sdk/types.js";
import { CreemCore } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
export type ReadResourceCallback = (client: CreemCore, uri: URL, extra: RequestHandlerExtra) => ReadResourceResult | Promise<ReadResourceResult>;
export type ResourceDefinition = {
    name: string;
    description?: string;
    metadata?: ResourceMetadata;
    scopes?: MCPScope[];
    resource: string;
    read: ReadResourceCallback;
};
export type ReadResourceTemplateCallback = (client: CreemCore, uri: URL, vars: Variables, extra: RequestHandlerExtra) => ReadResourceResult | Promise<ReadResourceResult>;
export type ResourceTemplateDefinition = {
    name: string;
    description: string;
    metadata?: ResourceMetadata;
    scopes?: MCPScope[];
    resource: ResourceTemplate;
    read: ReadResourceTemplateCallback;
};
export declare function formatResult(value: unknown, uri: URL, init: {
    mimeType?: string | undefined;
    response?: Response | undefined;
}): Promise<ReadResourceResult>;
export declare function createRegisterResource(logger: ConsoleLogger, server: McpServer, sdk: CreemCore, allowedScopes: Set<MCPScope>): (resource: ResourceDefinition) => void;
export declare function createRegisterResourceTemplate(logger: ConsoleLogger, server: McpServer, sdk: CreemCore, allowedScopes: Set<MCPScope>): (resource: ResourceTemplateDefinition) => void;
//# sourceMappingURL=resources.d.ts.map