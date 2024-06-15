import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test', test);
router.get('/hello',(req, res) => {
    res.send('hello there again~');
})

export default router;
