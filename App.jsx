import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js"



function App(){
    return <>
    <Header />
    {notes.map( container => (
        <Note 
            key = {container.key}
            title = {container.title}
            content = {container.content}
        />
    )
 )}
    <Footer />
    </>
}

export default App;