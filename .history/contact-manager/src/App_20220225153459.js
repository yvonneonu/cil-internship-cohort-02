import AddContact from "./contact/add"
import Contact from "./contact/contact"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/AddC" element={<Contact/>}/>

    </BrowserRouter>
    // <div className="App">
    //   <Contact/>
    // </div>
  );
}

export default App;
