# CustomField

## Example Usage

```typescript
import { CustomField } from "creem/models/components";

let value: CustomField = {
  type: "<value>",
  key: "<key>",
  label: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The type of the field.                                                                             |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique key for custom field. Must be unique to this field, alphanumeric, and up to 200 characters. |
| `label`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The label for the field, displayed to the customer, up to 50 characters                            |
| `optional`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether the customer is required to complete the field. Defaults to `false`.                       |
| `text`                                                                                             | [components.Text](../../models/components/text.md)                                                 | :heavy_minus_sign:                                                                                 | Whether the customer is required to complete the field. Defaults to `false`.                       |