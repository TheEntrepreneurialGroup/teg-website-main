import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getBasePath, usePageLang } from "../i18n/pageLang";

/**
 * Notice on English pages whose offer is held in German. Almost everything
 * TEG runs is German-language, so the English editions say so up front.
 * Renders nothing on German pages.
 */
const NOTICES = {
  conference: {
    lead: "This conference is held in German.",
    detail: "Live subtitles in English are available.",
  },
  event: {
    lead: "This event is held in German.",
    detail: "All talks and discussions are in German.",
  },
  events: {
    lead: "TEG events are held in German.",
    detail: "English-language formats are a rare exception.",
  },
  academy: {
    lead: "The Young Business Leadership Academy is taught in German.",
    detail:
      "All courses, workshops and coaching are in German; German at level C1 is required to apply.",
  },
} as const;

export type LanguageNoticeKind = keyof typeof NOTICES;

const LanguageNotice: React.FC<{
  kind: LanguageNoticeKind;
  className?: string;
}> = ({ kind, className = "" }) => {
  const lang = usePageLang();
  const { pathname } = useLocation();
  if (lang !== "en") return null;
  const notice = NOTICES[kind];
  return (
    <aside
      className={`lang-notice ${className}`.trim()}
      aria-label="Language"
      lang="en"
    >
      <div className="lang-notice-inner">
        <p>
          <strong>{notice.lead}</strong> {notice.detail}
        </p>
        <Link to={getBasePath(pathname)} hrefLang="de" lang="de">
          Deutsche Fassung
        </Link>
      </div>
    </aside>
  );
};

export default LanguageNotice;
