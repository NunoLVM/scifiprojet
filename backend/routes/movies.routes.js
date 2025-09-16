 import express from "express";
 import { getPopular, searchMovies } from "../controllers/movies.controller.js";
 const router = express.Router();

 router.get("/popular", getPopular); // /api/movies/popular
 router.get("/search", searchMovies); // /api/movies/search?q=matrix

 export default router;
