import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState(""); // Input value
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]); // store multiple results
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page refresh
    setLoading(true);
    setError("");
    setResult([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      if (users.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(users);
      }
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Results */}
      {users.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {users.map((user) => (
            <div key={user.id} style={{ marginBottom: "20px" }}>
              <img
                src={user.avatar_url}
                alt={user.login}
                width="100"
                style={{ borderRadius: "50%" }}
              />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 
export default Search