import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../blogs";
import NavBar from "../components/NavBar";
import comments_data from "../comments_data";
import moment from "moment";
import Footer from "../components/Footer";

const Blog = () => {

    const { id } = useParams();

    const [data, setData] = useState(null);

    const [comments, setComments] = useState([]);

    const [name, setName] = useState(" ");
    const [content, setContent] = useState(" ");


    const fetchComments = async () => {
        setComments(comments_data);
    }

    const fetchBlogData = async () => {
        const data = await blogs.find(item => item._id === parseInt(id))
        setData(data);
    }

    const addComment = async (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        fetchBlogData()
        fetchComments();
    }, [])

    return data ? (
        <div className="relative ">
            <NavBar />

            <div className="text-center mt-20 text-black-500">
                <p className="text-pink-400 py-4 font-medium">Published on {data.createdAt}</p>
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-black-800">{data.title}</h1>
                <h2 className="my-5 max-w-lg truncate mx-auto ">{data.subtitle}</h2>
                <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-pink-50 bg-pink-400 font-medium text-black">{data.author}</p>
            </div>

            <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
                <img
                    src={data.image}
                    alt="image"
                    className="mx-auto rounded-3xl mb-6 shadow-xl border-4 border-gray-200 w-full max-w-4xl h-96 sm:h-[30rem] md:h-[34rem] object-cover"
                />



                <div className="max-w-3xl mx-auto">{data.description}</div>

                <div className="mt-14 mb-10 max-w-3xl mx-auto">
                    <p className="font-semibold mb-4">Comments ({comments.length})</p>
                    <div className="flex flex-col gap-4">
                        {comments.map((item, index) => (
                            <div key={index} className="relative bg-primary/2 border border-primary/5 maxx-w-xl p-4 rounded text-black-600">
                                <div className="flex items-center gap-2 mb-2">
                                    <span role="img" aria-label="user" className="text-2xl">👤</span>
                                    <p className="font-medium">{item.name}</p>
                                </div>
                                <p className="text-sm max-w-md ml-8">{item.content}</p>
                                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">{moment(item.createdAt).fromNow()}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <p className="font-semibold mb-4">Add your comment</p>
                    <form onSubmit={addComment} className="flex flex-col items-start gap-4 max-w-lg w-full">

                        <input
                            onChange={(e)=>{setName(e.target.value)}}
                            value={name}
                            type="text"
                            placeholder="Name"
                            required
                            className="w-full p-2 border border-black-400 rounded outline-none"
                        />

                        <textarea
                            onChange={(e)=>{setContent(e.target.value)}}
                            value={content}
                            className="w-full p-2 border border-black-400 rounded outline-none h-48"
                            required
                            placeholder="Comment">
                        </textarea>

                        <button
                            type="submit"
                            className="bg-pink-500 text-black rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
                        >
                            Submit
                        </button>

                    </form>
                </div>

                <div className="my-24 max-w-3xl mx-auto">
                    <p className="font-semibold my-4">Share this article on social media:</p>
                    <div className="flex gap-5">
                        <img src="/facebook.png" alt="facebook" width={30} />
                        <img src="/twitter.png" alt="twitter" width={30}/>
                        <img src="/instagram.png" alt="instagram" width={30}/>
                    </div>
                </div>

            </div>

            <div>
                <Footer/>
            </div>
        </div>
    ) : <div>Loading ......</div>
}

export default Blog;