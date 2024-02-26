import React from 'react';
import dynamic from 'next/dynamic';
import Header from './header';
//import '../server/server.jsx';
import '../styles/global.css';
import Kategori from './kategori';
import { appendMutableCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

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

/*testnext2
-.next
-app
  -page.jsx
-node_modules
-prisma
  -schema.prisma
-.env
-package-lock.json
-package.json*/