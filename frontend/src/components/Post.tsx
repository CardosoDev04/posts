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
                    <div id="post-actions" className={"flex justify-end items-end select-none w-1/4 flex-col gap-y-10"}>

                            <div className={"flex gap-x-4"}>
                                <span className={"font-inter text-lg"}>{post.likes}</span>
                                <button>
                                <img className={"w-7 h-7 opacity-75 hover:opacity-100"} alt="like"
                                     src={"https://cdn.jsdelivr.net/gh/CardosoDev04/cdn-test/like.png"}/>
                                </button>
                            </div>
                        <div className={"flex gap-x-4"}>
                            <span className={"font-inter text-lg"}>{post.dislikes}</span>
                            <button>
                                <img className={"w-7 h-7 opacity-75 hover:opacity-100"} alt="dislike"
                                     src={"https://cdn.jsdelivr.net/gh/CardosoDev04/cdn-test/thumb-down.png"}/>
                                </button>
                        </div>
                        <div className={"flex gap-x-4"}>
                            <span className={"font-inter text-lg"}>{post.views}</span>
                                <img className={"w-7 h-7 opacity-75"} alt="eye"
                                     src={"https://cdn.jsdelivr.net/gh/CardosoDev04/cdn-test/eye.png"}/>
                        </div>

                    </div>
                    <div id="post-content" className={"flex justify-center w-2/3 items-center"}>
                        <span className={"text-2xl"}>{post.content}</span>
                    </div>
                </div>
            </div>
        </>
    )
}