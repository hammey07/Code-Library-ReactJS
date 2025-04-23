import React from "react";

export default function PostContent({ item }) {
  return (
    <li>
      <h2>{item.title}</h2>
      <ul>
        {item.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div>{item.content}</div>
    </li>
  );
}
