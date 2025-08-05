// // Home.jsx
// import React from "react";

// const Home = () => {
//   return <h1 style={{ color: "red" }}>It works!</h1>;
// };

// export default Home;

// Home.jsx
import React, { useState } from "react";
import LeftSide from "./Leftside";
import RightSide from "./RightSide";

const Home = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <LeftSide setActiveTab={setActiveTab} />
      <RightSide activeTab={activeTab} />
    </div>
  );
};

export default Home;
