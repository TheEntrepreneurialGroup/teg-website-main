import react from "react";
import { useIntl } from "react-intl";

export default function GoogleMaps() {
  const intl = useIntl();
  return (
    <section className="flex justify-center ">
      <div className="flex flex-col sm:flex-row items-center w-full max-w-7xl p-2 sm:p-8 md:p-14 lg:p-20 justify-center sm:justify-start gap-4 sm:gap-6 md:gap-14 sm:items-start">
        {/* Maps Section */}
        <div className="flex-3 h-[250px] w-full min-w-[250px] items-start">
          <iframe
            className="size-full border-0"
            title="TEG Google Maps Indication"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcYp9nJV1nkcRpEILk6Y2DlQ&key=AIzaSyBdE0KFAk9wt_1bOyoZcppTPMjwyFcWyjk"
          ></iframe>
        </div>

        {/* Text Section */}
        <div className="flex-2 flex flex-col justify-center sm:pt-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary text-left">
            {intl.formatMessage({ id: "student.maps.title" })}
          </h3>
          <div className="text-xl text-gray-700 text-left max-w-screen-sm">
            <p className="m-0 mt-2">
              {intl.formatMessage({ id: "student.maps.description" })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
