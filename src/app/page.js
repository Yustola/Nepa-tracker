// // "use client";

// // import { useState } from "react";
// // import dynamic from "next/dynamic";
// // import Navbar from "../components/Navbar";
// // import ReportForm from "../components/ReportForm";

// // // ✅ Fix Leaflet SSR issue
// // const MapView = dynamic(() => import("../components/MapView"), {
// //   ssr: false,
// // });

// // export default function Home() {
// //   const [reports, setReports] = useState([]);

// //   const addReport = (report) => {
// //     setReports([report, ...reports]);
// //   };

// //   return (
// //     <div className="flex justify-center bg-gray-200 min-h-screen">
// //       <div className="w-full max-w-sm bg-gray-50 min-h-screen relative pb-24">
// //         {/* Navbar */}
// //         <Navbar />

// //         {/* HERO CARD */}
// //         <div className="px-4 mt-2">
// //           <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-5 rounded-3xl shadow-lg">
// //             <h2 className="text-lg font-semibold">Report power issue</h2>
// //             <p className="text-sm opacity-90 mb-3">
// //               Submit outage in your area
// //             </p>

// //             <div className="bg-white rounded-xl flex items-center px-3 py-2">
// //               <input
// //                 placeholder="Enter location"
// //                 className="flex-1 outline-none text-black text-sm"
// //               />
// //               <span>⚡</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ✅ MAP SECTION */}
// //         <div className="px-4 mt-4">
// //           <MapView />
// //         </div>

// //         {/* REPORT FORM */}
// //         <div className="px-4 mt-4">
// //           <ReportForm addReport={addReport} />
// //         </div>

// //         {/* RECENT REPORTS */}
// //         <div className="px-4 mt-5">
// //           <div className="flex justify-between items-center mb-2">
// //             <h3 className="font-semibold text-gray-800">Recent Reports</h3>
// //           </div>

// //           {reports.length === 0 && (
// //             <p className="text-gray-400 text-sm">No reports yet</p>
// //           )}

// //           {reports.map((r, i) => (
// //             <div
// //               key={i}
// //               className="bg-white p-4 rounded-2xl shadow-sm mb-3 flex justify-between items-center"
// //             >
// //               <div>
// //                 <p className="font-medium text-gray-800">{r.area}</p>
// //                 <p className="text-xs text-gray-400">{r.time}</p>
// //               </div>

// //               <span
// //                 className={`text-xs px-3 py-1 rounded-full ${
// //                   r.status === "out"
// //                     ? "bg-red-100 text-red-600"
// //                     : "bg-green-100 text-green-600"
// //                 }`}
// //               >
// //                 {r.status === "out" ? "Outage" : "Restored"}
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* FLOATING BOTTOM NAV */}
// //         <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white shadow-xl rounded-2xl flex justify-around items-center py-3">
// //           <span className="text-gray-500 text-2xl cursor-pointer">🏠</span>
// //           <span className="text-gray-500 text-2xl cursor-pointer">🗺️</span>
// //           <span className="text-gray-500 text-2xl cursor-pointer">📄</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";
// import Navbar from "../components/Navbar";
// import ReportForm from "../components/ReportForm";

// // Fix Leaflet SSR issue
// const MapView = dynamic(() => import("../components/MapView"), {
//   ssr: false,
// });

// export default function Home() {
//   const [reports, setReports] = useState([]);
//   const [activeTab, setActiveTab] = useState("home");

//   const addReport = (report) => {
//     setReports((prev) => [report, ...prev]); // ✅ fixed
//   };

//   return (
//     <div className="flex justify-center bg-gray-200 min-h-screen">
//       <div className="w-full max-w-sm bg-gray-50 min-h-screen relative pb-24 overflow-hidden">
//         {/* Navbar */}
//         <Navbar />

//         {/* ================= HOME SCREEN ================= */}
//         {activeTab === "home" && (
//           <>
//             {/* HERO */}
//             <div className="px-4 mt-2">
//               <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-5 rounded-3xl shadow-lg">
//                 <h2 className="text-lg font-semibold">Report power issue</h2>
//                 <p className="text-sm opacity-90 mb-3">
//                   Submit outage in your area
//                 </p>

//                 <div className="bg-white rounded-xl flex items-center px-3 py-2">
//                   <input
//                     placeholder="Enter location"
//                     className="flex-1 outline-none text-black text-sm"
//                   />
//                   <span>⚡</span>
//                 </div>
//               </div>
//             </div>

//             {/* REPORT FORM */}
//             <div className="px-4 mt-4">
//               <ReportForm addReport={addReport} />
//             </div>

//             {/* RECENT REPORTS */}
//             <div className="px-4 mt-5">
//               <h3 className="font-semibold text-gray-800 mb-2">
//                 Recent Reports
//               </h3>

//               {reports.length === 0 && (
//                 <p className="text-gray-400 text-sm">No reports yet</p>
//               )}

