import React from "react";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  setCategoriesId,
  setCurrentPage,
  setFilters,
} from "../../redux/slices/filterSlice";
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";
import Pagination from "../Pagination";
import { list } from "../Sort";
import { fetchPizzas, selectPizzaData } from "../../redux/slices/pizzasSlice";
import { selectFilter } from "../../redux/slices/filterSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoriesId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { status, items } = useSelector(selectPizzaData);

  const onChangeCategory = (id) => {
    dispatch(setCategoriesId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const category = categoriesId > 0 ? `category=${categoriesId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchPizzas({ category, sortBy, order, search, currentPage }));
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoriesId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoriesId, sort.sortProperty, currentPage, navigate]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoriesId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((item) => (
    <Link key={item.id} to={`/pizza/${item.id}`}>
      <PizzaBlock {...item} />
    </Link>
  ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoriesId}
          onChangeCategory={(i) => onChangeCategory(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "rejected" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте вернуться позже
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
