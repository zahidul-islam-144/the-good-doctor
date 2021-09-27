import React from 'react';
import './Cart.css';

const Cart = (props) => {
 
    const totalReducer = (previous, doctor) => previous + doctor.hired_amount;
    const total = props.cart.reduce(totalReducer, 0);

    return (
        <div className='card-container'>
             <div className='card-body'>
                 <h5>Check Out</h5>
                 <p>Selected Doctors: {props.cart.length}</p>
                 <p>Total Amount: $ {total} </p>
             </div>    
        </div>
    );
};

export default Cart;