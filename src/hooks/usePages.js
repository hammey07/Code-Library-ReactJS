import React, { useEffect, useState } from "react";
import data from "../data.json";
import dataPage from "../dataPage.json";

export default function usePages(id) {
  const [pageData, setPageData] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    async function loadData() {
      if (!id) {
        setError(true);
        setPageLoading(false);
        return;
      }
      const query = `
      query NewQuery {
        page(id: ${id}, idType: DATABASE_ID) {
        content
        title
      }
      }`;

      const request = await fetch(
        "http://local.components-library.com/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      );
      if (!request) return;
      const response = await request.json();
      setPageData(response.data.page);

      //COMMENT EVERYTHING ABOVE WITHIN LOAD DATA TO USE FAKE DATA
      // setPageData(dataPage.data.page);
      setPageLoading(false);
    }

    loadData();
  }, [id]);

  const title = pageData?.title;
  const content = pageData?.content;

  return { title, content, pageLoading };
}
