import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { BsCart3 } from 'react-icons/bs';
import './navbar.css';
import { Spin as Hamburger } from 'hamburger-react';
import { ShopContext } from '../../context/shop-context';


function Navbar ({ handleClickOutside }) {

    const [isOpen, setIsOpen] = useState(false);
    const { getTotalItems } = useContext(ShopContext);
    const totalItems = getTotalItems();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (isOpen && !event.target.closest('.dropmenu')) {
            // Clicked outside the dropdown, close it
            setIsOpen(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [isOpen]);

      
      const handleLinkClick = () => {
        // Close the navbar when a link is clicked
        setIsOpen(false);
      };


    return (
       <div className='navbar'>
            <div className='logo'><GiPlantsAndAnimals size='64'/></div>

            
            <div className='dropmenu'>
            <div className='dropmenu-opened'><Hamburger 
            className='hamburger' 
            toggled={isOpen} 
            toggle={() => setIsOpen(!isOpen)} size={200} />
            {isOpen && (
                <div className='links-list'>
                    <NavLink className='drop-link' activeClassName='active' to='/' onClick={handleLinkClick}>Home</NavLink>
                    <NavLink className='drop-link' activeClassName='active' to='/tshirts' onClick={handleLinkClick}>TShirts</NavLink>
                    <NavLink className='drop-link' activeClassName='active' to='/jumpers' onClick={handleLinkClick}>Jumpers</NavLink>
                    <NavLink className='drop-link' activeClassName='active' to='/skirts' onClick={handleLinkClick}>Skirts</NavLink>
                    <NavLink className='drop-link' activeClassName='active' to='/trousers' onClick={handleLinkClick}>Trousers</NavLink>
                    <NavLink className='drop-link' activeClassName='active' to='/socks' onClick={handleLinkClick}>Socks</NavLink> 
                </div>
            )}
            </div>
        </div>
            

            <Link className='cart' to="/cart">
                <div>
                    <BsCart3 size={48} />
                </div>
                <div className='cartNumber'>{totalItems}</div>
            </Link>
       </div>
    )
}

export default Navbar;


