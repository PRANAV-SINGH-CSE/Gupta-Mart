import { describe, it, expect } from 'vitest';
import { DEFAULT_GROCERY_PRODUCTS } from '../data/defaultProducts';

describe('Gupta Mart Grocery Catalog Schema & Integrity', () => {
  it('should contain default grocery catalog items', () => {
    expect(DEFAULT_GROCERY_PRODUCTS).toBeDefined();
    expect(DEFAULT_GROCERY_PRODUCTS.length).toBeGreaterThan(0);
  });

  it('every product must have standard Blinkit-level attributes', () => {
    DEFAULT_GROCERY_PRODUCTS.forEach((product) => {
      // Identity & Pricing
      expect(product.id).toBeDefined();
      expect(product.name).toBeTruthy();
      expect(typeof product.price).toBe('number');
      expect(product.price).toBeGreaterThan(0);
      expect(typeof product.mrp).toBe('number');
      expect(product.mrp).toBeGreaterThanOrEqual(product.price);

      // Grocery pack size / unit & Aisle category
      expect(product.unit || product.packSize).toBeTruthy();
      expect(product.category).toBeTruthy();

      // Express quick-commerce delivery tag
      expect(product.deliveryTime || product.deliverySlot).toBeTruthy();

      // Shelf life & Storage instructions
      expect(product.shelfLife).toBeTruthy();
      expect(product.storageInstructions).toBeTruthy();

      // Compliance & Food Safety (FSSAI)
      expect(product.fssaiLicence || product.fssaiLic).toBeTruthy();
      expect(product.origin).toBeTruthy();

      // Nutritional profile or box contents
      expect(product.nutritionalFacts).toBeDefined();
      expect(Object.keys(product.nutritionalFacts).length).toBeGreaterThan(0);
    });
  });

  it('should accurately calculate or format discount percentage where applicable', () => {
    DEFAULT_GROCERY_PRODUCTS.forEach((product) => {
      if (product.discount && product.discount.includes('% OFF')) {
        const expectedPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);
        const parsedPercent = parseInt(product.discount, 10);
        expect(Math.abs(parsedPercent - expectedPercent)).toBeLessThanOrEqual(2);
      }
    });
  });

  it('should include core grocery aisles', () => {
    const categories = DEFAULT_GROCERY_PRODUCTS.map(p => p.category);
    expect(categories).toContain('Fruits & Vegetables');
    expect(categories).toContain('Dairy, Eggs & Paneer');
    expect(categories).toContain('Staples & Dals');
    expect(categories).toContain('Oils & Pure Ghee');
  });
});
