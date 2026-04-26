// const ReportCard = ({ report }) => {
//   return (
//     <div className="border p-3 rounded shadow bg-white">
//       <h3 className="font-bold text-lg">{report.area}</h3>
//       <p>
//         Status:{" "}
//         <span
//           className={
//             report.status === "out" ? "text-red-500" : "text-green-600"
//           }
//         >
//           {report.status === "out" ? "Power Out" : "Restored"}
//         </span>
//       </p>
//       <p className="text-sm text-gray-500">{report.time}</p>
//     </div>
//   );
// };
// export default ReportCard;

// const ReportCard = ({ report }) => {
//   return (
//     <div className="border p-3 rounded shadow bg-white">
//       <h3 className="font-bold text-lg">{report.area}</h3>
//       <p>
//         status:{" "}
//         <span
//           className={
//             report.status === "out" ? "text-red-500" : "text-green-600"
//           }
//         >
//           {report.status === "out" ? "Power Out" : "Restored"}
//         </span>
//       </p>
//       <p className="text-sm text-gray-500">{report.time}</p>
//     </div>
//   );
// };

// export default ReportCard;

"use client";

import { useState } from "react";

export default function ReportForm({ addReport }) {
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("out");

  const submit = () => {
    if (!area) return;

    addReport({
      area,
      status,
      time: new Date().toLocaleTimeString(),
    });

    setArea("");
  };

  return (
    <div className="bg-gray-100 p-3 rounded-xl">
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Enter area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      <select
        className="w-full p-2 mb-2 border rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="out">Power Out</option>
        <option value="restored">Restored</option>
      </select>

      <button
        onClick={submit}
        className="w-full bg-purple-600 text-white p-2 rounded"
      >
        Submit Report
      </button>
    </div>
  );
}
