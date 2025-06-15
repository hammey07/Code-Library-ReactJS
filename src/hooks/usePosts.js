import React, { useEffect, useState } from "react";
import data from "../data.json";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      // const response = await fetch(
      //   "http://local.components-library.com/wp-json/wp/v2/posts"
      // );
      // if (!response.ok) {
      //   console.log("Error fetching API data"); // oups! something went wrong
      //   return;
      // }

      // const posts = await response.json();
      // setPosts(posts);
      setPosts(data);
      setPostLoading(false);
    }

    loadPosts();
  }, []);

  return { posts, postLoading };
}
