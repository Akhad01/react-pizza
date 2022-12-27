import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios(
          "https://6340350ed1fcddf69cb3e3ea.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchPizzas();
  }, [id, navigate]);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
