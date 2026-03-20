'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);

  const price = 199;
  const total = price * quantity;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-md border-b border-white/10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
            PulseForce
          </Link>
          <Link href="/" className="text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-200">
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
            Checkout
          </h1>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">PF</span>
                </div>
                <div>
                  <h3 className="font-semibold">PulseForce PRO</h3>
                  <p className="text-sm text-gray-400">Premium Massage Gun</p>
                </div>
              </div>
              <span className="font-semibold">${price}</span>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="quantity" className="font-medium">Quantity:</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-gray-400 to-white text-black font-semibold py-4 px-8 rounded-full hover:from-white hover:to-gray-400 transition-all duration-300 transform hover:scale-105">
            Place Order
          </button>
        </div>
      </main>
    </div>
  );
}