import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_PRODUCT_SUBSCRIPTION_ID,
  TEST_SERVER_IDX,
  TEST_MODE,
} from "../fixtures/testValues.js";

// Create an actual instance of Creem for testing
const creem = new Creem({
  apiKey: TEST_API_KEY,
  serverIdx: TEST_SERVER_IDX,
});

// Create an instance with invalid API key for auth error tests
const creemWithInvalidKey = new Creem({
  apiKey: "fail",
  serverIdx: TEST_SERVER_IDX,
});

describe("createCheckout", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.checkouts.create({
        productId: TEST_PRODUCT_SUBSCRIPTION_ID,
      });
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should create a new checkout session successfully", async () => {
    // When using the SDK instance directly, it returns CheckoutEntity
    const result = await creem.checkouts.create({
      productId: TEST_PRODUCT_SUBSCRIPTION_ID,
    });

    // Test direct SDK method (unwraps Result)
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("checkoutUrl");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("mode", TEST_MODE);
  });

  it("should handle validation errors", async () => {
    // Create an instance with empty API key
    const creemWithEmptyKey = new Creem({
      apiKey: "",
      serverIdx: TEST_SERVER_IDX,
    });

    try {
      // Use invalid input to trigger validation error
      await creemWithEmptyKey.checkouts.create({
        productId: TEST_PRODUCT_SUBSCRIPTION_ID,
      });
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle request errors with invalid product ID", async () => {
    try {
      await creem.checkouts.create({
        productId: "non-existent-product-id",
      });
      fail("Expected error with invalid product ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should create checkout with advanced options successfully", async () => {
    const result = await creem.checkouts.create({
      requestId: "test_request_id",
      productId: TEST_PRODUCT_SUBSCRIPTION_ID,
      units: 2,
      customer: {
        email: "test@example.com",
      },
      customField: [
        {
          type: "text",
          key: "thing",
          label: "Thing",
          optional: true,
          text: {
            maxLength: 100,
            minLength: 0,
          },
        },
      ],
      successUrl: "https://google.com",
      metadata: {
        userId: "myUserId",
      },
    });

    // Verify the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("object", "checkout");
    expect(result).toHaveProperty("product", TEST_PRODUCT_SUBSCRIPTION_ID);
    expect(result).toHaveProperty("units", 2);
    expect(result).toHaveProperty("status", "pending");
    expect(result).toHaveProperty("checkoutUrl");
    expect(result.checkoutUrl).toContain(
      `checkout/${TEST_PRODUCT_SUBSCRIPTION_ID}/`
    );
    expect(result).toHaveProperty("successUrl", "https://google.com");
    expect(result).toHaveProperty("metadata");
    expect(result.metadata).toEqual({ userId: "myUserId" });
    expect(result).toHaveProperty("mode");
  });
});
