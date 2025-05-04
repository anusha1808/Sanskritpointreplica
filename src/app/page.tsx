// app/page.tsx
import Rating from './components/Rating';
import ProductCard from './components/ProductCard';
import Founders from './components/Founders';
import HeroSection from './components/HeroSection';
import Connect from './components/Connect';


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main>

        {/* Hero Section */}
        <section className="py-12 text-center">
          <HeroSection />
        </section>

        {/* Rating Section */}
        <section className="py-12 text-center">
          <Rating />
        </section>

        {/* Product Section */}
        <section className="py-12 text-center ml-12">
          <ProductCard />
        </section>

        {/* Connect Section */}

        <section>
          <Connect />
        </section>


      </main>
    </div>
  );
}
