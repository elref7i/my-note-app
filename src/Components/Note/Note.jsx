/* eslint-disable react/prop-types */
import { useContext } from "react";
import { deleteNote } from "../../lib/api/note.api";
import { NoteContext } from "../../context/Note.context";
import { UserContext } from "../../context/user.context";
import UpdateNoteModel from "../UpdateNoteModal/UpdateNoteModal";

export default function Note({ dataInfo }) {
  //States
  const { setNotes } = useContext(NoteContext);
  const { token } = useContext(UserContext);

  const { content, title, _id: id } = dataInfo;

  return (
    <>
      <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
        <h2 className="tilte text-white font-bold capitalize mb-2 pb-1 border-b-2 border-slate-400">
          {title}
        </h2>
        <p className="description text-slate-200 line-clamp-4">{content}</p>
        <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
          <UpdateNoteModel dataInfo={dataInfo} />
          <i
            onClick={() => {
              deleteNote({ noteId: id, token, setNotes });
            }}
            className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"
          ></i>
        </div>
      </div>
    </>
  );
}
