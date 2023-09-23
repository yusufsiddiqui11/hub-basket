import React from 'react'
import './Shoplist.css'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsBuildings } from 'react-icons/bs';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';

const Shoplist = () => {
  return (
    <>
    <div className="container">
    <div className="flex-container">
            <img src='https://picsum.photos/200/300?' alt='' className='image1'></img>
            <div className="product_content">
                <h4><BsBuildings className='build'/> Shop Name</h4>
                <p><BiMap className='location'/> Shop Address Lorem ipsum is a name for a common type of placeholder text</p>
                </div>
                </div>
                <div className="button">
                    <button className='view'><BsChevronDoubleRight className='viewicon'/> View Products</button>
                    <button className='call'><BsFillTelephoneOutboundFill className='callicon'/>  Call me</button>
                
            </div>
        </div>
      
    </>
  )
}

export default Shoplist
