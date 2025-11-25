# CustomFieldRequestEntity

## Example Usage

```typescript
import { CustomFieldRequestEntity } from "creem/models/components";

let value: CustomFieldRequestEntity = {
  type: "text",
  key: "<key>",
  label: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.Type](../../models/components/type.md)                                                 | :heavy_check_mark:                                                                                 | The type of the field.                                                                             | text                                                                                               |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique key for custom field. Must be unique to this field, alphanumeric, and up to 200 characters. |                                                                                                    |
| `label`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The label for the field, displayed to the customer, up to 50 characters                            |                                                                                                    |
| `optional`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether the customer is required to complete the field. Defaults to `false`                        |                                                                                                    |
| `text`                                                                                             | [components.Text](../../models/components/text.md)                                                 | :heavy_minus_sign:                                                                                 | Configuration for type of text field.                                                              |                                                                                                    |
| `checkbox`                                                                                         | [components.Checkbox](../../models/components/checkbox.md)                                         | :heavy_minus_sign:                                                                                 | Configuration for checkbox field type.                                                             |                                                                                                    |