import React from 'react'
import './Nav.css'

export const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
      const query = e.target.value;
      onSearch(query);
    };
  
    return (
      <div className="search-bar">
        
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
        <img src="img/search.png" alt="Search" />
      </div>
    );
  };

const Nav = () => {
  return (
    <>
    <div className="navcontainer">
        <div className="mainnav">
            <img className='logoimage' src="img/gro.png" alt="Hub Basket" />
            <h3 className="navtitle">
              <span className='Hub'>Hub</span>{" "}
              <span className='Basket'>Basket</span>
            </h3>
        </div>
<SearchBar/>
    </div>
      
    </>
  )
}

export default Nav
