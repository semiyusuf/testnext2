const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'camping')));

// Define a route to handle requests for the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



//kjør npx prisma generate før du kjører node.js

const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

// Now you can use prisma to interact with your database
//const users = await prisma.user.findMany();
//console.log(users);

async function testConnection() {
    try {
      await prisma.$connect();
      console.log("Connection to the database established successfully.");
  
      const users = await prisma.fasilitet.findMany();
        //console.log(users);
      
        app.get('/heleTabell', async function (req, res) {
          try {
              const utleietjenester = await prisma.utleietjeneste.findMany();
  
              if (utleietjenester.length > 0) {
                  console.log("Records found");
                  res.json(utleietjenester);  // Send all records as JSON
              } else {
                  console.log("No records found");
                  res.send('No records found!');
              }
          } catch (error) {
              console.error("Error fetching data:", error);
              res.status(500).send('Internal Server Error');
          }
      });

      /*try {
        const newPlass = await prisma.Utleietjeneste.createMany({
          data: [
            {utleieTjenesteNr: 1, tjenestenavn: "Småbåter", dagerTilgj: "Ons-Lør", tilgjTid: "14-19", pris: 200},
            {utleieTjenesteNr: 2, tjenestenavn: "Familiespill", dagerTilgj: "Man-Lør", tilgjTid: "08-16", pris: 50},
            {utleieTjenesteNr: 3, tjenestenavn: "Sykkelutleie", dagerTilgj: "Man-Lør", tilgjTid: "08-16", pris: 100},
            {utleieTjenesteNr: 4, tjenestenavn: "Fiskeutstyr", dagerTilgj: "Man-Lør", tilgjTid: "08-16", pris: 150},
            {utleieTjenesteNr: 5, tjenestenavn: "Camingutstyr", dagerTilgj: "Man-Søn", tilgjTid: "108-16", pris: 200},
            
          ],
        });
        console.log("Added to plass", newPlass);
      } catch (error) {
        console.error("Error creating user:", error);
      }*/
  
    } catch (error) {
      console.error("Error connecting to the database:", error);
    } finally {
      // Close the Prisma Client when done
      await prisma.$disconnect();
    }
  }
  
  // Call the function to test the connection
  testConnection();

// Don't forget to close the Prisma Client when done
prisma.$disconnect();
