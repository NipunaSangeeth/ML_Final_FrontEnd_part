// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/Home";

// import Login from "../pages/Login";
// import QualificationsPage from "../components/qulification/QualificationsPage";
// import PostJobPage from "../components/jobs/PostJobPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "Cvenrty",
//         element: <QualificationsPage/>,
//       },
//       {
//         path: "jobpost",
//         element: <PostJobPage />,
//       },
     
//     ],
//   },
// ]);

// export default router;


import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";

import QualificationsPage from "../components/qulification/QualificationsPage";
import QulifiacationFormPage from "../components/qulification/QulifiacationFormPage";
import PostJobPage from "../components/jobs/PostJobPage";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup/> },

      { path: "qualifications", element: <QualificationsPage /> },
      { path: "qualifications-form", element: <QulifiacationFormPage /> },
      { path: "jobpost", element: <PostJobPage /> },
    ],
  },
]);

export default router;
