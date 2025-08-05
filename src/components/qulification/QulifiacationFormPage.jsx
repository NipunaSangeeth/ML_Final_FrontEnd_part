// // src/pages/qualifications/QualificationsFormPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const QualificationsFormPage = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dateOfBirth: "",
//     headline: "",
//     email: "",
//     website: "",
//     phone: "",
//     location: "",
//     profiles: [""],
//     experience: [{ company: "", position: "", dateRange: "", location: "" }],
//     education: [
//       {
//         institution: "",
//         typeOfStudy: "",
//         areaOfStudy: "",
//         score: "",
//         dateRange: "",
//       },
//     ],
//     skills: [{ name: "", description: "", level: "3" }],
//     languages: [{ name: "", description: "", level: "3" }],
//     certifications: [{ name: "", issuer: "", date: "", website: "" }],
//     interests: [""],
//     projects: [{ name: "", description: "", dateRange: "", website: "" }],
//     volunteering: [
//       { organization: "", position: "", dateRange: "", location: "" },
//     ],
//     references: [{ name: "", email: "", contactNumber: "" }],
//     summary: "",
//     user: "demoUser",
//   });

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleArrayChange = (section, index, key, value) => {
//     const updated = [...formData[section]];
//     updated[index][key] = value;
//     setFormData((prev) => ({ ...prev, [section]: updated }));
//   };

//   const handleAddItem = (section, defaultItem) => {
//     setFormData((prev) => ({
//       ...prev,
//       [section]: [...prev[section], defaultItem],
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await fetch("/api/user-profile", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error("Failed to submit profile");

//       alert("Profile submitted successfully!");
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Professional Profile Form</h1>

//       {/* Simple Fields */}
//       {[
//         "fullName",
//         "dateOfBirth",
//         "headline",
//         "email",
//         "website",
//         "phone",
//         "location",
//         "summary",
//       ].map((field) => (
//         <div className="mb-4" key={field}>
//           <label className="block font-medium mb-1 capitalize">{field}</label>
//           <input
//             type={field === "dateOfBirth" ? "date" : "text"}
//             value={formData[field]}
//             onChange={(e) => handleChange(field, e.target.value)}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>
//       ))}

//       {/* Dynamic Example: Experience Section */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
//         {formData.experience.map((item, idx) => (
//           <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {["company", "position", "dateRange", "location"].map((key) => (
//               <input
//                 key={key}
//                 placeholder={key}
//                 value={item[key]}
//                 onChange={(e) =>
//                   handleArrayChange("experience", idx, key, e.target.value)
//                 }
//                 className="border px-3 py-2 rounded"
//               />
//             ))}
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             handleAddItem("experience", {
//               company: "",
//               position: "",
//               dateRange: "",
//               location: "",
//             })
//           }
//           className="text-sm text-blue-600 underline"
//         >
//           + Add more experience
//         </button>
//       </div>

//       {/* education */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">Education</h2>
//         {formData.experience.map((item, idx) => (
//           <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {["Institution", "TypeOfStudy", "DateRange", "AreaOfStudy"].map(
//               (key) => (
//                 <input
//                   key={key}
//                   placeholder={key}
//                   value={item[key]}
//                   onChange={(e) =>
//                     handleArrayChange("education", idx, key, e.target.value)
//                   }
//                   className="border px-3 py-2 rounded"
//                 />
//               )
//             )}
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             handleAddItem("education", {
//               institution: "",
//               typeOfStudy: "",
//               dateRange: "",
//               areaOfStudy: "",
//             })
//           }
//           className="text-sm text-blue-600 underline"
//         >
//           + Add more Education
//         </button>
//       </div>

//       {/* skills */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">skills</h2>
//         {formData.experience.map((item, idx) => (
//           <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {["name", "description"].map((key) => (
//               <input
//                 key={key}
//                 placeholder={key}
//                 value={item[key]}
//                 onChange={(e) =>
//                   handleArrayChange("skills", idx, key, e.target.value)
//                 }
//                 className="border px-3 py-2 rounded"
//               />
//             ))}
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             handleAddItem("skills", {
//               name: "",
//               description: "",
//               //levels part......
//             })
//           }
//           className="text-sm text-blue-600 underline"
//         >
//           + Add more skills
//         </button>
//       </div>


//       {/* languages */}

//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">languages</h2>
//         {formData.experience.map((item, idx) => (
//           <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {["name", "description"].map((key) => (
//               <input
//                 key={key}
//                 placeholder={key}
//                 value={item[key]}
//                 onChange={(e) =>
//                   handleArrayChange("languages", idx, key, e.target.value)
//                 }
//                 className="border px-3 py-2 rounded"
//               />
//             ))}
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             handleAddItem("languages", {
//               name: "",
//               description: "",
//               //levels part......
//             })
//           }
//           className="text-sm text-blue-600 underline"
//         >
//           + Add more languages
//         </button>
//       </div>


// {/* certifications */}

//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">certifications</h2>
//         {formData.experience.map((item, idx) => (
//           <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {["name", "issuer","date","website"].map((key) => (
//               <input
//                 key={key}
//                 placeholder={key}
//                 value={item[key]}
//                 onChange={(e) =>
//                   handleArrayChange("certifications", idx, key, e.target.value)
//                 }
//                 className="border px-3 py-2 rounded"
//               />
//             ))}
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             handleAddItem("certifications", {
//               name: "",
//               issuer: "",
//               date:"",
//               website:""
//               //levels part......
//             })
//           }
//           className="text-sm text-blue-600 underline"
//         >
//           + Add more certifications
//         </button>
//       </div>

//       {/* certifications */}

//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">certifications</h2>
//         {formData.experience.map((item, idx) => (
//           <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {["name", "issuer","date","website"].map((key) => (
//               <input
//                 key={key}
//                 placeholder={key}
//                 value={item[key]}
//                 onChange={(e) =>
//                   handleArrayChange("certifications", idx, key, e.target.value)
//                 }
//                 className="border px-3 py-2 rounded"
//               />
//             ))}
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             handleAddItem("certifications", {
//               name: "",
//               issuer: "",
//               date:"",
//               website:""
//               //levels part......
//             })
//           }
//           className="text-sm text-blue-600 underline"
//         >
//           + Add more certifications
//         </button>
//       </div>

      

//       {/* You can repeat the same structure for education, skills, projects, etc. */}

//       <div className="flex justify-between mt-8">
//         <button
//           onClick={() => navigate("/qualifications")}
//           className="text-sm text-gray-600 underline"
//         >
//           ← Back
//         </button>
//         <button
//           onClick={handleSubmit}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Submit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QualificationsFormPage;


// src/pages/qualifications/QualificationsFormPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const emptyExperience = () => ({ company: "", position: "", dateRange: "", location: "" });
const emptyEducation = () => ({ institution: "", typeOfStudy: "", areaOfStudy: "", score: "", dateRange: "" });
const emptySkill = () => ({ name: "", description: "", level: "3" });
const emptyLanguage = () => ({ name: "", description: "", level: "3" });
const emptyCertification = () => ({ name: "", issuer: "", date: "", website: "" });
const emptyProject = () => ({ name: "", description: "", dateRange: "", website: "" });
const emptyVolunteering = () => ({ organization: "", position: "", dateRange: "", location: "" });
const emptyReference = () => ({ name: "", email: "", contactNumber: "" });

const QualificationsFormPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialData = {
    fullName: "",
    dateOfBirth: "",
    headline: "",
    email: "",
    website: "",
    phone: "",
    location: "",
    profiles: [""],

    experience: [ emptyExperience() ],

    education: [ emptyEducation() ],

    skills: [ emptySkill() ],

    languages: [ emptyLanguage() ],

    certifications: [ emptyCertification() ],

    interests: [""],

    projects: [ emptyProject() ],

    volunteering: [ emptyVolunteering() ],

    references: [ emptyReference() ],

    summary: "",
    user: "demoUser"
  };

  const [formData, setFormData] = useState(initialData);

  // Generic change for simple fields
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // For array-of-objects sections (experience, education, skills, etc.)
  const handleArrayChange = (section, index, key, value) => {
    setFormData(prev => {
      const list = Array.isArray(prev[section]) ? [...prev[section]] : [];
      list[index] = { ...list[index], [key]: value };
      return { ...prev, [section]: list };
    });
  };

  // For array-of-strings sections (profiles, interests)
  const handleStringArrayChange = (section, index, value) => {
    setFormData(prev => {
      const list = [...prev[section]];
      list[index] = value;
      return { ...prev, [section]: list };
    });
  };

  const handleAddItem = (section, factory) => {
    setFormData(prev => ({
      ...prev,
      [section]: Array.isArray(prev[section]) ? [...prev[section], factory()] : [factory()]
    }));
  };

  const handleRemoveItem = (section, index) => {
    setFormData(prev => {
      const list = [...prev[section]];
      if (list.length <= 1) return prev; // keep at least one
      list.splice(index, 1);
      return { ...prev, [section]: list };
    });
  };

  // Submit to backend
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const url = "http://localhost:8000/api/user-profile"; // change if needed
      const res = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("response", res.data);
      alert("Profile submitted successfully!");
      setFormData(initialData);
      navigate("/"); // navigate home
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      alert("Something went wrong while submitting profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Professional Profile Form</h1>

      {/* Simple Fields */}
      {[
        { key: "fullName", label: "Full Name", type: "text" },
        { key: "dateOfBirth", label: "Date of Birth", type: "date" },
        { key: "headline", label: "Headline", type: "text" },
        { key: "email", label: "Email", type: "email" },
        { key: "website", label: "Website", type: "text" },
        { key: "phone", label: "Phone", type: "text" },
        { key: "location", label: "Location", type: "text" },
      ].map(field => (
        <div className="mb-4" key={field.key}>
          <label className="block font-medium mb-1">{field.label}</label>
          <input
            type={field.type}
            value={formData[field.key]}
            onChange={e => handleChange(field.key, e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      ))}

      {/* Summary */}
      <div className="mb-6">
        <label className="block font-medium mb-1">Summary</label>
        <textarea
          value={formData.summary}
          onChange={e => handleChange("summary", e.target.value)}
          className="w-full border px-3 py-2 rounded"
          rows={4}
        />
      </div>

      {/* Profiles (array of strings) */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Profiles (LinkedIn / GitHub)</h2>
        {formData.profiles.map((p, i) => (
          <div className="flex gap-2 items-center mb-2" key={i}>
            <input
              value={p}
              onChange={e => handleStringArrayChange("profiles", i, e.target.value)}
              placeholder="https://..."
              className="flex-1 border px-3 py-2 rounded"
            />
            <button type="button" onClick={() => handleRemoveItem("profiles", i)} className="text-sm text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddItem("profiles", () => "")} className="text-sm text-blue-600 underline">
          + Add profile
        </button>
      </div>

      {/* Experience (array of objects) */}
      <SectionArray
        title="Work Experience"
        items={formData.experience}
        fields={["company", "position", "dateRange", "location"]}
        onChange={(idx, key, val) => handleArrayChange("experience", idx, key, val)}
        onAdd={() => handleAddItem("experience", emptyExperience)}
        onRemove={(idx) => handleRemoveItem("experience", idx)}
      />

      {/* Education */}
      <SectionArray
        title="Education"
        items={formData.education}
        fields={["institution", "typeOfStudy", "areaOfStudy", "score", "dateRange"]}
        onChange={(idx, key, val) => handleArrayChange("education", idx, key, val)}
        onAdd={() => handleAddItem("education", emptyEducation)}
        onRemove={(idx) => handleRemoveItem("education", idx)}
      />

      {/* Skills */}
      <SectionArray
        title="Skills"
        items={formData.skills}
        fields={["name", "description", "level"]}
        onChange={(idx, key, val) => handleArrayChange("skills", idx, key, val)}
        onAdd={() => handleAddItem("skills", emptySkill)}
        onRemove={(idx) => handleRemoveItem("skills", idx)}
        fieldPlaceholders={{ level: "1-5" }}
      />

      {/* Languages */}
      <SectionArray
        title="Languages"
        items={formData.languages}
        fields={["name", "description", "level"]}
        onChange={(idx, key, val) => handleArrayChange("languages", idx, key, val)}
        onAdd={() => handleAddItem("languages", emptyLanguage)}
        onRemove={(idx) => handleRemoveItem("languages", idx)}
      />

      {/* Certifications */}
      <SectionArray
        title="Certifications"
        items={formData.certifications}
        fields={["name", "issuer", "date", "website"]}
        onChange={(idx, key, val) => handleArrayChange("certifications", idx, key, val)}
        onAdd={() => handleAddItem("certifications", emptyCertification)}
        onRemove={(idx) => handleRemoveItem("certifications", idx)}
      />

      {/* Projects */}
      <SectionArray
        title="Projects"
        items={formData.projects}
        fields={["name", "description", "dateRange", "website"]}
        onChange={(idx, key, val) => handleArrayChange("projects", idx, key, val)}
        onAdd={() => handleAddItem("projects", emptyProject)}
        onRemove={(idx) => handleRemoveItem("projects", idx)}
      />

      {/* Volunteering */}
      <SectionArray
        title="Volunteering"
        items={formData.volunteering}
        fields={["organization", "position", "dateRange", "location"]}
        onChange={(idx, key, val) => handleArrayChange("volunteering", idx, key, val)}
        onAdd={() => handleAddItem("volunteering", emptyVolunteering)}
        onRemove={(idx) => handleRemoveItem("volunteering", idx)}
      />

      {/* References */}
      <SectionArray
        title="References"
        items={formData.references}
        fields={["name", "email", "contactNumber"]}
        onChange={(idx, key, val) => handleArrayChange("references", idx, key, val)}
        onAdd={() => handleAddItem("references", emptyReference)}
        onRemove={(idx) => handleRemoveItem("references", idx)}
      />

      {/* Interests (array of strings) */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Interests</h2>
        {formData.interests.map((it, i) => (
          <div key={i} className="flex gap-2 items-center mb-2">
            <input
              value={it}
              onChange={e => handleStringArrayChange("interests", i, e.target.value)}
              placeholder="e.g. Java, React"
              className="flex-1 border px-3 py-2 rounded"
            />
            <button type="button" onClick={() => handleRemoveItem("interests", i)} className="text-sm text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddItem("interests", () => "")} className="text-sm text-blue-600 underline">
          + Add interest
        </button>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={() => navigate("/qualifications")} className="text-sm text-gray-600 underline" disabled={loading}>
          ← Back
        </button>
        <button onClick={handleSubmit} className={`bg-green-600 text-white px-4 py-2 rounded ${loading ? "opacity-60" : ""}`} disabled={loading}>
          {loading ? "Submitting..." : "Submit Profile"}
        </button>
      </div>
    </div>
  );
};

export default QualificationsFormPage;

/* ---------- Helper Component for rendering array sections ---------- */

function SectionArray({ title, items = [], fields = [], onChange, onAdd, onRemove, fieldPlaceholders = {} }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      {items.map((item, idx) => (
        <div key={idx} className="mb-4 border p-4 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1 capitalize">{key}</label>
                <input
                  value={item[key] ?? ""}
                  onChange={(e) => onChange(idx, key, e.target.value)}
                  placeholder={fieldPlaceholders[key] ?? key}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-end gap-2">
            <button type="button" onClick={() => onRemove(idx)} className="text-sm text-red-500">
              Remove
            </button>
          </div>
        </div>
      ))}

      <button type="button" onClick={onAdd} className="text-sm text-blue-600 underline">
        + Add more {title.toLowerCase()}
      </button>
    </div>
  );
}
