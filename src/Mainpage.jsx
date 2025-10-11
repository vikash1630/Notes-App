import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Mainbar from './mainbar'
import NotesProvider from './components/Contexts/NotesContext'
import Pinned from './components/pinned'
// import NotesContext from './components/Contexts/NotesContext'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import NewFile from './components/NewFile'


const Mainpage = () => {
    return (
        <div>
            <Navbar />
                <div className='flex'>

                    <Mainbar />
                </div>
            

        </div>
    )
}

export default Mainpage