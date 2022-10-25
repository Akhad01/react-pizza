import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import debounce from "lodash.debounce";
import { AppContext } from "../../App";
import styles from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(AppContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      console.log(str);
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <BsSearch className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {value && <CgClose className={styles.iconClose} onClick={onClickClear} />}
    </div>
  );
};

export default Search;
