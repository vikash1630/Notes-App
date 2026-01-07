import React, { useState } from 'react';
import Navbar from './Navbar';

const NewFile = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim() && !content.trim()) {
      alert('Empty Notes');
      return;
    }

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

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
    localStorage.setItem('notes', JSON.stringify(existingNotes));

    setTitle('');
    setContent('');

    alert('Note saved successfully! 💾');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F2C] to-[#051538]">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-14 p-8 rounded-3xl shadow-2xl 
                      backdrop-blur-xl bg-white/10 border border-white/20 
                      animate-[fadeIn_0.6s_ease]">

        <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          Create a New Note
        </h1>

        <div className="flex flex-col gap-8">

          {/* TITLE INPUT */}
          <div className="relative">
            <input
              type="text"
              id="noteTitle"
              className="w-full p-4 bg-white/20 text-white 
                         border border-white/30 rounded-xl shadow-md
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         placeholder-transparent peer backdrop-blur-xl
                         transition-all duration-300"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label
              htmlFor="noteTitle"
              className="absolute left-4 top-4 text-gray-300 transition-all 
                         peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg
                         peer-focus:top-[-12px] peer-focus:text-sm
                         peer-focus:text-blue-300 bg-[#0A0F2C] px-2"
            >
              Title
            </label>
          </div>

          {/* CONTENT INPUT */}
          <div className="relative">
            <textarea
              id="noteContent"
              rows="8"
              className="w-full p-4 bg-white/20 text-white 
                         border border-white/30 rounded-xl shadow-md resize-none
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         placeholder-transparent peer backdrop-blur-xl
                         transition-all duration-300"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <label
              htmlFor="noteContent"
              className="absolute left-4 top-4 text-gray-300 transition-all 
                         peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg
                         peer-focus:top-[-12px] peer-focus:text-sm
                         peer-focus:text-blue-300 bg-[#0A0F2C] px-2"
            >
              Content
            </label>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-10 w-full py-4 rounded-xl font-bold text-lg shadow-xl
                     bg-gradient-to-r from-blue-600 to-purple-600 text-white
                     hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Save Note 🚀
        </button>

      </div>
    </div>
  );
};

export default NewFile;
