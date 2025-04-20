import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../lib/schema/auth.schema";
export default function Login() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  async function signup(values) {
    const loadingId = toast.loading("watting");
    try {
      const options = {
        url: "https://note-sigma-black.vercel.app/api/v1/users/signIn",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);

      if (data.msg === "done") {
        toast.success("done");
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setToken(data.token); //*null
        localStorage.setItem("token", data.token); //* remove
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      toast.dismiss(loadingId);
    }
  }

  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: signup,
    });
  return (
    <>
      <section className=" min-h-[60vh] flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-900 p-8 rounded-md shadow-sm shadow-gray-100 w-full sm:w-3/4 md:w-1/2 lg:max-w-[400px]"
        >
          <div className="email ">
            <input
              type="email"
              placeholder="Enter The email"
              className="w-full rounded-lg px-4 py-2 focus:ring-0 focus:bottom-0 focus:bg-gray-300"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 font-medium mt-2">{errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="password ">
            <input
              type="password"
              placeholder="Enter The password"
              className="w-full rounded-lg px-4 py-2 focus:ring-0 focus:bottom-0 focus:bg-gray-300"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 font-medium mt-2">{errors.password}</p>
            ) : (
              ""
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md font-bold bg-blue-600 hover:bg-blue-700 duration-300 transition-colors block mx-auto"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}
