import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = 'Danger' clicked = {props.purchaseCancelled}>Cancel</Button>
            <Button btnType = 'Success' clicked = {props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;