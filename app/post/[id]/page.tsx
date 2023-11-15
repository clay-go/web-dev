"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const PostDetail = ({ params: { id } }) => {
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(`/api/posts/${id}`);
        setPost(data.data);
      } catch (error) {
        setError("Error fetching post");
      }
    }
    fetchData();
  }, [id]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full mt-20">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="text-xl mt-10 text-gray-500 md:w-1/2 text-center px-10">
          An error occurred while fetching the post. Please try again later.
        </p>
        <img
          src="https://images.unsplash.com/photo-1617142108319-66c7ab45c711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
          alt="error"
          className="w-96 h-96 object-cover mt-20 rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-20">
      <img
        src={post?.img}
        className="w-full h-96 object-cover object-center"
        alt={post?.title}
      />

      <div className="flex flex-col items-center justify-center w-full mt-20">
        <h1 className="text-4xl font-bold text-center md:text-left px-10">
          {post?.title || "No title found for this post!"}
        </h1>
        <p className="text-xl mt-10 text-gray-500 md:w-1/2 text-center px-10">
          {post?.subheading}
        </p>
        <div className="flex flex-row items-center justify-center w-full gap-5 mt-10">
          <img
            src={post?.authorImg}
            className="w-16 h-16 object-cover object-center rounded-full mt-19"
          />
          <div>
            <p className="text-xl mt-1 text-gray-500">{post?.author}</p>
            <p className="text-xl mt-1 text-gray-500">
              {new Date(post?.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        {
          <div className="mt-10 text-xl text-gray-500 md:w-1/2 px-10 flex flex-col gap-10 leading-10">
            {post?.content?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default PostDetail;
