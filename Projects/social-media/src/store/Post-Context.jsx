import { useReducer } from "react";
import { Children } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEDAULT_LIST);
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEDAULT_LIST = [
  {
    id: "1",
    title: "going to Mumbai",
    body: "Hi freinds i'm going to Mumbai for my vacations , Hope to enjoy a lot. Peace out...",
    reaction: 2,
    userId: "9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Building a Project",
    body: "Hi freinds i'm working on a project called, 'Blogging-App' ",
    reaction: 7,
    userId: "10",
    tags: ["React", "Computer-Science", "MCA"],
  },
];

export default PostListProvider;
