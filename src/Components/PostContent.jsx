import React, { useEffect, useState } from "react";
import styles from "../Components/PostContent.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

export default function PostContent({ data }) {
  const { id } = useParams();
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const filteredItems = data.filter((item) => Number(item.id) === Number(id));

  // useEffect(() => {
  //   async function loadPost() {
  //     const response = await fetch(
  //       `http://local.components-library.com/wp-json/wp/v2/posts/${id}`
  //     );
  //     if (!response.ok) {
  //       return;
  //     }

  //     const post = await response.json();
  //     setPost(post);
  //     setLoading(false);
  //   }

  //   loadPost();
  // }, [id]);

  useEffect(() => {
    if (id) {
      setShowCloseButton(true);
    } else {
      setShowCloseButton(false);
    }
  }, [id, data]);

  const ContentCard = ({ item }) => {
    return (
      <div key={item.id}>
        <h2>{item.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
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
      {/* <div className="col-md-8"> */}
      {showCloseButton && (
        <span className={styles.btnClose} onClick={closeContent}>
          ❌
        </span>
      )}

      {/* Fetch by ID */}
      {/* {loading ? (
          <Loading />
        ) : (
          <ContentCard key={post.id} item={post} />
        )} */}

      {/* filter pre fetched data */}
      {filteredItems.length === 0 && !id ? (
        <h6>Please use the search from the sidebar to search components.</h6>
      ) : (
        filteredItems.map((item) => <ContentCard key={item.id} item={item} />)
      )}
      {/* </div> */}
    </div>
  );
}
