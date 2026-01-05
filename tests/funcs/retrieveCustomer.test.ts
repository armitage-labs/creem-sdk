import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_CUSTOMER_ID,
  TEST_CUSTOMER_EMAIL,
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

describe("retrieveCustomer", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.customers.retrieve(TEST_CUSTOMER_ID);
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should retrieve a customer by ID successfully", async () => {
    const result = await creem.customers.retrieve(TEST_CUSTOMER_ID);

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode", TEST_MODE);
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("email");
    expect(result).toHaveProperty("country");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("updatedAt");

    // Optional field
    if (result.name) {
      expect(typeof result.name).toBe("string");
    }
  });

  it("should retrieve a customer by email successfully", async () => {
    const result = await creem.customers.retrieve(undefined, TEST_CUSTOMER_EMAIL);

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("email", TEST_CUSTOMER_EMAIL);
    expect(result).toHaveProperty("country");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("updatedAt");
  });

  it("should handle validation errors when neither ID nor email is provided", async () => {
    try {
      await creem.customers.retrieve();
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle request errors with invalid customer ID", async () => {
    try {
      await creem.customers.retrieve("non-existent-customer-id");
      fail("Expected error with invalid customer ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle request errors with invalid email", async () => {
    try {
      await creem.customers.retrieve(undefined, "non-existent@email.com");
      fail("Expected error with invalid email but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
