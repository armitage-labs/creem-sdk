import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_SERVER_IDX,
  TEST_MODE,
} from "../fixtures/testValues.js";

// Create an actual instance of Creem for testing
const creem = new Creem({
  serverIdx: TEST_SERVER_IDX,
});

describe("retrieveCheckout", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creem.retrieveCheckout({
        xApiKey: "fail",
        checkoutId: "test-checkout-id",
      });
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should retrieve a recurring checkout session successfully", async () => {
    const result = await creem.retrieveCheckout({
      xApiKey: TEST_API_KEY,
      checkoutId: "ch_30nWkmXFkLFPs184P6hjDG",
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id", "ch_30nWkmXFkLFPs184P6hjDG");
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
    const result = await creem.retrieveCheckout({
      xApiKey: TEST_API_KEY,
      checkoutId: "ch_hN1U5gHS0gW7C1p86Bjjm",
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id", "ch_hN1U5gHS0gW7C1p86Bjjm");
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
    try {
      // Use invalid input to trigger validation error
      await creem.retrieveCheckout({
        xApiKey: "",
        checkoutId: "test-checkout-id",
      });
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle request errors with invalid checkout ID", async () => {
    try {
      await creem.retrieveCheckout({
        xApiKey: TEST_API_KEY,
        checkoutId: "non-existent-checkout-id",
      });
      fail("Expected error with invalid checkout ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle network errors gracefully", async () => {
    // Create a new instance with an invalid server URL to simulate network error
    const creemWithInvalidServer = new Creem({
      serverIdx: TEST_SERVER_IDX,
      serverURL: "http://invalid-url",
    });

    try {
      await creemWithInvalidServer.retrieveCheckout({
        xApiKey: TEST_API_KEY,
        checkoutId: "test-checkout-id",
      });
      fail("Expected network error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
