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

  return (
    <>
      <div>
        {coffeeData.map((coffee: any) => (
          <Coffee coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
