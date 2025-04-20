import { useContext, useEffect } from "react";
import AddNoteModel from "../../Components/AddNoteModel/AddNoteModel";
import Note from "../../Components/Note/Note";
import { getNote } from "../../lib/api/note.api";
import { UserContext } from "../../context/user.context";
import { NoteContext } from "../../context/Note.context";

export default function Home() {
  //states
  const { notes, setNotes } = useContext(NoteContext);
  const { token } = useContext(UserContext);

  // Function
  const getNotes = async () => {
    const data = await getNote({ token });
    console.log(data);
    setNotes(data.notes);
  };

  // Hook
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="flex justify-end items-center">
        <AddNoteModel />
      </div>

      {notes ? (
        <div className="mt-10 p-5 grid grid-cols-12 gap-5 bg-slate-800 shadow-sm shadow-slate-50">
          {notes
            ? notes.map((note) => (
                <Note
                  key={note._id}
                  dataInfo={note}
                />
              ))
            : "loading"}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
