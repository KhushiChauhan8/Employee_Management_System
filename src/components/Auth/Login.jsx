import React, { useState } from "react";

const Login = ({handleLogin}) => {

  console.log(handleLogin)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail('');
    setPassword('');
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            autoComplete="new-password"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
            autoComplete="new-password"
          />
          <button className="text-white border-none bg-emerald-600 py-3 px-5 text-xl  outline-none rounded-full mt-7 w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
