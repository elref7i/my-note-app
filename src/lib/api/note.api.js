import axios from "axios";
import toast from "react-hot-toast";

// Add Note
export const addNote = async ({ values, token, setNotes }) => {
  const loading = toast.loading("Watting");
  try {
    const options = {
      url: "https://note-sigma-black.vercel.app/api/v1/notes",
      method: "POST",
      data: values,
      headers: {
        token: `3b8ny__${token}`,
      },
    };
    const { data } = await axios.request(options);
    if (data.msg === "done") {
      toast.success("done");
      const data = await getNote({ token });
      setNotes(data.notes);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.msg);
  } finally {
    toast.dismiss(loading);
  }
};

// Get Note
export const getNote = async ({ token, setNotes }) => {
  try {
    const options = {
      url: "https://note-sigma-black.vercel.app/api/v1/notes",
      method: "GET",
      headers: {
        token: `3b8ny__${token}`,
      },
    };
    const { data } = await axios.request(options);
    if (data.msg === "done") return data;
    // setNotes(data.notes);
  } catch (error) {
    console.log(error);
    setNotes(null);
  }
};

// Delete Note
//*Delete
export const deleteNote = async ({ noteId, setNotes, token }) => {
  const loading = toast.loading("Watting");
  try {
    const options = {
      url: `https://note-sigma-black.vercel.app/api/v1/notes/${noteId}`,
      method: "DELETE",
      headers: {
        token: `3b8ny__${token}`,
      },
    };
    const { data } = await axios.request(options);
    if (data.msg === "done") {
      const data = await getNote({ token });
      setNotes(data.notes);
      toast.success("done");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.msg);
  } finally {
    toast.dismiss(loading);
  }
};

// Update Note
export const updateNote = async ({ values, token, setNotes, noteId }) => {
  const loading = toast.loading("Watting");
  try {
    const options = {
      url: `https://note-sigma-black.vercel.app/api/v1/notes/${noteId}`,
      method: "PUT",
      data: values,
      headers: {
        token: `3b8ny__${token}`,
      },
    };
    const { data } = await axios.request(options);
    if (data.msg === "done") {
      toast.success("done");
      const data = await getNote({ token });
      setNotes(data.notes);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.msg);
  } finally {
    toast.dismiss(loading);
  }
};
