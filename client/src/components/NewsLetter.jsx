const NewsLetter = () => {
    return ( 
        <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
            <p className="md:text-lg text-gray-600 pb-8">
                Subscribe to get the latest blog, lifestyles, celebrities news and exclusive gists.
            </p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"> 
                <input 
                    type="text" 
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
}
 
export default NewsLetter;
