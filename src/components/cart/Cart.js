import React from 'react';
import Hired from '../Hired/Hired';
import './Cart.css';

const Cart = (props) => {
    // console.log('from cart:',props.cart);
 
    const totalReducer = (previous, doctor) => previous + doctor.hired_amount;
    const total = props.cart.reduce(totalReducer, 0);

    return (
        <div className='card-container'>
             <div className='card-body'>
                 <h5>Check Out</h5>
                 <p>Selected Doctors: {props.cart.length}</p>
                 <p>Total Amount: $ {total} </p>
             </div> 
             
            {/* mapping to show selected person in cart as row */}
            {
                props.cart.map( selected =><Hired
                    hired={selected}
                />)
            } 
     
        </div>
    );
};

export default Cart;