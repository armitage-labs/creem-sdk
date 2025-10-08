<!-- Start SDK Example Usage [usage] -->
```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.retrieveProduct({
    productId: "<id>",
    xApiKey: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->