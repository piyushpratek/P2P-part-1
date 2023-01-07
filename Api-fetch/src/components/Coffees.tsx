import React, { useEffect, useState } from 'react';
import { getCoffeesData } from '../data/requests';
import Coffee from './Coffee';

const Coffees = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    async function main() {
      const coffees = await getCoffeesData();
      setCoffeeData(coffees);
      // console.log(coffees);
    }
    main();
  }, []);
  //16px=1rem
  return (
    <div className='  p-5 border border-dark m-2'>
      <h1>Coffees Component</h1>
      {coffeeData.map((coffee: any) => (
        <Coffee coffee={coffee} />
      ))}
    </div>
  );
};

export default Coffees;
