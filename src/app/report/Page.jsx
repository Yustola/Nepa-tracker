// import Navbar from "@/components/Navbar";

// ("use client");

// export default function ReportsPage() {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">📄 All Reports</h1>
//       <p className="mt-2 text-gray-600">
//         All submitted reports will show here.
//       </p>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(saved);
  }, []);

  return (
    <div>
      {reports.length === 0 ? (
        <p>No reports yet</p>
      ) : (
        reports.map((r, i) => <div key={i}>{r.area}</div>)
      )}
    </div>
  );
}
