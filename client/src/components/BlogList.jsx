import { useState } from "react";
import BlogCard from "./BlogCard";
import blogs from "../blogs";

const BlogList = () => {
    const categories = [
        "✨ All",
        "🏳️‍🌈 Core Lifestyle",
        "🎨 Culture & Community",
        "💡 Practical Life",
        "🧑‍🤝‍🧑 Community Engagement"
    ];

    const [activeCategory, setActiveCategory] = useState("✨ All");

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-10 relative">
                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveCategory(item)}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx:40">
                {blogs
                    .filter((blog) =>
                        activeCategory === "✨ All" ? true : blog.category.trim() === activeCategory.trim()
                    )
                    .map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}

            </div>
        </div>
    );
};

export default BlogList;
