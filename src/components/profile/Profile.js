import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd } from '@fortawesome/free-solid-svg-icons';

const Profile = (props) => {
    // console.log(props.profile); // doctor + handleAddToCart 2tai ache ei props er moddhe
    const {name, img, expertise, free_time, hired_amount} = props.profile;
    return (
        <div className='card-item'>
            <div className='card-image-container'>
                <div className='image'>
                    <img className='thumb' src={img} alt="" />
                </div>
            </div>
            <div className='card-body'>
                <div className='card-title'>
                    <h5>Name:{name}</h5>
                </div>

                <div className='card-content'>
                    <h6>Expertise: {expertise}</h6>
                    <p>Free Time: {free_time}</p>
                    <p>Hired Amount: <strong>$ {hired_amount}</strong></p>
                </div>
                <button onClick={ () => props.handleAddToCart(props.profile)}><FontAwesomeIcon icon={faUserMd}/> Hire</button>
            
            </div>

        </div>
    );
};

export default Profile;