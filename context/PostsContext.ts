"use client";
import { createContext } from "react";

const PostsContext = createContext({ posts: [], setPosts: () => {} });
export default PostsContext;
