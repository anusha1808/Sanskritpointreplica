
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
  return (
    <div className="flex justify-start w-full"> {/* Added flex and px-6 for padding */}
      <div className="relative w-full max-w-[600px] text-center dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden">
        {/* Sale Badge */}
        <div className="absolute top-4 right-4 z-10 border-2 border-gray-700 dark:border-gray-500 rounded-lg 
          bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 
          px-6 py-3 text-xl font-bold transform scale-150 origin-top-right
          sm:px-6 sm:py-3 sm:text-lg sm:scale-125
          md:px-5 md:py-3 md:text-base md:scale-110
          lg:px-4 lg:py-2 lg:text-sm lg:scale-100">
          SALE
        </div>

        {/* Product Image */}
        <Link href="/Productwriter" passHref>
          <div className="relative aspect-[3/5] w-full cursor-pointer">
            <Image
              src="https://sanskritpoint.online/wp-content/uploads/2024/05/Green-Childrens-Illustrative-Novel-Book-Cover_20240208_215130_0000_page-0001-963x1536.jpg"
              alt="The Sanskrit Pathshala (level-1) by Sanskrit Point"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 600px) 100vw, 600px"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_PLACEHOLDER]"
            />
          </div>
        </Link>

        {/* Rating */}
        <div className="mt-3 text-4xl">{'★'.repeat(5)}</div>

        {/* Text Info */}
        <div className="p-4">
          <Link href="/Productwriter">
            <p className="text-lg font-medium text-black hover:underline dark:text-white">
              The Sanskrit Pathshala (Level-1) by Sanskrit Point
            </p>
          </Link>
          <div className="mt-2">
            <span className="text-lg text-black line-through mr-2 dark:text-gray-400">₹599.00</span>
            <span className="text-lg text-black dark:text-white">₹399.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
