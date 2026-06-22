import { useState } from "react";
import API from "../api/axios";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        username,
        password,
      });

      alert(res.data.message);

      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>

      <input
        className="w-full border p-3 mb-4 rounded"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        className="w-full border p-3 mb-4 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />
              <button
                className="
                w-full
                bg-green-600
                text-white
                p-3
                rounded-xl
                hover:scale-105
                transition
              "
              >
                Register
              </button>

    </form>
  );
}

export default RegisterForm;