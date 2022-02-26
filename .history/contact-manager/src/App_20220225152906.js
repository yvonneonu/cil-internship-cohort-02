import AddContact from "./contact/add"
import Contact from "./contact/contact"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Contact/>
    </div>
  );
}

export default App;
