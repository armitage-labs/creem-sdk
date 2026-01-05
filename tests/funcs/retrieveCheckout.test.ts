import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_SERVER_IDX,
  TEST_MODE,
  TEST_CHECKOUT_ID_RECURRING,
  TEST_CHECKOUT_ID_ONE_TIME,
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

describe("retrieveCheckout", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.checkouts.retrieve("test-checkout-id");
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should retrieve a recurring checkout session successfully", async () => {
    const result = await creem.checkouts.retrieve(TEST_CHECKOUT_ID_RECURRING);

    // Test the response structure and content
    expect(result).toHaveProperty("id", TEST_CHECKOUT_ID_RECURRING);
    expect(result).toHaveProperty("mode", TEST_MODE);
    expect(result).toHaveProperty("object", "checkout");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("product");

    // Verify it's a recurring checkout
    if (typeof result.product === "object") {
      expect(result.product).toHaveProperty("billingType", "recurring");
    }
  });

  it("should retrieve a one-time checkout session successfully", async () => {
    const result = await creem.checkouts.retrieve(TEST_CHECKOUT_ID_ONE_TIME);

    // Test the response structure and content
    expect(result).toHaveProperty("id", TEST_CHECKOUT_ID_ONE_TIME);
    expect(result).toHaveProperty("mode", TEST_MODE);
    expect(result).toHaveProperty("object", "checkout");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("product");

    // Verify it's a one-time checkout
    if (typeof result.product === "object") {
      expect(result.product).toHaveProperty("billingType", "onetime");
    }
  });

  it("should handle validation errors", async () => {
    // Create an instance with empty API key
    const creemWithEmptyKey = new Creem({
      apiKey: "",
      serverIdx: TEST_SERVER_IDX,
    });

    try {
      // Use invalid input to trigger validation error
      await creemWithEmptyKey.checkouts.retrieve("test-checkout-id");
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle request errors with invalid checkout ID", async () => {
    try {
      await creem.checkouts.retrieve("non-existent-checkout-id");
      fail("Expected error with invalid checkout ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle network errors gracefully", async () => {
    // Create a new instance with an invalid server URL to simulate network error
    const creemWithInvalidServer = new Creem({
      apiKey: TEST_API_KEY,
      serverIdx: TEST_SERVER_IDX,
      serverURL: "http://invalid-url",
    });

    try {
      await creemWithInvalidServer.checkouts.retrieve("test-checkout-id");
      fail("Expected network error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
