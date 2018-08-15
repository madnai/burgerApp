import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey, i) => {
      return (
        <li key={igKey + i}>
         <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li> // <li> Salad: 1</li>
      )
    });


  return (
    <Aux>
      <h3>Your order</h3>
      <p>Delicious burger with ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total price: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;