import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import API from "../api/axios";

import AddNoteForm from "../components/AddNoteForm";
import NoteCard from "../components/NoteCard";
import ThemeSwitcher from "../components/ThemeSwitcher";
import EditNoteModal from "../components/EditNoteModal";

import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const navigate = useNavigate();

  const { theme } = useTheme();

  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");

      setNotes(res.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (
    title,
    content
  ) => {
    try {
      await API.post("/notes", {
        title,
        content,
      });

      fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await API.delete(`/notes/${id}`);

      fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (
    id,
    title,
    content
  ) => {
    try {
      await API.put(`/notes/${id}`, {
        title,
        content,
      });

      fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  const themes = {
    light:
      "bg-slate-100 text-black",

    sunset:
      "bg-gradient-to-br from-orange-200 via-pink-200 to-yellow-100 text-black",

    hacker:
      "bg-black text-green-400",
  };

  const filteredNotes =
    notes.filter((note) =>
      note.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
  <div
    className={`
      min-h-screen
      transition-all
      duration-500
      ${themes[theme]}
    `}
  >
    <div
      className="
      max-w-7xl
      mx-auto
      px-4
      md:px-8
      py-6
    "
    >
      {/* HEADER */}

      <div
  className="
  flex
  flex-col
  md:flex-row
  justify-between
  items-center
  gap-6
  mb-10
"
>
        <div>
          <h1
            className="
            text-3xl
            md:text-5xl
            font-bold
          "
          >
            {theme === "hacker"
              ? "SYSTEM ONLINE"
              : "My Notes"}
          </h1>

          <p className="mt-2">
            Total Notes:
            {" "}
            {notes.length}
          </p>

          {theme === "hacker" && (
            <div className="mt-3 text-sm">
              <p>
                JWT VERIFIED
              </p>
              <p>
                USER AUTHENTICATED
              </p>
              <p>
                NOTES LOADED
              </p>
            </div>
          )}
        </div>

        <div
          className="
          flex
          flex-wrap
          gap-3
          items-center
        "
        >
          <ThemeSwitcher />

          <button
            onClick={logout}
            className="
            bg-red-600
            text-white
            px-4
            py-2
            rounded-xl
            hover:scale-105
            transition
          "
          >
            Logout
          </button>
        </div>
      </div>

      {/* SEARCH */}

      <div className="flex justify-center mb-10">
  <input
    type="text"
    placeholder="🔍 Search notes..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="
      w-full
      max-w-xl
      p-4
      rounded-2xl
      shadow-lg
      backdrop-blur-md
      bg-white/70
      border
      focus:outline-none
      focus:ring-2
      focus:ring-orange-400
    "
  />
</div>

      {/* ADD NOTE */}

      <AddNoteForm onAdd={addNote} />

      {/* EMPTY STATE */}

      {filteredNotes.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-5xl">
            📝
          </h2>

          <p className="mt-4 text-xl">
            No notes found
          </p>
        </div>
      )}

      {/* NOTES GRID */}

      <div
  className="
  mt-10
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-6
"
>
        <AnimatePresence>
          {filteredNotes.map(
            (note) => (
              <NoteCard
                key={note._id}
                note={note}
                onDelete={
                  deleteNote
                }
                onEdit={
                  setEditingNote
                }
              />
            )
          )}
        </AnimatePresence>
      </div>

      {/* EDIT MODAL */}

      {editingNote && (
        <EditNoteModal
          note={editingNote}
          onClose={() =>
            setEditingNote(null)
          }
          onUpdate={updateNote}
        />
      )}
    </div>
    </div>
  );
}

export default Dashboard;