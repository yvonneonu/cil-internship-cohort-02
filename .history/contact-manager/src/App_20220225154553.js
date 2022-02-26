import AddContact from "./contact/add.jx";
import Contact from "./contact/contact.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Contact />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/AddContact" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
