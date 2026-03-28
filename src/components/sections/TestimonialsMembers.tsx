import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function TestimonialsMembers() {
  const t = useTranslations("testimonials_members");

  return (
    <div className="flex w-full shrink-0 flex-col items-center">
      <h1>{t("title")}</h1>

      {/*TODO: refactor each quote to component*/}

      <div className="flex h-30 w-full flex-row items-center gap-2">
        <div className="relative aspect-square h-full shrink-0 overflow-hidden rounded-full">
          <Image
            src="/student-section/ahmed.jpeg"
            alt="Photo of member"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-2xl gap-2">
          {/*TODO: change the hardcoded colours to tokens once tokens decided upon*/}
          <p className="text-xl font-normal text-gray-700 italic">
            &quot;{t("test_1")}&quot;
          </p>
          <p className="text-xl font-semibold text-gray-900">~ {t("name_1")}</p>
        </div>
      </div>

      <div className="flex w-full shrink-0 flex-col items-center gap-8">
        <ArrowDown
          size={28}
          strokeWidth={1.5}
          className="text-secondary-dark"
        />
        <p className="text-xl italic">{t("cta")}</p>
        <ArrowDown
          size={28}
          strokeWidth={1.5}
          className="text-secondary-dark"
        />
        {/*TODO: addd button component once finished*/}
        <div className="flex items-center justify-center bg-amber-600">
          <p className="px-8 py-2">Button</p>
        </div>
      </div>
    </div>
  );
}
