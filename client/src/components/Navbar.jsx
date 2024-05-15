import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  //giriş yapılmışsa user varsa logout ,yapılmamışşsa login yazması ıcın user stateını çek.
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`${URL}/auth/logout`);
      dispatch(clearUser());
      navigate("/login");
      toastSuccessNotify("Logout successfully");
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

  return (
    <Disclosure as="nav" className="bg-cyan-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCDkVpOYYxlXFSqh4y1HPFMyEj49lOk4-5X1LV8YPog&s"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    <NavLink
                      to="/"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "purple" : "black",
                        };
                      }}
                    >
                      DASHBOARD
                    </NavLink>
                    <NavLink
                      to="/newblog"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "purple" : "black",
                        };
                      }}
                    >
                      NEW BLOG
                    </NavLink>
                    <NavLink
                      to="/about"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "purple" : "black",
                        };
                      }}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!user?.email && (
                  <NavLink
                    to="/login"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "purple" : "black",
                      };
                    }}
                  >
                    LOGIN
                  </NavLink>
                )}

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://www.shutterstock.com/image-photo/social-media-connecting-blog-communication-260nw-247195609.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 gap-4 ring-black ring-opacity-5 focus:outline-none">
                      {user?.email && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/myblogs"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                My Blogs
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Profile
                              </NavLink>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            <span
                              onClick={handleLogout}
                              className="text-sm px-4 block py-2 text-gray-700 cursor-pointer"
                            >
                              Logout
                            </span>
                          </Menu.Item>
                        </>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div>
                <NavLink
                  className="p-2"
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "purple" : "black",
                    };
                  }}
                >
                  DASHBOARD
                </NavLink>
                <NavLink
                  className="p-2"
                  to="/newblog"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "purple" : "black",
                    };
                  }}
                >
                  NEW BLOG
                </NavLink>
                <NavLink
                  className="p-2"
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "purple" : "black",
                    };
                  }}
                >
                  ABOUT
                </NavLink>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
