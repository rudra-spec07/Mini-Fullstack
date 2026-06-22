import { useState } from "react";

function EditNoteModal({
  note,
  onClose,
  onUpdate,
}) {
  const [title, setTitle] =
    useState(note.title);

  const [content, setContent] =
    useState(note.content);

  const submitHandler = async (e) => {
    e.preventDefault();

    await onUpdate(
      note._id,
      title,
      content
    );

    onClose();
  };

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      p-4
      z-50
      "
    >
      <div
        className="
        bg-white
        rounded-2xl
        p-6
        w-full
        max-w-md
        shadow-2xl
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          mb-4
          "
        >
          Edit Note
        </h2>

        <form
          onSubmit={submitHandler}
        >
          <input
            className="
            w-full
            border
            p-3
            rounded-xl
            mb-3
            "
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

          <textarea
            className="
            w-full
            border
            p-3
            rounded-xl
            mb-4
            "
            value={content}
            onChange={(e) =>
              setContent(
                e.target.value
              )
            }
          />

          <div
            className="
            flex
            gap-3
            "
          >
            <button
              type="submit"
              className="
              flex-1
              bg-blue-600
              text-white
              p-3
              rounded-xl
              "
            >
              Update
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
              flex-1
              bg-gray-300
              p-3
              rounded-xl
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNoteModal;