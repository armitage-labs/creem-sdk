# FileFeatureEntity

## Example Usage

```typescript
import { FileFeatureEntity } from "creem/models/components";

let value: FileFeatureEntity = {
  files: [
    {
      id: "file_abc123",
      fileName: "ebook.pdf",
      url: "https://storage.creem.io/files/ebook.pdf",
      type: "application/pdf",
      size: 1024000,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `files`                                                                        | [components.FeatureFileEntity](../../models/components/featurefileentity.md)[] | :heavy_check_mark:                                                             | List of downloadable files.                                                    |