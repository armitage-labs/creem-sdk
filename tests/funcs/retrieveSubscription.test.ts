import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_SUBSCRIPTION_ID,
  TEST_SERVER_IDX,
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

describe("retrieveSubscription", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.subscriptions.get(TEST_SUBSCRIPTION_ID);
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should retrieve subscription successfully", async () => {
    const result = await creem.subscriptions.get(TEST_SUBSCRIPTION_ID);

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("customer");
    expect(result.customer).toHaveProperty("id");
    expect(result.customer).toHaveProperty("email");
    expect(result.customer).toHaveProperty("name");
    expect(result).toHaveProperty("product");
    expect(result.product).toHaveProperty("id");
    expect(result.product).toHaveProperty("name");
    expect(result.product).toHaveProperty("price");
    expect(result).toHaveProperty("currentPeriodStartDate");
    expect(result).toHaveProperty("currentPeriodEndDate");
    expect(result).toHaveProperty("lastTransaction");
    expect(result.lastTransaction).toHaveProperty("id");
    expect(result.lastTransaction).toHaveProperty("amount");
    expect(result.lastTransaction).toHaveProperty("status");
  });

  it("should handle request errors with invalid subscription ID", async () => {
    try {
      await creem.subscriptions.get("non-existent-subscription-id");
      fail("Expected error with invalid subscription ID but none was thrown");
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
      await creemWithInvalidServer.subscriptions.get(TEST_SUBSCRIPTION_ID);
      fail("Expected network error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
