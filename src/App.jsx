import { useState } from "react";
import data from "./data.json";
import "./App.scss";
import PostCard from "./Components/PostCard";
import Sidebar from "./Components/Sidebar";
import Searchbar from "./Components/Searchbar";
import PostContent from "./Components/PostContent";
import TextContent from "./Components/TextContent";
import { Link } from "react-router-dom";
import CardList from "./Components/CardList";

function App() {
  const [search, setSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState();

  function handleSelect(id) {
    console.log(id);
    setSelectedPost(id);
  }

  return (
    <>
      <div className="container-lg overflow-hidden">
        <h1>HamLabs</h1>
        <div className="row g-5">
          <div className="col-md-4">
            <Sidebar>
              <Searchbar search={search} onSetSearch={setSearch}></Searchbar>
              <CardList
                data={data}
                onClick={handleSelect}
                search={search}
                selectedPost={selectedPost}
              ></CardList>
            </Sidebar>
          </div>
          <div className="col-md-8">
            {data
              .filter((item) => item.id === selectedPost)
              .map((item) => (
                <PostContent key={item.id} item={item} />
              ))}
          </div>
        </div>
        <TextContent></TextContent>
      </div>
    </>
  );
}

export default App;
