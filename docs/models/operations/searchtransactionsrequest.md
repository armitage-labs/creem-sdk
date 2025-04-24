# SearchTransactionsRequest

## Example Usage

```typescript
import { SearchTransactionsRequest } from "creem/models/operations";

let value: SearchTransactionsRequest = {
  xApiKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `customerId`       | *string*           | :heavy_minus_sign: | The customer id    |
| `orderId`          | *string*           | :heavy_minus_sign: | The order id       |
| `productId`        | *string*           | :heavy_minus_sign: | The product id     |
| `pageNumber`       | *number*           | :heavy_minus_sign: | The page number    |
| `pageSize`         | *number*           | :heavy_minus_sign: | The the page size  |
| `xApiKey`          | *string*           | :heavy_check_mark: | N/A                |