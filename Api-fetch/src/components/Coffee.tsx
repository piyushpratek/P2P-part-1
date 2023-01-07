import React from 'react';
import { coffeeType } from '../CoffeeType/CoffeeTypes';

type CoffeePropsType = { coffee: coffeeType };

const Coffee = (props: CoffeePropsType) => {
  const { coffee } = props;
  return (
    <div className='border border-primary my-5 p-4 rounded-start-5'>
      <h2>{coffee.title}</h2>
      <div className='row'>
        <div className='col-md-5'>
          <img
            src={coffee.image}
            style={{
              width: '100%',
              aspectRatio: 1.8, // width:height
            }}
            className='rounded-5 rounded-end-0 object-fit-cover'
          />
        </div>
        <div className='col-md-7'>
          <div>
            Description: <br />
            {coffee.description}
          </div>
          <div className='fst-italic'>Ingredients: {coffee.ingredients}</div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
