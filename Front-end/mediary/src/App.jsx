
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  LandingPage  from "./pages/LandingPage"
import  Home  from "./pages/Home"
import MyCollection from "./pages/MyCollection";

function App() {

  return(

   <BrowserRouter>
      <Routes>
        <Route path="/landing_page" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/mycollection" element={<MyCollection/>} />
      </Routes>
    </BrowserRouter>

)
}

export default App
