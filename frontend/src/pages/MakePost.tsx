import {Navbar} from "../components/Navbar.tsx";
import React from "react";

export function MakePost() {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const content = (form.elements as any).content.value;
        const res = await fetch("http://localhost:5213/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author: "Current User",
                content: content,
                authorid: 1
            })
        });
        if(res.ok) {
            alert("Post created successfully");
            form.reset();
            window.location.hash = "";
        } else {
            alert("Failed to create post");
        }
    }
    return(
        <>
            <div className={"flex flex-col h-screen w-screen border border-black"}>
            <Navbar isHome={false}/>
            <section id="form-section" className={"flex w-full h-full flex-col items-center justify-center"}>
                <form onSubmit={handleSubmit} id="post-form" className={"flex w-full justify-center items-center flex-col gap-y-5"}>
                    <textarea id="content" className={"p-2 w-2/3 shadow-md border border-gray-300 rounded-md"} placeholder="Content"/>
                    <button id="submit" className={"p-2 w-20 rounded-md bg-blue-600 hover:bg-blue-800 hover:scale-110 transition-transform text-white font-semibold"}>Submit</button>
                </form>
            </section>
            </div>
        </>
    );
}