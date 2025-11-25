# Product

The product associated with the subscription.


## Supported Types

### `components.ProductEntity`

```typescript
const value: components.ProductEntity = {
  id: "<id>",
  mode: "test",
  object: "<value>",
  name: "<value>",
  description: "This is a sample product description.",
  imageUrl: "https://example.com/image.jpg",
  features: [
    {
      id: "<id>",
      type: "<value>",
      description: "Get access to discord server.",
    },
  ],
  price: 400,
  currency: "USD",
  billingType: "recurring",
  billingPeriod: "every-month",
  status: "<value>",
  taxMode: "inclusive",
  taxCategory: "[\"saas\",\"digital-goods-service\",\"ebooks\"]",
  productUrl: "https://creem.io/product/prod_123123123123",
  defaultSuccessUrl: "https://example.com/?status=successful",
  createdAt: new Date("2023-01-01T00:00:00Z"),
  updatedAt: new Date("2023-01-01T00:00:00Z"),
};
```

### `string`

```typescript
const value: string = "<value>";
```

