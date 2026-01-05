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

describe("retrieveProduct", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.products.get(TEST_PRODUCT_SUBSCRIPTION_ID);
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should retrieve a product successfully", async () => {
    // When using the SDK instance directly, it returns ProductEntity
    const result = await creem.products.get(TEST_PRODUCT_SUBSCRIPTION_ID);

    // Test direct SDK method
    expect(result).toHaveProperty("id", TEST_PRODUCT_SUBSCRIPTION_ID);
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("price", 100000);
    expect(result).toHaveProperty("currency", "EUR");
    expect(result).toHaveProperty("billingType", "recurring");
    expect(result).toHaveProperty("billingPeriod", "every-month");
    expect(result).toHaveProperty("status", "active");
    expect(result).toHaveProperty("taxMode", "exclusive");
    expect(result).toHaveProperty("taxCategory", "saas");
    expect(result).toHaveProperty("productUrl");
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
      await creemWithEmptyKey.products.get(TEST_PRODUCT_SUBSCRIPTION_ID);
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle request errors with non-existent product ID", async () => {
    try {
      await creem.products.get("non-existent-product-id");
      fail("Expected error with invalid product ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
