import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_SERVER_IDX,
  TEST_MODE,
} from "../fixtures/testValues.js";

// Sample product data
const SAMPLE_PRODUCT = {
  name: "Test Product",
  description: "This is a sample product description.",
  price: 400,
  currency: "EUR",
  billingType: "recurring",
  billingPeriod: "every-month",
  taxMode: "inclusive",
  taxCategory: "saas",
  defaultSuccessUrl: "https://example.com/?status=successful",
  customField: [
    {
      type: "text" as const,
      key: "company",
      label: "Company Name",
      optional: true,
      text: {
        maxLength: 100,
        minLength: 0,
      },
    },
  ],
};

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

describe("createProduct", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creemWithInvalidKey.products.create(SAMPLE_PRODUCT);
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should create a product successfully", async () => {
    // When using the SDK instance directly, it returns ProductEntity
    const result = await creem.products.create(SAMPLE_PRODUCT);

    // Test direct SDK method
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name", SAMPLE_PRODUCT.name);
    expect(result).toHaveProperty("description", SAMPLE_PRODUCT.description);
    expect(result).toHaveProperty("price", SAMPLE_PRODUCT.price);
    expect(result).toHaveProperty("currency", SAMPLE_PRODUCT.currency);
    expect(result).toHaveProperty("billingType", SAMPLE_PRODUCT.billingType);
    expect(result).toHaveProperty(
      "billingPeriod",
      SAMPLE_PRODUCT.billingPeriod
    );
    expect(result).toHaveProperty("taxMode", SAMPLE_PRODUCT.taxMode);
    expect(result).toHaveProperty("taxCategory", SAMPLE_PRODUCT.taxCategory);
    expect(result).toHaveProperty(
      "defaultSuccessUrl",
      SAMPLE_PRODUCT.defaultSuccessUrl
    );
    expect(result).toHaveProperty("productUrl");

    if (result.features && result.features.length > 0) {
      expect(result.features[0]).toHaveProperty(
        "description",
        "Get access to discord server."
      );
    }

    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("updatedAt");
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
      await creemWithEmptyKey.products.create(SAMPLE_PRODUCT);
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle request errors with invalid product data", async () => {
    try {
      await creem.products.create({
        // Missing required fields
        name: "Invalid Product",
      } as any);
      fail("Expected error with invalid product data but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should create a product with minimal required data", async () => {
    const minimalProduct = {
      name: "Minimal Product",
      description: "A product with only the required fields",
      price: 100,
      currency: "USD",
      billingType: "onetime",
    };

    const result = await creem.products.create(minimalProduct);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name", minimalProduct.name);
    expect(result).toHaveProperty("description", minimalProduct.description);
    expect(result).toHaveProperty("price", minimalProduct.price);
    expect(result).toHaveProperty("currency", minimalProduct.currency);
    expect(result).toHaveProperty("billingType", minimalProduct.billingType);
  });
});
