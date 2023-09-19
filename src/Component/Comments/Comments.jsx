import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";

const Comments = () => {
    const comments = useLoaderData()
    return (
        <>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold my-10 underline">Comments: {comments.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-10">
                {
                    comments.map(comment=> 
                        <Comment
                            key={comment.id}
                            comment={comment}
                        />
                    )
                }
            </div>
        </>
    );
};

export default Comments;