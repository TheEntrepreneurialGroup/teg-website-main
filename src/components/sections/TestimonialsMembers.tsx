import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import QuoteMember from "../QuoteMember";
import { Button } from "../ui/Button";
import Link from "next/link";

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
        {/*TODO: change the page to redirect towards; maybe style changes; afaik button component not really done yet*/}
        <Button variant="secondary" size="lg" asChild>
          <Link href="/students">{t("button")}</Link>
        </Button>
      </div>
    </div>
  );
}
