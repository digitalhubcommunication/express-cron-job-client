import React from "react";

interface SpinnerSquareProps {
  containerClass?: string;
  squareClasses?: string[];
  totalVisuals?:number;
}

const LoadingSpinner: React.FC<SpinnerSquareProps> = ({
  containerClass = "",
  squareClasses = [],
  totalVisuals=3,
}) => {
  return (
    <div className={`flex justify-center items-center `}>
      <div className={`spinner-square flex ${containerClass}`}>
        {[...Array(totalVisuals)].map((_, index) => (
          <div
            key={index}
            className={`square ${squareClasses[index] || "bg-black dark:bg-white"}`}
            style={{ animationDelay: `${index * 200}ms` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
