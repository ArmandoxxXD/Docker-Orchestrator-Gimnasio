db = db.getSiblingDB("integradora");

db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [{ role: "readWrite", db: "integradora" }]
});
