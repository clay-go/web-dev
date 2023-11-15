import Link from "next/link";
import { useState } from "react";

const Nav = ({ posts }) => {
  const [filter, setFilter] = useState("");

  const handlePostClick = () => {
    setFilter("");
  };

  const filteredPosts = filter
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <nav className="px-16 mt-10 flex justify-between items-center flex-wrap">
      <h1 className="text-4xl font-bold text-gray-800 p-4 mx-auto md:mx-0 text-center">
        OurWeb
      </h1>
      <div className="relative mx-auto md:mx-0">
        <input
          type="text"
          className="rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-600 transition duration-300 ease-in-out px-4 py-2"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
        {filteredPosts.length > 0 && (
          <div
            className="flex flex-col absolute bg-white border border-gray-200 rounded-lg mx-auto md:mx:0 mt-2"
            style={{ width: "100%" }}
          >
            {filteredPosts.map((post) => (
              <Link
                href={`/post/${post.number}`}
                key={post.id}
                className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out px-4 py-2"
                onClick={handlePostClick}
              >
                {post.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
