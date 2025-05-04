
import { useState } from 'react';

interface FlashcardProps {
  front: string;
  back: string;
  image?: string;
}

export default function Flashcard({ front, back, image }: FlashcardProps) {
  const [showBack, setShowBack] = useState(false);
  const toggleCard = () => setShowBack(!showBack);

  // Choose background color based on state
  const cardColor = showBack
    ? "bg-red-400 dark:bg-red-600"
    : "bg-yellow-200 dark:bg-yellow-400";

  return (
    <div
      className={`w-52 h-68 ${cardColor} rounded-lg shadow-md p-6 cursor-pointer text-gray-900 dark:text-white transition-transform duration-300 hover:scale-105`}
      onClick={toggleCard}
    >
      <div className="flex flex-col justify-center items-center h-full text-center transition-transform transform ${showBack ? 'rotate-y-180' : 'rotate-y-0'} duration-500"
      >
        {image && (
          <img
            src={image}
            alt={showBack ? back : front}
            className="w-32 h-32 object-contain mb-4"
          />
        )}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          {showBack ? back : front}
        </p>
      </div>
    </div>
  );
}

