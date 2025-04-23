import React from "react";
import styles from "../Components/PostCard.module.scss";
export default function PostCard({ item, selectedPost, onClick }) {
  return (
    <div
      className={`${styles.card} ${
        selectedPost === item.id ? styles.selected : ""
      }`}
      onClick={() => onClick(item.id)}
    >
      <h4 className={styles.title}>{item.title}</h4>
      <div className={styles.text}>{item.content}</div>
    </div>
  );
}
