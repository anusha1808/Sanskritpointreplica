import Image from 'next/image';

export default function Connect() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10">
      <div className="max-w mx-auto flex flex-wrap justify-between items-start gap-10">
        
        {/* Left: Text */}
        <div className="space-y-4 ml-8">
          <h2 className="text-3xl font-semibold text-left">Connect with Sanskrit Point</h2>
        </div>


        {/* Right: Social Icons */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="https://www.instagram.com/sanskritpoint2/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={45} height={45} />
          </a>
          <a href="https://www.facebook.com/people/Sanskrit-Point-official/61551248816897/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={45} height={45} />
          </a>
          <a href="https://www.youtube.com/@sanskritpoint" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/youtube.svg" alt="YouTube" width={45} height={45} />
          </a>
        </div>
      </div>
    </div>
  );
}
