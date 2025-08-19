import { useRef } from "react";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const clearSearchHandler = () => {
    setInput("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 relative"
      style={{ backgroundImage: "url('/heroimage.png')" }}
    >
      <div className="absolute inset-0 bg-white/60"></div>

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

        <form
          onSubmit={onSubmitHandler}
          className="flex items-center justify-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for Blogs"
            className="px-4 py-2 w-full md:w-64 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-500 cursor-pointer hover:bg-pink-700 text-white px-4 py-2 rounded transition"
          >
            Search
          </button>
        </form>

        {input && (
          <button
            onClick={clearSearchHandler}
            className="mt-4 px-3 py-1 text-sm text-pink-600 border border-pink-400 rounded hover:bg-pink-100 transition cursor-pointer"
          >
            ✖ Clear Search
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
