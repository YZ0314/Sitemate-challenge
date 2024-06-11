import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE issues (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT)");
});

export default db;
