# ProductFeatureEntity

## Example Usage

```typescript
import { ProductFeatureEntity } from "creem/models/components";

let value: ProductFeatureEntity = {
  id: "feat_abc123",
  description: "Get access to the full course materials.",
  type: "custom",
  privateNote: "Thank you for your purchase! Here is your access code: XYZ123",
  file: {
    files: [],
  },
  licenseKey: {
    id: "<id>",
    mode: "prod",
    object: "<value>",
    status: "active",
    key: "ABC123-XYZ456-XYZ456-XYZ456",
    activation: 5,
    activationLimit: {},
    expiresAt: {},
    createdAt: new Date("2023-09-13T00:00:00Z"),
    instance: null,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Unique identifier for the feature.                                                                          | feat_abc123                                                                                                 |
| `description`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A brief description of the feature.                                                                         | Get access to the full course materials.                                                                    |
| `type`                                                                                                      | [components.ProductFeatureType](../../models/components/productfeaturetype.md)                              | :heavy_check_mark:                                                                                          | The type of the feature: privateNote (custom note), file (downloadable files), or licenseKey (license key). |                                                                                                             |
| `privateNote`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Private note from the seller. This is only visible to the customer after purchase.                          | Thank you for your purchase! Here is your access code: XYZ123                                               |
| `file`                                                                                                      | [components.FileFeatureEntity](../../models/components/filefeatureentity.md)                                | :heavy_minus_sign:                                                                                          | File feature data containing downloadable files.                                                            |                                                                                                             |
| `licenseKey`                                                                                                | [components.LicenseEntity](../../models/components/licenseentity.md)                                        | :heavy_minus_sign:                                                                                          | License key issued for the order.                                                                           |                                                                                                             |