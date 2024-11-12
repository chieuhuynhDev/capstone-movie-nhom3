import React from "react";
import LoginForm from "./LoginForm";
import bG1 from "../../assest/img/bg1.jpg";

export default function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${bG1})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "120%",
      }}
      className="flex justify-center min-h-screen items-center"
    >
      <div className="space-y-10 bg-black bg-opacity-50 w-1/2 rounded border-2 p-4">
        <h1 className="mb-3 font-serif text-white">Đăng Nhập</h1>
        <LoginForm />
      </div>
    </div>
  );
}
