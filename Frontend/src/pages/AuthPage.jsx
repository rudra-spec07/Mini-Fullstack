import { useState } from "react";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const { theme } = useTheme();

  const themes = {
    light:
      "bg-gradient-to-br from-slate-100 to-slate-200",

    sunset:
      "bg-gradient-to-br from-orange-200 via-pink-200 to-yellow-100",

    hacker:
      "bg-black text-green-400",
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${themes[theme]}`}
    >
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <div
        className={`
        w-full max-w-md
        rounded-3xl
        p-6 md:p-8
        backdrop-blur-lg
        border
        shadow-2xl

        ${
          theme === "hacker"
            ? "bg-black/70 border-green-500"
            : "bg-white/70 border-white/30"
        }
      `}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          {theme === "hacker"
            ? "SYSTEM ACCESS"
            : "Notes Vault"}
        </h1>

        <p className="text-center mb-6 opacity-70">
          {theme === "hacker"
            ? "Authentication Required"
            : "Store your ideas securely"}
        </p>

        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}

        <button
          onClick={() =>
            setIsLogin(!isLogin)
          }
          className="
            mt-5
            w-full
            font-medium
            hover:scale-105
            transition
          "
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