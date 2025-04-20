import * as Yup from "yup";
import {
  AGE_REGX,
  EMAIL_REGX,
  PASS_REGX,
  PHONE_REGX,
} from "../constants/auth.constants";

// Login
export const loginSchema = Yup.object({
  email: Yup.string()
    .required("* Email Is Required")
    .matches(EMAIL_REGX, "* Not Match"),
  password: Yup.string()
    .required("* Password Is Required")
    .matches(PASS_REGX, "* Not Match"),
});

// Sign up

export const SignupSchema = Yup.object({
  name: Yup.string()
    .required("* Name Is Required")
    .min(3, "* Not Vaild MIN")
    .max(20, "* Not Vaild MAx"),
  email: Yup.string()
    .required("* Email Is Required")
    .matches(EMAIL_REGX, "* Not Match"),
  password: Yup.string()
    .required("* Password Is Required")
    .matches(PASS_REGX, "* Not Match"),
  phone: Yup.string()
    .required("* Phone Is Required")
    .matches(PHONE_REGX, "* Not Match"),
  age: Yup.number()
    .integer("* Not Valid Intager")
    .positive("* Not Valid positive")
    .required("* Age Is Required")
    .test("", "* Not Valid", (value) => AGE_REGX.test(value.toString() || "")),
});
