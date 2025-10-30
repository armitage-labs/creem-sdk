import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { GetPromptResult } from "@modelcontextprotocol/sdk/types.js";
import { objectOutputType, ZodOptional, ZodType, ZodTypeAny, ZodTypeDef } from "zod";
import { CreemCore } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
export type PromptArgsRawShape = {
    [k: string]: ZodType<string, ZodTypeDef, string> | ZodOptional<ZodType<string, ZodTypeDef, string>>;
};
export type PromptDefinition<Args extends undefined | PromptArgsRawShape = undefined> = Args extends PromptArgsRawShape ? {
    name: string;
    description?: string;
    scopes?: MCPScope[];
    args: Args;
    prompt: (client: CreemCore, args: objectOutputType<Args, ZodTypeAny>, extra: RequestHandlerExtra) => GetPromptResult | Promise<GetPromptResult>;
} : {
    name: string;
    description?: string;
    scopes?: MCPScope[];
    args?: undefined;
    prompt: (client: CreemCore, extra: RequestHandlerExtra) => GetPromptResult | Promise<GetPromptResult>;
};
export declare function formatResult(value: string): Promise<GetPromptResult>;
export declare function createRegisterPrompt(logger: ConsoleLogger, server: McpServer, sdk: CreemCore, allowedScopes: Set<MCPScope>): <A extends PromptArgsRawShape | undefined>(prompt: PromptDefinition<A>) => void;
//# sourceMappingURL=prompts.d.ts.map