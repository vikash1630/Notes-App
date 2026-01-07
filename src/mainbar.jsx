import React, { useRef, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { NotesContext } from "./components/Contexts/NotesContext";

const Mainbar = () => {
    const [collapse, setCollapse] = useState(false);
    const { notes, deleteNote, togglePin, toggleArchive } = useContext(NotesContext);
    const refs = {
        all: useRef(),
        pinned: useRef(),
        archived: useRef(),
        work: useRef(),
        personal: useRef(),
        ideas: useRef(),
    };

    const removeHighlights = () => {
        Object.values(refs).forEach((ref) =>
            ref.current?.classList.remove("bg-zinc-600", "text-amber-400")
        );
    };

    const handleClick = (ref) => {
        removeHighlights();
        ref.current.classList.add("bg-zinc-600", "text-amber-400");
    };

    return (
        <div className="mt-6 w-full">
            <div className="flex gap-4 md:gap-6 w-full">

                {/* Sidebar (full for desktop, collapsible + auto collapsed on mobile) */}
                {!collapse ? (
                    <nav className="hidden md:flex h-[85vh] w-64 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-6 rounded-3xl shadow-2xl flex-col justify-between border border-zinc-700">
                        
                        {/* All Notes + Pinned + Archived */}
                        <div className="flex flex-col gap-3">
                            <h1
                                ref={refs.all}
                                onClick={() => handleClick(refs.all)}
                                className="cursor-pointer text-center rounded-lg px-4 py-3 text-xl font-semibold hover:bg-zinc-700 bg-zinc-600 transition-all"
                            >
                                🗂️ All Notes
                            </h1>

                            <NavLink
                                to="/Pinned"
                                ref={refs.pinned}
                                onClick={() => handleClick(refs.pinned)}
                                className={({ isActive }) =>
                                    `text-center px-4 py-3 rounded-lg text-xl cursor-pointer hover:bg-zinc-700 transition-all ${
                                        isActive ? "bg-zinc-600 text-amber-400" : ""
                                    }`
                                }
                            >
                                📌 Pinned
                            </NavLink>

                            <NavLink
                                to="/Archived"
                                ref={refs.archived}
                                onClick={() => handleClick(refs.archived)}
                                className={({ isActive }) =>
                                    `text-center px-4 py-3 rounded-lg text-xl cursor-pointer hover:bg-zinc-700 transition-all ${
                                        isActive ? "bg-zinc-600 text-amber-400" : ""
                                    }`
                                }
                            >
                                🗄️ Archived
                            </NavLink>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-col gap-3">
                            <h2 className="font-semibold text-center text-lg text-amber-400">🏷️ Tags</h2>

                            <span
                                ref={refs.work}
                                onClick={() => handleClick(refs.work)}
                                className="cursor-pointer text-center hover:bg-zinc-700 rounded-md text-base px-3 py-2 transition-all"
                            >
                                Work
                            </span>
                            <span
                                ref={refs.personal}
                                onClick={() => handleClick(refs.personal)}
                                className="cursor-pointer text-center hover:bg-zinc-700 rounded-md text-base px-3 py-2 transition-all"
                            >
                                Personal
                            </span>
                            <span
                                ref={refs.ideas}
                                onClick={() => handleClick(refs.ideas)}
                                className="cursor-pointer text-center hover:bg-zinc-700 rounded-md text-base px-3 py-2 transition-all"
                            >
                                Ideas
                            </span>
                        </div>

                        <button
                            onClick={() => setCollapse(true)}
                            className="mt-4 bg-amber-600 hover:bg-amber-500 text-white py-2 px-4 rounded-lg text-base flex items-center justify-center shadow-md"
                        >
                            ⬅️ Collapse
                        </button>
                    </nav>
                ) : (
                    <nav className="hidden md:flex h-[85vh] w-20 bg-zinc-800 rounded-3xl items-center justify-center shadow-xl border border-zinc-700">
                        <button
                            onClick={() => setCollapse(false)}
                            className="rotate-180 text-white text-3xl hover:text-amber-400 transition-all"
                            title="Expand"
                        >
                            ➡️
                        </button>
                    </nav>
                )}

                {/* Mobile Sidebar Button */}
                <div className="md:hidden flex justify-between w-full px-4">
                    <button
                        onClick={() => setCollapse((prev) => !prev)}
                        className="text-white text-3xl hover:text-amber-400 transition-all"
                    >
                        {collapse ? "📂" : "📁"}
                    </button>
                </div>

                {/* Main Content (FULL WIDTH RESPONSIVE) */}
                <div className="main flex-1 min-w-0">
                    <nav className="h-[85vh] w-full bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-6 rounded-3xl shadow-2xl overflow-y-auto border border-zinc-700">

                        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

                            {/* Add Note Button */}
                            <NavLink
                                to="/NewFile"
                                className="flex items-center justify-center border-2 border-dashed border-amber-500 h-64 rounded-2xl bg-zinc-700 hover:bg-zinc-600 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="h-20 w-20 flex items-center justify-center border-2 border-dashed border-amber-400 rounded-full text-5xl font-bold text-amber-400 hover:scale-110 transition-transform">
                                    +
                                </div>
                            </NavLink>

                            {/* Notes */}
                            {notes.length > 0 ? (
                                notes.map((note, idx) => (
                                    <div
                                        key={note.id}
                                        className="flex flex-col justify-between h-64 p-5 bg-gradient-to-br from-zinc-800 to-zinc-700 text-white rounded-2xl border border-amber-500 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03]"
                                    >
                                        <div>
                                            <h1 className="text-lg font-bold opacity-70">#{idx + 1}</h1>
                                            <h1 className="text-2xl font-bold truncate mt-2">
                                                {note.title}
                                            </h1>
                                            <h2 className="text-base text-gray-300 mt-3">📅 {note.date}</h2>
                                        </div>

                                        <div className="flex gap-2 mt-4">
                                            <button
                                                onClick={() => deleteNote(note.id)}
                                                className="flex-1 px-3 py-2 border border-red-500 rounded-md text-red-400 hover:bg-red-500 hover:text-white transition-all"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => toggleArchive(note.id)}
                                                className="flex-1 px-3 py-2 border border-purple-500 rounded-md text-purple-300 hover:bg-purple-500 hover:text-white transition-all"
                                            >
                                                {note.archived ? "Unarchive" : "Archive"}
                                            </button>
                                            <button
                                                onClick={() => togglePin(note.id)}
                                                className="flex-1 px-3 py-2 border border-green-500 rounded-md text-green-300 hover:bg-green-500 hover:text-white transition-all"
                                            >
                                                {note.pin ? "Unpin" : "Pin"}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1 className="text-white text-xl">No notes saved</h1>
                            )}

                        </div>

                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Mainbar;
