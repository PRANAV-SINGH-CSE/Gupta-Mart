'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Zap, ShieldCheck, HeartHandshake, Leaf, Truck, Award } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navbar />

      <main className="w-full">
        {/* Header Hero */}
        <section className="bg-[#142B4A] text-white py-16 sm:py-24 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#142B4A] via-[#142B4A]/95 to-[#0F223D]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9F43]/20 text-[#FF9F43] text-xs font-black uppercase tracking-widest mb-4">
              <Zap className="w-4 h-4 fill-current" />
              Our Farm-To-Door Story
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Fresher than the supermarket. Faster than your neighborhood shop.
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              Gupta Mart was created to solve a broken food chain: why should city households wait days for produce that spent a week in cold warehouses? We deliver fresh harvest within 12–15 minutes directly from verified organic farms.
            </p>
          </div>
        </section>

        {/* Narrative & Visual Split */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh organic harvest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142B4A]/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-bold text-[#FF9F43] uppercase tracking-wider">Harvest Promise</span>
                  <p className="text-xl font-bold">Plucked at dawn, on your plate before dinner.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E27B12]">
                Gupta Mart Philosophy
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#142B4A] leading-tight">
                Empowering Indian farmers while providing 100% clean nutrition.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                By eliminating up to 5 layers of middlemen, Gupta Mart guarantees that local agricultural communities receive fair, guaranteed prices while our customers receive produce harvested within the last 24 hours.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every apple, batch of chakki atta, cold-pressed oil, and vegetable crate is rigorously audited against FSSAI food-safety benchmarks and sorted in our temperature-controlled micro-fulfillment pods.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-[#142B4A] text-white font-bold rounded-xl hover:bg-[#0c1c30] transition text-sm shadow-md"
                >
                  Explore Fresh Catalog
                </Link>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold px-4 py-3 bg-white rounded-xl border border-slate-200">
                  <Award className="w-5 h-5 text-emerald-600" />
                  100% Chemical-Free
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Gupta Mart */}
        <section className="bg-white py-16 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A]">
                The Four Pillars of Gupta Mart
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                How we maintain speed, freshness, and ethics without compromise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 font-bold">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-[#142B4A] mb-2 text-base">Direct From Farm</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Partnered with over 450+ certified organic farms across Karnataka, Maharashtra, and Himachal.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#FF9F43]/20 text-[#E27B12] flex items-center justify-center mx-auto mb-4 font-bold">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-[#142B4A] mb-2 text-base">12-Min Dark Stores</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Hyperlocal micro-pods placed every 2 kilometers to guarantee ultra-fast delivery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-[#142B4A] mb-2 text-base">Strict Quality Audit</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  3-stage sorting with infrared sweetness check and automated moisture scanning.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-4 font-bold">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-[#142B4A] mb-2 text-base">No-Questions Refund</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  If any vegetable or fruit isn't perfectly fresh, get an instant refund right into your account.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;