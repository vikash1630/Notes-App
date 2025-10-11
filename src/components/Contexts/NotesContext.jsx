import React, { createContext, useState, useEffect } from 'react';

// 1️⃣ Create context
export const NotesContext = createContext();

// 2️⃣ Provider component
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    // Load notes from localStorage on mount
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    // Delete note
    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
    };

    // Toggle archived
    const toggleArchive = (id) => {
        const updatedNotes = notes.map(note =>
            note.id === id ? { ...note, archived: !note.archived } : note
        );
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
    };

    // Toggle pinned
    const togglePin = (id) => {
        const updatedNotes = notes.map(note =>
            note.id === id ? { ...note, pin: !note.pin } : note
        );
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
    };
   

    return (
        <NotesContext.Provider value={{ notes, deleteNote, togglePin, toggleArchive }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;
