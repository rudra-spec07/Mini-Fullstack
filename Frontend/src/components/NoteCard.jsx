import { motion } from "framer-motion";

function NoteCard({
  note,
  onDelete,
  onEdit,
}) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.7,
      }}
      className="
      bg-white
      p-5
      rounded-2xl
      shadow-lg
      "
    >
      <h2
        className="
        text-xl
        font-bold
        "
      >
        {note.title}
      </h2>

      <p className="my-3">
        {note.content}
      </p>

      <div
        className="
        flex
        gap-2
        "
      >
        <button
          onClick={() =>
            onEdit(note)
          }
          className="
          flex-1
          bg-blue-600
          text-white
          py-2
          rounded
          "
        >
          Edit
        </button>

        <button
          onClick={() =>
            onDelete(
              note._id
            )
          }
          className="
          flex-1
          bg-red-500
          text-white
          py-2
          rounded
          "
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export default NoteCard;