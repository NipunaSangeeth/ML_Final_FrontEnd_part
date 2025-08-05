// src/pages/jobs/PostJobPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostJobPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobRole: '',
    company: '',
    category: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const emptyFields = Object.entries(formData).filter(([_, v]) => !v.trim());
    if (emptyFields.length > 0) {
      alert("Please fill in all fields.");
      return;
    }

    const job = {
      ...formData,
      id: Date.now(),
      postedDate: new Date().toLocaleDateString()
    };

    const existing = JSON.parse(localStorage.getItem('skillBridgeJobs') || '[]');
    localStorage.setItem('skillBridgeJobs', JSON.stringify([...existing, job]));

    alert("Job posted successfully.");
    navigate('/');
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
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostJobPage;
