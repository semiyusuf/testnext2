import React from 'react';

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-slider">
        <div className="swiper-wrapper">

          {/* Display only one image */}
          <div className="swiper-slide">
            <div className="box" style={{ background: 'url(/Bilde/background2.jpg) no-repeat' }}>
              <div className="content">
                <span> La oss!</span>
                <h3>Planlegge din reise sammen.</h3>
                <p>Uforsk, oppdrag og føl deg hjemme åpen himmel.</p>
                <a href="#" className="btn">Book din reise</a>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper navigation buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default HomeSection;
