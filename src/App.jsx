import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar/>
      <SearchBar/>
    </>
  )
}

export default App
