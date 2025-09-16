const stored = localStorage.getItem("user");
const user = stored ? JSON.parse(stored) : null;
const isLoggedIn = Boolean(user && user.token);
import "../components/Movies.js";



export let links = [
  { label: "Homepage", url: "index.html" },
  {
    label: isLoggedIn ? "Profile" : "Login",
    url: isLoggedIn ? "profile.html" : "#",
    id: isLoggedIn ? "profileBtn" : "loginBtn",
  },
  {
    label: isLoggedIn ? "Logout" : "Sign Up",
    url: isLoggedIn ? "#" : "signup.html",
    id: isLoggedIn ? "logoutBtn" : "signupBtn",
  },
  { label: "Movies", url: "movies.html" },
  { label: "Games", url: "games.html" },
];
