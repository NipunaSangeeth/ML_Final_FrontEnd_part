// // src/pages/jobs/PostJobPage.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PostJobPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     jobRole: '',
//     company: '',
//     category: '',
//     location: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     const emptyFields = Object.entries(formData).filter(([_, v]) => !v.trim());
//     if (emptyFields.length > 0) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const job = {
//       ...formData,
//       id: Date.now(),
//       postedDate: new Date().toLocaleDateString()
//     };

//     const existing = JSON.parse(localStorage.getItem('skillBridgeJobs') || '[]');
//     localStorage.setItem('skillBridgeJobs', JSON.stringify([...existing, job]));

//     alert("Job posted successfully.");
//     navigate('/');
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Post Job Vacancy</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {['jobRole', 'company', 'category', 'location'].map((field) => (
//           <div key={field}>
//             <label className="block text-sm font-medium capitalize mb-1">{field}</label>
//             <input
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//               placeholder={`Enter ${field}`}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="mb-6">
//         <label className="block text-sm font-medium mb-1">Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           rows="5"
//           className="w-full border px-3 py-2 rounded"
//           placeholder="Describe the job role..."
//         />
//       </div>

//       <div className="flex justify-between">
//         <button
//           onClick={() => navigate('/')}
//           className="text-sm underline text-gray-600"
//         >
//           ← Back
//         </button>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostJobPage;
// src/pages/jobs/PostJobPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostJobPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobRole: '',
    company: '',
    category: '',
    location: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // client-side check (keeps your existing behaviour)
    const emptyFields = Object.entries(formData).filter(([_, v]) => !v.toString().trim());
    if (emptyFields.length > 0) {
      alert("Please fill in all fields.");
      return;
    }

    // Build payload for backend
    const payload = {
      role: formData.jobRole,
      company: formData.company,
      category: formData.category,
      location: formData.location,
      description: formData.description,
      postedDate: new Date().toISOString()
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/add-job",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("response", response.data);

      // Reset form on success
      setFormData({
        jobRole: '',
        company: '',
        category: '',
        location: '',
        description: ''
      });

      alert("Job posted successfully.");
      navigate('/'); // or navigate to jobs listing page
    } catch (error) {
      console.error("Error posting job:", error.response?.data || error.message);
      // Show user-friendly error
      alert("Failed to post job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post Job Vacancy</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {['jobRole', 'company', 'category', 'location'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium capitalize mb-1">{field}</label>
            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          className="w-full border px-3 py-2 rounded"
          placeholder="Describe the job role..."
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-sm underline text-gray-600"
          disabled={loading}
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          className={`px-4 py-2 rounded text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default PostJobPage;
