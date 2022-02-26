import React from "react";
import AddContact from "./contact/add.jsx";
import Contact from "./contact/contact.jsx";
import About from "./contact/about.jsx";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
     
      <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Home" element={<Contact />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Add" element={<AddContact />} />
          <Route path="/About" element={<About />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
