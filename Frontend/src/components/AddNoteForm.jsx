import { useState } from "react";

function AddNoteForm({ onAdd }) {
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
      className="
        w-full
        border
        p-4
        mb-4
        rounded-xl
      "
      placeholder="Note Title"
      value={title}
      onChange={(e) =>
        setTitle(e.target.value)
      }
    />

    <textarea
      className="
        w-full
        border
        p-4
        mb-4
        rounded-xl
        h-32
      "
      placeholder="Write your note..."
      value={content}
      onChange={(e) =>
        setContent(e.target.value)
      }
    />

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