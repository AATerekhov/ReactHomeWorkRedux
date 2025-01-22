
import { Routes, Route } from "react-router-dom";
import './App.css'
import HamePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import { NavBar } from "./components/NavBar";
import withOptionRegister from './components/hoc/withOptionRegister';
import RegisterWithLogin  from './components/hoc/registerWithLogin';

const LoginForm = withOptionRegister(RegisterWithLogin);
function App() {
 
  return (
    <>
      <NavBar />      
      <Routes>
        <Route path="/" element={<HamePage />} />
        <Route path="/login" element={<LoginForm isLogin={true}/>} />
        <Route path="/register" element={<LoginForm isLogin={false} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
