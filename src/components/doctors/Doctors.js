import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect( () => {
        fetch('./data.JSON')
        // fetch('https://mocki.io/v1/c4ecb801-6c98-492e-8058-8cc2b083bcb8')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);

    // Hire Doctor Button Handler
    const handleAddToCart = (doctor) => {
        // console.log(doctor.hired_amount);
        const newCart = [...cart, doctor];
        setCart(newCart);
    }
    return (
        <div className='doctors-container'>
            <div className='profile-container'>
                {   
                    doctors.map( doctor => <Profile 
                    profile={doctor}
                    key ={doctor.name}
                    handleAddToCart={handleAddToCart}
                    // addInfo = {addInfo}
                    />)
                }
            </div>

            <div>
             <Cart cart={cart}></Cart>
            </div>
        </div>
       
    );
};

export default Doctors;