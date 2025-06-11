import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Enroll from "./pages/enroll/Enroll.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="enroll" element={<Enroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
