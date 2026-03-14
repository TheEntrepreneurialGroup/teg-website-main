import Image from "next/image";
import { Link } from "@/i18n/navigation";

type LogoProps = {
  variant?: "white" | "color";
  width?: number;
  height?: number;
  alt?: string;
};

const DEFAULT_WIDTH = 140;
const DEFAULT_HEIGHT = 40;

export default function Logo({
  variant = "white",
  width,
  height,
  alt = "TEG | The Entrepreneurial Group",
}: LogoProps) {
  const hasWidth = typeof width === "number";
  const hasHeight = typeof height === "number";

  const computedWidth = hasWidth ? width : DEFAULT_WIDTH;
  const computedHeight = hasHeight ? height : DEFAULT_HEIGHT;

  // Keep intrinsic SVG proportions by setting only one rendered axis when possible.
  const style =
    hasHeight && !hasWidth
      ? { width: "auto", height: `${computedHeight}px` }
      : { width: `${computedWidth}px`, height: "auto" };

  const src =
    variant === "white" ? "/common/teg/TEG_logo_white.svg" : "/TEG_logo.svg";
  return (
    <Link href="/" aria-label="Home">
      <Image
        src={src}
        alt={alt}
        width={computedWidth}
        height={computedHeight}
        style={style}
        priority
      />
    </Link>
  );
}
