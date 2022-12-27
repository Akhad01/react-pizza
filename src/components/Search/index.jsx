/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import { setsSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setsSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setsSearchValue(str));
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
