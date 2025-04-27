import React, { Children } from "react";

export default function TextContent({ children }) {
  return (
    <div
      style={{ backgroundColor: "#343", padding: "20px", margin: "20px 0px" }}
    >
      {children}
    </div>
  );
}
