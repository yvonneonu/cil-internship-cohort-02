import React from "react";
import AddContact from "./contact/add.jsx";
import Contact from "./contact/contact.jsx";
import { MenuContext } from "./components/MenuContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = React.useState([]);

  return (
    <BrowserRouter>
      <MenuContext.Provider value={{ users, setUsers }}>
        <Routes>
          <Route path="/" element={<Contact />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddContact" element={<AddContact />} />
        </Routes>
      </MenuContext.Provider>
    </BrowserRouter>
  );
}

export default App;
