function StatsCard({
  title,
  value,
}) {
  return (
    <div
      className="
      bg-white/70
      backdrop-blur-lg
      rounded-3xl
      p-6
      shadow-lg
      "
    >
      <h3 className="opacity-70">
        {title}
      </h3>

      <h2
        className="
        text-3xl
        font-bold
        mt-2
        "
      >
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;