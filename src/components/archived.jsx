import React, { useContext, useState, useEffect } from 'react'
import { NotesContext } from './Contexts/NotesContext'
import Navbar from './Navbar';

const Archived = () => {
    const {notes, deleteNote, togglePin, toggleArchive } = useContext(NotesContext);

    const [archivedNotes,setarchived] = useState([]);

    useEffect(() => {
        const filtered = notes.filter(note => note.archived);
        setarchived(filtered)
    },[notes])



 let i = 1;

  return (
    <div className="bg-blue-950 h-[95vh] flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6  flex flex-wrap gap-6 justify-start">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <div
              key={note.id}
              className="flex flex-col justify-between h-70 w-90 p-6 bg-gradient-to-br from-zinc-700 to-zinc-600 text-white rounded-2xl border-2 border-amber-500 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              <h1 className="text-2xl font-bold">{i++}</h1>
              <h1 className="text-3xl font-bold truncate">Title: {note.title}</h1>
              <h2 className="text-xl text-gray-300 mt-3">Date: {note.date}</h2>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={() => deleteNote(note.id)}
                  className="flex-1 px-4 py-3 border border-red-500 rounded-md text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                >
                  Delete
                </button>

                <button
                  onClick={() => toggleArchive(note.id)}
                  className="flex-1 px-4 py-3 border border-purple-500 rounded-md text-lg font-medium text-white hover:bg-purple-500 hover:text-white transition-colors duration-300"
                >
                  {note.archived ? "Unarchive" : "Archive"}
                </button>

                <button
                  onClick={() => togglePin(note.id)}
                  className="flex-1 px-4 py-3 border border-green-500 rounded-md text-lg font-medium text-white hover:bg-green-500 hover:text-white transition-colors duration-300"
                >
                  {note.pin ? "Unpin" : "Pin"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-white text-3xl mt-6 w-full text-center">No Archieved notes</h1>
        )}
      </div>
    </div>
  );
}

export default Archived