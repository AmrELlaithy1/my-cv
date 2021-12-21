import portfolio1 from './photo/portfolio-1.jpg'; 
import portfolio2 from './photo/portfolio-2.jpg'; 
import portfolio3 from './photo/portfolio-3.jpg'; 
import portfolio4 from './photo/portfolio-4.jpg'; 
import portfolio5 from './photo/portfolio-5.jpg'; 
import portfolio6 from './photo/portfolio-6.jpg'; 
import portfolio7 from './photo/portfolio-7.jpg'; 
import portfolio8 from './photo/portfolio-8.jpg'; 
import portfolio9 from './photo/portfolio-9.jpg'; 




export const Card =()=>{
    return (
        <div className='card1'>
            <div className='container'>
            <div className='row text-center'>
               <div className="col col-md-4">
                    <img src={portfolio1} alt="" style={{width:' 100%'}}/>
               </div>
               <div className="col col-md-4">
               <img src={portfolio2} alt="" style={{width:' 100%'}}/>
               </div>
               <div className="col col-md-4">
               <img src={portfolio3} alt="" style={{width:' 100%'}}/>
               </div>
           </div>
            </div>
           
        </div>
    )
}
export const Card2 =()=>{
    return (
        <div className='card2'>
            <div className="container">
            <div className='row text-center'>
               <div className="col col-md-4">
               <img src={portfolio4} alt="" style={{width:' 100%'}}/>
               </div>
               <div className="col col-md-4">
               <img src={portfolio5} alt="" style={{width:' 100%'}}/>
               </div>
               <div className="col col-md-4">
               <img src={portfolio6} alt="" style={{width:' 100%' }}/>
               </div>
           </div>
            </div>
           
        </div>
    )
}
export const Card3 =()=>{
    return (
        <div className='card3'>
            <div className="container">
            <div className='row text-center'>
               <div className="col col-md-4">
               <img src={portfolio7} alt="" style={{width:' 100%'}}/>
               </div>
               <div className="col col-md-4">
               <img src={portfolio8} alt="" style={{width:' 100%'}}/>
               </div>
               <div className="col col-md-4">
               <img src={portfolio9} alt="" style={{width:' 100%'}}/>
               </div>
           </div>
            </div>
           
        </div>
    )
}
export const CardAll = ()=>{
    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-lg-12 col-md-4col-sm-4">
                    <Card></Card>
                    </div>
                    <div className="col-lg-12 col-md-4col-sm-4">
                    <Card2></Card2>
                    </div>
                    <div className="col-lg-12 col-md-4col-sm-4">
                    <Card3></Card3>
                    </div>

                </div>
            </div>
            
        </div>
    )
}