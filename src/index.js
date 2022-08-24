import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./Basic/Basic";
import Black from "./Black/Black";
import Sizes from "./Sizes/Sizes";
import Colors from "./Colors/Colors";
import Outline from "./Outline/Outline";
import Social from "./Social/Social";
import Brands from "./Brands/Brands";
import Disabled from "./Disabled/Disabled";
import Toggle from "./Toggle/Toggle";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Black" element={<Black />} />
        <Route path="/Sizes" element={<Sizes />} />
        <Route path="/Colors" element={<Colors />} />
        <Route path="/Outline" element={<Outline />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/Disabled" element={<Disabled />} />
        <Route path="/Toggle" element={<Toggle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
