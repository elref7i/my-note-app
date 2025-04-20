import * as Yup from "yup";

// Note Schema
export const noteSchema = Yup.object({
  title: Yup.string().required("* Title Is Required"),

  content: Yup.string().required("* Content Is Required"),
});
