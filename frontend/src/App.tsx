import {Home} from "./pages/Home.tsx";
import {MakePost} from "./pages/MakePost.tsx";
import {useEffect, useState} from "react";

function App() {
    const [hash, setHash] = useState(window.location.hash);


    function handleHashChange() {
        setHash(window.location.hash);
        console.log(hash)
    }

    useEffect(() => {
        window.addEventListener("hashchange", handleHashChange );

        return () => {window.removeEventListener("hashchange",handleHashChange)}
    })
  return (
    <>
        {hash == "" && <Home/>}
        {hash == "#make-post" && <MakePost/>}
    </>
  )
}

export default App
