import { Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import { noteSchema } from "../../lib/schema/note.schema";
import { addNote } from "../../lib/api/note.api";
import { UserContext } from "../../context/user.context";
import { NoteContext } from "../../context/Note.context";

export default function AddNoteModel() {
  //States
  const { token } = useContext(UserContext);
  const { setNotes } = useContext(NoteContext);

  const [openModal, setOpenModal] = useState(false);

  //Form
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: noteSchema,
    onSubmit: async (values) => {
      await addNote({ values, token, setNotes });
      resetForm();
      setOpenModal(false);
    },
  });
  //Functions
  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-yellow-400 text-white font-bold text-lg rounded-md px-4 py-2"
      >
        Add Note
      </button>
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
              Add Note
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
