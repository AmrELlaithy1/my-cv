import { NavLink , Link} from "react-router-dom";
import './Navbar-Style.css';
const Navbar = () => {

    function click(){
        alert('Whatsapp: 01028286423')
        
    }
    return ( 
        <div className="Nav_bar mb-5">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className='container-fluid'> 
                    <Link className='navbar-brand nav_brand  text-danger' to="/">Amr React</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse ul_home' id="navbarSupportedContent">
                        <ul className='navbar-nav m-auto mb-lg-0 '>
                            <li className="nav-item">
                             <NavLink className='nav-NavLink ' exact activeClassName="active " to="/">Home</NavLink>
                            </li>
                            <li className='nav-item'>
                             <NavLink activeClassName="active" exact to="/About" className='nav-NavLink'>About</NavLink>
                            </li>
                            <li className='nav-item'>
                             <NavLink activeClassName="active" exact to='/Portfolio' className='nav-NavLink'>Portfolio</NavLink>
                            </li>
                            <li className='nav-item'>
                             <NavLink activeClassName="active" exact to='/Contact' className='nav-NavLink'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='icon-NavLink text-light '>
                        <a className="p-2 text-primary " href=""><i class="bi bi-facebook"></i></a>
                        <a className="p-2 text-danger " href=""><i class="bi bi-instagram"></i></a>
                        <a className="p-2 text-success" onClick={click}><i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;