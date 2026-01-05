import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_CUSTOMER_ID,
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

describe("generateCustomerLinks", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.customers.generateBillingLinks({
        customerId: TEST_CUSTOMER_ID,
      });
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should generate customer portal links successfully", async () => {
    const result = await creem.customers.generateBillingLinks({
      customerId: TEST_CUSTOMER_ID,
    });

    // Test the response structure and content
    expect(result).toHaveProperty("customerPortalLink");
    expect(typeof result.customerPortalLink).toBe("string");
    expect(result.customerPortalLink).toContain("http");
  });

  it("should handle validation errors when customer ID is missing", async () => {
    try {
      await creem.customers.generateBillingLinks({
        customerId: "",
      });
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle request errors with invalid customer ID", async () => {
    try {
      await creem.customers.generateBillingLinks({
        customerId: "non-existent-customer-id",
      });
      fail("Expected error with invalid customer ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
