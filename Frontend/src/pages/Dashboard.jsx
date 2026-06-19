import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/axios";

import AddNoteForm from "../components/AddNoteForm";
import NoteCard from "../components/NoteCard";

function Dashboard() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          My Notes
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <AddNoteForm onAdd={addNote} />

      <div className="grid md:grid-cols-3 gap-4">

        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onDelete={deleteNote}
          />
        ))}

      </div>

    </div>
  );
}

export default Dashboard;