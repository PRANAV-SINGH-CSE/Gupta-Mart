import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

// Mock ProductContext
vi.mock('../contexts/ProductContext', () => ({
  useProducts: () => ({
    getItemQuantity: vi.fn(() => 0),
    addToCart: vi.fn(),
    updateCartQuantity: vi.fn(),
    removeFromCart: vi.fn(),
  }),
}));

describe('ProductCard Component', () => {
  const sampleProduct = {
    id: 'prod-apple-1',
    name: 'Fresh Shimla Royal Apples',
    packSize: '4 pcs (approx 550g)',
    price: 145,
    mrp: 180,
    discount: 19,
    deliverySlot: '12 Mins',
    rating: 4.8,
    reviewsCount: 1420,
    inStock: true,
    isOrganic: true,
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
  };

  it('renders grocery product name, pack size, price, and MRP strikethrough', () => {
    render(<ProductCard product={sampleProduct} onSelectProduct={vi.fn()} />);

    expect(screen.getByText('Fresh Shimla Royal Apples')).toBeInTheDocument();
    expect(screen.getByText('4 pcs (approx 550g)')).toBeInTheDocument();
    expect(screen.getByText('₹145')).toBeInTheDocument();
    expect(screen.getByText('₹180')).toBeInTheDocument();
  });

  it('displays the 12 Mins express delivery badge and discount tag', () => {
    render(<ProductCard product={sampleProduct} onSelectProduct={vi.fn()} />);

    expect(screen.getByText('12 Mins')).toBeInTheDocument();
    expect(screen.getByText('19% OFF')).toBeInTheDocument();
  });

  it('renders the ADD action button', () => {
    render(<ProductCard product={sampleProduct} onSelectProduct={vi.fn()} />);

    const addButton = screen.getByRole('button', { name: /add to cart/i });
    expect(addButton).toBeInTheDocument();
  });
});
