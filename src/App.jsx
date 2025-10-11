import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Mainbar from './mainbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewFile from './components/NewFile'
import Mainpage from './Mainpage'
import Contact from './components/Contact'
import Pinned from './components/pinned'
import NotesProvider, { NotesContext } from './components/Contexts/NotesContext'
import Archived from './components/archived'



const App = () => {
  // localStorage.clear();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage />  // or your Home component
    },
    {
      path: "/NewFile",
      element: <NewFile />
    },
    {
      path: "/Contact",
      element: <Contact />
    },
    {
      path: "/Pinned",
      element: <Pinned />
    },
    {
      path: "/Archived",
      element: <Archived />
    }
  ]);


  return (
   
      <div className=''>
        {/* <h1>Hello World</h1> */}      
      <NotesProvider>
        <RouterProvider router={routes} />
      </NotesProvider>
      </div>
    
  )
}

export default App;