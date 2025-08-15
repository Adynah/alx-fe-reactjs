import { useState } from 'react'
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubService";
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Welcome to GitHub User Search</h1>
        <Search />
        <UserCard user={user} />
      </div>
      
    </>
  )
}

export default App
