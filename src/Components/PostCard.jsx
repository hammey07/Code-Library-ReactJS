import React from "react";
import styles from "../Components/PostCard.module.scss";
import { useParams } from "react-router-dom";
export default function PostCard({ item, onClick }) {
  const { id } = useParams();
  return (
    <div
      className={`${styles.card} ${id === item.id ? styles.selected : ""}`}
      onClick={() => onClick(item.id)}
    >
      <h5 className={styles.title}>{item.title}</h5>
      <p className={styles.text}>{item.content}</p>
      <span className={styles.arrow}>➡️ </span>
    </div>
  );
}