//               {reports.map((r, i) => (
//                 <div
//                   key={i}
//                   className="bg-white p-4 rounded-2xl shadow-sm mb-3 flex justify-between items-center"
//                 >
//                   <div>
//                     <p className="font-medium text-gray-800">{r.area}</p>
//                     <p className="text-xs text-gray-400">{r.time}</p>
//                   </div>

//                   <span
//                     className={`text-xs px-3 py-1 rounded-full ${
//                       r.status === "out"
//                         ? "bg-red-100 text-red-600"
//                         : "bg-green-100 text-green-600"
//                     }`}
//                   >
//                     {r.status === "out" ? "Outage" : "Restored"}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* ================= MAP SCREEN ================= */}
//         {activeTab === "map" && (
//           <div className="absolute inset-0 z-10">
//             <MapView />
//           </div>
//         )}

//         {/* ================= BOTTOM NAV ================= */}
//         <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white shadow-xl rounded-2xl flex justify-around items-center py-3 z-20">
//           <span
//             onClick={() => setActiveTab("home")}
//             className={`text-2xl cursor-pointer ${
//               activeTab === "home" ? "text-indigo-600" : "text-gray-500"
//             }`}
//           >
//             🏠
//           </span>

//           <span
//             onClick={() => setActiveTab("map")}
//             className={`text-2xl cursor-pointer ${
//               activeTab === "map" ? "text-indigo-600" : "text-gray-500"
//             }`}
//           >
//             🗺️
//           </span>

//           <span
//             onClick={() => setActiveTab("reports")}
//             className={`text-2xl cursor-pointer ${
//               activeTab === "reports" ? "text-indigo-600" : "text-gray-500"
//             }`}
//           >
//             📄
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import ReportForm from "../components/ReportForm";

// Fix Leaflet SSR
const MapView = dynamic(() => import("../components/MapView"), {
  ssr: false,
});

export default function Home() {
  const [reports, setReports] = useState([]);
  const [activeTab, setActiveTab] = useState("home");

  const addReport = (report) => {
    setReports((prev) => [report, ...prev]); // ✅ correct way
  };

  return (
    <div className="flex justify-center bg-gray-200 min-h-screen">
      <div className="w-full max-w-sm bg-gray-50 min-h-screen relative pb-24 overflow-hidden">
        {/* NAVBAR */}
        <Navbar />

        {/* ================= HOME ================= */}
        {activeTab === "home" && (
          <>
            {/* HERO */}
            <div className="px-4 mt-2">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-5 rounded-3xl shadow-lg">
                <h2 className="text-lg font-semibold">Report power issue</h2>
                <p className="text-sm opacity-90 mb-3">
                  Submit outage in your area
                </p>

                <div className="bg-white rounded-xl flex items-center px-3 py-2">
                  <input
                    placeholder="Enter location"
                    className="flex-1 outline-none text-black text-sm"
                  />
                  <span>⚡</span>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="px-4 mt-4">
              <ReportForm addReport={addReport} />
            </div>

            {/* RECENT REPORTS */}
            <div className="px-4 mt-5">
              <h3 className="font-semibold text-gray-800 mb-2">
                Recent Reports
              </h3>

              {reports.length === 0 && (
                <p className="text-gray-400 text-sm">No reports yet</p>
              )}

              {reports.map((r, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-2xl shadow-sm mb-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-gray-800">{r.area}</p>
                    <p className="text-xs text-gray-400">{r.time}</p>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      r.status === "out"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {r.status === "out" ? "Outage" : "Restored"}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ================= MAP ================= */}
        {activeTab === "map" && (
          <div className="absolute inset-0 z-10">
            <MapView />
          </div>
        )}

        {/* ================= REPORTS ================= */}
        {activeTab === "reports" && (
          <div className="px-4 mt-4">
            <h3 className="font-semibold text-gray-800 mb-3">All Reports</h3>

            {reports.length === 0 && (
              <p className="text-gray-400 text-sm">No reports yet</p>
            )}

            {reports.map((r, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow-sm mb-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-800">{r.area}</p>
                  <p className="text-xs text-gray-400">{r.time}</p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    r.status === "out"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {r.status === "out" ? "Outage" : "Restored"}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ================= BOTTOM NAV ================= */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white shadow-xl rounded-2xl flex justify-around items-center py-3 z-20">
          <span
            onClick={() => setActiveTab("home")}
            className={`text-2xl cursor-pointer ${
              activeTab === "home" ? "text-indigo-600" : "text-gray-500"
            }`}
          >
            🏠
          </span>

          <span
            onClick={() => setActiveTab("map")}
            className={`text-2xl cursor-pointer ${
              activeTab === "map" ? "text-indigo-600" : "text-gray-500"
            }`}
          >
            🗺️
          </span>

          <span
            onClick={() => setActiveTab("reports")}
            className={`text-2xl cursor-pointer ${
              activeTab === "reports" ? "text-indigo-600" : "text-gray-500"
            }`}
          >
            📄
          </span>
        </div>
      </div>
    </div>
  );
}
