import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import * as components from "../../src/models/components/index.js";
import {
  TEST_API_KEY,
  TEST_PRODUCT_SUBSCRIPTION_ID,
  TEST_SERVER_IDX,
  TEST_MODE,
} from "../fixtures/testValues.js";

// Global test variables
// Sample percentage discount data
const SAMPLE_PERCENTAGE_DISCOUNT: components.CreateDiscountRequestEntity = {
  name: "Test Percentage Discount",
  type: components.CreateDiscountRequestEntityType.Percentage,
  percentage: 20,
  duration: components.CreateDiscountRequestEntityDuration.Forever,
  appliesToProducts: [TEST_PRODUCT_SUBSCRIPTION_ID],
};

// Sample fixed discount data
const SAMPLE_FIXED_DISCOUNT: components.CreateDiscountRequestEntity = {
  name: "Test Fixed Discount",
  type: components.CreateDiscountRequestEntityType.Fixed,
  amount: 1000,
  currency: "EUR",
  duration: components.CreateDiscountRequestEntityDuration.Once,
  appliesToProducts: [TEST_PRODUCT_SUBSCRIPTION_ID],
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

// Store created discount IDs and codes for use in retrieve tests
export let createdPercentageDiscountId: string | undefined;
export let createdPercentageDiscountCode: string | undefined;
export let createdFixedDiscountId: string | undefined;
export let createdFixedDiscountCode: string | undefined;

describe("createDiscount - Percentage Discounts", () => {
  it("should handle API authentication errors", async () => {
    try {
      await creemWithInvalidKey.discounts.create(SAMPLE_PERCENTAGE_DISCOUNT);
      fail("Expected an API error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should create a percentage discount successfully", async () => {
    const result = await creem.discounts.create(SAMPLE_PERCENTAGE_DISCOUNT);

    // Store the created discount ID and code
    createdPercentageDiscountId = result.id;
    createdPercentageDiscountCode = result.code;

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode", TEST_MODE);
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status", "active");
    expect(result).toHaveProperty("name", SAMPLE_PERCENTAGE_DISCOUNT.name);
    expect(result).toHaveProperty("code");
    expect(result).toHaveProperty("type", SAMPLE_PERCENTAGE_DISCOUNT.type);
    expect(result).toHaveProperty(
      "percentage",
      SAMPLE_PERCENTAGE_DISCOUNT.percentage
    );
    expect(result).toHaveProperty(
      "duration",
      SAMPLE_PERCENTAGE_DISCOUNT.duration
    );
  });

  it("should create a percentage discount with advanced options successfully", async () => {
    const advancedDiscount: components.CreateDiscountRequestEntity = {
      name: "Advanced Percentage Discount",
      type: components.CreateDiscountRequestEntityType.Percentage,
      percentage: 15,
      duration: components.CreateDiscountRequestEntityDuration.Repeating,
      durationInMonths: 3,
      maxRedemptions: 100,
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      appliesToProducts: [TEST_PRODUCT_SUBSCRIPTION_ID],
    };

    const result = await creem.discounts.create(advancedDiscount);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name", advancedDiscount.name);
    expect(result).toHaveProperty("type", advancedDiscount.type);
    expect(result).toHaveProperty("percentage", advancedDiscount.percentage);
    expect(result).toHaveProperty("duration", advancedDiscount.duration);
    expect(result).toHaveProperty(
      "durationInMonths",
      advancedDiscount.durationInMonths
    );
    expect(result).toHaveProperty(
      "maxRedemptions",
      advancedDiscount.maxRedemptions
    );
    expect(result).toHaveProperty("expiryDate");
  });

  it("should handle validation errors", async () => {
    // Create an instance with empty API key
    const creemWithEmptyKey = new Creem({
      apiKey: "",
      serverIdx: TEST_SERVER_IDX,
    });

    try {
      await creemWithEmptyKey.discounts.create(SAMPLE_PERCENTAGE_DISCOUNT);
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle request errors with invalid discount data", async () => {
    try {
      await creem.discounts.create({
        // Missing required fields
        name: "Invalid Discount",
      } as any);
      fail("Expected error with invalid discount data but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("createDiscount - Fixed Amount Discounts", () => {
  it("should create a fixed amount discount successfully", async () => {
    const result = await creem.discounts.create(SAMPLE_FIXED_DISCOUNT);

    // Store the created discount ID and code
    createdFixedDiscountId = result.id;
    createdFixedDiscountCode = result.code;

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name", SAMPLE_FIXED_DISCOUNT.name);
    expect(result).toHaveProperty("type", SAMPLE_FIXED_DISCOUNT.type);
    expect(result).toHaveProperty("amount", SAMPLE_FIXED_DISCOUNT.amount);
    expect(result).toHaveProperty("currency", SAMPLE_FIXED_DISCOUNT.currency);
    expect(result).toHaveProperty("duration", SAMPLE_FIXED_DISCOUNT.duration);
  });

  it("should create a fixed amount discount with advanced options successfully", async () => {
    const advancedFixedDiscount: components.CreateDiscountRequestEntity = {
      name: "Advanced Fixed Discount",
      type: components.CreateDiscountRequestEntityType.Fixed,
      amount: 2000,
      currency: "EUR",
      duration: components.CreateDiscountRequestEntityDuration.Repeating,
      durationInMonths: 3,
      maxRedemptions: 100,
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      appliesToProducts: [TEST_PRODUCT_SUBSCRIPTION_ID],
    };

    const result = await creem.discounts.create(advancedFixedDiscount);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name", advancedFixedDiscount.name);
    expect(result).toHaveProperty("type", advancedFixedDiscount.type);
    expect(result).toHaveProperty("amount", advancedFixedDiscount.amount);
    expect(result).toHaveProperty("currency", advancedFixedDiscount.currency);
    expect(result).toHaveProperty("duration", advancedFixedDiscount.duration);
    expect(result).toHaveProperty(
      "durationInMonths",
      advancedFixedDiscount.durationInMonths
    );
    expect(result).toHaveProperty(
      "maxRedemptions",
      advancedFixedDiscount.maxRedemptions
    );
    expect(result).toHaveProperty("expiryDate");
  });

  it("should handle validation errors for fixed discounts", async () => {
    try {
      await creem.discounts.create({
        name: "Invalid Fixed Discount",
        type: components.CreateDiscountRequestEntityType.Fixed,
        // Missing required amount and currency
      } as any);
      fail(
        "Expected error with invalid fixed discount data but none was thrown"
      );
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
