# CheckoutEntity

## Example Usage

```typescript
import { CheckoutEntity } from "creem/models/components";

let value: CheckoutEntity = {
  id: "<id>",
  mode: "live",
  object: "<value>",
  status: "<value>",
  product: {
    id: "<id>",
    mode: "live",
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
    currency: "EUR",
    billingType: "recurring",
    billingPeriod: "every-month",
    status: "<value>",
    taxMode: "inclusive",
    taxCategory: "saas",
    productUrl: "https://creem.io/product/prod_123123123123",
    defaultSuccessUrl: "https://example.com/?status=successful",
    createdAt: new Date("2023-01-01T00:00:00Z"),
    updatedAt: new Date("2023-01-01T00:00:00Z"),
  },
  order: {
    id: "<id>",
    mode: "test",
    object: "<value>",
    product: "Recycled Concrete Towels",
    transaction: "tx_1234567890",
    discount: "dis_1234567890",
    amount: 2000,
    subTotal: 1800,
    taxAmount: 200,
    discountAmount: 100,
    amountDue: 1900,
    amountPaid: 1900,
    currency: "EUR",
    fxAmount: 15,
    fxCurrency: "EUR",
    fxRate: 1.2,
    status: "pending",
    type: "recurring",
    createdAt: new Date("2023-09-13T00:00:00Z"),
    updatedAt: new Date("2023-09-13T00:00:00Z"),
  },
  checkoutUrl: "https://back-arcade.info/",
  successUrl: "https://example.com/return",
  feature: [
    {
      license: {
        id: "<id>",
        mode: "sandbox",
        object: "<value>",
        status: "active",
        key: "ABC123-XYZ456-XYZ456-XYZ456",
        activation: 5,
        activationLimit: {},
        expiresAt: {},
        createdAt: new Date("2023-09-13T00:00:00Z"),
        instance: {
          id: "<id>",
          mode: "live",
          object: "license-instance",
          name: "My Customer License Instance",
          status: "active",
          createdAt: new Date("2023-09-13T00:00:00Z"),
        },
      },
    },
  ],
  metadata: {
    "userId": "user_123",
    "visitCount": 42,
    "lastVisit": "2023-04-01",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for the object.                                                      |                                                                                        |
| `mode`                                                                                 | [components.CheckoutEntityMode](../../models/components/checkoutentitymode.md)         | :heavy_check_mark:                                                                     | String representing the environment.                                                   |                                                                                        |
| `object`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | String representing the object's type. Objects of the same type share the same value.  |                                                                                        |
| `status`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | Status of the checkout.                                                                |                                                                                        |
| `requestId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | Identify and track each checkout request.                                              |                                                                                        |
| `product`                                                                              | *components.CheckoutEntityProduct*                                                     | :heavy_check_mark:                                                                     | The product associated with the checkout session.                                      |                                                                                        |
| `units`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of units for the of the product.                                            |                                                                                        |
| `order`                                                                                | [components.OrderEntity](../../models/components/orderentity.md)                       | :heavy_minus_sign:                                                                     | The order associated with the checkout session.                                        |                                                                                        |
| `subscription`                                                                         | [components.Subscription](../../models/components/subscription.md)                     | :heavy_minus_sign:                                                                     | The subscription associated with the checkout session.                                 |                                                                                        |
| `customer`                                                                             | [components.CheckoutEntityCustomer](../../models/components/checkoutentitycustomer.md) | :heavy_minus_sign:                                                                     | The customer associated with the checkout session.                                     |                                                                                        |
| `customFields`                                                                         | [components.CustomField](../../models/components/customfield.md)[]                     | :heavy_minus_sign:                                                                     | Additional information collected from your customer during the checkout process.       |                                                                                        |
| `checkoutUrl`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The URL to which the customer will be redirected to complete the payment.              |                                                                                        |
| `successUrl`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The URL to which the user will be redirected after the checkout process is completed.  | https://example.com/return                                                             |
| `feature`                                                                              | [components.ProductFeatureEntity](../../models/components/productfeatureentity.md)[]   | :heavy_minus_sign:                                                                     | Features issued for the order.                                                         |                                                                                        |
| `metadata`                                                                             | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | Metadata for the checkout in the form of key-value pairs                               | {<br/>"userId": "user_123",<br/>"visitCount": 42,<br/>"lastVisit": "2023-04-01"<br/>}  |