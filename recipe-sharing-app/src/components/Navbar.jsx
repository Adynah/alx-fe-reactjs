import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/favorites">Favorites</Link> |{" "}
      <Link to="/recommendations">Recommendations</Link>
    </nav>
  );
}

export default Navbar