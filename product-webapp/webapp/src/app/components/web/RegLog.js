import React from 'react'
import './RegLog.css'
import Features from './views/home/Comp/Features'

const RegLog = () => {
  return (
    <>
    <div className='Container'>
      <div className="header">
      <img className='logo' src="img/gro.png" alt="" srcset="" />
      <h3 className="navtitle">
              <span className='Hub'>Hub</span>{" "}
              <span className='Basket'>Basket</span>
            </h3>
        
        </div>
        <div className="poster">
            <div className="customer">
                <h3>I want to Buy Here</h3>
                <div className="Buttons1">
                <button className='custlogin'>Login</button>
                <button className='custreg'>Register</button>
                </div>
            </div>
            <div className="seller">
                <h3>I want to Sell Here</h3>
                <img className='seller-image' src="img/categorie/seller.jpg" alt="" />
                <div className="Buttons2">
                <button className='sellerlogin'>Login</button>
                <button className='sellerreg'>Register</button>
                </div>
            </div>
        </div>
        <div className="features">
          <h3>  </h3>
        </div>
    </div>
      <Features/>
    </>
  )
}

export default RegLog
