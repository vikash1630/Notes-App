import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { NotesContext } from "./components/Contexts/NotesContext";

const Mainbar = () => {
  const { notes, deleteNote, togglePin, toggleArchive } = useContext(NotesContext);

  // Mobile dropdown state
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mt-4 w-full">

      {/* ---------------- NAVBAR ALREADY ABOVE ---------------- */}

      {/* ---------------- MOBILE MORE FEATURES ROW ---------------- */}
      <div className="md:hidden flex items-center gap-3 px-4 mt-4">

        {/* HORIZONTAL LINES (≡) */}
        <div
          className="cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="w-8 h-1 bg-white mb-1 rounded"></div>
          <div className="w-8 h-1 bg-white mb-1 rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
        </div>

        <h1 className="text-white text-lg font-semibold">
          More Features
        </h1>
      </div>

      {/* ---------------- MOBILE DROPDOWN MENU ---------------- */}
      {showMenu && (
        <div className="md:hidden bg-zinc-800 text-white border border-zinc-600 rounded-xl mt-3 mx-4 p-4">

          <NavLink to="/" className="block py-2 border-b border-zinc-700">
            🗂️ All Notes
          </NavLink>

          <NavLink to="/Pinned" className="block py-2 border-b border-zinc-700">
            📌 Pinned
          </NavLink>

          <NavLink to="/Archived" className="block py-2 border-b border-zinc-700">
            🗄️ Archived
          </NavLink>

          <h2 className="mt-3 mb-2 text-amber-400 font-semibold">🏷 Tags</h2>

          <div className="ml-2 space-y-2">
            <span className="block">• Work</span>
            <span className="block">• Personal</span>
            <span className="block">• Ideas</span>
          </div>
        </div>
      )}

      <div className="flex gap-4 w-full mt-4">

        {/* ---------------- DESKTOP SIDEBAR ---------------- */}
        <aside className="hidden md:flex flex-col justify-between h-[85vh] w-64 bg-zinc-800 text-white p-6 rounded-3xl shadow-lg border border-zinc-700">

          <div className="flex flex-col gap-3">
            <NavLink to="/" className="text-center bg-zinc-600 px-4 py-3 rounded-lg text-xl hover:bg-zinc-700">
              🗂️ All Notes
            </NavLink>

            <NavLink to="/Pinned" className="text-center px-4 py-3 rounded-lg text-xl hover:bg-zinc-700">
              📌 Pinned
            </NavLink>

            <NavLink to="/Archived" className="text-center px-4 py-3 rounded-lg text-xl hover:bg-zinc-700">
              🗄️ Archived
            </NavLink>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-center text-amber-400 text-lg">🏷 Tags</h2>
            <span className="px-3 py-2 rounded-md bg-zinc-700 text-center">Work</span>
            <span className="px-3 py-2 rounded-md bg-zinc-700 text-center">Personal</span>
            <span className="px-3 py-2 rounded-md bg-zinc-700 text-center">Ideas</span>
          </div>
        </aside>

        {/* ---------------- MAIN CONTENT AREA ---------------- */}
        <main className="flex-1">
          <div className="h-[85vh] w-full bg-zinc-800 text-white p-6 rounded-3xl shadow-lg border border-zinc-700 overflow-y-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

              {/* Add Note Button */}
              <NavLink
                to="/NewFile"
                className="flex items-center justify-center border-2 border-dashed border-amber-500 h-64 rounded-2xl bg-zinc-700 hover:bg-zinc-600"
              >
                <div className="h-20 w-20 flex items-center justify-center border-2 border-dashed border-amber-400 rounded-full text-5xl font-bold text-amber-400">
                  +
                </div>
              </NavLink>

              {/* Notes */}
              {notes.length > 0 ? (
                notes.map((note, idx) => (
                  <div
                    key={note.id}
                    className="p-5 h-64 bg-zinc-700 rounded-2xl border border-amber-500 shadow-lg"
                  >
                    <h1 className="text-lg opacity-70">#{idx + 1}</h1>
                    <h1 className="text-2xl font-bold truncate mt-1">{note.title}</h1>
                    <h2 className="text-gray-300 text-sm mt-2">📅 {note.date}</h2>

                    <div className="flex gap-2 mt-6">
                      <button onClick={() => deleteNote(note.id)} className="flex-1 py-2 border border-red-500 rounded-md text-red-400 hover:bg-red-500 hover:text-white">
                        Delete
                      </button>

                      <button onClick={() => toggleArchive(note.id)} className="flex-1 py-2 border border-purple-500 rounded-md text-purple-300 hover:bg-purple-500 hover:text-white">
                        {note.archived ? "Unarchive" : "Archive"}
                      </button>

                      <button onClick={() => togglePin(note.id)} className="flex-1 py-2 border border-green-500 rounded-md text-green-300 hover:bg-green-500 hover:text-white">
                        {note.pin ? "Unpin" : "Pin"}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-xl">No notes saved</h1>
              )}

            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Mainbar;
