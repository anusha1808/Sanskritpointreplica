'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage: NextPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<'description' | 'reviews'>('description');
  const images = [
    '/images/thumb-1.jpg',
    '/images/thumb-2.jpg',
    '/images/thumb-3.jpg',
    '/images/thumb-4.jpg',
  ];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10 font-serif">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-black dark:text-gray-100 mb-4 space-x-1">
          <Link href="/" className="underline hover:no-underline cursor-pointer">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="underline hover:no-underline cursor-pointer">
            Uncategorized
          </Link>
          <span>/</span>
          <span>The Sanskrit Pathshala (Level-1) by Sanskrit Point</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/5] w-full cursor-pointer">
              <span className="absolute top-2 left-2 bg-[#b3af54] text-2sm w-14 h-14 rounded-full font-semibold z-10 text-white flex items-center justify-center">
                Sale!
              </span>
              <Image
                src={mainImage}
                alt="The Sanskrit Pathshala (level-1) by Sanskrit Point"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 600px) 100vw, 600px"
                priority={false}
                placeholder="empty"
              />
            </div>

            {/* Image Carousel */}
            <div className="flex space-x-2 mt-2 overflow-x-auto">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={`/images/thumb-${img}.jpg`}
                  alt={`Preview ${i + 1}`}
                  width={80}
                  height={80}
                  onClick={() => setMainImage(img)}
                  className={`rounded border cursor-pointer transition ${
                  mainImage === img ? 'ring-2 ring-blue-500' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2">
              The Sanskrit Pathshala (Level-1) by Sanskrit Point
            </h2>
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              अपनी संस्कृत और संस्कृति घर लाए
            </div>

            <div className="flex items-center mb-4">
              <span className="mt-3 text-4xl">{'★'.repeat(5)}</span>
              <span className="ml-2 dark:text-blue-400 underline cursor-pointer text-2xl">
                (22 customer reviews)
              </span>
            </div>

            <div className="text-2xl mb-4">
              <span className="line-through mr-2">₹599.00</span>
              <span className=" font-bold">₹399.00</span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-2 py-1 w-16"
              />
              <Link
                href="/cart" // or wherever you want to navigate
                className="inline-block bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 text-white px-6 py-2 rounded transition">
                Add to cart
              </Link>
            </div>

            <div className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">Category: </span>
            <span className="text-black dark:text-blue-400 hover:underline">Uncategorized</span>
          </div>

          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 pt-6">
          <div className="flex space-x-8 mb-4">
            <button
              onClick={() => setTab('description')}
              className={`pb-2 border-b-2 ${
                tab === 'description'
                  ? 'border-black dark:border-white font-semibold'
                  : 'border-transparent text-gray-500 dark:text-gray-400'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setTab('reviews')}
              className={`pb-2 border-b-2 ${
                tab === 'reviews'
                  ? 'border-black dark:border-white font-semibold'
                  : 'border-transparent text-gray-500 dark:text-gray-400'
              }`}
            >
              Reviews (22)
            </button>
          </div>

          {tab === 'description' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">The Sanskrit Pathshala (Level–1)</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                First Sanskrit book which has a well-structured course that provides a comprehensive introduction to Sanskrit.
                By the end of the course, learners will possess the foundational skills necessary to continue their Sanskrit journey
                with confidence and enthusiasm. Ideal for anyone with a keen interest in learning Sanskrit, regardless of age or
                background. Whether you are a student, a professional, or a lifelong learner. Including Basic knowledge of RAMAYAN,
                MAHABHARAT, BHAGWAT GEETA and Sanskrit Motivational quotes.
              </p>
            </div>
          )}

          {tab === 'reviews' && (
            <div className="text-gray-600 dark:text-gray-300 text-lg">
              <p>Customer reviews will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
