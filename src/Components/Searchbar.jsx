import React from "react";
import styles from "../Components/Searchbar.module.scss";
export default function Searchbar({ search, onSetSearch }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>🔍</span>
      <input
        className={styles.searchbox}
        type="text"
        placeholder="Search here"
        onChange={(e) => onSetSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}
