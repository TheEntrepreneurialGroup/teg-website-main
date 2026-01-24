import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "white" | "color";
  width?: number;
  height?: number;
  alt?: string;
};

export default function Logo({
  variant = "white",
  width = 140,
  height = 40,
  alt = "TEG | The Entrepreneurial Group",
}: LogoProps) {
  const src =
    variant === "white" ? "/TEG_logo_white_text.svg" : "/TEG_logo.svg";
  return (
    <Link href="/" aria-label="Home">
      <Image src={src} alt={alt} width={width} height={height} priority />
    </Link>
  );
}
