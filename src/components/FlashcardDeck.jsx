import React, { useState } from 'react';
import { Layers, ChevronLeft, ChevronRight, RotateCcw, Shuffle } from 'lucide-react';

export default function FlashcardDeck({ cards = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [deck, setDeck] = useState([...cards]);

  if (!deck || deck.length === 0) {
    return <div className="card-empty">No flashcards available for this module.</div>;
  }

  const currentCard = deck[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="flashcard-deck-container">
      <div className="deck-header">
        <div className="deck-title">
          <Layers size={18} className="icon-blue" />
          <span>Interactive Quick Revision Flashcards</span>
        </div>
        <div className="deck-badge">
          Card {currentIndex + 1} of {deck.length}
        </div>
      </div>

      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span className="card-hint">Question (Click to Flip)</span>
            <p className="card-text">{currentCard.q}</p>
          </div>
          <div className="flashcard-back">
            <span className="card-hint">Answer</span>
            <p className="card-text">{currentCard.a}</p>
          </div>
        </div>
      </div>

      <div className="deck-controls">
        <button onClick={handlePrev} className="btn-secondary">
          <ChevronLeft size={18} /> Previous
        </button>
        <button onClick={handleShuffle} className="btn-secondary">
          <Shuffle size={16} /> Shuffle
        </button>
        <button onClick={handleNext} className="btn-primary">
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
