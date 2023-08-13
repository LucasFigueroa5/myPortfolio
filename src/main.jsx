import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import AboutMe from "./routes/aboutMe/AboutMe";
import App from "./app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
