import React from 'react';
import { useState } from "react";
import './checkout.css';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
// import { ShopContext } from '../../context/shop-context';

function Checkout() {
 
    const navigate = useNavigate();

    //Handling Title
    const [title, setTitle] = useState();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    //Validating/allowing only numbers
    const [mobile, setMobile] = useState();

    const handleMobile = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setMobile(value);
    };

    //Handling validation of email
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Validate email using validator library
        if (validator.isEmail(value)) {
            setEmailError('');
        } else {
            setEmailError('Please enter a valid email address.');
        }
    };

    //"Validating" checkbox
    const [isChecked, setIsChecked] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');    


    const handleCheckbox = () => {
        setIsChecked(!isChecked); 
    };


    //Handling Submit

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);

        // console.log("submitted!!!");

        if (!title || !firstName || !lastName || !email || !mobile || !isChecked) {
            setSubmit(true);
            return;
          }
    }

  return (
    <div className='checkout'>
        <h3>Checkout</h3>
        <form className='form' onSubmit={handleSubmit} noValidate>
            <select value={title} className='input' onChange={handleChange}>
                <option value='' placeholder='Title'>--Title--</option>
                <option value='Miss'>Miss</option>
                <option value='Mrs'>Mrs</option>
                <option value='Mr'>Mr</option>
                <option value='Mx'>Mx</option>
                <option value='Prof'>Prof</option>
                <option value='Dr'>Dr</option>
                <option value='Rabbi'>Rabbi</option>
                <option value='Rev'>Rev</option>
                <option value='Queen'>Queen</option>
                <option value='King'>King</option>
            </select>

            <input type='text' name='firstName' placeholder='First name *' required className={`input ${submit && !firstName ? 'invalid' : ''}`} value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <input type='text' name='lastName' placeholder='Last name *' required className={`input ${submit && !lastName ? 'invalid' : ''}`} value={lastName} onChange={(e) => setLastName(e.target.value)} />
    
            <input type='text' name='name' placeholder='Email *' required value={email}onChange={handleEmail} className={`input ${emailError ? 'invalid' : ''}`} />
            {emailError && <p className='error-message'>{emailError}</p>}
        
            <input type='text' name='number' placeholder='Mobile number *' required  className='input' value={mobile} onChange={handleMobile}/>

            <div className='checkbox'>
                <input type='checkbox' className='tick' checked={isChecked} onChange={handleCheckbox} />
                <p className='checkbox-info'>AGREEMENT TO TERMS AND CONDITIONS: By using our services, you agree to abide by the specified terms and conditions.</p>
            </div>
            {submit && !isChecked && <p className='error-message'>Please check the box!</p>}

            <input type='submit' value='Save and Proceed' className='submit' />

            {submit && isChecked && navigate('/submit') }
            
        </form>
    </div>
  )
}

export default Checkout;