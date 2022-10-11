import React from "react";

import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesId, setCategoriesId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярность",
    sortProperty: "rating",
  });

  console.log(sortType);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6340350ed1fcddf69cb3e3ea.mockapi.io/items?${
        categoriesId > 0 ? `category=${categoriesId}` : ""
      }&sortBy=${sortType.sortProperty}`
    )
      .then((item) => item.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoriesId, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoriesId}
          onChangeCategory={(i) => setCategoriesId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock {...item} key={item.id} />)}
      </div>
    </>
  );
};

export default Home;
