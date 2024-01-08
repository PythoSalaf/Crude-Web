import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AddContact, Edit, Home, Info } from "./Pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addcontact" element={<AddContact />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
