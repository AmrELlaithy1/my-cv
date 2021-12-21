import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Component/Navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import {BrowserRouter as Router,Route} from "react-router-dom";
import { Component } from 'react';
 import  './Component/Photo/Home_back.png'
class App extends Component {
 

  render(){
     
  return (
    
    <div className="App">
      
      <Router>
      
      <Navbar></Navbar>
      
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/About">
      <About  />
      </Route>
      <Route exact path="/Portfolio">
      <Portfolio/>
      </Route>
      <Route exact path="/Contact">
      <Contact/>
      </Route>
      <Footer></Footer>
      </Router>
      
    </div>
    
  );
}
}

export default App;



{/* <div className='arrow'> 
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a>
      </div> */}