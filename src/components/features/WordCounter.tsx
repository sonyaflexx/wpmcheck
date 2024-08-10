interface WordCounterProps {
    current: number;
    total: number;
    className: string;
  }
  
  const WordCounter: React.FC<WordCounterProps> = ({ current, total, className }) => {
    return (
      <div className={`text-main-color text-xl ${className}`}>
        {current} / {total}
      </div>
    );
  };
  
  export default WordCounter;