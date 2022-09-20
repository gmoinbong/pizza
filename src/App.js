import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  const [pizzaItem, setPizzaItem] = React.useState([]);
  React.useEffect(() => {
    fetch('https://632a12fe713d41bc8e6a0dbd.mockapi.io/items').then((res) =>
      res.json().then((arr) => setPizzaItem(arr)),
    );
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaItem.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
