import react from "react";

export default function GoogleMaps() {
  return (
    <div className="flex flex-col sm:flex-row p-2">
      <div className="size-1/2">
        <iframe
          className="size-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdE0KFAk9wt_1bOyoZcppTPMjwyFcWyjk
    &q=5H3P%2062%20München"
        ></iframe>
      </div>
      <div className=""></div>
    </div>
  );
}
