import { useState } from 'react'
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";
import './index.css';


function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username);
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
        <Search onSearch={handleSearch} />
        {user && <UserCard user={user} />}
      </div>
      
    </>
  )
}

export default App
