import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import API from "../api/axios";

import AddNoteForm from "../components/AddNoteForm";
import NoteCard from "../components/NoteCard";
import ThemeSwitcher from "../components/ThemeSwitcher";

import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const navigate = useNavigate();

  const { theme } = useTheme();

  const [notes, setNotes] =
    useState([]);

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
    await API.post("/notes", {
      title,
      content,
    });

    fetchNotes();
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);

    fetchNotes();
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

  return (
    <div
      className={`min-h-screen p-8 transition-all duration-500 ${themes[theme]}`}
    >
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            {theme === "hacker"
              ? "SYSTEM ONLINE"
              : "My Notes"}
          </h1>

          <p>
            Total Notes:
            {" "}
            {notes.length}
          </p>
        </div>

        <div className="flex gap-3 items-center">

          <ThemeSwitcher />

          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:scale-105 transition"
          >
            Logout
          </button>

        </div>
      </div>

      <AddNoteForm onAdd={addNote} />

      {notes.length === 0 && (
        <div className="text-center mt-10">
          <h2 className="text-2xl">
            📝 No Notes Yet
          </h2>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4">

        <AnimatePresence>

          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={deleteNote}
            />
          ))}

        </AnimatePresence>

      </div>

    </div>
  );
}

export default Dashboard;