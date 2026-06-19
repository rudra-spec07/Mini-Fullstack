const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createNote,
  getMyNotes,
  updateNote,
  deleteNote,
    getNoteById,
} = require("../controllers/noteController");

router.post("/", authMiddleware, createNote);

router.get("/", authMiddleware, getMyNotes);

router.get("/:id", authMiddleware, getNoteById);

router.put("/:id", authMiddleware, updateNote);

router.delete("/:id", authMiddleware, deleteNote);

module.exports = router;