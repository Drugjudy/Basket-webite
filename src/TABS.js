import { BrowserRouter , Route, Routes } from "react-router-dom"
import Nab from "./REACT/navbar"
import About from "./pages/About"

function Tabs() {
    return(
        
            
            <Routes>
                <Route path="about" elemnt={ <About /> } />
                              
                
            </Routes>
        
    );
};

export default Tabs;