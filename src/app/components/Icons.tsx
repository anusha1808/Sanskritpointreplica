import Image from "next/image";

export default function Icons() {
  return (
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
  );
}