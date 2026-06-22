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
      className="bg-white p-6 rounded-xl shadow-lg mb-8"
    >
      <input
        className="w-full border p-3 mb-3 rounded-lg"
        placeholder="Note Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="w-full border p-3 mb-3 rounded-lg"
        placeholder="Write your note..."
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <button
        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
      >
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm;