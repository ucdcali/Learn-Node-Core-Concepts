import express from 'express';
import { getIndex, getAbout } from '../controllers/mainController.js';

const router = express.Router();

// Define routes
router.get('/', getIndex);
router.get('/about', getAbout);

export default router;
