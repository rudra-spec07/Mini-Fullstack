import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } =
    useTheme();

  return (
    <div className="flex gap-2">

      <button
        onClick={() => setTheme("light")}
        className="px-3 py-2 rounded bg-white"
      >
        ☀
      </button>

      <button
        onClick={() => setTheme("sunset")}
        className="px-3 py-2 rounded bg-orange-300"
      >
        🌅
      </button>

      <button
        onClick={() => setTheme("hacker")}
        className="px-3 py-2 rounded bg-black text-green-400"
      >
        💀
      </button>

    </div>
  );
}

export default ThemeSwitcher;