import React, { useState } from 'react';
import Index from '../Flashcard/index';
import './index.css';

const FlashCardDeck: React.FC = () => {
  const [flashcards, setFlashcards] = useState([
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
    { question: "What is the smallest prime number?", answer: "2" },
    { question: "What is the square root of 144?", answer: "12" }
    // Add more flashcards as needed
  ]);

  const shuffleFlashcards = () => {
    const shuffledFlashcards = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffledFlashcards);
  };

  return (
    <div className="flashcard-deck">
      <button onClick={shuffleFlashcards}>Shuffle</button>
      {flashcards.map((flashcard, index) => (
        <Index key={index} question={flashcard.question} answer={flashcard.answer} />
      ))}
    </div>
  );
};

export default FlashCardDeck;