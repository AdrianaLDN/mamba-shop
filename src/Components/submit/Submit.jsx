import React, { useContext, useEffect } from 'react'; 
import { ShopContext } from '../../context/shop-context';
import './submit.css';

function Submit() {
  
  const { removeAll } = useContext(ShopContext);
  useEffect(() => {

    removeAll();
  }, [removeAll]);

  return (
    <div>
        <p className='submit-msg'>Thank you for submitting!</p>
    </div>
  )
}

export default Submit;