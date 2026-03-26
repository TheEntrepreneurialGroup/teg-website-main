import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TestimonialsMembers() {
  const t = useTranslations("testimonials_members");

  return (
    <div>
      <h1>{t("title")}</h1>
      <div className="flex flex-row gap-1">
        <Image
          src="/common/teg/teg-favicon.png"
          alt="Photo of member"
          width={96}
          height={96}
        />
        <div>
          <p>&quot;{t("test_1")}&quot;</p>
          <p>~ {t("name_1")}</p>
        </div>
      </div>
    </div>
  );
}
