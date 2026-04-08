// import React from "react";
// const GlobalBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-50 pointer-events-none bg-black">
//       <div
//         className="absolute bottom-0 left-0 w-full h-[60%] blur-3xl opacity-70"
//         style={{
//           background:
//             "radial-gradient(80% 45% at 25% 55%, #0ea5e9 0%, transparent 65%)",
//         }}
//       />

//       <div
//         className="absolute bottom-0 left-0 w-full h-[60%] blur-3xl opacity-70"
//         style={{
//           background:
//             "radial-gradient(75% 45% at 50% 50%, #14b8a6 0%, transparent 65%)",
//         }}
//       />

//       <div
//         className="absolute bottom-0 right-0 w-full h-[60%] blur-3xl opacity-60"
//         style={{
//           background:
//             "radial-gradient(65% 45% at 80% 50%, #ef4444 0%, transparent 65%)",
//         }}
//       />
//     </div>
//   );
// };

// export default GlobalBackground;

import React from "react";
import bgImage from "../../Images/Generated Image January 06, 2026 - 4_40PM.jpeg";

const GlobalBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-50 pointer-events-none "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000", // fallback
      }}
    />
  );
};

export default GlobalBackground;
