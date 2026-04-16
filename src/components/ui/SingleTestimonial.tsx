import React from "react";

interface SingleTestimonialProps {
  quote: string;
  author: string;
  image: string;
  reversed?: boolean;
}

const SingleTestimonial: React.FC<SingleTestimonialProps> = ({
  quote,
  author,
  image,
  reversed = false,
}) => (
  <article
    className={[
      "flex items-center gap-2 md:gap-x-4",
      reversed ? "flex-row-reverse" : "flex-row",
    ].join(" ")}
  >
    <img
      src={image}
      alt={author}
      className="h-24 w-24 shrink-0 md:h-28 md:w-28 rounded-full object-cover"
    ></img>
    <div className="max-w-2xl">
      <p className="text-xl italic text-muted-foreground font-normal leading-relaxed m-0">
        “{quote}”
      </p>
      <p className="text-xl not-italic text-primary-dark font-semibold mt-1 m-0">
        {author}
      </p>
    </div>
  </article>
);

export default SingleTestimonial;
