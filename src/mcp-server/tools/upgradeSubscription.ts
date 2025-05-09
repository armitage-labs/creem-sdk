/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { upgradeSubscription } from "../../funcs/upgradeSubscription.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpgradeSubscriptionRequest$inboundSchema,
};

export const tool$upgradeSubscription: ToolDefinition<typeof args> = {
  name: "upgrade-subscription",
  description: `Upgrade a subscription to a different product`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await upgradeSubscription(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
