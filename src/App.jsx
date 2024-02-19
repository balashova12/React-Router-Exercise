import React, { useState } from 'react';
import Navigation from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <Navigation onPageChange={handlePageChange} />
      {activePage === 'home' && <Home />}
      {activePage === 'blogs' && <Blogs />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}

export default App;