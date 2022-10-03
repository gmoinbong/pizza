import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import { SkeletonLoader } from '../components/PizzaBlock/SkeletonLoader';
import Sort from '../components/Sort';

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [pizzaItem, setPizzaItem] = React.useState([]);
  React.useEffect(() => {
    fetch('https://632a12fe713d41bc8e6a0dbd.mockapi.io/items').then((res) =>
      res.json().then((arr) => {
        setPizzaItem(arr);
        setIsLoading(false);
      }),
    );
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <SkeletonLoader key={index} />)
          : pizzaItem.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
}

export default Home;
