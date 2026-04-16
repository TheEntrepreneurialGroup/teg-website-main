import Badge from "../Badge";
import { SectionTitle } from "@/components/blocks/SectionTitle";

interface LogoImage {
  image: string;
  text?: string;
}

interface LogoSectionProps {
  images: LogoImage[];
  title: string;
  description: string;
}

export default function LogoSection({
  images,
  title,
  description,
}: LogoSectionProps) {
  return (
    <section className="p-4 sm:p-8 md:p-14 lg:p-20">
      <div className="text-left">
        <SectionTitle text={title} className="text-left" />
      </div>

      {/* Logos */}
      <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
        {images.map(({ image, text = "Logo" }, idx) => (
          <Badge key={idx} image={image} text={text} />
        ))}
      </div>
      {/* Text under the logos */}
      <p className="mt-6 text-xl text-left text-foreground">{description}</p>
    </section>
  );
}
