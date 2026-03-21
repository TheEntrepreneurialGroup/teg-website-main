import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { localeList } from "@/i18n";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./src/i18n/request.ts",
  experimental: {
    srcPath: "./src",
    // Provide the path to the messages that you're using in `AppConfig`
    createMessagesDeclaration: ["./messages/de.json", "./messages/en.json"],
    messages: {
      path: "./messages",
      locales: localeList,
      format: "json",
    },
  },
});

export default withNextIntl(nextConfig);
