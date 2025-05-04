import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  return (
    <div className="pl-20 pr-8 pt-8 pb-8">
      <nav className="text-sm text-black dark:text-gray-100 mb-4 space-x-1">
        <Link href="/" className="underline hover:no-underline cursor-pointer">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="underline hover:no-underline cursor-pointer">
          Shop
        </Link>
      </nav>

      {/* Main Heading */}
      <h1 className="text-5xl text-black dark:text-gray-100 mb-5">Shop</h1>

      {/* Sanskrit Subheading */}
      <h2 className="text-2xl md:text-3xl text-black dark:text-gray-100 mb-5 text-left md:text-center">
        घर ले आए अपनी संस्कृत पाठशाला
      </h2>

      <div className="flex justify-start">
      {/* Wrapper for product and button */}
        <div className="flex flex-col items-center">
          <ProductCard />
          
          <Link
            href="/cart"
            className="mt-4 text-center bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-100"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
