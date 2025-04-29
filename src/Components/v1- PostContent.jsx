import React, { useEffect, useState } from "react";
import styles from "../Components/PostContent.module.scss";
import { useNavigate, useParams } from "react-router-dom";

export default function PostContent({ data }) {
  const { id } = useParams();
  const filteredItems = data.filter((item) => item.id === id);
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    if (id) {
      setShowCloseButton(true);
    } else {
      setShowCloseButton(false);
    }
  }, [id]);

  const ContentCard = ({ item }) => {
    return (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <ul>
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>{item.content}</div>
      </div>
    );
  };
  const navigate = useNavigate();

  function closeContent() {
    navigate("/"); //removes the id from params
    setShowCloseButton(false);
  }

  return (
    <div className={styles.contentContainer}>
      <div className="col-md-8">
        {showCloseButton && (
          <span className={styles.btnClose} onClick={closeContent}>
            ❌
          </span>
        )}

        {filteredItems.length === 0 && !id ? (
          <h6>Please use the search from the sidebar to search components.</h6>
        ) : (
          filteredItems.map((item) => <ContentCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}
