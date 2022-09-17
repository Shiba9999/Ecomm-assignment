import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Fav from "./components/Fav";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/add" element={<Add />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
