import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {

  const note_del = async () => {
    await fetch("http://127.0.0.1:8000/", {
      method: "DELETE",
      body: JSON.stringify({
        id: props.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .catch(err => {
      console.log(err);
    })

    props.onDelete();
  }

  function handleClick() {
    note_del();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
