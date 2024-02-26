// testConnection.js
const { PrismaClient } = require('./generated/client');

async function testConnection() {
  const prisma = new PrismaClient();

  try {
    await prisma.$connect();
    console.log('Connection to the database established successfully.');

    const users = await prisma.fasilitet.findMany();
    console.log(users);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Close the Prisma Client when done
    await prisma.$disconnect();
  }
}

// Call the function to test the connection
testConnection();
