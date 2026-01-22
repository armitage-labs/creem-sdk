# RetrieveDiscountRequest

## Example Usage

```typescript
import { RetrieveDiscountRequest } from "creem/models/operations";

let value: RetrieveDiscountRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `discountId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | The unique identifier of the discount (provide either discount_id OR discount_code) |
| `discountCode`                                                                      | *string*                                                                            | :heavy_minus_sign:                                                                  | The unique discount code (provide either discount_id OR discount_code)              |