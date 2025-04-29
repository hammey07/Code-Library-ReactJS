import React from "react";
import PostCard from "./PostCard";
import { useNavigate, useParams } from "react-router-dom";

export default function CardList({ data, search }) {
  const filteredData = data?.filter((item) => {
    const query = search?.toLowerCase();
    const titleMatch = item.title.toLowerCase().includes(query);
    const tagsMatch = item.tags.some((tag) =>
      tag.toLowerCase().includes(query)
    );
    return titleMatch || tagsMatch;
  });

  const navigate = useNavigate();

  function handleSelect(id) {
    navigate(`/${id}`);
  }

  return (
    <>
      {filteredData.length === 0 ? (
        <h5>Found no matching results</h5>
      ) : (
        filteredData?.map((item) => (
          <PostCard item={item} key={item.id} onClick={handleSelect} />
        ))
      )}
    </>
  );
}
