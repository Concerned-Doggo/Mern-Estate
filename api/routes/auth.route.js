import e from "express";
import { signup, signin, googleAuth, signout } from "../controllers/auth.controller.js";

const router = e.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googleAuth);
router.get('/signout', signout);

export default router;
