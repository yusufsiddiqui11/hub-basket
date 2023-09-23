import React from 'react'
import { NavLink } from 'react-router-dom';
import './NewCategory.css'


const Cards = (props) => {
  return (
    <>
    
    <NavLink to={props. link} className="nav-link">
    <div className="asif">
            <img className="image" src={props.imgsr} alt="" />
            <h3>{props.name}</h3>
        </div>
        </NavLink>
    </>
  )
}

const Cards2 = (props) => {
  return (
    <>
    
    <NavLink to={props. link} className="nav-link">
    <div className="container2">
            <img className="image" src={props.imgsr} alt="" />
            <h3>{props.name}</h3>
        </div>
        </NavLink>
    </>
  )
}

const NewCategory = () => {
    return (
        <>
        <h2>What Do you looking for</h2>
        <div className="item">
        <div className="cards">
        <Cards
        imgsr="img/categorie/vege1.jpg"
        name="Fresh Vegetable"
        link="/Card"/>
        <Cards
        imgsr="img/categorie/fruit.jpg"
        name="Fruits"
        link="/Card"/>
        <Cards
        imgsr="img/categorie/dairy2.jpg"
        name="Dairy & Baikary"
        link="/Card"/>
        <Cards
        imgsr="img/categorie/grocery1.jpg"
        name="Grocery Product"
        link="/Card"/>
        </div>
        <div className="card2">
          <Cards2 imgsr="img/categorie/egg.jpg"
        name="Fresh Eggs"
        link="/Card"/>
        <Cards2 imgsr="img/categorie/chicken.jpg"
        name="Fresh Chicken"
        link="/Card"/>
        <Cards2 imgsr="img/categorie/fish3.jpg"
        name="Fresh Fish"
        link="/Card"/>
        </div>
        </div>
        </>
        );
};

export default NewCategory
