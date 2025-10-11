import React, { useRef, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import NotesProvider, { NotesContext } from "./components/Contexts/NotesContext";

const Mainbar = () => {
    const [collapse, setCollapse] = useState(false);
    const { notes, deleteNote, togglePin, toggleArchive } = useContext(NotesContext);
    const [Notes, setNotes] = useState([]);
    const allNotesRef = useRef();
    const pinnedRef = useRef();
    const archivedRef = useRef();
    const workRef = useRef();
    const PersonalRef = useRef();
    const ideaRef = useRef();
    let i = 1;

    const removeHighlights = () => {
        allNotesRef.current?.classList.remove("bg-zinc-600");
        pinnedRef.current?.classList.remove("bg-zinc-600");
        archivedRef.current?.classList.remove("bg-zinc-600");
        workRef.current?.classList.remove("bg-zinc-600");
        PersonalRef.current?.classList.remove("bg-zinc-600");
        ideaRef.current?.classList.remove("bg-zinc-600");
    };

    const handleClick = (itemRef) => {
        removeHighlights();
        itemRef.current.classList.add("bg-zinc-600");
    };


    return (
        <div className="mt-6">
            <div className="flex gap-6">
                {/* Sidebar */}
                {!collapse ? (
                    <nav className="h-[85vh] w-64 bg-gradient-to-b from-zinc-800 to-zinc-700 text-white p-6 flex flex-col justify-start rounded-3xl shadow-lg">
                        <div className="flex flex-col gap-4 mb-8">
                            <h1 ref={allNotesRef} onClick={() => handleClick(allNotesRef)} className="cursor-pointer self-center rounded-md px-4 py-2 hover:bg-zinc-500 bg-zinc-600 transition-colors duration-300 text-xl">
                                🗂️ All Notes
                            </h1>

                                <NavLink
                                    to="/Pinned"
                                    className={({ isActive }) =>
                                        `self-center px-4 py-2 rounded-md text-xl cursor-pointer hover:bg-zinc-500 transition-colors duration-300 ${isActive ? "bg-zinc-600" : ""}`
                                    }
                                    ref={pinnedRef}
                                    onClick={() => handleClick(pinnedRef)}
                                >
                                    📌 Pinned
                                </NavLink>
                                
                                <NavLink
                                    to="/Archived"
                                    className={({ isActive }) =>
                                        `self-center px-4 py-2 rounded-md text-xl cursor-pointer hover:bg-zinc-500 transition-colors duration-300 ${isActive ? "bg-zinc-600" : ""}`
                                    }
                                    ref={pinnedRef}
                                    onClick={() => handleClick(pinnedRef)}
                                >
                                    🗄️ Archived
                                </NavLink>
                        </div>

                        <div className="flex flex-col gap-3 mt-auto">
                            <h2 className="font-semibold mb-3 text-center text-lg">🏷️ Tags</h2>
                            <span ref={workRef} onClick={() => handleClick(workRef)} className="cursor-pointer hover:bg-zinc-600 rounded-md text-base self-center px-3 py-2">Work</span>
                            <span ref={PersonalRef} onClick={() => handleClick(PersonalRef)} className="cursor-pointer hover:bg-zinc-600 rounded-md text-base self-center px-3 py-2">Personal</span>
                            <span ref={ideaRef} onClick={() => handleClick(ideaRef)} className="cursor-pointer hover:bg-zinc-600 rounded-md text-base self-center px-3 py-2">Ideas</span>
                        </div>

                        <button onClick={() => setCollapse(true)} className="mt-6 bg-amber-600 hover:bg-amber-500 text-white py-2 px-4 rounded-lg text-base self-center transition-colors duration-300">⬅️ Collapse</button>
                    </nav>
                ) : (
                    <nav className="h-[85vh] w-20 bg-zinc-700 rounded-3xl flex flex-col items-center justify-center text-white shadow-lg">
                        <button onClick={() => setCollapse(false)} className="rotate-180 text-white text-2xl hover:text-amber-400 transition-colors duration-300" title="Expand">➡️</button>
                    </nav>
                )}

                {/* Main Content */}
                <div className="main flex-1">
                    <nav className="h-[85vh] w-306 bg-gradient-to-b from-zinc-800 to-zinc-700 text-white p-6 flex flex-col justify-start rounded-3xl overflow-y-auto shadow-lg">

                        {/* Cards Container */}
                        <div className="cards flex flex-wrap ml-4 gap-6 justify-start">
                            {/* New Note Button */}
                            <div className="add h-70 w-95 flex items-center justify-center border-2 border-dotted border-amber-500 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer bg-gradient-to-br from-zinc-700 to-zinc-600">
                                <NavLink to={"/NewFile"}>
                                    <div className="h-24 w-24 flex items-center justify-center border-2 border-dotted border-amber-400 rounded-full text-5xl font-bold text-amber-400 hover:scale-110 transition-transform duration-300">
                                        +
                                    </div>
                                </NavLink>
                            </div>

                            {/* Notes */}
                            {notes.length > 0 ? (
                                notes.map((note) => (
                                    <div key={note.id} className="flex flex-col justify-between h-70 w-90 p-6 bg-gradient-to-br from-zinc-700 to-zinc-600 text-white rounded-2xl border-2 border-amber-500 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                                        <h1 className="text-2xl font-bold">{i++}</h1>
                                        <h1 className="text-3xl font-bold truncate">Title: {note.title}</h1>
                                        <h2 className="text-xl text-gray-300 mt-3">Date: {note.date}</h2>

                                        {/* Buttons Container */}
                                        <div className="flex flex-wrap gap-4 mt-6">
                                            <button onClick={() => deleteNote(note.id)} className="flex-1 px-4 py-3 border border-red-500 rounded-md text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                                                Delete
                                            </button>

                                            <button onClick={() => toggleArchive(note.id)} className="flex-1 px-4 py-3 border border-purple-500 rounded-md text-lg font-medium text-white hover:bg-purple-500 hover:text-white transition-colors duration-300">
                                                {note.archived ? "Unarchive" : "Archive"}
                                            </button>

                                            <button onClick={() => togglePin(note.id)} className="flex-1 px-4 py-3 border border-green-500 rounded-md text-lg font-medium text-white hover:bg-green-500 hover:text-white transition-colors duration-300">
                                                {note.pin ? "Unpin" : "Pin"}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1 className="text-white text-3xl mt-6">No notes Saved</h1>
                            )}
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Mainbar;
