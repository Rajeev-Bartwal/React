import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-Context";

const PostList = () => {
  const { postList } = useContext(PostListData)
  console.log(postList);

  return (
    <>
      {postList.map( (post) => <Post post = {post}/>)}
    </>
  );
};
export default PostList;
