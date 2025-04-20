/* eslint-disable react/prop-types */
import { Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import { noteSchema } from "../../lib/schema/note.schema";
import { updateNote } from "../../lib/api/note.api";
import { UserContext } from "../../context/user.context";
import { NoteContext } from "../../context/Note.context";

export default function UpdateNoteModel({ dataInfo }) {
  //States
  const { token } = useContext(UserContext);
  const { setNotes } = useContext(NoteContext);
  const [openModal, setOpenModal] = useState(false);

  // Var
  const { content, title, _id: id } = dataInfo;

  //Form
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    values,
    touched,
    errors,
    setValues,
  } = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: noteSchema,
    onSubmit: async (values) => {
      // ! Fun
      await updateNote({ values, token, setNotes, noteId: id });
      resetForm();
      setOpenModal(false);
    },
  });

  // Functions

  //Close Modal
  function onCloseModal() {
    setOpenModal(false);
  }

  // Open Modal
  const handleOpen = () => {
    setOpenModal(true);
    setValues({
      title,
      content,
    });
  };

  return (
    <>
      {/* !! */}
      <i
        onClick={handleOpen}
        className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"
      ></i>

      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="title"
                  value="Title"
                />
              </div>
              <TextInput
                id="title"
                placeholder="Enter the Title"
                required
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title ? (
                <p className="text-red-500 font-medium mt-2">{errors.title}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="Discription"
                  value="Discription"
                />
              </div>
              <Textarea
                id="Discription"
                type="text"
                required
                placeholder="Enter the Discription"
                rows={4}
                name="content"
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.content && touched.content ? (
                <p className="text-red-500 font-medium mt-2">
                  {errors.content}
                </p>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-white font-bold text-lg rounded-md px-4 py-2 mx-auto block"
            >
              Update note
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
