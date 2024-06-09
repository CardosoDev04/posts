import {Post} from "../components/Post.tsx";
import {useEffect, useState} from "react";
import {PostType} from "../types/Post.ts";

export function Home() {

    const [posts,setPosts] = useState<PostType[] | undefined>(undefined);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:5213/posts");
            setPosts(await response.json());
        }
        fetchPosts().then();
    },[])

    return (
        <>
            <div>
                <nav id="navbar" className={"flex justify-between p-10"}>
                    <h1 className={"font-inter text-5xl font-semibold select-none"}>PostsApp</h1>
                    <div>
                        <button
                            className={"p-3 rounded-md bg-blue-600 hover:bg-blue-800 hover:scale-110 transition-transform text-white font-semibold"}>Make
                            a post
                        </button>
                    </div>
                </nav>
                <section>
                        <ul className={"flex flex-col gap-y-5 justify-center items-center w-full"}>
                        {posts?.map((post) => {
                            return post ? <li className={"flex w-full justify-center"} key={post.id}><Post post={post}/></li> : <></>
                        })}
                        </ul>
                </section>
            </div>
        </>
    )
}