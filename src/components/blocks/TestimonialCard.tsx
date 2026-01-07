import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialCardProps {
  quote: string;
  person: {
    name: string;
    roleLine1: string;
    roleLine2: string;
  };
  avatar?: string;
  companyLogo?: string;
}

export function TestimonialCard({
  quote,
  person,
  avatar,
  companyLogo,
}: TestimonialCardProps) {
  return (
    <div className="w-[90vw] md:w-[50vw] lg:w-[35vw] min-h-[320px] flex flex-col p-4 bg-gray-100  relative">
      <div className="relative flex-grow text-left">
        <Quote className="absolute left-0 top-0 w-8 h-8 opacity-30" />
        <p className="text-lg leading-relaxed font-medium px-14 py-4">
          {quote}
        </p>
        <Quote className="absolute right-2 bottom-2 w-8 h-8 opacity-30 rotate-180" />
      </div>

      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2">
          <Avatar className="w-24 h-24">
            {avatar && avatar !== "placeholder" && (
              <AvatarImage
                src={avatar}
                alt={person.name}
                className="object-cover object-top"
              />
            )}
            <AvatarFallback className="bg-gray-300 text-gray-600 text-2xl">
              {person.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left leading-loose">
            <p className="font-semibold">{person.name}</p>
            <p className="text-sm text-muted-foreground">{person.roleLine1}</p>
            <p className="text-sm text-muted-foreground">{person.roleLine2}</p>
          </div>
        </div>
        {companyLogo && (
          <div className="mb-2 mr-4">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-10 w-auto object-contain opacity-80"
            />
          </div>
        )}
      </div>
    </div>
  );
}
