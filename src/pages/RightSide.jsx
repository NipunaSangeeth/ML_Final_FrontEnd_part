
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaBriefcase } from "react-icons/fa";

const RightSide = ({ activeTab }) => {
  const navigate = useNavigate();

  switch (activeTab) {

    case "addQualifications":
      navigate("/qualifications");
      return null;

    case "postJob":
      navigate("/jobpost");
      return null;

    case "logout":
      navigate("/login");
      return null;

    default:
      return (
        <div className="flex-1 p-15 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
            Welcome to Skill Bridge
          </h1>
          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            Connect your skills with the perfect career opportunities.
          </p>

          <div className="flex gap-10 justify-center mb-16">
            <div>
              <strong className="text-2xl text-green-600">1000+</strong>
              <p className="text-sm mt-1">Active Jobs</p>
            </div>
            <div>
              <strong className="text-2xl text-purple-600">500+</strong>
              <p className="text-sm mt-1">Companies</p>
            </div>
            <div>
              <strong className="text-2xl text-red-500">2000+</strong>
              <p className="text-sm mt-1">Professionals</p>
            </div>
          </div>

          <div className="w-full border-t border-gray-300 pt-8 mt-8">
            <div className="flex items-center justify-center gap-2 text-blue-800 text-xl font-semibold">
              <FaBriefcase className="text-2xl" />
              <span>Available Job Posts</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Browse exciting opportunities posted by top companies.
            </p>
          </div>
        </div>
      );
  }
};

export default RightSide;
