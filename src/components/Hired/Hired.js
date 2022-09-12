import React from 'react';

const Hired = (props) => {
    // console.log(props)
    const { name, hired_amount } = props.hired;

    return (
        <div>
            <div className='selected-doctor'>
                <h5>{ name }</h5>
                <h6><strong>$</strong> { hired_amount }</h6>
            </div> 
        </div>
    );
};

export default Hired;