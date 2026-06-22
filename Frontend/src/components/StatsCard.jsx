import { useTheme } from "../context/ThemeContext";

function StatsCard({ title, value }) {
  const { theme } = useTheme();

  const cardStyle =
    theme === "hacker"
      ? "bg-[#001a00] border border-green-500 text-green-400"
      : "bg-white/70 text-black";

  return (
    <div
      className={`
        ${cardStyle}
        p-6
        rounded-3xl
        shadow-lg
        backdrop-blur-md
      `}
    >
      <p className="text-sm opacity-80">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;