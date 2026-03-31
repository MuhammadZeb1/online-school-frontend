import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import TailorReceipt from "./pages/TailorReceipt";
import TeacherRequest from "./pages/teacher/TeacherRequest";

function App() {
  return (

   <>
   <Navbar/>
    {/* <TailorReceipt/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher-request" element={<TeacherRequest />} />
        
      </Routes>
    
   </>
  );
}

export default App;
