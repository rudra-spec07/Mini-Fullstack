import { useState } from "react";

function AddNoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] =
    useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await onAdd(title, content);

    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-4 rounded shadow mb-6"
    >

      <input
        className="w-full border p-3 mb-3 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="w-full border p-3 mb-3 rounded"
        placeholder="Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <button
        className="bg-green-600 text-white px-5 py-2 rounded"
      >
        Add Note
      </button>

    </form>
  );
}

export default AddNoteForm;