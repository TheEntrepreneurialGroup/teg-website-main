import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import QuoteMember from "../QuoteMember";

export default function TestimonialsMembers() {
  const t = useTranslations("testimonials_members");

  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-6">
      <h1 className="mb-8">{t("title")}</h1>

      <QuoteMember
        photoSrc="/student-section/ahmed.jpeg"
        name={t("name_1")}
        quote={t("quote_1")}
      />

      <QuoteMember
        photoSrc="/student-section/luis.jpeg"
        name={t("name_2")}
        quote={t("quote_2")}
        reverse
      />

      <QuoteMember
        photoSrc="/student-section/yesiienia.jpeg"
        name={t("name_3")}
        quote={t("quote_3")}
      />

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
        {/*TODO: add button component once finished afaik the current one is a remenant from last webpage*/}
        <div className="flex items-center justify-center bg-amber-600">
          <p className="px-8 py-2">Button</p>
        </div>
      </div>
    </div>
  );
}
