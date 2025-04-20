import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SignupSchema } from "../../lib/schema/auth.schema";
export default function Signup() {
  const navigate = useNavigate();

  async function signup(values) {
    const loadingId = toast.loading("watting");
    try {
      const options = {
        url: "https://note-sigma-black.vercel.app/api/v1/users/signUp",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.msg === "done") {
        toast.success("done");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
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
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
      },
      validationSchema: SignupSchema,
      onSubmit: signup,
    });
  return (
    <>
      <section className=" min-h-[60vh] flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-900 p-8 rounded-md shadow-sm shadow-gray-100 w-full sm:w-3/4 md:w-1/2 lg:max-w-[400px]"
        >
          <div className="name ">
            <input
              type="text"
              placeholder="Enter The Name"
              className="w-full rounded-lg px-4 py-2 focus:ring-0 focus:bottom-0 focus:bg-gray-300"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="text-red-500 font-medium mt-2">{errors.name}</p>
            ) : (
              ""
            )}
          </div>
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

          <div className="age ">
            <input
              type="number"
              placeholder="Enter The age"
              className="w-full rounded-lg px-4 py-2 focus:ring-0 focus:bottom-0 focus:bg-gray-300"
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.age && touched.age ? (
              <p className="text-red-500 font-medium mt-2">{errors.age}</p>
            ) : (
              ""
            )}
          </div>
          <div className="phone ">
            <input
              type="tel"
              placeholder="Enter The phone"
              className="w-full rounded-lg px-4 py-2 focus:ring-0 focus:bottom-0 focus:bg-gray-300"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <p className="text-red-500 font-medium mt-2">{errors.phone}</p>
            ) : (
              ""
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md font-bold bg-blue-600 hover:bg-blue-700 duration-300 transition-colors block mx-auto"
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}
