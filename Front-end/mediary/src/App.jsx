
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  LandingPage  from "./pages/LandingPage"

function App() {

  return(

   <BrowserRouter>
      <Routes>
        <Route path="/landing_page" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>

)
}

export default App
