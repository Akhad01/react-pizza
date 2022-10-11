function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((element, index) => (
          <li
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
            key={index}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
