let db;

// creating a new db request for a "budget" database
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
  // create object store called "pending", setting the autoincrement to true
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};
