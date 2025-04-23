import React from "react";
import PostCard from "./PostCard";

export default function CardList({ data, search, onClick, selectedPost }) {
  const filteredData = data?.filter((item) => {
    const query = search?.toLowerCase();
    const titleMatch = item.title.toLowerCase().includes(query);
    const tagsMatch = item.tags.some((tag) =>
      tag.toLowerCase().includes(query)
    );
    return titleMatch || tagsMatch;
  });
  return (
    <>
      {filteredData?.map((item) => (
        <PostCard item={item} onClick={onClick} selectedPost={selectedPost} />
      ))}
    </>
  );
}
