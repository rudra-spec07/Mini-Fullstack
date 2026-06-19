import { useState } from "react";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          JWT Notes App
        </h1>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-blue-600"
        >
          {isLogin
            ? "Create Account"
            : "Already Have Account"}
        </button>

      </div>

    </div>
  );
}

export default AuthPage;