'use client';
import React, { useState } from 'react';
import { useProducts } from '../contexts/ProductContext';

export default function SidebarFilters({ className = '' }) {
  const { filters, updateFilter, clearAllFilters, filteredProducts, products } = useProducts();

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    dietary: true,
    rating: true,
  });

  const toggleSection = (sec) => {
    setExpandedSections((prev) => ({ ...prev, [sec]: !prev[sec] }));
  };

  const categories = [
    { name: 'Fruits & Vegetables', count: products.filter(p => p.category === 'Fruits & Vegetables').length || 18 },
    { name: 'Dairy, Eggs & Paneer', count: products.filter(p => p.category === 'Dairy, Eggs & Paneer').length || 12 },
    { name: 'Artisanal Bakery', count: products.filter(p => p.category === 'Artisanal Bakery').length || 8 },
    { name: 'Staples & Dals', count: products.filter(p => p.category === 'Staples & Dals').length || 15 },
    { name: 'Meat & Seafood', count: products.filter(p => p.category === 'Meat & Seafood').length || 6 },
    { name: 'Oils & Pure Ghee', count: products.filter(p => p.category === 'Oils & Pure Ghee').length || 7 },
    { name: 'Snacks & Sips', count: products.filter(p => p.category === 'Snacks & Sips').length || 14 },
    { name: 'Home & Care', count: products.filter(p => p.category === 'Home & Care').length || 9 },
  ];

  const pricePresets = [
    { id: 'under-50', label: 'Under ₹50' },
    { id: '50-150', label: '₹50–₹150' },
    { id: '150-300', label: '₹150–₹300' },
    { id: 'above-300', label: '₹300+' },
  ];

  const dietaryTags = [
    { id: 'organic', label: '100% Certified Organic', icon: 'eco' },
    { id: 'hydroponic', label: 'Hydroponic Produce', icon: 'water_drop' },
    { id: 'vegan', label: 'Vegan Friendly', icon: 'nest_eco_leaf' },
    { id: 'gluten-free', label: 'Gluten Free Staples', icon: 'grain' },
  ];

  const activeCount =
    (filters.category?.length || 0) +
    (filters.priceRange?.length || 0) +
    (filters.dietary?.length || 0) +
    (filters.inStockOnly ? 1 : 0) +
    (filters.minRating ? 1 : 0);

  return (
    <aside
      className={`w-full lg:w-72 shrink-0 bg-white rounded-2xl p-5 shadow-sm border border-[#CBD5E1]/40 ${className}`}
    >
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#142B4A] text-[20px]">tune</span>
          <h2 className="font-headline text-base text-[#142B4A] font-extrabold">Filters</h2>
          {activeCount > 0 && (
            <span className="bg-[#FFE8D6] text-[#A74E00] text-[11px] font-bold px-2 py-0.5 rounded-full">
              {activeCount} Active
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-[#E27B12] hover:text-[#A74E00] font-bold tracking-wide transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* In Stock Only Switch */}
      <div className="my-4 p-3 bg-[#F7F9FC] rounded-xl flex items-center justify-between border border-[#CBD5E1]/40">
        <div className="flex flex-col">
          <span className="text-xs text-[#142B4A] font-bold">In Stock Only</span>
          <span className="text-[11px] text-[#5A6B82]">Hide sold-out essentials</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={!!filters.inStockOnly}
            onChange={(e) => updateFilter('inStockOnly', null, e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#142B4A]"></div>
        </label>
      </div>

      <div className="space-y-5">
        {/* Categories Section */}
        <div className="border-b border-slate-100 pb-4">
          <div
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between cursor-pointer mb-2.5"
          >
            <h3 className="font-headline text-xs font-bold text-[#142B4A] uppercase tracking-wider">
              Aisles & Categories
            </h3>
            <span className="material-symbols-outlined text-[#74777E] text-[18px]">
              {expandedSections.categories ? 'expand_less' : 'expand_more'}
            </span>
          </div>

          {expandedSections.categories && (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {categories.map((cat) => {
                const isChecked = filters.category?.includes(cat.name);
                return (
                  <label
                    key={cat.name}
                    className="flex items-center justify-between text-xs text-[#263449] group cursor-pointer hover:text-[#142B4A]"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => updateFilter('category', cat.name, e.target.checked)}
                        className="w-4 h-4 rounded text-[#142B4A] focus:ring-[#142B4A] border-slate-300"
                      />
                      <span className={isChecked ? 'font-bold text-[#142B4A]' : ''}>
                        {cat.name}
                      </span>
                    </span>
                    <span className="text-[10px] text-[#5A6B82] bg-slate-100 px-1.5 py-0.2 rounded-full">
                      {cat.count}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Price Range Section */}
        <div className="border-b border-slate-100 pb-4">
          <div
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between cursor-pointer mb-2.5"
          >
            <h3 className="font-headline text-xs font-bold text-[#142B4A] uppercase tracking-wider">
              Price Range
            </h3>
            <span className="material-symbols-outlined text-[#74777E] text-[18px]">
              {expandedSections.price ? 'expand_less' : 'expand_more'}
            </span>
          </div>

          {expandedSections.price && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {pricePresets.map((preset) => {
                const isSelected = filters.priceRange?.includes(preset.id);
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => updateFilter('priceRange', preset.id, !isSelected)}
                    className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                      isSelected
                        ? 'bg-[#142B4A] text-white shadow-sm'
                        : 'bg-[#EDF2F7] text-[#5A6B82] hover:bg-slate-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Dietary & Certifications */}
        <div className="border-b border-slate-100 pb-4">
          <div
            onClick={() => toggleSection('dietary')}
            className="flex items-center justify-between cursor-pointer mb-2.5"
          >
            <h3 className="font-headline text-xs font-bold text-[#142B4A] uppercase tracking-wider">
              Dietary & Sourcing
            </h3>
            <span className="material-symbols-outlined text-[#74777E] text-[18px]">
              {expandedSections.dietary ? 'expand_less' : 'expand_more'}
            </span>
          </div>

          {expandedSections.dietary && (
            <div className="space-y-2">
              {dietaryTags.map((tag) => {
                const isChecked = filters.dietary?.includes(tag.id);
                return (
                  <label
                    key={tag.id}
                    className="flex items-center justify-between text-xs text-[#263449] cursor-pointer hover:text-[#142B4A]"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => updateFilter('dietary', tag.id, e.target.checked)}
                        className="w-4 h-4 rounded text-[#142B4A] focus:ring-[#142B4A] border-slate-300"
                      />
                      <span className="flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-[#E27B12] text-[16px]">
                          {tag.icon}
                        </span>
                        {tag.label}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Ratings Filter */}
        <div>
          <div
            onClick={() => toggleSection('rating')}
            className="flex items-center justify-between cursor-pointer mb-2.5"
          >
            <h3 className="font-headline text-xs font-bold text-[#142B4A] uppercase tracking-wider">
              Customer Ratings
            </h3>
            <span className="material-symbols-outlined text-[#74777E] text-[18px]">
              {expandedSections.rating ? 'expand_less' : 'expand_more'}
            </span>
          </div>

          {expandedSections.rating && (
            <div className="space-y-2 text-xs">
              {[4.0, 3.0].map((r) => {
                const isSelected = filters.minRating === r;
                return (
                  <label
                    key={r}
                    className="flex items-center justify-between cursor-pointer hover:text-[#142B4A]"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="ratingFilter"
                        checked={isSelected}
                        onChange={() => updateFilter('minRating', r, !isSelected)}
                        className="w-4 h-4 text-[#142B4A] focus:ring-[#142B4A]"
                      />
                      <span className="flex items-center gap-1">
                        <span
                          className="material-symbols-outlined text-[#FF9F43] text-[16px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="font-bold text-[#263449]">{r.toFixed(1)} & above</span>
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Gupta Mart Seal Banner */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#142B4A] to-[#1B385D] text-white">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="material-symbols-outlined text-[#FF9F43] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified_user
          </span>
          <span className="font-headline text-xs font-bold text-white">Gupta Mart Seal</span>
        </div>
        <p className="text-[11px] text-slate-200 leading-relaxed">
          Harvested under 18 hours ago. If not completely delighted with produce freshness, instant 1-tap refund.
        </p>
      </div>
    </aside>
  );
}
