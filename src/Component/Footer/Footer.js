const Footer = () => {

    // click =()=>{
        
    // }
    function click(){
        alert('Whatsapp: 01028286423')
        
    }
    return ( 
        <div className="footer ">
            
            <footer className="page-footer font-small  bg-dark p-3 text-end text-light">

            <div className="row ">
                <div className=" col-md-12 ">
                <div className="footer-copyright text-center p-3">© 2022 Copyright:
                <div className='icon-NavLink text-light d-inline '>
                        <a className="p-2 text-primary " href=""><i class="bi bi-facebook"></i></a>
                        <a className="p-2 text-danger " href=""><i class="bi bi-instagram"></i></a>
                        <a className="p-2 text-success"  ><i class="bi bi-whatsapp" onClick={click}></i></a>
                    </div>
                
            </div>
                </div>
               
            </div>

            

            </footer>
        </div>
     );
}
 
export default Footer;