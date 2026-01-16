import React from "react";
import NumberBox from "../NumberBox";

interface TEGInZahlenProps {
  className?: string;
  title: string;
  number1: string;
  text1: string;
  number2: string;
  text2: string;
  number3: string;
  text3: string;
  number4: string;
  text4: string;
}

const TEGInZahlen: React.FC<TEGInZahlenProps> = ({
  className,
  title,
  number1,
  text1,
  number2,
  text2,
  number3,
  text3,
  number4,
  text4,
}) => {
  return (
    <section className={className}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-20 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8">
          <NumberBox number={number1} text={text1} />

          <NumberBox number={number2} text={text2} />

          <NumberBox number={number3} text={text3} />

          <NumberBox number={number4} text={text4} />
        </div>
      </div>
    </section>
  );
};

export default TEGInZahlen;
