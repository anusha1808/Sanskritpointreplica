
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      {/* Header Content */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-gray-200">
        {/* Logo - Left aligned */}
        <Link href="/" className="text-2xl font-medium text-gray-900 dark:text-white font-serif">
          sanskritpoint.online
        </Link>

        {/* Icons - Right aligned */}
        <div className="flex items-center space-x-6">
          <div className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <ThemeSwitch />
            </div>
          {/* Person Icon */}
          <Link
            href="/account" // change this to your target route
            className="p-1 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          <Link
            href="/blank" // change this to your target route
            className="p-1 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>

          <Link
            href="/blank" // change this to your target route
            className="p-1 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Link>


        {/* Flashcards Icon */}
          <Link href="/flashcards" passHref>
            <button
              className="p-1 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              aria-label="Flashcards">
              <Image
                src="/images/flashcards.png" // or your actual path
                alt="Flashcards"
                width={40}
                height={40}
              />
            </button>
          </Link>
          </div>
      </div>
    </div>
  );
}