# TransactionListEntity

## Example Usage

```typescript
import { TransactionListEntity } from "creem/models/components";

let value: TransactionListEntity = {
  items: [
    {
      id: "<id>",
      mode: "test",
      object: "transaction",
      amount: 2000,
      amountPaid: 2000,
      discountAmount: 2000,
      currency: "EUR",
      type: "<value>",
      taxCountry: "US",
      taxAmount: 2000,
      status: "<value>",
      refundedAmount: 2000,
      createdAt: 7304.21,
    },
  ],
  pagination: {
    totalRecords: 0,
    totalPages: 0,
    currentPage: 1,
    nextPage: 2,
    prevPage: null,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.TransactionEntity](../../models/components/transactionentity.md)[] | :heavy_check_mark:                                                             | List of transactions items                                                     |
| `pagination`                                                                   | [components.PaginationEntity](../../models/components/paginationentity.md)     | :heavy_check_mark:                                                             | Pagination details for the list                                                |