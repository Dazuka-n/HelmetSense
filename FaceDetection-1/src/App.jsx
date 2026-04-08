// import { Suspense } from "react";
// import React from "react";
// import HeroPageUI from "./components/hero-dasboard-ui/heroUi";

// export default function App() {
//   return (
//     <div className="app">
//       <Suspense fallback={<div>Loading...</div>}>
//         <HeroPageUI />
//       </Suspense>
//     </div>
//   );
// }

import { Suspense, lazy } from "react";
import GlobalBackground from "./components/background/globalBackground";
import React from "react";
const HeroPageUI = lazy(() => import("./components/hero-dasboard-ui/heroUi"));

export default function App() {
  return (
    <>
      {/* Compulsory global background */}
      <GlobalBackground />

      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <HeroPageUI />
      </Suspense>
    </>
  );
}



// import { Suspense } from "react";
// import React from "react";
// import HeroPageUI from "./components/hero-dasboard-ui/heroUi";

// export default function App() {
//   return (
//     <div className="app">
//       <Suspense fallback={<div>Loading...</div>}>
//         <HeroPageUI />
//       </Suspense>
//     </div>
//   );
// }

// import React, { Suspense, lazy } from "react";
// const HeroPageUI = lazy(() => import("./components/hero-dasboard-ui/heroUi"));

// export default function App() {
//   return (
//     <div
//       style={{ minHeight: "100vh", background: "#000", position: "relative" }}
//     >
//       {/* SVG Wave Background */}
//       <svg
//         viewBox="0 0 1440 400"
//         preserveAspectRatio="none"
//         style={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           filter: "blur(20px)",
//         }}
//       >
//         <defs>
//           <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#0bbcd6" stopOpacity="0.6" />
//             <stop offset="45%" stopColor="#0a3d5e" stopOpacity="0.5" />
//             <stop offset="70%" stopColor="#2b1b1b" stopOpacity="0.4" />
//             <stop offset="100%" stopColor="#c1441f" stopOpacity="0.6" />
//           </linearGradient>
//         </defs>

//         <path
//           d="
//             M0,200
//             C240,240 480,160 720,200
//             C960,240 1200,160 1440,200
//             L1440,400
//             L0,400
//             Z
//           "
//           fill="url(#waveGradient)"
//         />
//       </svg>

//       {/* Content */}
//       {/* <div style={{ position: "relative", zIndex: 1 }}>
//         <Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
//           <HeroPageUI />
//         </Suspense>
//       </div> */}
//     </div>
//   );
// }

// {
//   /* <div className="absolute inset-0 bg-[radial-gradient(70%_40%_at_15%_65%,rgba(0,180,200,0.35),transparent_60%),radial-gradient(60%_35%_at_45%_60%,rgba(0,90,140,0.30),transparent_65%),radial-gradient(70%_40%_at_85%_60%,rgba(255,80,40,0.35),transparent_60%)]"></div> <div className="relative z-10">{/* Your Website Content </div> </div> */
// }





