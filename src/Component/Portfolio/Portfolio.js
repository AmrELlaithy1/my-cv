import './Portfolio.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import { Card , Card2 , Card3 ,CardAll } from './ImageGrid';
import NavProtfolio from './NavPortfolio';
const Portfolio = () => {

    
   
    return ( 
        <div className='portfolio'>

            <div className='container'>
                <div className='header_portfolio'>
                <h1 className='name_portfolio'>PORTFOLIO</h1>
                <div className='span_portfolio'></div>
                <p>I am a developer and a web designer I can do distinct web pages and can be modified and developed and working to develop myself to the best and have multiple skills in the work of pages.</p>
                </div>
            </div>
           <Router>
           <NavProtfolio></NavProtfolio>
           <Route exact path="/Portfolio">
               <CardAll/>
           </Route>
           <Route exact path="/Card">
            <Card/>
           </Route>
           <Route exact path="/Card2">
           <Card2/>
           </Route>
           <Route exact path="/Card3">
           <Card3/>
           </Route>
           </Router>
          
        </div>
     );
     
}
 
export default Portfolio;
// let titel = "";
// const clint = "am"
// clint === "amr" ?titel = 'amr Disgin': titel="no disgin";
