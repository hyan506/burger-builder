import React from 'react';
import Aux from '../../../hoc/Aux'
const orderSummary = (props) =>{
    const keys = Object.keys(props.ingredients);
    const summary = keys.map(key =>{
        return (
            <li key = {key}>
                <span style ={{textTransform: 'capitalize'}}>{key}</span> 
                : {props.ingredients[key]}
            </li>);
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;