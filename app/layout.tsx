"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import PostsContext from "@/context/PostsContext";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [posts, setPosts] = useState([]);
  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Nav posts={posts} />
          {children}
        </body>
      </html>
    </PostsContext.Provider>
  );
}
