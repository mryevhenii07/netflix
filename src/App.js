import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/netflix" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
