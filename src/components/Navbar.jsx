// // components/Navbar.js
// // "use client";

// // export default function Navbar() {
// //   return <div className="p-4 bg-gray-800 texh-white">Nepa Tracker</div>;
// // }

// export default function Navbar() {
//   return <div className="p-4 bg-gray-800 text-white">Nepa Tracker</div>;
// }

// // import React from 'react'

// // const Navbar = () => {
// //   return (
// //     <div>Navbar</div>
// //   )
// // }

// // export default Navbar
// import Navbar from "@/components/Navbar";
// export default function Navbar() {
//   return (
//     <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow mb-4">
//       <div>
//         <p className="text-gray-500 text-sm">Good morning,</p>
//         <h1 className="font-semibold text-lg">Visitor 👋</h1>
//       </div>

//       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//         🔔
//       </div>
//     </div>
//   );
// }

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <p className="text-gray-400 text-sm">Location</p>
        <h1 className="font-semibold text-lg">Akobo, Ibadan</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
          🔔
        </div>
        <div className="w-9 h-9 bg-purple-500 text-white rounded-full flex items-center justify-center">
          Y
        </div>
      </div>
    </div>
  );
}
