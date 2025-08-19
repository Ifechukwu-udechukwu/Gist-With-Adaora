import { useState } from "react";
import BlogCard from "./BlogCard";
import { useAppContext } from "../../context/AppContext";

const BlogList = () => {
  const categories = [
    "✨ All",
    "🏳️‍🌈 Core Lifestyle",
    "🎨 Culture & Community",
    "💡 Practical Life",
    "🧑‍🤝‍🧑 Community Engagement"
  ];

  const { blogs, input } = useAppContext();
  const [activeCategory, setActiveCategory] = useState("✨ All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 60; // 60 blogs per page

  const filteredBlogs = () => {
    return blogs.filter((blog) => {
      const matchesSearch =
        input === "" ||
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase());

      const matchesCategory =
        activeCategory === "✨ All" ||
        blog.category.trim() === activeCategory.trim();

      return matchesSearch && matchesCategory;
    });
  };

  const paginatedBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return filteredBlogs().slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredBlogs().length / blogsPerPage);

  return (
    <div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-10 relative">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => { setActiveCategory(item); setCurrentPage(1); }}
            className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition
              ${activeCategory === item
                ? "bg-pink-500 text-white"
                : "text-pink-600 hover:bg-pink-200"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 mx-8 sm:mx-16 xl:mx-40">
        {paginatedBlogs().map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center items-center gap-4 mb-24">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
