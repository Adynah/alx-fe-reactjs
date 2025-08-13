import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubService";
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to GitHub User Search</h1>
        <SearchBar onSearch={handleSearch} />
        <UserCard user={user} />
      </div>
      
    </>
  )
}

export default App
