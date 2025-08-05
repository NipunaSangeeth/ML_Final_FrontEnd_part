// src/pages/qualifications/QualificationsFormPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QualificationsFormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    headline: "",
    email: "",
    website: "",
    phone: "",
    location: "",
    profiles: [""],
    experience: [{ company: "", position: "", dateRange: "", location: "" }],
    education: [
      {
        institution: "",
        typeOfStudy: "",
        areaOfStudy: "",
        score: "",
        dateRange: "",
      },
    ],
    skills: [{ name: "", description: "", level: "3" }],
    languages: [{ name: "", description: "", level: "3" }],
    certifications: [{ name: "", issuer: "", date: "", website: "" }],
    interests: [""],
    projects: [{ name: "", description: "", dateRange: "", website: "" }],
    volunteering: [
      { organization: "", position: "", dateRange: "", location: "" },
    ],
    references: [{ name: "", email: "", contactNumber: "" }],
    summary: "",
    user: "demoUser",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (section, index, key, value) => {
    const updated = [...formData[section]];
    updated[index][key] = value;
    setFormData((prev) => ({ ...prev, [section]: updated }));
  };

  const handleAddItem = (section, defaultItem) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], defaultItem],
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/user-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit profile");

      alert("Profile submitted successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Professional Profile Form</h1>

      {/* Simple Fields */}
      {[
        "fullName",
        "dateOfBirth",
        "headline",
        "email",
        "website",
        "phone",
        "location",
        "summary",
      ].map((field) => (
        <div className="mb-4" key={field}>
          <label className="block font-medium mb-1 capitalize">{field}</label>
          <input
            type={field === "dateOfBirth" ? "date" : "text"}
            value={formData[field]}
            onChange={(e) => handleChange(field, e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      ))}

      {/* Dynamic Example: Experience Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
        {formData.experience.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["company", "position", "dateRange", "location"].map((key) => (
              <input
                key={key}
                placeholder={key}
                value={item[key]}
                onChange={(e) =>
                  handleArrayChange("experience", idx, key, e.target.value)
                }
                className="border px-3 py-2 rounded"
              />
            ))}
          </div>
        ))}
        <button
          onClick={() =>
            handleAddItem("experience", {
              company: "",
              position: "",
              dateRange: "",
              location: "",
            })
          }
          className="text-sm text-blue-600 underline"
        >
          + Add more experience
        </button>
      </div>

      {/* education */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Education</h2>
        {formData.experience.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["Institution", "TypeOfStudy", "DateRange", "AreaOfStudy"].map(
              (key) => (
                <input
                  key={key}
                  placeholder={key}
                  value={item[key]}
                  onChange={(e) =>
                    handleArrayChange("education", idx, key, e.target.value)
                  }
                  className="border px-3 py-2 rounded"
                />
              )
            )}
          </div>
        ))}
        <button
          onClick={() =>
            handleAddItem("education", {
              institution: "",
              typeOfStudy: "",
              dateRange: "",
              areaOfStudy: "",
            })
          }
          className="text-sm text-blue-600 underline"
        >
          + Add more Education
        </button>
      </div>

      {/* skills */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">skills</h2>
        {formData.experience.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["name", "description"].map((key) => (
              <input
                key={key}
                placeholder={key}
                value={item[key]}
                onChange={(e) =>
                  handleArrayChange("skills", idx, key, e.target.value)
                }
                className="border px-3 py-2 rounded"
              />
            ))}
          </div>
        ))}
        <button
          onClick={() =>
            handleAddItem("skills", {
              name: "",
              description: "",
              //levels part......
            })
          }
          className="text-sm text-blue-600 underline"
        >
          + Add more skills
        </button>
      </div>


      {/* languages */}

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">languages</h2>
        {formData.experience.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["name", "description"].map((key) => (
              <input
                key={key}
                placeholder={key}
                value={item[key]}
                onChange={(e) =>
                  handleArrayChange("languages", idx, key, e.target.value)
                }
                className="border px-3 py-2 rounded"
              />
            ))}
          </div>
        ))}
        <button
          onClick={() =>
            handleAddItem("languages", {
              name: "",
              description: "",
              //levels part......
            })
          }
          className="text-sm text-blue-600 underline"
        >
          + Add more languages
        </button>
      </div>


{/* certifications */}

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">certifications</h2>
        {formData.experience.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["name", "issuer","date","website"].map((key) => (
              <input
                key={key}
                placeholder={key}
                value={item[key]}
                onChange={(e) =>
                  handleArrayChange("certifications", idx, key, e.target.value)
                }
                className="border px-3 py-2 rounded"
              />
            ))}
          </div>
        ))}
        <button
          onClick={() =>
            handleAddItem("certifications", {
              name: "",
              issuer: "",
              date:"",
              website:""
              //levels part......
            })
          }
          className="text-sm text-blue-600 underline"
        >
          + Add more certifications
        </button>
      </div>

      {/* certifications */}

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">certifications</h2>
        {formData.experience.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["name", "issuer","date","website"].map((key) => (
              <input
                key={key}
                placeholder={key}
                value={item[key]}
                onChange={(e) =>
                  handleArrayChange("certifications", idx, key, e.target.value)
                }
                className="border px-3 py-2 rounded"
              />
            ))}
          </div>
        ))}
        <button
          onClick={() =>
            handleAddItem("certifications", {
              name: "",
              issuer: "",
              date:"",
              website:""
              //levels part......
            })
          }
          className="text-sm text-blue-600 underline"
        >
          + Add more certifications
        </button>
      </div>

      

      {/* You can repeat the same structure for education, skills, projects, etc. */}

      <div className="flex justify-between mt-8">
        <button
          onClick={() => navigate("/qualifications")}
          className="text-sm text-gray-600 underline"
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit Profile
        </button>
      </div>
    </div>
  );
};

export default QualificationsFormPage;
