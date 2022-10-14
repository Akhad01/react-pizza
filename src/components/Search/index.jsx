import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { AppContext } from "../../App";
import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  return (
    <div className={styles.wrapper}>
      <BsSearch className={styles.icon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <CgClose
          className={styles.iconClose}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
};

export default Search;
