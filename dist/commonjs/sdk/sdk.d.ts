import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Creem extends ClientSDK {
    /**
     * Retrieve a product
     */
    retrieveProduct(request: operations.RetrieveProductRequest, options?: RequestOptions): Promise<components.ProductEntity>;
    /**
     * Creates a new product.
     */
    createProduct(request: operations.CreateProductRequest, options?: RequestOptions): Promise<components.ProductEntity>;
    /**
     * List all products
     */
    searchProducts(request: operations.SearchProductsRequest, options?: RequestOptions): Promise<components.ProductListEntity>;
    /**
     * List all customers
     */
    listCustomers(request: operations.ListCustomersRequest, options?: RequestOptions): Promise<components.CustomerListEntity>;
    /**
     * Retrieve a customer
     */
    retrieveCustomer(request: operations.RetrieveCustomerRequest, options?: RequestOptions): Promise<components.CustomerEntity>;
    /**
     * Generate Customer Links
     */
    generateCustomerLinks(request: operations.GenerateCustomerLinksRequest, options?: RequestOptions): Promise<components.CustomerLinksEntity>;
    /**
     * Retrieve a subscription
     */
    retrieveSubscription(request: operations.RetrieveSubscriptionRequest, options?: RequestOptions): Promise<components.SubscriptionEntity>;
    /**
     * Cancel a subscription.
     */
    cancelSubscription(request: operations.CancelSubscriptionRequest, options?: RequestOptions): Promise<components.SubscriptionEntity>;
    /**
     * Update a subscription.
     */
    updateSubscription(request: operations.UpdateSubscriptionRequest, options?: RequestOptions): Promise<components.SubscriptionEntity>;
    /**
     * Upgrade a subscription to a different product
     */
    upgradeSubscription(request: operations.UpgradeSubscriptionRequest, options?: RequestOptions): Promise<components.SubscriptionEntity>;
    /**
     * Retrieve a new checkout session.
     */
    retrieveCheckout(request: operations.RetrieveCheckoutRequest, options?: RequestOptions): Promise<components.CheckoutEntity>;
    /**
     * Creates a new checkout session.
     */
    createCheckout(request: operations.CreateCheckoutRequest, options?: RequestOptions): Promise<components.CheckoutEntity>;
    /**
     * Activates a license key.
     */
    activateLicense(request: operations.ActivateLicenseRequest, options?: RequestOptions): Promise<components.LicenseEntity>;
    /**
     * Deactivate a license key instance.
     */
    deactivateLicense(request: operations.DeactivateLicenseRequest, options?: RequestOptions): Promise<components.LicenseEntity>;
    /**
     * Validates a license key or instance.
     */
    validateLicense(request: operations.ValidateLicenseRequest, options?: RequestOptions): Promise<components.LicenseEntity>;
    /**
     * Retrieve discount
     */
    retrieveDiscount(request: operations.RetrieveDiscountRequest, options?: RequestOptions): Promise<components.DiscountEntity>;
    /**
     * Create a discount.
     */
    createDiscount(request: operations.CreateDiscountRequest, options?: RequestOptions): Promise<components.DiscountEntity>;
    /**
     * Delete a discount.
     */
    deleteDiscount(request: operations.DeleteDiscountRequest, options?: RequestOptions): Promise<components.DiscountEntity>;
    /**
     * Get a transaction by ID
     */
    getTransactionById(request: operations.GetTransactionByIdRequest, options?: RequestOptions): Promise<components.TransactionEntity>;
    /**
     * List all transactions
     */
    searchTransactions(request: operations.SearchTransactionsRequest, options?: RequestOptions): Promise<components.TransactionListEntity>;
}
//# sourceMappingURL=sdk.d.ts.map