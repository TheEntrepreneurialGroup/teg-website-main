import Badge from "../Badge";
import SectionTitle from "../SectionTitle";

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
    <section className="sm:py-6 md:py-10 lg:py-16 bg-gray-100">
      <div className="container-custom">
        {/* Centered Title */}
        <div className="text-center">
          <SectionTitle title={title} />
        </div>

        {/* Logos */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
          {images.map(({ image, text = "Logo" }, idx) => (
            <Badge key={idx} image={image} text={text} />
          ))}
        </div>
        {/* Text under the logos */}
        <p className="mt-6 text-lg text-center text-black">{description}</p>
      </div>
    </section>
  );
}
