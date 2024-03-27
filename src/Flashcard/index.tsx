import React, { useState } from 'react';
import './index.css';

interface FlashCardProps {
  question: string;
  answer: string;
}

const Index: React.FC<FlashCardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-content">{isFlipped ? answer : question}</div>
    </div>
  );
};

export default Index;