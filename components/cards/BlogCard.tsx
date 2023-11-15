import Link from "next/link";

const BlogCard = ({ tag, title, image, id, desc }) => {
  return (
    <div key={id}>
      <Link href={`/post/${id}`}>
        <div className="rounded-lg object-cover">
          <img
            src={image}
            alt={title}
            className="rounded-t-lg object-cover h-40 w-full"
          />
          <div className="p-4">
            <div className="text-sm font-medium text-gray-400">{tag}</div>
            <p className="text-cl font-semibold text-gray-800 block mt-2 h-10">
              {title}
            </p>
            <p className="mt-4 text-gray-600">{desc}</p>
            <button className="mt-4 text-white bg-green-600 font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out flex items-center">
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
