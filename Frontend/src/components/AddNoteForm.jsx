import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
function AddNoteForm({ onAdd }) {
  const { theme } = useTheme();

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const submitHandler = async (
    e
  ) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !content.trim()
    )
      return;

    await onAdd(
      title,
      content
    );

    setTitle("");
    setContent("");
  };

  return (
  <form
    onSubmit={submitHandler}
    className="
      max-w-2xl
      mx-auto
      bg-white/70
      backdrop-blur-lg
      p-6
      rounded-3xl
      shadow-xl
      mb-10
    "
  >
    <input
      className={`
w-full
p-4
rounded-2xl
border
${
  theme === "hacker"
    ? "bg-black border-green-500 text-green-400 placeholder:text-green-700"
    : "bg-white"
}
`}
      placeholder="Note Title"
      value={title}
      onChange={(e) =>
        setTitle(e.target.value)
      }
    />

    <textarea
      className={`
        w-full
        border
        p-4
        mb-4
        rounded-xl
        h-32
        ${
          theme === "hacker"
            ? "bg-black border-green-500 text-green-400 placeholder:text-green-700"
            : "bg-white"
        }
      `}
      placeholder="Write your note..."
      value={content}
      onChange={(e) =>
        setContent(e.target.value)
      }
    />

    <p
  className={`
    text-sm
    mb-4
    ${
      theme === "hacker"
  ? "text-lime-300"
  : "text-gray-500"
    }
  `}
>
  [{content.length}] characters
</p>

    <button
      className="
        bg-green-600
        hover:bg-green-700
        text-white
        px-6
        py-3
        rounded-xl
        transition
      "
    >
      Add Note
    </button>
  </form>
);}

export default AddNoteForm;