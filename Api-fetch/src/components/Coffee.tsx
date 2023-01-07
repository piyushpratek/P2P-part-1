import React from 'react';
import { coffeeType } from '../CoffeeType/CoffeeTypes';

type CoffeePropsType = { coffee: coffeeType };
const Coffee = (props: CoffeePropsType) => {
  const { coffee } = props;
  return (
    <div>
      <div style={{}}>
        <img src={coffee.image} />
      </div>
      <div>Ingredients: {coffee.title}</div>
      <div>Description: {coffee.description}</div>
      <div>Ingredients: {coffee.ingredients}</div>
    </div>
  );
};

export default Coffee;
