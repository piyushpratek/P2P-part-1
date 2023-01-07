import React from 'react';
import { coffeeType } from '../CoffeeType/CoffeeTypes';

type CoffeePropsType = { coffee: coffeeType };

const Coffee = (props: CoffeePropsType) => {
  const { coffee } = props;
  return (
    <div className='border border-primary my-5 p-2 d-flex align-items-center'>
      <div>
        <h2>{coffee.title}</h2>
        <div style={{}}>
          <img
            src={coffee.image}
            width='150px'
            className='rounded-5 rounded-end-0'
          />
        </div>
      </div>
      <div className='ms-3'>
        <div>
          Description: <br />
          {coffee.description}
        </div>
        <div className='fst-italic'>Ingredients: {coffee.ingredients}</div>
      </div>
    </div>
  );
};

export default Coffee;
