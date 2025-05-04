
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[669px] mb-20">
      {/* Background Image */}
      <img
        src="https://sanskritpoint.online/wp-content/uploads/2024/06/peakpx.jpg"
        alt="Sanskrit Point Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Blue Overlay with Dark Mode Adaptation */}
      <div className="absolute inset-0 bg-[#3272bb] bg-opacity-50 dark:bg-[#1a3b5d] dark:bg-opacity-60" aria-hidden="true" />

      {/* ✅ Main Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8">

        {/* 🎯 Running Text (Marquee Effect, same position and style) */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <Link href="/shop">
              <p className="cursor-pointer bg-yellow-300 text-black/80 text-2xl sm:text-3xl font-bold underline px-4 py-2 mb-6 text-center hover:no-underline rounded inline-block leading-none">
                Buy 2 संस्कृत पाठशाला Get Free Delivery! &nbsp; Buy 2 संस्कृत पाठशाला Get Free Delivery! &nbsp; Buy 2 संस्कृत पाठशाला Get Free Delivery!
              </p>
            </Link>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-4 font-semibold text-white dark:text-gray-100 text-left">
          नमो नमः
        </h1>

        <Link href="/shop" passHref>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 underline hover:no-underline cursor-pointer text-black dark:text-gray-200">
            DISCOVER ANCIENT TREASURES
          </h2>
        </Link>

        <Link href="/youtube" passHref>
          <p className="underline hover:no-underline bg-opacity-60 text-yellow-300 mt-4 max-w-xl text-sm sm:text-base font-semibold leading-relaxed cursor-pointer">
            the Language of our Ancients, Sanskrit holds the keys to our rich heritage and spiritual depth.
            Embrace the eternal legacy and discover the beauty of <strong>Sanskrit</strong> with us.
          </p>
        </Link>

        <p className="mt-4 max-w-xl text-white dark:text-gray-300 font-semibold text-sm sm:text-base leading-relaxed">
          उद्देश्य - विलुप्त होती हुई हमारी देववाणी संस्कृत को घर-घर तक पहुँचाना।
          आप भी आज ही घर लाएं ‘The संस्कृत पाठशाला’ अपने घर में संस्कृत और संस्कृति का समावेश करें। ॐ 🚩
        </p>
      </div>
    </div>
  );
}
