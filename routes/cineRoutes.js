import express from "express";
import {
  getAllMovies,
  getMovieById,
  movieShowTimes
} from "../cineControllers.js";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.get("/:id/showTimes", movieShowTimes);

export default router;