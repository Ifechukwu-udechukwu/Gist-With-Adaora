const CommentTableItem = ({comment, fetchComments}) => {

    const {blog, createdAt, _id} = comment;

    const BlogDate = new Date(createdAt);
    return ( 
        <tr className="border-y border-black-300">
            <td className="px-6 py-4">
                <b className="font-medium text-black-600">Blog</b> : {blog.title}
                <br />
                <br />
                <b className="font-medium text-black-600">Name</b> : {comment.name}
                <br />
                <b className="font-medium text-black-600">Comment</b> : {comment.content}
            </td>

            <td className="px-6 py-4 max-sm:hidden">
                {BlogDate.toLocaleDateString()}
            </td>

            <td className="px-6 py-4 ">
                <div className="inline-flex items-center gap-4">
                    {!comment.isApproved ? 
                    <img src="/check.png" className="w-5 h-5 hover:scale-110 transition-all cursor-pointer" /> : <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3">Approved</p>} 
                    <img src="/delete.png" alt="bin" className="w-5 h-5 hover:scale-110 transition-all cursor-pointer"/>
                </div>
            </td>
        </tr>
     );
}
 
export default CommentTableItem;