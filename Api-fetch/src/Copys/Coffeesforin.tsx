import React, { useEffect, useState } from 'react';
import { getCoffeesData } from '../requests/coffeeRequests';
import Coffee from '../components/Coffee';

const Coffeesforin = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    async function main() {
      const coffees = await getCoffeesData();
      let coffeesNumbered = coffees;
      coffeesNumbered = [];
      for (let index in coffees) {
        let item: any = coffees[index];
        coffeesNumbered.push({ ...item, title: `${index}.${item.title}` });
      }
      console.log(coffeesNumbered);
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
