import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AddContact, Edit, Home, Info } from "./Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addcontact" element={<AddContact />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="addcontact/:id" element={<AddContact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
