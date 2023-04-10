import React from "react";
import { createRoot } from "react-dom/client";
import "./public/index.scss";
import Navbar from "./navbar/Navbar.js";

const root = document.getElementById('root');
createRoot(root).render(
  <>
    <link rel="icon" href="" type="image/webp" />
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  </>,
);
