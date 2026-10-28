import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SidebarFilters from '../components/SidebarFilters';

const mockUpdateFilter = vi.fn();
const mockClearAllFilters = vi.fn();

vi.mock('../contexts/ProductContext', () => ({
  useProducts: () => ({
    filters: {
      category: 'all',
      inStockOnly: false,
      organicOnly: false,
      priceRange: 'all',
      minRating: 0,
      sortBy: 'recommended',
    },
    updateFilter: mockUpdateFilter,
    clearAllFilters: mockClearAllFilters,
    filteredProducts: [],
    products: [
      { id: '1', category: 'Fruits & Vegetables', inStock: true, price: 50 },
      { id: '2', category: 'Dairy, Eggs & Paneer', inStock: true, price: 40 },
    ],
  }),
}));

describe('SidebarFilters Component Integration', () => {
  it('renders aisle categories and in-stock toggle', () => {
    render(<SidebarFilters />);

    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('In Stock Only')).toBeInTheDocument();
    expect(screen.getByText('Aisles & Categories')).toBeInTheDocument();
  });

  it('triggers updateFilter when toggling an aisle checkbox', () => {
    render(<SidebarFilters />);

    const fruitsLabel = screen.getByText('Fruits & Vegetables');
    fireEvent.click(fruitsLabel);
    expect(mockUpdateFilter).toHaveBeenCalledWith('category', 'Fruits & Vegetables', true);
  });

  it('renders Gupta Mart Quality Seal guarantee card', () => {
    render(<SidebarFilters />);

    expect(screen.getByText('Gupta Mart Seal')).toBeInTheDocument();
    expect(screen.getByText(/Harvested under 18 hours ago/i)).toBeInTheDocument();
  });

  it('triggers updateFilter when clicking the In Stock Only checkbox', () => {
    render(<SidebarFilters />);

    const inStockToggle = screen.getByRole('checkbox', { name: '' });
    fireEvent.click(inStockToggle);
    expect(mockUpdateFilter).toHaveBeenCalledWith('inStockOnly', null, true);
  });
});
