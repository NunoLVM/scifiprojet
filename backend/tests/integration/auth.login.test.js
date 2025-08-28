// backend/tests/integration/auth.login.test.js
// Teste d'intégration avec Mocks (DB + bcrypt) pour ne pas toucher MySQL réel.

const request = require("supertest");

// Assure une clé JWT en test (au cas où ton .env n'est pas chargé ici)
process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret";

// Mock de la DB utilisée dans le controller (../config/db)
jest.mock("../../config/db", () => {
  return {
    // signature: execute(sql, params, cb)
    execute: (sql, params, cb) => {
      const [email] = params;
      // Simule un utilisateur existant
      if (email === "user@mail.com") {
        const fakeUser = {
          id: 1,
          username: "nuno",
          email: "user@mail.com",
          password: "HASH_IGNORED_ICI",
          role: "user",
        };
        return cb(null, [fakeUser]); // results[] non vide
      }
      // Utilisateur inconnu
      return cb(null, []); // results[] vide
    },
  };
});

// Mock de bcrypt.compare (true seulement si password === 'admin')
jest.mock("bcrypt", () => ({
  compare: async (plain, _hash) => plain === "admin",
}));

//  Importer l'app APRÈS les mocks pour qu'ils soient pris en compte
const app = require("../../app");

describe("POST /api/login (intégration avec mocks)", () => {
  test("retourne 200 et un token si identifiants valides", async () => {
    const res = await request(app).post("/api/login").send({ email: "user@mail.com", password: "admin" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user.email).toBe("user@mail.com");
  });

  test("retourne 401 si email inconnu", async () => {
    const res = await request(app).post("/api/login").send({ email: "inconnu@mail.com", password: "admin" });

    expect(res.status).toBe(401);
  });

  test("retourne 401 si mot de passe incorrect", async () => {
    const res = await request(app).post("/api/login").send({ email: "user@mail.com", password: "faux" });

    expect(res.status).toBe(401);
  });

  test("retourne 400 si données manquantes", async () => {
    const res = await request(app).post("/api/login").send({ email: "user@mail.com" }); // pas de password

    expect(res.status).toBe(400);
  });
});
