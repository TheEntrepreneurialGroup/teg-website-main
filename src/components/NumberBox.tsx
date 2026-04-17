import React from "react";
import { cn } from "@/lib/utils";

interface NumberBoxProps {
  className?: string;
  number: string;
  text: string;
}

const NumberBox: React.FC<NumberBoxProps> = ({ className, number, text }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col justify-start items-center h-full",
        className,
      )}
    >
      <div className="text-accent text-5xl font-normal leading-tight">
        {number}
      </div>
      <div className="text-muted-foreground text-2xl md:text-lg p-4 md:px-6 text-center">
        {text}
      </div>
    </div>
  );
};

export default NumberBox;
