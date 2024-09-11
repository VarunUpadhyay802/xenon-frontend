import './index.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Page_404 from './components/Page_404';
import Home from './components/Home';


import About from './components/About';
import Contact from './components/Contact';





function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          
            <Route exact path="/*" element={<Page_404/>} />
        
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
