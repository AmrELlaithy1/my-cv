import my_photo from '../Photo/my_photo.jpg'
import './About.css'
const About = () => {
   
       
   
   

    return ( 
        <div className='About'>
            <div className='container '>
                <div className='about_header'>
                <div className='header_about'>
            <h1 className='name_about'>ABOUT</h1>
            <div className='span_about'></div>
            <p>I am a developer and a web designer I can do distinct web pages and can be modified and developed and working to develop myself to the best and have multiple skills in the work of pages. </p>
            </div>
            <div className='row  section_about'>
                <div className=' col-lg-6 col-md-12 col-sm-12 '>
                    <img src={my_photo} alt="" className='img_about' />
                </div>
                <div className=' col-lg-6 col-md-12 col-sm-12'>
                    <h2>web designer & web developer</h2>
                    <p>I am a developer and a web designer I can do distinct web pages and can be modified and developed and working to develop myself to the best and have multiple skills in the work of pages</p>
                    <div className='row ul_about '>
                        <div className=' col-lg-6 col-md-12 col-sm-12'>
                            <ul>
                                <li><p>Birthday:</p> 13 Sept 1999</li>
                                <li><p>Website:</p> www.example.com</li>
                                <li><p>Phone:</p> +20 1028286423</li>
                                <li><p>City:</p> In Cairo, EG</li>
                            </ul>
                        </div>
                        <div className=' col-lg-6 col-md-12 col-sm-12'>
                        <ul>
                                <li><p>Age:</p> 22</li>
                                <li><p>Degree:</p> Master</li>
                                <li><p>PhEmailone:</p> email@example.com</li>
                                <li><p>Freelance:</p> Available</li>
                            </ul>
                        </div>
                    </div>
                    <p>I am a developer and a web designer I can do distinct web pages and can be modified and developed and working to develop myself to the best and have multiple skills in the work of pages.</p> 
                </div>
            </div>
                </div>
           
           
            <div className='container skills'>
            <div className='skills_about'>  
            <h1 className='name2_about'>SKILLS</h1>
            <div className='span2_about '></div>
            <p>I am a developer and a web designer I can do distinct web pages and can be modified and developed and working to develop myself to the best and have multiple skills in the work of pages. </p>
            </div>
            <div className='row section2_about'>
                <div className=' col-md-6 col-sm-12  progres'>HTML 
                        <div class="progress progresse">
  <div class="progress-bar-striped bg-success" role="progressbar" style={{width: "90%" , height:'100%'}} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"><div className='text-center text-light'>90%</div></div>
</div>
                </div>
                <div className=' col-md-6 col-sm-12 '>BOOTSTRAP
                <div class="progress">
  <div class="progress-bar-striped bg-success" role="progressbar" style={{width: "70%" , height:'100%'}} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"><div className='text-center text-light'>70%</div></div>
</div>
                </div>
                <div className=' col-md-6 col-sm-12 '>CSS
                <div class="progress">
  <div class="progress-bar-striped bg-success" role="progressbar" style={{width: "80%" , height:'100%'}} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"><div className='text-center text-light'>80%</div></div>
</div>
                </div>
                <div className=' col-md-6 col-sm-12 '>REACT/REDUX
                <div class="progress">
  <div class="progress-bar-striped bg-success" role="progressbar" style={{width: "80%" , height:'100%'}} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"><div className='text-center text-light'>80%</div></div>
</div>
                </div>
                <div className='col-md-6 col-sm-12 '>JAVASCRIPT
                <div class="progress">
  <div class="progress-bar-striped bg-warning" role="progressbar" style={{width: "60%" , height:'100%'}} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"><div className='text-center text-light'>60%</div></div>
</div>
                </div>
                <div className=' col-md-6 col-sm-12 '>PHP
                <div class="progress">
  <div class="progress-bar-striped bg-success" role="progressbar" style={{width: "90%" , height:'100%'}} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"><div className='text-center text-light'>90%</div></div>
</div>
                </div>
            </div>
            </div>
            <div className="contanir">
                <div className='container facts'>

                <div className='row'>
                    <div className=" col-md-12 col-sm-12 "><h1>FACTS</h1></div>
                    <div className=" col-md-12 col-sm-12 "><div className='span3_about'></div></div>
                    <div className=" col-md-12 col-sm-12 "><p>I am a developer and a web designer I can do distinct web pages and can be modified and developed and working to develop myself to the best and have multiple skills in the work of pages.</p></div>

                    <div className=" col-md-3 col-sm-6 fact">
                        <div>
                        <i class="bi bi-emoji-smile " style={{fontSize:'40px'}}></i>
                            <h1>5</h1>
                            <span>Happy Clients</span>
                        </div>
                    </div>
                    <div className=" col-md-3 col-sm-6  fact" >
                    <div>
                    <i class="bi bi-journal-richtext" style={{fontSize:'40px'}}></i>
                            <h1>5</h1>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className=" col-md-3 col-sm-6  fact">
                    <div>
                    <i class="bi bi-headset" style={{fontSize:'40px'}}></i>
                            <h1>5</h1>
                            <span>Hours Of Support</span>
                        </div>
                    </div>
                    <div className=" col-md-3 col-sm-6  fact">
                    <div>
                    <i class="bi bi-people" style={{fontSize:'40px'}}></i>
                            <h1>5</h1>
                            <span>Hard Workers</span>
                        </div>
                    </div>
                </div>
                    
            </div>
            </div>
            
            </div>
        </div>
     );
}
 
export default About;