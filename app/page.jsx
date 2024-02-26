import React from 'react';
import dynamic from 'next/dynamic';
import Header from './header';
import '../styles/global.css';
import Kategori from './kategori';

// Use dynamic to import Slides component
const Slides = dynamic(() => import('./slides'), { ssr: false });

const App = () => {
  return (
    <div>
      <Header />
      {/* Use the Slides component */}
      <Slides />
      <Kategori />
      {/* Other components or content */}
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default HomePage;
