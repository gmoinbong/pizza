import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock';
import { SkeletonLoader } from '../components/PizzaBlock/SkeletonLoader';
import { SearchContext } from '../components/Search';
import Sort from '../components/Sort';
function Home() {
  const { searchData } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [pizzaItem, setPizzaItem] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeSort, setTypeSort] = React.useState({
    name: 'популярністю',
    sortProperty: 'rating',
  });

  const order = typeSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = typeSort.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchData ? `&search=${searchData}` : '';
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://632a12fe713d41bc8e6a0dbd.mockapi.io/items?page=${currentPage}&limit=4${category}&sortby=${sortBy}&order=${order}${search}`,
    ).then((res) =>
      res.json().then((arr) => {
        setPizzaItem(arr);
        setIsLoading(false);
      }),
    );
    // window.scrollTo(0, 0);
  }, [categoryId, typeSort, searchData, currentPage]);
  const pizzas = pizzaItem.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeletons = [...new Array(6)].map((_, index) => <SkeletonLoader key={index} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort value={typeSort} OnClickSort={(i) => setTypeSort(i)} />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;
