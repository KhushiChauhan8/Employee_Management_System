import React, { useState } from "react";
import { showErrorToast, showSuccessToast } from "../../utils/toastConfig";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const loginSuccess = handleLogin(email, password);

      if (loginSuccess) {
        const isAdmin = email === "admin@example.com";
        showSuccessToast(
          isAdmin ? "Welcome back, Admin! 👋" : "Successfully logged in!"
        );
        setEmail("");
        setPassword("");
      } else {
        showErrorToast("Invalid credentials. Please try again.");
      }
    } catch (error) {
      showErrorToast("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-12 w-full max-w-md">
      <h2 className='text-3xl font-bold text-center mb-8 text-gray-100'>Welcome Back</h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" w-full border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            autoComplete="new-password"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
            autoComplete="new-password"
          />
          <button className="text-white border-none bg-emerald-500 hover:bg-emerald-600 py-3 px-5 text-xl  outline-none rounded-full mt-7 w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
