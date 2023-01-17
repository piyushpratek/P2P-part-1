import React, { useEffect, useState } from 'react';
import { getCoffeesData } from '../requests/coffeeRequests';
import Coffee from '../components/Coffee';
import { coffeesType } from '../types/CoffeeTypes';

const Coffeesforof = () => {
  const [coffeeData, setCoffeeData] = useState<coffeesType>([]);

  useEffect(() => {
    async function main() {
      const coffees = await getCoffeesData();
      let coffeesEmojied: coffeesType = [];
      for (let item of coffees) {
        coffeesEmojied.push({ ...item, title: `❤${item.title}` });

        console.log(coffeesEmojied);
      }
      setCoffeeData(coffeesEmojied);
    }
    main();
  }, []);
  //16px=1rem
  return (
    <div className='p-5  border-dark m-2 '>
      {coffeeData

        .filter((corruptData: any) => corruptData.id !== 23)
        .map((coffee: any) => (
          <Coffee coffee={coffee} />
        ))}
    </div>
  );
};

export default Coffeesforof;
