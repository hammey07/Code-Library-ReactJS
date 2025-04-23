import React from "react";

export default function TextContent() {
  return (
    <div style={{ backgroundColor: "#343", padding: "20px" }}>
      <h5> Easy stuff:</h5>
      <ul>
        <li>Add styling </li>
      </ul>
      <h5> Possible updates:</h5>
      <ul>
        <li>
          Add a search for tags. This will then update list of cards with posts
          containing those tags
        </li>
        <li>
          Add routes to pass id to url. This will allow users to share pre
          rendered component
        </li>
        <li>Connect with WP using RestAPI to fetch WP posts data</li>
      </ul>
      <h5> Future updates:</h5>
      <ul>
        <li>Connect with WP using RestAPI to fetch WP posts data</li>
      </ul>
    </div>
  );
}
