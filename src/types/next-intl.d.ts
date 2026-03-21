import { AppLocale } from "@/i18n";
import messages from "../../messages/de.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: AppLocale;
    Messages: typeof messages;
  }
}
