import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import categories from "../../categories";
import { useAppContext } from "../../../context/AppContext";
import toast from "react-hot-toast";
import { parse } from "marked";

const AddBlog = () => {

    const { axios } = useAppContext();
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);

    const editorRef = useRef(null);
    const quillRef = useRef(null);


    const [image, setImage] = useState(false);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [category, setCategory] = useState("🏳️‍🌈 Core Lifestyle");
    const [isPublished, setIsPublished] = useState(false);

    const generateContent = async () => {
        if (!title) return toast.error("Please enter a title")
        try {
            setLoading(true);
            const { data } = await axios.post("api/blog/generate", { prompt: title })
            if (data.success) {
                quillRef.current.root.innerHTML = parse(data.content)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            setIsAdding(true)

            const blog = {
                title, subTitle,
                description: quillRef.current.root.innerHTML,
                category, isPublished
            }

            const formData = new FormData();
            formData.append("blog", JSON.stringify(blog))
            formData.append("image", image)

            const { data } = await axios.post("/api/blog/add", formData)

            if (data.success) {
                toast.success(data.message);
                setSubTitle(" ");
                setIsPublished(false);
                setImage(false)
                setTitle(" ")
                quillRef.current.root.innerHTML = " "
                setCategory("🏳️‍🌈 Core Lifestyle")
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsAdding(false)
        }
    }

    useEffect(() => {
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, { theme: "snow" })
        }
    }, []);


    return (
        <form onSubmit={onSubmitHandler} className="flex-1 bg-white text-black-600 h-full overflow-scroll">
            <div className="bg-white border border-gray-300 w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
                <p>Upload thumbnail</p>
                <label htmlFor="image">
                    <img src={!image ? "/upload.png" : URL.createObjectURL(image)} alt="icon" className="mt-4 ml-7 h-16 bg-gray-100 rounded cursor-pointer" />
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </label>

                <p className="mt-4">Blog title</p>
                <input type="text" placeholder="Type here" required className="w-full max-w-lg mt-2 p-2 border border-black outline-none rounded" onChange={(e) => setTitle(e.target.value)} value={title} />

                <p className="mt-4">Sub title</p>
                <input type="text" placeholder="Type here" required className="w-full max-w-lg mt-2 p-2 border border-black outline-none rounded" onChange={(e) => setSubTitle(e.target.value)} value={subTitle} />

                <p className="mt-4">Blog Description</p>
                <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative ">
                    <div ref={editorRef}></div>
                    {loading && (
                        <div className="absolute right-0 top-0 bottom-0 left-0 flex items-center justify-center bg-black/10 mt-2">
                            <div className="w-8 h-8 rounded-full border-2 border-t-white animate-spin"></div>
                        </div>)}
                    <button disabled={loading} className="absolute bottom-1 right-2 ml-2 rext-xs text-white bg-black/60 px-4 py-1.5 rounded hover:underline cursor-pointer" type="button" onClick={generateContent}> Generate with AI</button>
                </div>

                <p className="mt-4">Blog category</p>
                <select onChange={(e) => setCategory(e.target.value)} name="category" className="mt-2 px-3 py-2 border text-black border-black outline-none rounded">
                    <option value="">Select category</option>
                    {categories.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })}
                </select>

                <div className="flex gap-2 mt-4">
                    <p>Publish Now</p>
                    <input type="checkbox" checked={isPublished} className="scale-125 cursor-pointer" onChange={e => setIsPublished(e.target.checked)} />
                </div>

                <button disabled={isAdding} type="submit" className="mt-8 w-40 h-10 bg-pink-500 text-black rounded cursor-pointer text-sm">{isAdding ? "Adding..." : "Add Blog"}</button>
            </div>
        </form>
    );
}

export default AddBlog;