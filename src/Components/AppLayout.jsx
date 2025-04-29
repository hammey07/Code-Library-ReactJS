import { useEffect, useState } from "react";
import data from "../data.json";
import "../App.scss";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import TextContent from "./TextContent";
import CardList from "./CardList";
import PostContent from "./PostContent";

export default function AppLayout() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);
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
      setLoading(false);
    }

    loadPosts();
  }, []);

  return (
    <div className="container-lg overflow-hidden">
      <TextContent>
        👨🏽‍💻A simple React app to save and browse reusable component code
        snippets. Quickly search and view code examples to speed up your
        development🛠️ ⚙️.
      </TextContent>
      <div className="row g-5">
        <div className="col-md-4">
          <Sidebar>
            <Searchbar search={search} onSetSearch={setSearch}></Searchbar>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <CardList data={posts} search={search} />
            )}
          </Sidebar>
        </div>
        <div className="col-md-8">
          {loading ? <p>Loading...</p> : <PostContent data={posts} />}
        </div>
      </div>
      <TextContent>
        <h5> Easy stuff:</h5>
        <ul>
          <li>Add styling </li>
        </ul>
        <h5> Possible updates:</h5>
        <ul>
          <li>
            Implement Routing for post content pages (e.g; example.com/2242342).
            This frees up space to render more post cards on homepage.
            Drawbacks: Adds in extra step to navigate back to homepage to search
            further
          </li>

          <li>
            Add a search for tags. This will then update list of cards with
            posts containing those tags
          </li>
          <li>
            Add routes to pass id to url. This will allow users to share pre
            rendered component
          </li>
          <li>Connect with WP using RestAPI to fetch WP posts data</li>
        </ul>
        <h5> Future updates:</h5>
        <ul>
          <li>Connect with WP using RestAPI to fetch WP posts data.</li>
        </ul>
      </TextContent>
    </div>
  );
}
