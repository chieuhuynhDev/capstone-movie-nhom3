import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  let user = useSelector((state) => state.userSlice.dataLogin);
  console.log("user:", user);
  let handleLogout = () => {
    // 1 . xoá localStorage
    localStorage.removeItem("USER_LOGIN");
    // 2 . đá ra trang login
    window.location.href = "/";
  };

  let renderMenu = () => {
    if (user) {
      // user đã đăng nhập
      return (
        <>
          <strong className="text-xl mr-2">{user.hoTen}</strong>
          <button
            onClick={handleLogout}
            className="rounded bg-pink-200 text-black border-black border-2 py-3 px-4 no-underline hover:bg-red-500"
          >
            Đăng xuất
          </button>
        </>
      );
    } else {
      // user chưa đăng nhập
      return (
        <>
          <NavLink
            to="/login"
            className=" rounded bg-pink-200 text-black border-black border-2 py-3 px-4 no-underline hover:bg-green-500"
          >
            Đăng nhập
          </NavLink>
        </>
      );
    }
  };
  return (
    <header className="p-4  bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a className="flex items-center p-2">
          <NavLink
            to="/"
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-4 -mb-1 hover:text-red-500"
          >
            <img
              className="w-48"
              src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
              alt=""
            />
          </NavLink>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 hover:text-red-500"
            >
              Lịch Chiểu
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 hover:text-red-500 "
            >
              Cụm Rạp
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1  hover:text-red-500"
            >
              Tin Tức
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1  hover:text-red-500"
            >
              Ứng Dụng
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex ">
          {renderMenu()}
          {/* <button className="self-center px-8 py-3 rounded">Đăng nhập</button> */}
          {/* <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
            Sign up
          </button> */}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
