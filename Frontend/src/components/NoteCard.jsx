import { motion } from "framer-motion";

function NoteCard({
  note,
  onDelete,
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
      transition={{
        duration: 0.3,
      }}
      className="bg-white p-4 rounded-xl shadow-lg"
    >
      <h2 className="font-bold text-xl">
        {note.title}
      </h2>

      <p className="my-3">
        {note.content}
      </p>

      <button
        onClick={() =>
          onDelete(note._id)
        }
        className="bg-red-500 text-white px-4 py-2 rounded hover:scale-105 transition"
      >
        Delete
      </button>
    </motion.div>
  );
}

export default NoteCard;