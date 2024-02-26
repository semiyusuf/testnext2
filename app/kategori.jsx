import React from 'react';

const Kategori = () => {
    return (
        <section className="category">
            <h1 className="heading">Sørlandsidyll, Aktiviteter og kvalitetstid</h1>
            <div className="box-container">
                <div className="box2">
                    <img src="Bilde/aktivitet4.jpg" alt="" />
                    <h3>Oppholdet ditt</h3>
                    <p>Sommerdrømmen</p>
                    <a href="#" className="btn">Les mer her</a>
                </div>

                <div className="box2">
                    <img src="Bilde/aktivitet2.jpg" alt="" />
                    <h3>Aktiviteter</h3>
                    <p>Badestrand, minigolf, padling, sandvolleyball og lekeplass</p>
                    <a href="#" className="btn">Les mer her</a>
                </div>

                <div className="box2">
                    <img src="Bilde/kiosk.jpg[WallImage][4D037D0DB9C72BD45D8FF56D48BD]" alt="" />
                    <h3>Butikk og kafe</h3>
                    <p>I resepsjonen får du svar på det meste</p>
                    <a href="#" className="btn">Les mer her</a>
                </div>
            </div>
        </section>
    );
};

export default Kategori;
