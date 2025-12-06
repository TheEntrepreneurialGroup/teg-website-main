// import { useEffect, useState} from "react";
// import "./CookieBanner.css";
// import { RollerCoaster } from 'lucide-react';

// export default function CookieBanner() {
// 	const [visible, setVisible] = useState(false);

// 	useEffect(() => {
// 		if (!localStorage.getItem("cookie-consent")) {
// 			setVisible(true);
// 		}
// 	}, []);

// 	const accept = () => {
// 		localStorage.setItem("cookie-consent", "granted");
// 		setVisible(false);
// 		enableAnalytics();
// 	};

// 	const reject = () => {
// 		localStorage.setItem("cookie-consent" , "denied");
// 		setVisible(false);
// 	}

// 	function enableAnalytics() {
// 		const script = document.createElement("script");
// 		script.src = "https://www.googletagmanager.com/gtag/js?id=G-364W48FTCN";
//     script.async = true;
//     document.head.appendChild(script);

// 		(window as any).dataLayer = (window as any).dataLayer || [];
//     function gtag(...args: any[]) {
//       (window as any).dataLayer.push(args);
//     }
//     gtag("js", new Date());
//     gtag("config", "G-364W48FTCN", { anonymize_ip: true });
// 	}

// 	if(!visible) return null;

// 	return(
// 		<div className='cookie-banner' role='presentation' aria-hidden= "true">

// 			<div className='cookie-span'>We use cookies for analytics. Do you agree?</div>

// 			<div className='cookie-buttons' role="group" aria-label="Cookie choices">
// 				<button className='accept-button' onClick={accept} style={{ marginLeft: "10px" }}>Accept All</button>

// 				<button className='reject-button' onClick={reject} style={{ marginLeft: "5px" }}>Reject All</button>

// 				<button className='policy-button'>Privacy Policy</button>
// 			</div>

// 		</div>
// 	);
// }

// import { useEffect, useState } from "react";
// import "./CookieBanner.css";

// interface WindowWithDataLayer extends Window {
//   dataLayer: any[];
//   gtag?: (...args: any[]) => void;
// }

// export default function CookieBanner() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (!localStorage.getItem("cookie-consent")) {
//       setVisible(true);
//     }
//   }, []);

//   const accept = () => {
//     localStorage.setItem("cookie-consent", "granted");
//     setVisible(false);
//     enableAnalytics();
//   };

//   const reject = () => {
//     localStorage.setItem("cookie-consent", "denied");
//     setVisible(false);
//   };

//   const goToPrivacyPolicy = () => {
//     window.location.href = "../pages/PrivacyPolicy.tsx";
//   };

//   function enableAnalytics() {
//     if (document.querySelector('script[src*="googletagmanager.com"]')) {
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = "https://www.googletagmanager.com/gtag/js?id=G-364W48FTCN";
//     script.async = true;
//     document.head.appendChild(script);

//     const win = window as WindowWithDataLayer;
//     win.dataLayer = win.dataLayer || [];
//     win.gtag = function (...args: any[]) {
//       win.dataLayer.push(args);
//     };
//     win.gtag("js", new Date());
//     win.gtag("config", "G-364W48FTCN", { anonymize_ip: true });
//   }

//   if (!visible) return null;

//   return (
//     <div
//       className="cookie-banner"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="cookie-banner-title"
//     >
//       <div id="cookie-banner-title" className="cookie-span">
//         We use cookies for analytics. Do you agree?
//       </div>
//       <div className="cookie-buttons" role="group" aria-label="Cookie consent options">
//         <button
//           className="accept-button"
//           onClick={accept}
//           aria-label="Accept all cookies"
//         >
//           Accept All
//         </button>
//         <button
//           className="reject-button"
//           onClick={reject}
//           aria-label="Reject all cookies"
//         >
//           Reject All
//         </button>
//         <button
//           className="policy-button"
//           onClick={goToPrivacyPolicy}
//           aria-label="View privacy policy"
//         >
//           Privacy Policy
//         </button>
//       </div>
//     </div>
//   );
// }
