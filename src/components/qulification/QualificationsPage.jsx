// // src/pages/qualifications/QualificationsPage.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const QualificationsPage = () => {
//   const navigate = useNavigate();
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (file) setSelectedFile(file);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-2">Add Your Qualifications</h1>
//       <p className="text-gray-600 mb-6">Choose how you'd like to share your professional background</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Upload CV */}
//         <div className="border p-6 rounded shadow">
//           <h2 className="font-semibold mb-4">Upload Your CV</h2>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             onChange={handleFileUpload}
//             className="mb-2"
//           />
//           {selectedFile && (
//             <p className="text-sm text-green-700">Selected: {selectedFile.name}</p>
//           )}
//           <button
//             onClick={() => navigate('/job-matching')}
//             className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
//           >
//             Submit CV
//           </button>
//         </div>

//         {/* Manual Entry */}
//         <div className="border p-6 rounded shadow">
//           <h2 className="font-semibold mb-4">Fill Details Manually</h2>
//           <p className="text-gray-600 text-sm mb-4">Enter your information manually by filling out a form.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Fill Form
//           </button>
//         </div>
//       </div>

//       <div className="mt-6">
//         <button
//           onClick={() => navigate('/')}
//           className="text-sm underline text-gray-600"
//         >
//           ← Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QualificationsPage;

//+++++++++++++++++++++++++++++++++++++++++++++++

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QualificationsPage = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add Your Qualifications</h1>
      <p className="text-gray-600 mb-8">Choose how you'd like to share your background</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CV Upload */}
        <div className="border rounded p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Upload Your CV</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setSelectedFile(e.target.files?.[0])}
            className="mb-2"
          />
          {selectedFile && <p className="text-sm text-green-600">Selected: {selectedFile.name}</p>}
          <button
            onClick={() => navigate("/job-matching")}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit CV
          </button>
        </div>

        {/* Manual Entry */}
        <div className="border rounded p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Fill Details Manually</h2>
          <p className="text-gray-600 mb-4">Enter your qualifications manually.</p>
          <button
            onClick={() => navigate("/qualifications-form")}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Add Professional Background & Qualification
          </button>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 text-sm text-gray-600 underline"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default QualificationsPage;
