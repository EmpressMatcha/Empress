// app/blog/page.tsx
"use client";
import React from "react";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* ====== NAVBAR ====== */}
      <nav className="w-full flex justify-between items-center px-10 py-6 text-[15px] font-mono text-white">
        <div className="text-4xl font-extrabold tracking-wider">GRAZA</div>

        <div className="flex items-center space-x-8">
          <Link href="/shop" className="hover:opacity-80 transition">Shop</Link>
          <Link href="/get-refills" className="hover:opacity-80 transition">Get Refills</Link>
          <Link href="/about" className="hover:opacity-80 transition">About</Link>
          <Link href="/blog" className="hover:opacity-80 transition">Blog</Link>

          <div className="flex items-center space-x-4 ml-4">
            <User className="w-5 h-5" />
            <div className="flex items-center bg-white text-black rounded-full px-4 py-1 text-sm font-semibold">
              <ShoppingCart className="w-4 h-4 mr-2" /> Cart [0]
            </div>
          </div>
        </div>
      </nav>

      {/* ====== EMPTY CONTENT ====== */}
      <section className="flex flex-col items-center justify-center flex-grow px-10 py-20">
        <h1 className="text-5xl font-serif mb-4">Blog</h1>
        <p className="text-lg text-center max-w-2xl">This page is coming soon!</p>
      </section>

      {/* ====== SIMPLE FOOTER ====== */}
      <footer className="w-full bg-[#1a1a1a] text-[#f5f5f5] py-6 flex flex-col md:flex-row items-center justify-between px-8 text-sm font-mono border-t border-[#333]">
        <p className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} GRAZA. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="#" className="hover:opacity-80 transition">Privacy Policy</Link>
          <Link href="#" className="hover:opacity-80 transition">Terms</Link>
          <Link href="#" className="hover:opacity-80 transition">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
