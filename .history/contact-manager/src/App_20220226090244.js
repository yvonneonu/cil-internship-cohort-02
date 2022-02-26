import React from "react";
import AddContact from "./contact/add.jsx";
import Contact from "./contact/contact.jsx";
import { MenuContext } from "./components/MenuContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = React.useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <MenuContext.Provider value={{ users, setUsers }}>
         
        </MenuContext.Provider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;