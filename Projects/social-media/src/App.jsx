import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBaar from "./components/SideBaar";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/Post-Context";
import PostList from "./components/POstList";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <PostListProvider>
      <div className="App_Container">
        <SideBaar
          selectedTab={selectedTab}
          clickedTab={setSelectedTab}
        ></SideBaar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
