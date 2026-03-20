import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "white" | "color";
  alt?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

const DEFAULT_WIDTH = 140;
const DEFAULT_HEIGHT = 40;

export default function Logo({
  variant = "white",
  alt = "TEG | The Entrepreneurial Group",
  className,
  imageClassName,
  sizes,
}: LogoProps) {
  const src =
    variant === "white" ? "/common/teg/TEG_logo_white.svg" : "/TEG_logo.svg";
  return (
    <Link href="/" aria-label="Home" className={cn("inline-block", className)}>
      <Image
        className={imageClassName}
        src={src}
        alt={alt}
        width={DEFAULT_WIDTH}
        height={DEFAULT_HEIGHT}
        sizes={sizes}
        priority
      />
    </Link>
  );
}
