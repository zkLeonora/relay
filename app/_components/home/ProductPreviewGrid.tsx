"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import { animate } from "animejs";

export default function ProductPreviewGrid() {
  const [activeTab, setActiveTab] = useState<string>("counter");
  const windowRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const windowEl = windowRef.current;
    if (!windowEl) return;

    animate(windowEl, {
      opacity: [0.3, 1],
      translateY: [10, 0],
      duration: 350,
      ease: "outCubic",
    });
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-8">
      {/* Product selector tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#e6e6e6] pb-4">
        {products.map((p) => {
          const isActive = activeTab === p.slug;
          return (
            <button
              key={p.slug}
              onClick={() => setActiveTab(p.slug)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                isActive
                  ? "bg-[#111111] text-[#fafaf8]"
                  : "bg-[#fafaf8] text-[#6b6b6b] border border-[#e6e6e6] hover:text-[#111111]"
              }`}
            >
              <span>{p.name}</span>
              <span className={`text-[0.625rem] px-1.5 py-0.5 rounded ${isActive ? "bg-[#333333] text-[#fafaf8]" : "bg-[#f4f4f2] text-[#6b6b6b]"}`}>
                {p.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main SaaS Preview Container */}
      {products.map((product) => {
        if (product.slug !== activeTab) return null;

        return (
          <div key={product.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left info */}
            <div className="lg:col-span-4 flex flex-col gap-6 pr-0 lg:pr-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6b6b6b]">{product.category}</span>
                <h3 className="text-2xl font-bold tracking-tight text-[#111111]">{product.name}</h3>
                <p className="text-base text-[#111111] font-medium">{product.tagline}</p>
                <p className="text-sm text-[#6b6b6b] leading-relaxed mt-1">{product.description}</p>
              </div>

              <div className="flex flex-col gap-2 border-t border-[#e6e6e6] pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#111111]">Key capabilities</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {product.features.map((feature) => (
                    <span key={feature} className="text-xs text-[#6b6b6b] bg-[#f4f4f2] border border-[#e6e6e6] px-2.5 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/products/${product.slug}`}
                className="btn btn-primary self-start text-xs gap-2 mt-2"
              >
                <span>View {product.name} details</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right SaaS Mockup Window Container animated with Anime.js */}
            <div ref={windowRef} className="lg:col-span-8 border border-[#e6e6e6] rounded-lg overflow-hidden bg-[#fafaf8]">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#e6e6e6] bg-[#f4f4f2]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d0d0d0]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d0d0d0]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d0d0d0]" />
                  <span className="text-[0.75rem] font-mono text-[#6b6b6b] ml-2">app.relay.software/{product.slug}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.6875rem] text-[#6b6b6b] font-mono bg-[#fafaf8] border border-[#e6e6e6] px-2 py-0.5 rounded">
                    Terminal 01 · Live
                  </span>
                </div>
              </div>

              {/* Window Content UI Mockup */}
              <div className="p-6">
                {product.slug === "counter" && <CounterUIMock />}
                {product.slug === "queue" && <QueueUIMock />}
                {product.slug === "stock" && <StockUIMock />}
                {product.slug === "ledger" && <LedgerUIMock />}
                {product.slug === "people" && <PeopleUIMock />}
                {product.slug === "analytics" && <AnalyticsUIMock />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Product SaaS UI Mockups ───────────────────────────────────────── */

function CounterUIMock() {
  return (
    <div className="flex flex-col gap-4 font-sans text-xs">
      <div className="grid grid-cols-12 gap-4">
        {/* Item Selector */}
        <div className="col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#e6e6e6]">
            <span className="font-semibold text-[#111111]">Quick Register</span>
            <span className="text-[#6b6b6b]">Category: Espresso Bar</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "Espresso Single", price: "$3.50" },
              { name: "Flat White", price: "$4.80" },
              { name: "Cold Brew 16oz", price: "$5.50" },
              { name: "Avocado Toast", price: "$12.00" },
              { name: "Almond Croissant", price: "$4.50" },
              { name: "Matcha Latte", price: "$5.20" },
            ].map((item, i) => (
              <div key={i} className="p-2.5 border border-[#e6e6e6] rounded bg-[#fafaf8] flex flex-col justify-between h-16">
                <span className="font-medium text-[#111111] leading-tight">{item.name}</span>
                <span className="font-mono text-[#6b6b6b]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Receipt Sidebar */}
        <div className="col-span-5 border border-[#e6e6e6] rounded p-3 bg-[#fafaf8] flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between border-b border-[#e6e6e6] pb-2">
              <span className="font-semibold text-[#111111]">Order #1042</span>
              <span className="text-[0.625rem] bg-[#111111] text-[#fafaf8] px-1.5 py-0.5 rounded">Offline Sync On</span>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex justify-between text-[#111111]">
                <span>2x Flat White</span>
                <span className="font-mono">$9.60</span>
              </div>
              <div className="flex justify-between text-[#111111]">
                <span>1x Avocado Toast</span>
                <span className="font-mono">$12.00</span>
              </div>
              <div className="flex justify-between text-[#6b6b6b]">
                <span>GST (10%)</span>
                <span className="font-mono">$2.16</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#e6e6e6] pt-3 flex flex-col gap-2">
            <div className="flex justify-between font-bold text-sm text-[#111111]">
              <span>Total</span>
              <span className="font-mono">$23.76</span>
            </div>
            <button className="btn btn-primary w-full text-xs justify-center py-2">Charge $23.76</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QueueUIMock() {
  return (
    <div className="flex flex-col gap-4 text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#e6e6e6]">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#111111]">Schedule · Tuesday, 28 July</span>
          <span className="text-[#6b6b6b]">4 Bookings Today</span>
        </div>
        <span className="text-[0.6875rem] font-mono text-[#6b6b6b]">Widget Active</span>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { time: "09:00 AM", client: "Sarah Jenkins", service: "Initial Consultation", status: "Completed", staff: "Dr. Marcus" },
          { time: "10:30 AM", client: "David Chen", service: "Follow-up Checkup", status: "In Progress", staff: "Dr. Marcus" },
          { time: "01:15 PM", client: "Elena Rostova", service: "Full Assessment", status: "Confirmed", staff: "Dr. Aris" },
          { time: "03:00 PM", client: "James Wilson", service: "Routine Review", status: "Confirmed", staff: "Dr. Aris" },
        ].map((slot, i) => (
          <div key={i} className="flex items-center justify-between p-3 border border-[#e6e6e6] rounded bg-[#fafaf8]">
            <div className="flex items-center gap-4">
              <span className="font-mono font-medium text-[#111111] w-20">{slot.time}</span>
              <div className="flex flex-col">
                <span className="font-medium text-[#111111]">{slot.client}</span>
                <span className="text-[#6b6b6b] text-[0.6875rem]">{slot.service} · {slot.staff}</span>
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded text-[0.6875rem] border ${
              slot.status === "In Progress"
                ? "bg-[#111111] text-[#fafaf8] border-[#111111]"
                : "bg-[#f4f4f2] text-[#6b6b6b] border-[#e6e6e6]"
            }`}>
              {slot.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StockUIMock() {
  return (
    <div className="flex flex-col gap-4 text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#e6e6e6]">
        <span className="font-semibold text-[#111111]">Inventory Roster · Central Warehouse</span>
        <span className="text-[#6b6b6b]">3 Low Stock Alerts</span>
      </div>
      <div className="border border-[#e6e6e6] rounded overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f4f4f2] border-b border-[#e6e6e6] text-[#6b6b6b]">
              <th className="p-2.5 font-medium">SKU</th>
              <th className="p-2.5 font-medium">Item Name</th>
              <th className="p-2.5 font-medium">In Stock</th>
              <th className="p-2.5 font-medium">Reorder Level</th>
              <th className="p-2.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sku: "SKU-9021", name: "Ethical Beans 1kg", stock: 142, reorder: 40, status: "Optimal" },
              { sku: "SKU-4412", name: "Oat Milk 1L Pack", stock: 18, reorder: 30, status: "Low Stock" },
              { sku: "SKU-1109", name: "Paper Cups 12oz (500)", stock: 85, reorder: 50, status: "Optimal" },
              { sku: "SKU-8820", name: "Syrup Vanilla 750ml", stock: 5, reorder: 12, status: "Reorder Now" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-[#e6e6e6] last:border-b-0">
                <td className="p-2.5 font-mono text-[#6b6b6b]">{row.sku}</td>
                <td className="p-2.5 font-medium text-[#111111]">{row.name}</td>
                <td className="p-2.5 font-mono text-[#111111]">{row.stock} units</td>
                <td className="p-2.5 font-mono text-[#6b6b6b]">{row.reorder} units</td>
                <td className="p-2.5">
                  <span className={`px-2 py-0.5 rounded text-[0.6875rem] border ${
                    row.status === "Optimal"
                      ? "bg-[#fafaf8] text-[#6b6b6b] border-[#e6e6e6]"
                      : "bg-[#111111] text-[#fafaf8] border-[#111111]"
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LedgerUIMock() {
  return (
    <div className="flex flex-col gap-4 text-xs font-sans">
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 border border-[#e6e6e6] rounded bg-[#fafaf8]">
          <span className="text-[#6b6b6b] text-[0.6875rem]">July Revenue</span>
          <p className="text-base font-bold font-mono text-[#111111] mt-1">$48,210.00</p>
        </div>
        <div className="p-3 border border-[#e6e6e6] rounded bg-[#fafaf8]">
          <span className="text-[#6b6b6b] text-[0.6875rem]">Expenses</span>
          <p className="text-base font-bold font-mono text-[#111111] mt-1">$18,440.50</p>
        </div>
        <div className="p-3 border border-[#e6e6e6] rounded bg-[#fafaf8]">
          <span className="text-[#6b6b6b] text-[0.6875rem]">Net Profit</span>
          <p className="text-base font-bold font-mono text-[#111111] mt-1">$29,769.50</p>
        </div>
      </div>
      <div className="border border-[#e6e6e6] rounded p-3 bg-[#fafaf8]">
        <span className="font-semibold text-[#111111] block mb-2">Recent Ledger Entries</span>
        <div className="flex flex-col gap-2">
          {[
            { desc: "POS Counter Sales Sync #104", type: "Income", amount: "+$3,420.00", date: "Today" },
            { desc: "Supplier Invoice #INV-8891 (Stock)", type: "Expense", amount: "-$1,250.00", date: "Yesterday" },
            { desc: "Payroll Run (People Sync)", type: "Expense", amount: "-$4,800.00", date: "24 Jul" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-[#e6e6e6] last:border-b-0">
              <div className="flex flex-col">
                <span className="font-medium text-[#111111]">{item.desc}</span>
                <span className="text-[0.6875rem] text-[#6b6b6b]">{item.date}</span>
              </div>
              <span className="font-mono font-medium text-[#111111]">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PeopleUIMock() {
  return (
    <div className="flex flex-col gap-4 text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#e6e6e6]">
        <span className="font-semibold text-[#111111]">Team Roster · 12 Active Members</span>
        <span className="text-[#6b6b6b]">Next Payroll: 31 July</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "Alex Rivera", role: "Store Manager", dept: "Operations", status: "Active" },
          { name: "Jordan Lee", role: "Senior Barista", dept: "Front of House", status: "Active" },
          { name: "Samira Patel", role: "Inventory Lead", dept: "Logistics", status: "On Leave" },
          { name: "Taylor Kim", role: "Shift Supervisor", dept: "Operations", status: "Active" },
        ].map((person, i) => (
          <div key={i} className="p-3 border border-[#e6e6e6] rounded bg-[#fafaf8] flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold text-[#111111]">{person.name}</span>
              <span className="text-[0.6875rem] text-[#6b6b6b]">{person.role} · {person.dept}</span>
            </div>
            <span className="text-[0.6875rem] px-2 py-0.5 rounded border border-[#e6e6e6] bg-[#f4f4f2] text-[#6b6b6b]">
              {person.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsUIMock() {
  return (
    <div className="flex flex-col gap-4 text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#e6e6e6]">
        <span className="font-semibold text-[#111111]">Cross-Product Performance Overview</span>
        <span className="text-[#6b6b6b]">Real-Time Sync</span>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8 p-3 border border-[#e6e6e6] rounded bg-[#fafaf8] flex flex-col justify-between">
          <span className="text-[#6b6b6b] font-medium">Hourly Peak Sales Volume</span>
          <div className="flex items-end gap-2 h-24 pt-4">
            {[35, 50, 80, 100, 65, 40, 75, 90, 85, 60, 45, 30].map((val, i) => (
              <div key={i} className="flex-1 bg-[#111111] rounded-t" style={{ height: `${val}%` }} />
            ))}
          </div>
          <div className="flex justify-between text-[0.625rem] text-[#6b6b6b] pt-2 border-t border-[#e6e6e6] mt-2 font-mono">
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
          </div>
        </div>
        <div className="col-span-4 p-3 border border-[#e6e6e6] rounded bg-[#fafaf8] flex flex-col gap-2">
          <span className="text-[#6b6b6b] font-medium">Top Product Sales</span>
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex justify-between"><span className="text-[#111111]">Flat White</span><span className="font-mono text-[#6b6b6b]">340 units</span></div>
            <div className="flex justify-between"><span className="text-[#111111]">Avocado Toast</span><span className="font-mono text-[#6b6b6b]">120 units</span></div>
            <div className="flex justify-between"><span className="text-[#111111]">Cold Brew</span><span className="font-mono text-[#6b6b6b]">95 units</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
