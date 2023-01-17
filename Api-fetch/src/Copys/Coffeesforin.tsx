import React, { useEffect, useState } from 'react';
import { getCoffeesData } from '../requests/coffeeRequests';
import Coffee from '../components/Coffee';
import { coffeesType } from '../types/CoffeeTypes';

const Coffeesforin = () => {
  const [coffeeData, setCoffeeData] = useState<coffeesType>([]);

  useEffect(() => {
    async function main() {
      const coffees = await getCoffeesData();
      let coffeesNumbered: coffeesType = [];
      for (let index in coffees) {
        let item: any = coffees[index];
        // coffeesNumbered.push({ ...item, title: `${index}.${item.title}` });
        const serial = Number(index) + 1;
        coffeesNumbered.push({ ...item, title: `${serial}.${item.title}` });
      }
      // console.log(coffeesNumbered);
      setCoffeeData(coffeesNumbered);
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

export default Coffeesforin;
