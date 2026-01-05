import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  createdPercentageDiscountId,
  createdPercentageDiscountCode,
  createdFixedDiscountId,
  createdFixedDiscountCode,
} from "./createDiscount.test.js";
import { TEST_API_KEY, TEST_SERVER_IDX } from "../fixtures/testValues.js";

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

describe("retrieveDiscount", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.discounts.get(createdPercentageDiscountId!);
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should retrieve a percentage discount by ID successfully", async () => {
    // Ensure we have a discount ID from the create test
    expect(createdPercentageDiscountId).toBeDefined();

    const result = await creem.discounts.get(createdPercentageDiscountId!);

    // Test the response structure and content
    expect(result).toHaveProperty("id", createdPercentageDiscountId);
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("code", createdPercentageDiscountCode);
    expect(result).toHaveProperty("type", "percentage");
    expect(result).toHaveProperty("percentage");
    expect(result).toHaveProperty("duration");
  });

  it("should retrieve a percentage discount by code successfully", async () => {
    // Ensure we have a discount code from the create test
    expect(createdPercentageDiscountCode).toBeDefined();

    const result = await creem.discounts.get(undefined, createdPercentageDiscountCode!);

    // Test the response structure and content
    expect(result).toHaveProperty("code", createdPercentageDiscountCode);
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("type", "percentage");
    expect(result).toHaveProperty("percentage");
    expect(result).toHaveProperty("duration");
  });

  it("should retrieve a fixed discount by ID successfully", async () => {
    // Ensure we have a discount ID from the create test
    expect(createdFixedDiscountId).toBeDefined();

    const result = await creem.discounts.get(createdFixedDiscountId!);

    // Test the response structure and content
    expect(result).toHaveProperty("id", createdFixedDiscountId);
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("code", createdFixedDiscountCode);
    expect(result).toHaveProperty("type", "fixed");
    expect(result).toHaveProperty("amount");
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("duration");
  });

  it("should retrieve a fixed discount by code successfully", async () => {
    // Ensure we have a discount code from the create test
    expect(createdFixedDiscountCode).toBeDefined();

    const result = await creem.discounts.get(undefined, createdFixedDiscountCode!);

    // Test the response structure and content
    expect(result).toHaveProperty("code", createdFixedDiscountCode);
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("type", "fixed");
    expect(result).toHaveProperty("amount");
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("duration");
  });

  it("should handle validation errors when neither ID nor code is provided", async () => {
    try {
      await creem.discounts.get();
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle request errors with invalid discount ID", async () => {
    try {
      await creem.discounts.get("non-existent-discount-id");
      fail("Expected error with invalid discount ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle request errors with invalid discount code", async () => {
    try {
      await creem.discounts.get(undefined, "NON-EXISTENT-CODE");
      fail("Expected error with invalid discount code but none was thrown");
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
      await creemWithInvalidServer.discounts.get(createdPercentageDiscountId!);
      fail("Expected network error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
