import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast"; // assuming you’re using react-hot-toast

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/newsletter/subscribe", { email });

      // Show success toast
      toast.success(res.data.message || "Subscribed successfully!");

      setEmail(""); // clear input
    } catch (error) {
      // Show error toast
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
      <p className="md:text-lg text-gray-600 pb-8">
        Subscribe to get the latest blog, lifestyles, celebrities news and exclusive gists.
      </p>
      <form 
        onSubmit={handleSubmit}
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
      > 
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-700" 
          placeholder="Enter Your Email Address" 
          required 
        />
        <button 
          type="submit" 
          className="md:px-12 px-8 h-full text-white bg-pink-500 hover:bg-pink-700 transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;


