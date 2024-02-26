
import React from 'react';

function YourComponent() {
    const updateData = async () => {
        const utleietjenesteNr = document.getElementById('UtleietjenesteNr').value;
        const tjenestenavn = document.getElementById('Tjenestenavn').value;
        const dagerTilgj = document.getElementById('DagerTilgj').value;
        const tilgjTid = document.getElementById('TilgjTid').value;
        const pris = document.getElementById('Pris').value;

        try {
            const response = await fetch(`/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UtleietjenesteNr: utleietjenesteNr,
                    Tjenestenavn: tjenestenavn,
                    DagerTilgj: dagerTilgj,
                    TilgjTid: tilgjTid,
                    Pris: pris
                }),
            });

            if (!response.ok) {
                throw new Error('Feil ved oppdatering av data');
            }

            const data = await response.json();
            console.log('Data oppdatert:', data);

        } catch (error) {
            console.error('Feil ved oppdatering:', error);
        }
    };

    return (
        <>
            <div className="henteEnVerdi">
                <h1>Hente ut en verdi</h1>
                <form action="/enVerdi" method="post" encType="application/json">
                    <label htmlFor="html">Skriv inn primærnøkkel</label>
                    <input type="number" name="pk" id="pk" />
                    <input type="submit" value="Hent" />
                </form>
            </div>

            <div className="henteAlt">
                <h1>Hente ut hele tabellen</h1>
                <form action="/heleTabell" method="get">
                    <input type="submit" value="Hent fra tabellen" />
                </form>
            </div>

            <div className="sletteEnRad">
                <h1>Slette en rad fra tabellen</h1>
                <form action="/sletteEnRad" method="post">
                    <label htmlFor="utleieTjenesteNr">Skriv inn primærnøkkel</label>
                    <input type="number" name="utleieTjenesteNr" id="utleieTjenesteNr" />
                    <input type="submit" value="Slett" />
                </form>
            </div>

            <div className="leggeinn">
                <h1>Legge inn rad</h1>
                <form action="/insert" method="post">
                    <label htmlFor="UtleietjenesteNr">UtleietjenesteNr</label>
                    <input type="number" name="UtleietjenesteNr" id="UtleietjenesteNr" />

                    <label htmlFor="Tjenestenavn">Tjenestenavn</label>
                    <input type="text" name="Tjenestenavn" id="Tjenestenavn" />

                    <label htmlFor="DagerTilgj">DagerTilgj</label>
                    <input type="text" name="DagerTilgj" id="DagerTilgj" />

                    <label htmlFor="TilgjTid">TilgjTid</label>
                    <input type="text" name="TilgjTid" id="TilgjTid" />

                    <label htmlFor="Pris">Pris</label>
                    <input type="number" name="Pris" id="Pris" />
                    <input type="submit" value="Legg inn" />
                </form>
            </div>

            <div className="endreVerdi">
                <h1>Endre tabell</h1>
                <form action="/update" method="put" id="updateForm" onSubmit={(e) => { e.preventDefault(); updateData(); }}>
                    <label htmlFor="UtleietjenesteId">UtleietjenesteId</label>
                    <input type="number" name="UtleietjenesteId" id="UtleietjenesteId" required />

                    <label htmlFor="Tjenestenavn">Tjenestenavn</label>
                    <input type="text" name="Tjenestenavn" id="Tjenestenavn" />

                    <label htmlFor="DagerTilgj">DagerTilgj</label>
                    <input type="text" name="DagerTilgj" id="DagerTilgj" />

                    <label htmlFor="TilgjTid">TilgjTid</label>
                    <input type="text" name="TilgjTid" id="TilgjTid" />

                    <label htmlFor="Pris">Pris</label>
                    <input type="number" name="Pris" id="Pris" />

                    <input type="submit" value="Oppdater" />
                </form>
            </div>
        </>
    );
}

export default YourComponent;
