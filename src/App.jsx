import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import ProtectRoute from "./Components/ProtectRoute/ProtectRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import { Toaster } from "react-hot-toast";
import UserProvider from "./context/user.context";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NoteProvider from "./context/Note.context";
import Signup from "./Pages/Signup/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Layout />
        </ProtectRoute>
      ),
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);
  return (
    <>
      <UserProvider>
        <NoteProvider>
          <RouterProvider router={router} />
        </NoteProvider>
      </UserProvider>
      <Toaster />
    </>
  );
}

export default App;
