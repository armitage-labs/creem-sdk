# SubscriptionEntity

## Example Usage

```typescript
import { SubscriptionEntity } from "creem/models/components";

let value: SubscriptionEntity = {
  id: "<id>",
  mode: "live",
  object: "<value>",
  product: {},
  customer: {},
  collectionMethod: "charge_automatically",
  status: "active",
  lastTransactionId: "tran_3e6Z6TzvHKdsjEgXnGDEp0",
  lastTransaction: {
    id: "<id>",
    mode: "test",
    object: "<value>",
    amount: 2000,
    amountPaid: 2000,
    discountAmount: 2000,
    currency: "EUR",
    type: "<value>",
    taxCountry: "US",
    taxAmount: 2000,
    status: "<value>",
    refundedAmount: 2000,
    createdAt: 8622.86,
  },
  lastTransactionDate: new Date("2024-09-12T12:34:56Z"),
  nextTransactionDate: new Date("2024-09-12T12:34:56Z"),
  currentPeriodStartDate: new Date("2024-09-12T12:34:56Z"),
  currentPeriodEndDate: new Date("2024-09-12T12:34:56Z"),
  canceledAt: new Date("2024-09-12T12:34:56Z"),
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-09-12T12:34:56Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the object.                                                             |                                                                                               |
| `mode`                                                                                        | [components.SubscriptionEntityMode](../../models/components/subscriptionentitymode.md)        | :heavy_check_mark:                                                                            | String representing the environment.                                                          |                                                                                               |
| `object`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | String representing the object’s type. Objects of the same type share the same value.         |                                                                                               |
| `product`                                                                                     | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | The product associated with the subscription.                                                 |                                                                                               |
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | The customer who owns the subscription.                                                       |                                                                                               |
| `items`                                                                                       | [components.SubscriptionItemEntity](../../models/components/subscriptionitementity.md)[]      | :heavy_minus_sign:                                                                            | Subscription items.                                                                           |                                                                                               |
| `collectionMethod`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | The method used for collecting payments for the subscription.                                 | charge_automatically                                                                          |
| `status`                                                                                      | [components.Status](../../models/components/status.md)                                        | :heavy_check_mark:                                                                            | The current status of the subscription.                                                       | active                                                                                        |
| `lastTransactionId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the last paid transaction.                                                          | tran_3e6Z6TzvHKdsjEgXnGDEp0                                                                   |
| `lastTransaction`                                                                             | [components.TransactionEntity](../../models/components/transactionentity.md)                  | :heavy_minus_sign:                                                                            | The last paid transaction.                                                                    |                                                                                               |
| `lastTransactionDate`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date of the last paid transaction.                                                        | 2024-09-12T12:34:56Z                                                                          |
| `nextTransactionDate`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the next subscription transaction will be charged.                              | 2024-09-12T12:34:56Z                                                                          |
| `currentPeriodStartDate`                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The start date of the current subscription period.                                            | 2024-09-12T12:34:56Z                                                                          |
| `currentPeriodEndDate`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The end date of the current subscription period.                                              | 2024-09-12T12:34:56Z                                                                          |
| `canceledAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the subscription was canceled, if applicable.                          | 2024-09-12T12:34:56Z                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when the subscription was created.                                          | 2024-01-01T00:00:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when the subscription was last updated.                                     | 2024-09-12T12:34:56Z                                                                          |