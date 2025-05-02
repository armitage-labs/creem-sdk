# creem

Developer-friendly & type-safe Typescript SDK specifically catered to leverage _creem_ API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=creem&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />

## Summary

Creem API: Creem is an all-in-one platform for managing subscriptions and recurring revenue, tailored specifically for today's SaaS companies. It enables you to boost revenue, enhance customer retention, and scale your operations seamlessly.'

<!-- End Summary [summary] -->
<!-- Start Table of Contents [toc] -->

## Table of Contents

<!-- $toc-max-depth=2 -->

- [creem](#creem)
  - [SDK Installation](#sdk-installation)
  - [Requirements](#requirements)
  - [SDK Example Usage](#sdk-example-usage)
  - [Available Resources and Operations](#available-resources-and-operations)
  - [Standalone functions](#standalone-functions)
  - [Retries](#retries)
  - [Error Handling](#error-handling)
  - [Server Selection](#server-selection)
  - [Custom HTTP Client](#custom-http-client)
  - [Debugging](#debugging)
- [Development](#development)
  - [Maturity](#maturity)
  - [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add creem
```

### PNPM

```bash
pnpm add creem
```

### Bun

```bash
bun add creem
```

### Yarn

```bash
yarn add creem zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.

### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Creem": {
      "command": "npx",
      "args": ["-y", "--package", "creem", "--", "mcp", "start"]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Creem": {
      "command": "npx",
      "args": ["-y", "--package", "creem", "--", "mcp", "start"]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.

```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": ["start"]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package creem -- mcp start --help
```

<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->

## SDK Example Usage

### Example

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.retrieveProduct({
    productId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->

## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Creem SDK](docs/sdks/creem/README.md)

- [retrieveProduct](docs/sdks/creem/README.md#retrieveproduct) - Retrieve a product
- [createProduct](docs/sdks/creem/README.md#createproduct) - Creates a new product.
- [searchProducts](docs/sdks/creem/README.md#searchproducts) - List all products
- [retrieveCustomer](docs/sdks/creem/README.md#retrievecustomer) - Retrieve a customer
- [generateCustomerLinks](docs/sdks/creem/README.md#generatecustomerlinks) - Generate Customer Links
- [retrieveSubscription](docs/sdks/creem/README.md#retrievesubscription) - Retrieve a subscription
- [cancelSubscription](docs/sdks/creem/README.md#cancelsubscription) - Cancel a subscription.
- [updateSubscription](docs/sdks/creem/README.md#updatesubscription) - Update a subscription.
- [upgradeSubscription](docs/sdks/creem/README.md#upgradesubscription) - Upgrade a subscription to a different product
- [retrieveCheckout](docs/sdks/creem/README.md#retrievecheckout) - Retrieve a new checkout session.
- [createCheckout](docs/sdks/creem/README.md#createcheckout) - Creates a new checkout session.
- [activateLicense](docs/sdks/creem/README.md#activatelicense) - Activates a license key.
- [deactivateLicense](docs/sdks/creem/README.md#deactivatelicense) - Deactivate a license key instance.
- [validateLicense](docs/sdks/creem/README.md#validatelicense) - Validates a license key or instance.
- [retrieveDiscount](docs/sdks/creem/README.md#retrievediscount) - Retrieve discount
- [createDiscount](docs/sdks/creem/README.md#creatediscount) - Create a discount.
- [deleteDiscount](docs/sdks/creem/README.md#deletediscount) - Delete a discount.
- [searchTransactions](docs/sdks/creem/README.md#searchtransactions) - List all transactions

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->

## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`activateLicense`](docs/sdks/creem/README.md#activatelicense) - Activates a license key.
- [`cancelSubscription`](docs/sdks/creem/README.md#cancelsubscription) - Cancel a subscription.
- [`createCheckout`](docs/sdks/creem/README.md#createcheckout) - Creates a new checkout session.
- [`createDiscount`](docs/sdks/creem/README.md#creatediscount) - Create a discount.
- [`createProduct`](docs/sdks/creem/README.md#createproduct) - Creates a new product.
- [`deactivateLicense`](docs/sdks/creem/README.md#deactivatelicense) - Deactivate a license key instance.
- [`deleteDiscount`](docs/sdks/creem/README.md#deletediscount) - Delete a discount.
- [`generateCustomerLinks`](docs/sdks/creem/README.md#generatecustomerlinks) - Generate Customer Links
- [`retrieveCheckout`](docs/sdks/creem/README.md#retrievecheckout) - Retrieve a new checkout session.
- [`retrieveCustomer`](docs/sdks/creem/README.md#retrievecustomer) - Retrieve a customer
- [`retrieveDiscount`](docs/sdks/creem/README.md#retrievediscount) - Retrieve discount
- [`retrieveProduct`](docs/sdks/creem/README.md#retrieveproduct) - Retrieve a product
- [`retrieveSubscription`](docs/sdks/creem/README.md#retrievesubscription) - Retrieve a subscription
- [`searchProducts`](docs/sdks/creem/README.md#searchproducts) - List all products
- [`searchTransactions`](docs/sdks/creem/README.md#searchtransactions) - List all transactions
- [`updateSubscription`](docs/sdks/creem/README.md#updatesubscription) - Update a subscription.
- [`upgradeSubscription`](docs/sdks/creem/README.md#upgradesubscription) - Upgrade a subscription to a different product
- [`validateLicense`](docs/sdks/creem/README.md#validatelicense) - Validates a license key or instance.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->

## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.retrieveProduct(
    {
      productId: "<id>",
      xApiKey: "<value>",
    },
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  // Handle the result
  console.log(result);
}

run();
```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:

```typescript
import { Creem } from "creem";

const creem = new Creem({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await creem.retrieveProduct({
    productId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->

## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `APIError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { Creem } from "creem";
import { SDKValidationError } from "creem/models/errors";

const creem = new Creem();

async function run() {
  let result;
  try {
    result = await creem.retrieveProduct({
      productId: "<id>",
      xApiKey: "<value>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case err instanceof SDKValidationError:
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        apierror.js;
      // Server returned an error status code or an unknown content type
      case err instanceof APIError: {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();
```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error     | Description                                          |
| --------------------- | ---------------------------------------------------- |
| RequestAbortedError   | HTTP request was aborted by the client               |
| RequestTimeoutError   | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError       | HTTP client was unable to make a request to a server |
| InvalidRequestError   | Any input used to create a request is invalid        |
| UnexpectedClientError | Unrecognised or unexpected error                     |

<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->

## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                      | Description |
| --- | --------------------------- | ----------- |
| 0   | `https://api.creem.io`      |             |
| 1   | `https://test-api.creem.io` |             |

#### Example

```typescript
import { Creem } from "creem";

const creem = new Creem({
  serverIdx: 1,
});

async function run() {
  const result = await creem.retrieveProduct({
    productId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Creem } from "creem";

const creem = new Creem({
  serverURL: "https://api.creem.io",
});

async function run() {
  const result = await creem.retrieveProduct({
    productId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Creem } from "creem";
import { HTTPClient } from "creem/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  },
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000),
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Creem({ httpClient });
```

<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->

## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Creem } from "creem";

const sdk = new Creem({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CREEM_DEBUG` to true.

<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=creem&utm_campaign=typescript)
