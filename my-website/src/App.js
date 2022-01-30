import Topbar from "./components/topbar/Topbar.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";


// import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />} />
        <Route path="/Home" element={<Topbar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        {/* <Route path="expenses" element={<Topbar />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
