import Image from "next/image";

type Props = {
  photoSrc: string;
  name: string;
  quote: string;
  reverse?: boolean;
};

export default function QuoteMember({
  photoSrc,
  name,
  quote,
  reverse = false,
}: Props) {
  return (
    <div
      className={
        "flex h-30 w-full items-center gap-2 " +
        (reverse ? "flex-row-reverse" : "flex-row")
      }
    >
      <div className="relative aspect-square h-full shrink-0 overflow-hidden rounded-full">
        <Image
          src={photoSrc}
          alt={"Photo of " + name}
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-2xl gap-2">
        {/*TODO: change the hardcoded colours to tokens once tokens decided upon*/}
        <p className="text-xl font-normal text-gray-700 italic">
          &quot;{quote}&quot;
        </p>
        <p className="text-xl font-semibold text-gray-900">~ {name}</p>
      </div>
    </div>
  );
}
