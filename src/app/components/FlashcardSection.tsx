'use client';
import { useEffect, useState } from 'react';
import Flashcard from './Flashcard';

interface FlashcardData {
  front: string;
  back: string;
  image?: string;
}

export default function FlashcardSection() {
  const [cards, setCards] = useState<FlashcardData[]>([]);

  useEffect(() => {
    fetch('/api/flashcards')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-12">Sanskrit Flashcards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
        {cards.map((card, idx) => (
          <Flashcard key={idx} front={card.front} back={card.back} image={card.image} />
        ))}
      </div>
    </div>
  );
}
