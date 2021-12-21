//import Imedg from '../Photo/amr_photo.jpg'
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    
    return ( 
        <div className='Home '>
            <div className='contanir'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                    <div className='body-home text-center text-light   '>
                    <h1 className='mb-3 home_header'>Amr React</h1>
                    <p className='mb-5 home_text'>I am professional web designer and developer</p>
                    <Link to="/About" className='btn btn-danger btn-lg home_btn rounded-pill '> About Me</Link>
                 </div>
                    </div>
               
                </div>
                
            </div>
        </div>
     );
}
 
export default Home;