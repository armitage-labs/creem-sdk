import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import {
  TEST_API_KEY,
  TEST_LICENSE_KEY,
  TEST_INSTANCE_NAME,
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

describe("License Key Operations", () => {
  let instanceId: string | undefined;

  it("should handle API authentication errors", async () => {
    try {
      await creemWithInvalidKey.licenses.validate({
        key: TEST_LICENSE_KEY,
        instanceId: "",
      });
      fail("Expected an API error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should validate a license key successfully", async () => {
    const result = await creem.licenses.validate({
      key: TEST_LICENSE_KEY,
      instanceId: "",
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode", TEST_MODE);
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("key", TEST_LICENSE_KEY);
    expect(result).toHaveProperty("activation");
    expect(result).toHaveProperty("createdAt");
  });

  it("should activate a license key successfully", async () => {
    const result = await creem.licenses.activate({
      key: TEST_LICENSE_KEY,
      instanceName: TEST_INSTANCE_NAME,
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode", TEST_MODE);
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status", "active");
    expect(result).toHaveProperty("key", TEST_LICENSE_KEY);
    expect(result).toHaveProperty("activation");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("instance");
    expect(result.instance).toHaveProperty("id");
    expect(result.instance).toHaveProperty("name", TEST_INSTANCE_NAME);
    expect(result.instance).toHaveProperty("status", "active");

    // Store the instanceId for deactivation
    instanceId = result.instance?.id;
  });

  it("should deactivate a license key instance successfully", async () => {
    // Ensure we have an instanceId from the activation step
    expect(instanceId).toBeDefined();

    const result = await creem.licenses.deactivate({
      key: TEST_LICENSE_KEY,
      instanceId: instanceId ?? "",
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status", "inactive"); // License remains active
    expect(result).toHaveProperty("key", TEST_LICENSE_KEY);
    expect(result).toHaveProperty("activation");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("instance");
    expect(result.instance).toHaveProperty("id");
    expect(result.instance).toHaveProperty("name", TEST_INSTANCE_NAME);
    expect(result.instance).toHaveProperty("status", "deactivated"); // Instance is deactivated
    expect(result.instance).toHaveProperty("createdAt");
  });

  it("should handle request errors with invalid license key", async () => {
    try {
      await creem.licenses.validate({
        key: "invalid-license-key",
        instanceId: "",
      });
      fail("Expected error with invalid license key but none was thrown");
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
      await creemWithInvalidServer.licenses.validate({
        key: TEST_LICENSE_KEY,
        instanceId: "",
      });
      fail("Expected network error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
