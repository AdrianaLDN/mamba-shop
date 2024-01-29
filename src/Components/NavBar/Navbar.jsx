import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className='drop-link' to='/'>Home</Link>
                    <Link className='drop-link' to='/tshirts'>TShirts</Link>
                    <Link className='drop-link' to='/jumpers'>Jumpers</Link>
                    <Link className='drop-link' to='/skirts'>Skirts</Link>
                    <Link className='drop-link' to='/trousers'>Trousers</Link>
                    <Link className='drop-link' to='/socks'>Socks</Link> 
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


