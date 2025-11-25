# CancelSubscriptionRequest

## Example Usage

```typescript
import { CancelSubscriptionRequest } from "creem/models/operations";

let value: CancelSubscriptionRequest = {
  id: "<id>",
  cancelSubscriptionRequestEntity: {
    mode: "immediate",
    onExecute: "cancel",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `cancelSubscriptionRequestEntity`                                                                        | [components.CancelSubscriptionRequestEntity](../../models/components/cancelsubscriptionrequestentity.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |