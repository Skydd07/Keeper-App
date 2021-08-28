import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js"
import CreateArea from "./CreateArea";



function App(){

    const [notes, setNotes] = React.useState([]);


    function addNote(note){
       setNotes(prevNote =>{
           return [...prevNote, note]
       })
    }

    function deleteNote(id){
        setNotes(prevNote => {
            return prevNote.filter((noteItem, index) => {
                 return index !== id;
            });
        });
    }

    return <>
    <Header />
    <CreateArea 
        onAdd = {addNote}
    />
    {notes.map((noteItem, index) => {
       return (
           <Note 
           key = {index}
           id = {index}
           title= {noteItem.title}
           content= {noteItem.content}
           onDelete = {deleteNote}
           />
       )
    })}
    <Footer />
    </>
}

export default App;