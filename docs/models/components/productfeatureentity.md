# ProductFeatureEntity

## Example Usage

```typescript
import { ProductFeatureEntity } from "creem/models/components";

let value: ProductFeatureEntity = {
  license: {
    id: "<id>",
    mode: "test",
    object: "<value>",
    status: "active",
    key: "ABC123-XYZ456-XYZ456-XYZ456",
    activation: 5,
    activationLimit: {},
    expiresAt: {},
    createdAt: new Date("2023-09-13T00:00:00Z"),
    instance: {
      id: "<id>",
      mode: "prod",
      object: "license-instance",
      name: "My Customer License Instance",
      status: "active",
      createdAt: new Date("2023-09-13T00:00:00Z"),
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `license`                                                            | [components.LicenseEntity](../../models/components/licenseentity.md) | :heavy_check_mark:                                                   | License key issued for the order.                                    |