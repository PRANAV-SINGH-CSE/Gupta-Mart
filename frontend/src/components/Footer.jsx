'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // offline / mock fallback
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="w-full bg-[#EDF2F7] text-[#263449] mt-12 pt-12 pb-6 border-t border-[#CBD5E1]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#CBD5E1]/40">
          {/* Brand Info */}
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/images/logo.png"
                alt="Gupta Mart"
                className="w-9 h-9 object-contain rounded-xl shadow-sm border border-slate-200"
              />
              <span className="font-headline text-2xl text-[#142B4A] font-extrabold">
                Gupta<span className="text-[#FF9F43]">Mart</span>
              </span>
            </Link>
            <p className="text-sm text-[#5A6B82] leading-relaxed">
              Fresh Food. Better Living. Handpicked farm-fresh essentials, organic produce, and daily staples delivered to your door in 15 minutes.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 bg-white text-[#142B4A] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-[#CBD5E1]/30">
                <span className="material-symbols-outlined text-[16px] text-[#FF9F43]">verified</span>
                100% Farm Fresh
              </span>
              <span className="inline-flex items-center gap-1 bg-white text-[#A74E00] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-[#CBD5E1]/30">
                <span className="material-symbols-outlined text-[16px]">eco</span>
                Certified Organic
              </span>
            </div>

            <div className="flex flex-col gap-1.5 text-[#5A6B82] text-xs pt-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#142B4A]">call</span>
                <span className="font-semibold">+91 1800 200 4567 (Toll-Free 24x7)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#142B4A]">mail</span>
                <span>support@guptamart.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-base text-[#142B4A] font-extrabold mb-4">
              Explore Aisles
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#5A6B82]">
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/dashboard?category=fruits-vegetables">Fruits & Vegetables</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/dashboard?category=dairy-eggs">Dairy, Eggs & Paneer</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/dashboard?category=bakery-bread">Artisanal Bakery</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/dashboard?category=staples-grains">Staples & Grains</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/dashboard?category=snacks-drinks">Snacks & Beverages</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/about-us">About Gupta Mart Story</Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-headline text-base text-[#142B4A] font-extrabold mb-4">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#5A6B82]">
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/orders">Track Your Order</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/return-policy">Instant Refund Policy</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/privacy-policy">Privacy & Data Security</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/terms-of-service">Terms & Conditions</Link>
              </li>
              <li className="hover:text-[#142B4A] transition-colors">
                <Link to="/about-us">15-Min Delivery Dark Pods</Link>
              </li>
            </ul>
          </div>

          {/* Freshness Promise & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-headline text-base text-[#142B4A] font-extrabold">
              Gupta Mart Express
            </h4>
            <div className="p-3 bg-white rounded-2xl border border-[#CBD5E1]/50 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFE8D6] text-[#E27B12] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">bolt</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#142B4A]">15-Minute Web Delivery</p>
                <p className="text-[11px] text-[#5A6B82]">Fresh harvest to your doorstep instantly</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-[#263449]">Get ₹150 OFF your next order</span>
              {subscribed ? (
                <div className="bg-emerald-50 text-emerald-700 text-xs p-2 rounded-lg font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Coupon code FRESH150 sent to your email!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-white border border-[#CBD5E1] px-3 py-1.5 rounded-lg text-xs text-[#263449] outline-none w-full focus:border-[#142B4A]"
                  />
                  <button
                    type="submit"
                    className="bg-[#142B4A] hover:bg-[#1B385D] text-white text-xs px-3 py-1.5 rounded-lg font-bold shrink-0 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Accepted Payments */}
            <div>
              <span className="text-[10px] text-[#5A6B82] block mb-1 uppercase font-bold tracking-wider">
                Accepted Payment Modes
              </span>
              <div className="flex flex-wrap gap-1 text-[11px] text-[#5A6B82]">
                <span className="bg-white px-2 py-0.5 rounded shadow-sm border border-[#CBD5E1]/40 font-semibold">UPI</span>
                <span className="bg-white px-2 py-0.5 rounded shadow-sm border border-[#CBD5E1]/40 font-semibold">RuPay</span>
                <span className="bg-white px-2 py-0.5 rounded shadow-sm border border-[#CBD5E1]/40 font-semibold">Visa</span>
                <span className="bg-white px-2 py-0.5 rounded shadow-sm border border-[#CBD5E1]/40 font-semibold">Mastercard</span>
                <span className="bg-white px-2 py-0.5 rounded shadow-sm border border-[#CBD5E1]/40 font-semibold">NetBanking</span>
                <span className="bg-white px-2 py-0.5 rounded shadow-sm border border-[#CBD5E1]/40 font-semibold">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[#5A6B82] text-xs">
          <p>© 2025 Gupta Mart Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#142B4A]">lock</span>
              100% Secure Checkout
            </span>
            <span>FSSAI Lic No: 10020043000845</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
