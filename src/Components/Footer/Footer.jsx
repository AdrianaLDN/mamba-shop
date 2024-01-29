import React from 'react';
import './footer.css';

function Footer () {

    const emailAddress = 'mambatest@example.com';

    return (
        <div className='footer'>
            <div><p className='footer-par'>&#169; Copyright: Mamba Ltd.</p></div>
            <a className='contact' href={`mailto:${emailAddress}`}>Contact</a>
        </div>
    )
}

export default Footer;

