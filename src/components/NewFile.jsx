import React, { useState } from 'react';
import Navbar from './Navbar';

const NewFile = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim() && !content.trim()) {
        alert('Empty Notes')
        return; // don't save empty notes
    }

    // Get existing notes from localStorage or empty array
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    console.log(existingNotes)
    // Add the new note
    const newNote = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      archived: false,
      pinned: false,
      trash: false,
      title,
      content
    };
    existingNotes.push(newNote);
    console.log("new Notes : " , existingNotes)
    // Save back to localStorage
    localStorage.setItem('notes', JSON.stringify(existingNotes));

    // Clear the input fields
    setTitle('');
    setContent('');

    alert('Note saved successfully! 💾');
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-12 p-8 bg-blue-900 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-white">Create a New Note</h1>

        <div className="flex flex-col gap-6">
          <label className="text-gray-300 font-medium" htmlFor="noteTitle">
            Title
          </label>
          <input
            type="text"
            id="noteTitle"
            placeholder="Enter note title..."
            className="bg-blue-100 border border-blue-700 text-black rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="text-gray-300 font-medium" htmlFor="noteContent">
            Content
          </label>
          <textarea
            id="noteContent"
            rows="8"
            placeholder="Write your note here..."
            className="bg-blue-100 border border-blue-700 text-black rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          onClick={handleSave}
          className="mt-8 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Save Note
        </button>
      </div>
    </div>
  );
};

export default NewFile;
