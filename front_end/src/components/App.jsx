import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [stat , setStat] = useState(false);

  

  useEffect(() => {
    fetch('https://sumeet291102.github.io/notes_app/?title=c&content=h/')
       .then((res) => res.json())
       .then((data) => {
          console.log(data.data.notes);
          setNotes(data.data.notes);
       })
       .catch((err) => {
          console.log(err);
       });
  }, [stat]);


  function addNote() {
    setStat(prev => !prev);
  }
  function deleteNote() {
    setStat(prev => !prev);
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
