import React from "react";
import styles from "../Components/Loading.module.scss";

export default function Loading({ children }) {
  return <div className={styles.card}>{children || "Loading..."}</div>;
}
