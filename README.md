- [Lire en français](README.fr.md)

# The Popcorn Awakens! 🍿 

A small web project for sci-fi movie lovers — created as part of a web development course.

## 🌌 What is it?

A simple site to practice structure, accessibility, and good practices.  
The theme? Science fiction movies, with a touch of humor and nostalgia.  
Expect subtle echoes of distant galaxies, sentient computers, and the occasional time paradox.

## 📚 Educational Context

Created as part of a training program to learn HTML fundamentals and prepare for more advanced web development projects.

## ⚡ Project Structure

This repo is divided into two universes:

**Frontend (root folder)** → the visible galaxy:
- HTML pages (`index.html`, `signup.html`, etc.)
- `assets/scripts` → JavaScript experiments 
- `assets/styles/` → SCSS styling 

**Backend** (`/backend`) → the hidden engine room:
- `app.js` → Express app definition
- `server.js` → launches the hyperdrive (the server)
- `routes/`, `controllers/`, `config/` → API logic (signup, login, DB access)
- `.env` → secret codes (DB credentials, JWT secret)

Both have their own `package.json` and `.gitignore.`

👉 Always `cd` into the right folder before running `npm install` or `npm run dev`.

## 🚀 Backend Quickstart

```bash
cd backend
npm install
npm run dev   # start with nodemon (development)
npm start     # start normally
```

```md
The API will be available at: http://localhost:3000

```


## 🤖 Credits

Designed and developed with a love passion for sci-fi by Nuno Antonio     
Training project for AFEC, supervised by Laurent Touchet and Natacha Desse

## ⚠️ Disclaimer

This is a fictional educational project. All film references and images are used for training purposes only.