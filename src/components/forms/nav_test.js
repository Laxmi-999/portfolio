import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Home component
const Home = () => {
  return <h2>Home Component</h2>;
};

// Blog component
const Blog = () => {
  return <h2>Blog Component</h2>;
};

// Destination component
const Destination = () => {
  return <h2>Destination Component</h2>;
};

// App component
const NavTest = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/" onClick={() => handleNavClick('home')}>Home</Link></li>
          <li><Link to="/blog" onClick={() => handleNavClick('blog')}>Blog</Link></li>
          <li><Link to="/destination" onClick={() => handleNavClick('destination')}>Destination</Link></li>
        </ul>
        <div>
          {activeComponent === 'home' && <Home />}
          {activeComponent === 'blog' && <Blog />}
          {activeComponent === 'destination' && <Destination />}
        </div>
      </div>
    </Router>
  );
};

export default App;
