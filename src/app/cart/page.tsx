'use client';

import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-10 font-serif">
      <div className="max-w-6xl mx-auto">
        {/* Alert */}
        <div className="border border-green-300 bg-green-100 p-4 text-green-800 rounded mb-6">
          <p>
            “<strong>The Sanskrit Pathshala (Level-1)</strong> by Sanskrit Point” has been added to your cart.
            <Link href="/shop" className="ml-4 underline">Continue shopping</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
