import { useEffect, useState } from "react";
import "../App.scss";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import TextContent from "./TextContent";
import CardList from "./CardList";
import PostContent from "./PostContent";
import Loading from "./Loading";
import usePosts from "../hooks/usePosts";
import usePages from "../hooks/usePages";
import { Toast } from "bootstrap";
export default function AppLayout() {
  const [frontPage, setfrontPage] = useState("");
  const [search, setSearch] = useState("");
  const { posts, postLoading } = usePosts();

  const pageId = 2; // Ensure the ID is properly defined
  const { title, content, pageLoading } = usePages(pageId);
  return (
    <div className="container-lg overflow-hidden">
      {pageLoading ? (
        <Loading>Loading title and content from WP. </Loading>
      ) : (
        <TextContent>
          <h1
            className="display-3 mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </TextContent>
      )}
      <div className="row g-5">
        <div className="col-md-4">
          <Sidebar>
            <Searchbar search={search} onSetSearch={setSearch}></Searchbar>
            {postLoading ? (
              <Loading />
            ) : (
              <CardList data={posts} search={search} />
            )}
          </Sidebar>
        </div>
        <div className="col-md-8">
          {postLoading ? <Loading /> : <PostContent data={posts} />}
        </div>
      </div>
      <TextContent>
        <h5>Features: </h5>
        <ul>
          <li>
            Feteching WP homepage details - (title, content) using GraphQL
          </li>
          <li>Fetchng WP Posts using WP standard RestAPI </li>
          <li>
            Routing / Params: Post ID stored as params (https://example.ie/20)
          </li>
        </ul>
        <h5> Updates to be added:</h5>
        <ul>
          <li>Add pagination for cards</li>
          <li>
            Add global loading state to only render components only when page is
            ready
          </li>

          <li>
            Add a search for tags. This will then update list of cards with
            posts containing those tags
          </li>
          <li>Setup WP with accessible endpoints</li>
        </ul>
      </TextContent>
    </div>
  );
}
