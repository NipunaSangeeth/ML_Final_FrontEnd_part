// // LeftSide.jsx
// import React from "react";

// const LeftSide = ({ setActiveTab }) => {
//   return (
//     <div
//       style={{
//         width: "220px",
//         backgroundColor: "#f8f9fa",
//         padding: "20px",
//         borderRight: "1px solid #ddd",
//       }}
//     >
//       <h2 style={{ color: "#007bff", marginBottom: "20px" }}>Skill Bridge</h2>
//       <button onClick={() => setActiveTab("addQualifications")}>
//         ➕ Add Qualifications
//       </button>
//       <br />
//       <br />
//       <button onClick={() => setActiveTab("postJob")}>
//         📄 Post Job Vacancies
//       </button>
//       <br />
//       <br />
//       <button onClick={() => setActiveTab("logout")}>🚪 Logout</button>
//     </div>
//   );
// };

//  export default LeftSide;

import React from "react";

const LeftSide = ({ setActiveTab }) => {
  return (
    <div className="w-[220px] bg-gray-100 p-1 border-r border-gray-300">
      {/* Gradient Title */}
      <h2 className="text-2xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Skill Bridge
      </h2>

      {/* Buttons */}
      <div className="flex flex-col gap-10">
        <button
          onClick={() => setActiveTab("addQualifications")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition"
        >
          ➕ Add Qualifications
        </button>

        <button
          onClick={() => setActiveTab("postJob")}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded transition"
        >
          📄 Post Job Vacancies
        </button>

        <button
          onClick={() => setActiveTab("logout")}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
