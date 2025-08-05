const Header = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 relative"
      style={{ backgroundImage: "url('/heroimage.png')" }}
    >
      <div className="absolute inset-0 bg-white/60 "></div>

      <div className="text-center max-w-xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          🌸 Feminine <br /> & <br /> Inspirational
        </h1>
        <h5 className="text-xl md:text-2xl font-medium text-pink-600 mb-2">
          "Living Beautifully, Every Day"
        </h5>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Discover tips, stories, and moments that make life a little more joyful.
        </p>

        <form className="flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search for Blogs"
            required
            className="px-4 py-2 w-full md:w-64 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-500 cursor-pointer hover:bg-pink-700 text-white px-4 py-2 rounded transition"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;