import { NavLink } from "react-router-dom";


const NavProtfolio = () => {
    return ( 
        <div>
             <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-dark  '>
                    <div className='navbar-nav m-auto mb-lg-0 '>
                        <div className='ul_portfolio row '>
                            <ul className=''>
                            <li>
                                <NavLink to="/Portfolio" className='nav-NavLink' activeclassName='active '>All</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Card" className='nav-NavLink' activeclassName='active'>1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Card2" className='nav-NavLink' activeclassName='active'>2</NavLink>
                            </li>
                            <li>
                                <NavLink to="Card3" className='nav-NavLink' activeclassName='active'>3</NavLink>
                            </li>
                        </ul>
                        </div>
                    
                    </div>
                
                </nav>
            </div>
        </div>
     );
}
 
export default NavProtfolio;