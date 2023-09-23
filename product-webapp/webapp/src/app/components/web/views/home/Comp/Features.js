import React from 'react'
import './Features.css'


export const FeauresComp=(props)=>{
    return(
        <>
        <div className="featurecontainer"> 
        <h3>{props.Fheading}</h3>
        <img className='Feature-image' src={props.Fimg} alt="F image"  />
        <h5>{props.Ftitle}</h5>
        </div>
        </>
    )
}






const Features = () => {
  return (
    <>
    <div className="fmainheading"><h1>Our Features....</h1></div>
    <div className="Fcontainer">
     <FeauresComp 
     Fheading="Free Delivery"
     Fimg="img\categorie\delivery.png"
     Ftitle="dsfj fkjldf ahfiu ahdiif aduifulf bfuhiu fhi"
     /> 
     <FeauresComp 
     Fheading="free to contact"
     Fimg="img\categorie\contanct.png"
     Ftitle="dsfj fkjldf ahfiu ahdiif aduifulf bfuhiu fhi"
     /> 
     <FeauresComp 
     Fheading="Fresh Item"
     Fimg="img/categorie/freshpng.png"
     Ftitle="dsfj fkjldf ahfiu ahdiif aduifulf bfuhiu fhi"
     /> 
     </div>
    </>
  )
}

export default Features
