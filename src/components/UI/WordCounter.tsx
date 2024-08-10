import React from 'react';

interface WordCounterProps {
  current: number;
  total: number;
}

const WordCounter: React.FC<WordCounterProps> = ({ current, total }) => {
  return (
    <div className="text-main-color text-xl absolute -top-8 left-8">
      {current} / {total}
    </div>
  );
};

export default WordCounter;