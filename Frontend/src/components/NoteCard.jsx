function NoteCard({
  note,
  onDelete,
}) {
  return (
    <div className="bg-white p-4 rounded shadow">

      <h2 className="font-bold text-xl">
        {note.title}
      </h2>

      <p className="my-3">
        {note.content}
      </p>

      <button
        onClick={() => onDelete(note._id)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete
      </button>

    </div>
  );
}

export default NoteCard;