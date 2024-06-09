export function Navbar({isHome} : {isHome:boolean}) {
    return <nav id="navbar" className={"flex justify-between p-10"}>
        <h1 className={"font-inter text-5xl font-semibold select-none"}>PostsApp</h1>
        <div>
            {
                <button
                    onClick={() => {
                        isHome ? window.location.hash = "make-post" : window.location.hash = ""
                    }}
                    className={"p-3 rounded-md bg-blue-600 hover:bg-blue-800 hover:scale-110 transition-transform text-white font-semibold"}>
                    {isHome ? "Make a post" : "Home"}
                </button>
            }
        </div>
    </nav>
}