"use client";
// import { useState } from "react";

// export default function ReportForm({ addReport }) {
//   const [area, setArea] = useState("");
//   const [status, setStatus] = useState("out");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newReport = {
//       area,
//       status,
//       time: new Date().toLocaleString(),
//     };

//     addReport(newReport);
//     setArea("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 space-y-2">
//       <input
//         type="text"
//         placeholder="Enter your area (e.g. UI, Ojoo)"
//         value={area}
//         onChange={(e) => setArea(e.target.value)}
//         className="border p-2 w-full"
//         required
//       />

//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         className="border p-2 w-full"
//       >
//         <option value="out">⚡ Power Out</option>
//         <option value="restored">✅ Power Restored</option>
//       </select>

//       <button className="bg-blue-600 text-white p-2 w-full rounded">
//         Submit Report
//       </button>
//     </form>
//   );
// }

"use client";
import { useState } from "react";

export default function ReportForm({ addReport }) {
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("out");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!area.trim()) return;

    const newReport = {
      area,
      status,
      time: new Date().toLocaleString(),
    };

    addReport(newReport);
    setArea("");
    setStatus("out");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-lg font-semibold">Report Power Status</h2>

      {/* Area Input */}
      <div>
        <label className="text-sm text-gray-500">Location</label>
        <input
          type="text"
          placeholder="e.g. Bodija, Ibadan"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>

      {/* Status Select */}
      <div>
        <label className="text-sm text-gray-500">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="out">⚡ Power Out</option>
          <option value="restored">✅ Power Restored</option>
        </select>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-purple-600 text-white py-2 rounded-xl font-medium hover:bg-purple-700 transition">
        Submit Report
      </button>
    </form>
  );
}
