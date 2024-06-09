import {Post} from "../components/Post.tsx";
import {useEffect, useState} from "react";
import {PostType} from "../types/Post.ts";
import {Navbar} from "../components/Navbar.tsx";

export function Home() {

    const [posts,setPosts] = useState<PostType[] | undefined>(undefined);

    const fetchPosts = async () => {
        const response = await fetch("http://localhost:5213/posts");
        setPosts(await response.json());
    }
    fetchPosts().then();

    useEffect(() => {
        fetchPosts().then()
    },[])

    return (
        <>
            <Navbar isHome={true}/>
            <div>
                <section className={"flex flex-col h-full justify-center items-center gap-y-10"}>
                    <button onClick={fetchPosts}>
                        <img className={"w-7 h-7 opacity-75 hover:opacity-100"} alt="refresh"
                             src={"https://cdn.jsdelivr.net/gh/CardosoDev04/cdn-test@main/refresh-page-option.png"}/>
                    </button>
                        <ul className={"flex flex-col-reverse gap-y-5 justify-center items-center w-full"}>
                        {posts?.map((post) => {
                            return post ? <li className={"flex w-full justify-center"} key={post.id}><Post post={post}/></li> : <></>
                        })}
                        </ul>
                </section>
            </div>
        </>
    )
}