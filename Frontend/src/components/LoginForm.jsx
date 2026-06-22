import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/axios";

function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>

      <input
        className="
                  w-full
                  p-3
                  mb-4
                  rounded-xl
                  border
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        className="
                    w-full
                    p-3
                    mb-4
                    rounded-xl
                    border
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
              className="
              w-full
              bg-blue-600
              text-white
              p-3
              rounded-xl
              hover:scale-105
              transition
            "
>
  Login
</button>

    </form>
  );
}

export default LoginForm;