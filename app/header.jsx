import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo"><i className="fas fa-hiking"></i> Krs Camping.</a>
        <nav className="navbar">
          <div id="nav-close" className="fas fa-times"></div>
          <a href="#home">Hjem</a>
          <a href="test.html">Test database</a>
          <a href="#fasiliteter">Fasiliteter</a>
          <a href="#aktiviteter">Aktiviteter</a>
          <a href="#kontakt">Kontakt Oss</a>
          <a href="#logg inn">Logg inn</a>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="search-btn" className="fas fa-search"></div>
        </div>
      </header>

      {/* Search form */}
      <div className="search-form">
        <div id="close-search" className="fas fa-times"></div>

        <form action="">
          <input type="search" name="" placeholder="Søk her..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </div>
    </div>
  );
};

export default Header;
