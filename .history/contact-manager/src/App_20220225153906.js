import AddContact from "./contact/add";
import Contact from "./contact/contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Contact" element={<Contact />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/AddContact" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
