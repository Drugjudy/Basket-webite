import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Nab from './REACT/navbar';


const Paths = () => {
    return(
        <Router>
       <Routes>
         <Route path='/about' element={ <About /> } />
       </Routes>
     </Router>
    );
};

export default Paths;