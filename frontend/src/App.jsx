import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ; 

import ContactUs from "./components/ContactUs.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Home from "./pages/Home.jsx";
import Services from './pages/Services.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Pricing from './pages/Pricing.jsx';

function App() {

  return (
    <>
      <Router>

        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/services" element={<Services/>}/>
          <Route path="/how-it-works" element={<HowItWorks/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
        <ContactUs/>

      </Router>
    </>

  ) ; 
}

export default App
