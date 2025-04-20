'use client';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
export function NavbarWebsite() {
  const { token, logout } = useContext(UserContext);
  return (
    <Navbar className="bg-gray-700 text-white py-3 fixed left-0 right-0">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Note App
        </span>
      </Navbar.Brand>
      {!token && (
        <div className="flex items-center gap-2  flex-1 justify-end pr-5">
          <NavLink
            to="login"
            className={({ isActive }) => {
              return `px-3 py-2 rounded-md text-lg ${
                isActive ? 'bg-red-400 font-bold' : ' font-medium'
              }`;
            }}
          >
            Login
          </NavLink>
          <NavLink
            to="signup"
            className={({ isActive }) => {
              return `px-3 py-2 rounded-md text-lg ${
                isActive ? 'bg-red-400 font-bold' : ' font-medium'
              }`;
            }}
          >
            Signup
          </NavLink>
        </div>
      )}
      {token && (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}
    </Navbar>
  );
}
