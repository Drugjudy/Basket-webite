

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home_page from './pages/home';
import "./App.css";

import About from './pages/About';
import Forms from './REACT/login';

import Items from './images/temporay-item';


function App() {
  return (
    <div className='bg-main'>
     <Router>
       
       <Routes>
         <Route path='/' element={ <Home_page /> } />
         <Route path='/items' element={ <Items /> } />
         <Route path='/login' element={ <Forms /> } />
         <Route path='/cart' element={<About />} />
       </Routes>
     </Router>
</div>

  );
};

export default App;
