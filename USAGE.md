<!-- Start SDK Example Usage [usage] -->
```typescript
import { Creem } from "creem";

const creem = new Creem({
  apiKey: process.env["CREEM_API_KEY"] ?? "",
});

async function run() {
  const result = await creem.products.get("<id>");

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->