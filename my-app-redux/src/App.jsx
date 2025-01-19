import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/Login";
import HaomePage from "./components/HaomePage";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import { NavBar } from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />      
      <Routes>
        <Route path="/" element={<HaomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
