require("dotenv").config();
const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL);

const connectDB = async () => {

  try {
      await client.connect();
    console.log("Successfully connected to CockroachDB");
  } catch (err) {
    console.error("error connecting to CockroachDB:", err);
     process.exit(1);
  } 
};

const createUserTable = async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        firstname STRING UNIQUE NOT NULL,
        lastname STRING UNIQUE NOT NULL,
        email STRING UNIQUE NOT NULL,
        password STRING UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT now()
      );
    `);
    console.log("Users table created (if not already exists).");
  } catch (err) {
    console.error("Error creating schema:", err);
  }
};
const updateUserTable = async () => {
  try {
    // Add new columns
    await client.query(`
      ALTER TABLE users
      ADD COLUMN firstname STRING UNIQUE NOT NULL,
      ADD COLUMN lastname STRING UNIQUE NOT NULL,
      ADD COLUMN password STRING UNIQUE NOT NULL;
    `);
    console.log(
      "Added firstname, lastname, and password columns to users table."
    );

    // Drop the old username column
    await client.query(`
      ALTER TABLE users
      DROP COLUMN username;
    `);
    console.log("Dropped the 'username' column from users table.");
  } catch (err) {
    console.error("Error updating users table:", err);
  }
};


const initDB = async () => {
  await connectDB();

};

initDB();

module.exports = { initDB, client };
