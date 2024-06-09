import {PostType} from "../types/Post.ts";
import {formatDate, getTime} from "../utils/FormatUtils.ts";

export function Post({post}:{post: PostType}) {
    const date = new Date(post.publishedOn);
    return(
        <>
            <div className={"flex rounded-md justify-between items-center w-2/3 shadow-angle"}>
                <div className={"p-10 flex w-full justify-between"}>
                    <div id="post-info" className={"flex flex-col gap-y-3 select-none"}>
                    <h2 className={"font-inter font-semibold text-2xl"}>{
                        post?.author
                    }</h2>
                    <span className={"font-inter text-md"}>Posted on {formatDate(date)} at {getTime(date)}</span>
                    </div>
                    <div id="post-actions" className={"flex flex-col gap-y-3"}>
                        <button>
                            <div className={"flex gap-x-2"}>
                            <span className={"font-inter text-lg"}>{post.likes}</span>
                            <img className={"w-8 h-8"}></img>
                            </div>
                        </button>
                    </div>
                    <div id="post-content" className={"flex justify-center items-center"}>
                        <span className={"text-2xl"}>{post.content}</span>
                    </div>
                </div>
            </div>
        </>
    )
}