import express from 'express';
import { createListing, deleteListing, editListing, getListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, editListing);
router.get('/getListing/:id', getListing);

export default router;
