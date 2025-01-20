import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import HamePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import { NavBar } from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />      
      <Routes>
        <Route path="/" element={<HamePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
