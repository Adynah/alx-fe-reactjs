import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
    backgroundColor: '#0d47a1',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    color: '#ffffff'
  };

  const linkStyle = {
    color: '#bbdefb',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const separatorStyle = {
    color: '#ffffff',
    margin: '0 5px'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <span style={separatorStyle}></span>
      <Link to="/about" style={linkStyle}>About</Link>
      <span style={separatorStyle}>|</span>
      <Link to="/services" style={linkStyle}>Services</Link> |{" "}
      <span style={separatorStyle}>|</span>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
